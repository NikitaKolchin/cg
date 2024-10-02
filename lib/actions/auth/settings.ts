'use server';
import { update } from '@/auth';
import { getUserById } from '@/lib/actions/user.action';
import { currentUser } from '@/lib/auth';
import { db } from '@/lib/database.connection';
import { SettingsSchema } from '@/schema';
import * as z from 'zod';

export const settings = async (values: z.infer<typeof SettingsSchema>) => {
    const user = await currentUser();

    if (!user) {
        return { error: 'Unauthorized' };
    }

    const dbUser = await getUserById(user.id);

    if (!dbUser) {
        return { error: 'Unauthorized' };
    }

    // if the user is signed in from google or another account
    if (user.isOAuth) {
        values.email = undefined;
        values.password = undefined;
        values.newPassword = undefined;
        values.isTwoFactorEnabled = undefined;
    }

    //   updating the user
    const updatedUser = await db.user.update({
        where: { id: dbUser.id },
        data: {
            ...values,
        },
    });

    //   updating in the session
    update({
        user: {
            name: updatedUser.name,
            email: updatedUser.email,
            role: updatedUser.role,
        },
    });

    return { success: 'Settings Updated!' };
};

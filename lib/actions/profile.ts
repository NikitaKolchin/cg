'use server';
// import { update } from '@/auth';
import { getUserById } from '@/lib/actions/user.action';
import { currentUser } from '@/lib/auth';
// import { db } from '@/lib/database.connection';
import { AppointmentSchema } from '@/schema';
import { z } from 'zod';

export const profile = async (values: z.infer<typeof AppointmentSchema>) => {
    const user = await currentUser();

    if (!user) {
        return { error: 'Unauthorized' };
    }

    const dbUser = await getUserById(user.id);

    if (!dbUser) {
        return { error: 'Unauthorized' };
    }

    console.log(user, values);
    //   updating the user
    // const updatedUser = await db.user.update({
    //     where: { id: dbUser.id },
    //     data: {
    //         ...values,
    //     },
    // });

    //   updating in the session
    // update({
    //     user: {
    //         name: updatedUser.name,
    //         email: updatedUser.email,
    //         role: updatedUser.role,
    //     },
    // });

    return { success: 'Profile Updated!' };
};

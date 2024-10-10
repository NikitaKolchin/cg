'use server';
import { update } from '@/auth';
import { getUserById } from '@/lib/actions/user.action';
import { currentUser } from '@/lib/auth';
import { db } from '@/lib/database.connection';
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

    const { name, ...appointmentValues } = values;
    console.log(user, name, values);

    //  creating the appointment
    const createdAppointment = await db.appointment.create({
        data: {
            userId: dbUser.id,
            ...appointmentValues,
        },
    });
    if (user.name !== values.name) {
        //   updating the user
        const updatedUser = await db.user.update({
            where: { id: dbUser.id },
            data: {
                name: values.name,
            },
        });
        //   updating in the session
        update({
            user: {
                name: updatedUser.name,
            },
        });
    }

    return {
        success: `Запись на  ${createdAppointment.date?.toLocaleTimeString()} ${createdAppointment.date?.toLocaleDateString()} создана!`,
    };
};

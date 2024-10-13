'use server';
import { update } from '@/auth';
import { getUserById } from '@/lib/actions/user.action';
import { currentUser } from '@/lib/auth';
import { db } from '@/lib/database.connection';
import { AppointmentSchema } from '@/schema';
import { z } from 'zod';
import { createTransport } from 'nodemailer';

export const profile = async (values: z.infer<typeof AppointmentSchema>) => {
    const serviceName = process.env.NEXT_PUBLIC_EMAIL_SERVICE;
    const myEmail = process.env.NEXT_PUBLIC_EMAIL_USER;
    const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
    const user = await currentUser();

    if (!user) {
        return { error: 'Unauthorized' };
    }

    const dbUser = await getUserById(user.id);

    if (!dbUser) {
        return { error: 'Unauthorized' };
    }

    const { name, tel, ...appointmentValues } = values;
    console.log(user, name, values);

    //  creating the appointment
    const createdAppointment = await db.appointment.create({
        data: {
            userId: dbUser.id,
            ...appointmentValues,
        },
    });
    if (user.name !== name || user.tel !== tel) {
        //   updating the user
        const updatedUser = await db.user.update({
            where: { id: dbUser.id },
            data: {
                name,
                tel,
            },
        });
        //   updating in the session
        update({
            user: {
                name: updatedUser.name,
                tel: updatedUser.tel,
            },
        });
    }
    const transport = createTransport({
        service: serviceName,
        secure: true,
        port: 465,
        auth: {
            user: myEmail, // 'uproffi@gmail.com',
            pass: password, //'ybjd alqv rezo bjow',
        },
        from: process.env.NEXT_PUBLIC_EMAIL_USER,
    });
    await transport.sendMail({
        to: ['kolchin.nv@gmail.com', 'yanochka07.07.1997@icloud.com'],
        subject: `У вас новая запись`,
        text: `${name} ${tel} ${createdAppointment.date?.toLocaleTimeString()}`,
    });
    return {
        success: `Запись на  ${createdAppointment.date?.toLocaleTimeString()} ${createdAppointment.date?.toLocaleDateString()} создана!`,
    };
};

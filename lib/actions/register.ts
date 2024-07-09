'use server';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma';
import { getUserByEmail } from '@/lib/actions/user.actions';
// import { generateVerificationToken } from '@/lib/token';
// import { sendVerificationEmail } from '@/lib/mail';

type Props = {
    name: string;
    email: string;
    password: string;
};
export const register = async (values: Props) => {
    // * check and store user in database

    const { email, password, name } = values;
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of salt rounds

    //finding the email in database
    const exisitingUser = await getUserByEmail(email);

    // if user already exists, return error
    if (exisitingUser) {
        return { error: 'Email already exists!' };
    }

    // if not, create and save it in database
    await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    });

    // * generating the token after the user is created (68)
    // const verificationToken = await generateVerificationToken(email);
    // await sendVerificationEmail(
    //     verificationToken.email,
    //     verificationToken.token,
    // );

    return { success: 'Email sent!' };
};

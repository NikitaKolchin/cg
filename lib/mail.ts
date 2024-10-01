import nodemailer from 'nodemailer';

const serviceName = process.env.NEXT_PUBLIC_EMAIL_SERVICE;
const myEmail = process.env.NEXT_PUBLIC_EMAIL_USER;
const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
const domain = process.env.NEXT_PUBLIC_APP_URL;

const transporter = nodemailer.createTransport({
    service: serviceName,
    secure: true,
    port: 465,
    auth: {
        user: myEmail, // 'uproffi@gmail.com',
        pass: password, //'ybjd alqv rezo bjow',
    },
});

export const sendVerificationEmail = async (email: string, token: string) => {
    const confirmLink = `${domain}/auth/new-verification?token=${token}`;

    await transporter.sendMail({
        from: myEmail,
        to: email,
        subject: 'Confirm your email',
        html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
    });
};

// sending password reset email
export const sendPasswordResetEmail = async (email: string, token: string) => {
    const resetLink = `${domain}/auth/new-password?token=${token}`;

    await transporter.sendMail({
        from: myEmail,
        to: email,
        subject: 'Reset your password',
        html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`,
    });
};

// sending two factor token email
export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
    await transporter.sendMail({
        from: myEmail,
        to: email,
        subject: '2FA Code',
        html: `<p>Your 2FA code: ${token}</p>`,
    });
};

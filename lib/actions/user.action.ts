import { db } from '../database.connection';

export const getUserById = async (id: string) => {
    try {
        const user = await db.user.findUnique({ where: { id } });
        return user;
    } catch {
        return null;
    }
};

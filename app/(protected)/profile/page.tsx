import { Appointment } from '@/components/shared/appointment';
import { currentUser } from '@/lib/auth';

const Profile = async () => {
    const user = await currentUser();
    return (
        <div className="bg-light flex flex-col items-center">
            <h1 className="pt-8 text-3xl font-bold">Кабинет</h1>
            <Appointment user={user} />
        </div>
    );
};

export default Profile;

import { Appointment } from '@/components/shared/appointment';
import { currentUser } from '@/lib/auth';

const Profile = async () => {
    const user = await currentUser();
    return <Appointment user={user} />;
};

export default Profile;

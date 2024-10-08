import { currentUser } from '@/lib/auth';

const Profile = async () => {
    const user = await currentUser();
    console.log(user);
    return <div>hellow {user.name}</div>;
};

export default Profile;

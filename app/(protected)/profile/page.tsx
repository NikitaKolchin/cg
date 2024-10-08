import { currentUser } from '@/lib/auth';

const Profile = async () => {
    const user = await currentUser();
    console.log(user);
    return (
        <div>
            <div>Имя {user?.name}</div>
            <div>Почта {user?.email}</div>
            <div>ваш запрос</div>
            <div>контактный телефон </div>
        </div>
    );
};

export default Profile;

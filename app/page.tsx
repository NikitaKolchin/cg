import { lightHouse } from './fonts';
import RegisterForm from '@/components/auth/register-form';

export default function Home() {
    return (
        <main className="bg-sand">
            <h1 className={`${lightHouse.variable} font-serif`}>
                Работа в удовольствие - это реально
            </h1>
        </main>
    );
}

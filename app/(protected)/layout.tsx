import { auth } from '@/auth';
import { Navbar } from './_components/navbar';

interface ProtectedLayoutProps {
    children: React.ReactNode;
}

const ProtectedLayout = async ({ children }: ProtectedLayoutProps) => {
    const session = await auth();
    if (!session) return <div>Not authenticated</div>;
    return (
        <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
            <Navbar />
            {children}
        </div>
    );
};

export default ProtectedLayout;

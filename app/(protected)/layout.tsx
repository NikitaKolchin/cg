import { auth } from '@/auth';
import { redirect } from 'next/navigation';

interface ProtectedLayoutProps {
    children: React.ReactNode;
}

const ProtectedLayout = async ({ children }: ProtectedLayoutProps) => {
    const session = await auth();
    if (!session) return redirect('/auth/login');
    return (
        <main className="bg-light sm:h-screen sm:overflow-auto">
            {/* <Navbar /> */}
            {children}
        </main>
    );
};

export default ProtectedLayout;

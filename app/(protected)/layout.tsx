import { auth } from '@/auth';
import { redirect } from 'next/navigation';

interface ProtectedLayoutProps {
    children: React.ReactNode;
}

const ProtectedLayout = async ({ children }: ProtectedLayoutProps) => {
    const session = await auth();
    if (!session) return redirect('/auth/login');
    return (
        <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-light to-dark">
            {/* <Navbar /> */}
            {children}
        </div>
    );
};

export default ProtectedLayout;

import { ErrorCard } from '@/components/auth/error-card';

const AuthErrorPage = ({
    searchParams,
}: {
    searchParams: { error: string };
}) => {
    return <ErrorCard error={searchParams.error} />;
};

export default AuthErrorPage;

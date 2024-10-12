interface FormErrorProps {
    message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
    if (!message) return null;

    return (
        <div className="bg-rose-500/15 p-3 rounded-2xl flex items-center gap-x-2 text-sm text-rose-500">
            <p>{message}</p>
        </div>
    );
};

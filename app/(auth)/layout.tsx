export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
    <div className="flex min-h-screen items-center justify-center px-10">
    {children}
    </div>
    );
}
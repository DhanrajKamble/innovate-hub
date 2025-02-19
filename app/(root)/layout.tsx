import NavBar from "@/components/ui/NavBar";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="text-2xl">
            <NavBar />
            {children}
        </div>
    );
}
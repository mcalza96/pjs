import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Pastel Jam School",
    description: "Plataforma educativa para Procreate",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}

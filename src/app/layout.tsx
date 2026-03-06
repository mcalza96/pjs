import type { Metadata } from "next";
import { Spline_Sans } from "next/font/google";
import "./globals.css";

const splineSans = Spline_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-spline-sans",
});

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
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
            </head>
            <body className={`${splineSans.variable} font-display antialiased`}>
                {children}
            </body>
        </html>
    );
}

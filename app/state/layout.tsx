"use client";
import '@styles/globals.css';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="w-full h-full bg-color">
            <body>
                {children}
            </body>
        </html>
    );
}

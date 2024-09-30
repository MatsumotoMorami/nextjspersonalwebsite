import '@styles/globals.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html className='w-full h-full bg-color' lang="en">
            <body>{children}</body>
        </html>
    )
}

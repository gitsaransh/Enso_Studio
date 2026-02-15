import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/index.css';

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
};

export const metadata: Metadata = {
    metadataBase: new URL('https://gitsaransh.github.io/Enso_Studio'),
    title: {
        default: 'Enso Studio',
        template: '%s | Enso Studio'
    },
    description: 'Quietly shipping focused digital products. Apps, games, and intelligent systems built through focus, clarity, and disciplined execution.',
    keywords: ['Digital Studio', 'Web Development', 'Mobile Apps', 'Game Development', 'Minimalist Design', 'Software Engineering'],
    authors: [{ name: 'Enso Studio' }],
    creator: 'Enso Studio',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://gitsaransh.github.io/Enso_Studio',
        title: 'Enso Studio',
        description: 'Quietly shipping focused digital products.',
        siteName: 'Enso Studio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Enso Studio',
        description: 'Quietly shipping focused digital products.',
        creator: '@ensostudio',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className="bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground"
                suppressHydrationWarning
            >
                {children}
            </body>
        </html>
    );
}

import './globals.css'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Safe im Netz',
    description: 'Eine Initiative der HTBLA Kaindorf für mehr Sicherheit im Netz',
}

export default function RootLayout({children}) {
    return (
        <html lang="de">
            <body className={inter.className}>{children}</body>
        </html>
    )
}

import './globals.css'
import {Inter} from 'next/font/google'
import ImportBsJS from "@/app/components/ImportBsJS";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import styles from './page.module.css'


const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Safe im Netz',
    description: 'Eine Initiative der HTBLA Kaindorf für mehr Sicherheit im Netz',
}

export default function RootLayout({children}) {
    return (
        <html lang="de">
            <body className={inter.className}>
                <ImportBsJS />
                <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                    <Header />

                    {/*Main body*/}
                    <div className={"container flex-grow-1"}>
                        <div className={styles.marginBody}>
                            {children}
                        </div>
                    </div>

                    <Footer/>
                </div>
            </body>
        </html>
    )
}

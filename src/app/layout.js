import './globals.css'
import {Inter} from 'next/font/google'
import styles from "@/app/page.module.css";
import Image from "next/image";
import Link from 'next/link';


const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Safe im Netz',
    description: 'Eine Initiative der HTBLA Kaindorf für mehr Sicherheit im Netz',
}

export default function RootLayout({children}) {
    return (
        <html lang="de">
            <body className={inter.className}>
                {/*Header*/}
                <div className={"container-fluid fixed-top"} style={{ height: "70px", background: "linear-gradient(45deg, #883D8C, #EF2DCE)"}}>
                    <div className={styles.headerImage}>
                        <Link href="http://localhost:3000">
                            <Image src={"/Text_White.png"} alt={"Logo"} width={"245"} height={"70"}></Image>
                        </Link>
                    </div>
                </div>

                {/*Main body*/}
                <div className={"container"} style={{marginTop: "85px"}}>
                    {children}
                    <br />
                </div>

                {/*Footer*/}
                <footer className={"footer"} style={{position: "absolute", width: "100%"}}>
                    <div className={styles.footerSection}>
                        <div className={"container-fluid"}>
                            {/*style={{height: "70px", background: "linear-gradient(45deg, #883D8C, #EF2DCE)", color: "#fff", display: "flex",
                            flexDirection: "column", alignItems: "center",justifyContent: "center", textAlign: "center"}}*/}
                            <div className={"row"} >
                                <p style={{marginBottom: "0",}}>
                                    <Link href={"http://localhost:3000/imprint"} className={styles.link}>Impressum</Link>
                                    {" "}&middot;{" "}
                                    <Link href={"http://localhost:3000/terms"} className={styles.link}>Nutzungsbedingungen</Link>
                                    {" "}&middot;{" "}
                                    <Link href={"http://localhost:3000/privacy"} className={styles.link}>Datenschutzerklärung</Link>
                                </p>
                            </div>
                            <div className={"row"}>
                                <p style={{marginBottom: "0"}}>@ 2023 Kropf IT e.U.</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    )
}

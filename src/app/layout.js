import './globals.css'
import {Inter} from 'next/font/google'
import styles from "@/app/page.module.css";
import Image from "next/image";
import Link from 'next/link';
import ImportBsJS from "@/app/ImportBsJS";


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

                    {/*Header*/}
                    <nav className="navbar navbar-expand-lg fixed-top navbar-dark" style={{ background: "linear-gradient(45deg, #883D8C, #EF2DCE)"}}>
                        <div className="container-fluid">
                            <Link href="http://localhost:3000" className="navbar-brand">
                                <Image src={"/Text_White.png"} alt={"Logo"} width={"245"} height={"70"} />
                            </Link>

                            {/* Toggler for mobile view */}
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ms-auto"> {/* ms-auto pushes items to the right */}
                                    <li className="nav-item">
                                        <Link href="http://localhost:3000/imprint" className="nav-link">Impressum</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="http://localhost:3000/terms" className="nav-link">Nutzungsbedingungen</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="http://localhost:3000/privacy" className="nav-link">Datenschutzerklärung</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>



                    {/*Main body*/}
                    <div className={"container flex-grow-1"} style={{marginTop: "105px"}}>
                        {children}
                    </div>

                    {/*Footer*/}
                    <footer className={"footer"} style={{width: "100%"}}>
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
                </div>
            </body>
        </html>
    )
}

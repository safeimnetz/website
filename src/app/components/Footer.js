import styles from "@/app/page.module.css";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={"footer"} style={{ width: "100%" }}>
            <div className={styles.footerSection}>
                <div className={"container-fluid"}>
                    <div className={"row"} >
                        <p style={{ marginBottom: "0" }}>
                            <Link href={"/imprint"} className={styles.link}>Impressum</Link>
                            <span style={{ color: "rgba(255, 255, 255, 0.75)" }}> &middot; </span>
                            <Link href={"/terms"} className={styles.link}>Nutzungsbedingungen</Link>
                            <span style={{ color: "rgba(255, 255, 255, 0.75)" }}> &middot; </span>
                            <Link href={"/privacy"} className={styles.link}>Datenschutzerklärung</Link>
                        </p>
                    </div>
                    <div className={"row"}>
                        <p style={{ marginBottom: "0" }}>© 2023 Kropf IT e.U.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

import Link from "next/link";
import Image from "next/image";
import styles from '../page.module.css'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark" style={{ background: "linear-gradient(45deg, #883D8C, #EF2DCE)"}}>
            <div className="container-fluid">
                <Link href="http://localhost:3000" className="navbar-brand">
                    <Image src={"/Text_White.png"} alt={"Logo"} width={175} height={50} className={styles.headerImage}/>
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
    )
}

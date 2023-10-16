import Image from 'next/image';
import Link from "next/link";
import styles from './page.module.css';

export default function Home() {
    return (
        <main>
            {/* Safe im Netz section */}
            <div className="row mb-5">
                <div className="col-lg-6 col-md-12 d-flex flex-column align-items-start justify-content-center text-left">
                    <div className={"row"}>
                        <h2>Safe im Netz</h2>
                        <p>Die kostenlose und quelloffene App für mehr Sicherheit und Privatsphäre im Internet.</p>
                        <p>Eine Initiative der HTL Kaindorf.</p>
                    </div>
                    <div className={"row"} style={{ width: "100%" }}>
                        <div className={styles.badges}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <Link href="https://play.google.com/store/apps/details?id=at.safeimnetz.app" target='_blank'>
                                    <Image src={"/google-play-badge.png"} alt={"Google Play Badge"} width={200} height={58} className="img-fluid" style={{ marginRight: "5px" }} />
                                </Link>
                            </div>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <Link href="http://localhost:3000" target='_blank'>
                                    <Image src={"/app-store-badge.png"} alt={"App Store Badge"} width={177} height={58} className="img-fluid" style={{ marginLeft: "5px" }} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Image src="/deviceframes.png" alt="App Device Frames" width={925} height={918} className="img-fluid" />
                </div>
            </div>

            {/* Divider */}
            <div className="border-top my-4"></div>

            {/* So gehts section */}
            <div className="row mb-5">
                <div className="col-lg-6 col-md-12 d-flex flex-column align-items-start justify-content-center text-left">
                    <div className="row mt-3" >
                        <div className="d-flex align-items-start">
                            <span className="badge bg-primary me-2" style={{ background: 'linear-gradient(45deg, #883D8C, #EF2DCE)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>1</span>
                            <div style={{ paddingLeft: "10px" }}>
                                <h4 style={{ lineHeight: '40px', marginBottom: "0" }}>App herunterladen</h4>
                                <p style={{ marginBottom: "0" }}>
                                    Lade &quot;Safe im Netz&quot; kostenlos herunter.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="d-flex align-items-start">
                            <span className="badge bg-primary me-2" style={{ background: 'linear-gradient(45deg, #883D8C, #EF2DCE)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>2</span>
                            <div style={{ paddingLeft: "10px" }}>
                                <h4 style={{ lineHeight: '40px', marginBottom: "0" }}>Dienste auswählen</h4>
                                <p style={{ marginBottom: "0" }}>Wähle alle Apps und Dienste aus, die du benutzt.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="d-flex align-items-start">
                            <span className="badge bg-primary me-2" style={{ background: 'linear-gradient(45deg, #883D8C, #EF2DCE)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>3</span>
                            <div style={{ paddingLeft: "10px" }}>
                                <h4 style={{ lineHeight: '40px', marginBottom: "0" }}>Tasks befolgen</h4>
                                <p style={{ marginBottom: "0" }}>Bekomme hilfreiche Tipps, wie du deine Cyber-Sicherheit verbessern kannst.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Image src="/deviceframes_2.png" alt="App Screenshot 3" width={905} height={918} className={"img-fluid"} />
                </div>
            </div>
        </main>
    )
}

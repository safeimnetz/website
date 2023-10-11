import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
    return (
        <main>
            {/* Full-width top section */}
            <div className={styles.headerSection + "container-fluid "}>
                <div className="row">
                    <div className="col">
                        <Image src={"/public/Logo_2048x2048.png"} alt={"Logo"} width={"2048"} height={"2048"}></Image>
                    </div>
                </div>
            </div>

            {/* Main content with padding */}
            <div className="container">
                <div className="row">
                    <div className="col">
                        Main Content 1
                    </div>
                    <div className="col">
                        Main Content 2
                    </div>
                </div>
                {/* ... add more rows as needed ... */}
            </div>

            {/* Full-width footer */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        Footer Full-Width Section
                    </div>
                </div>
            </div>
        </main>
    )
}

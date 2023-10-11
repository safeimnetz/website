import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
    return (
        <main>
            {/* Full-width top section */}
            <div className={styles.headerSection}>
                <div className={"container-fluid"}>
                    <div className="row">
                        <div className="col" style={{marginLeft: '-10px'}}>
                            <div className={styles.headerImage}>
                                <Image src={"/Text_White.png"} alt={"Logo"} width={"245"} height={"70"}></Image>
                            </div>
                        </div>
                        {/*<div className="col">
                            <div className={styles.headerImage} style={{marginLeft: '-150px'}}>
                                <Image src={"/Only_Text_White.png"} alt={"Logo"} width={"200"} height={"70"}></Image>
                            </div>
                        </div>*/}
                    </div>
                </div>
            </div>

            {/* Main content with padding */}
            <div className="container">
                <div className="row" style={{height: 200}}>
                    <div className="col">
                        Main Content 1
                    </div>
                    <div className="col" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                        <Image src={"/Logo_2048x2048.png"} alt={"Logo"} width={"70"} height={"70"}></Image>
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

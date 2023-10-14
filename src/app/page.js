import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
    return (
        <main>
            <div className="row" style={{height: 200}}>
                <div className="col">
                    Main Content 1
                </div>
                <div className="col" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                    <Image src={"/Logo_2048x2048.png"} alt={"Logo"} width={"70"} height={"70"}></Image>
                </div>
            </div>
            {/* ... add more rows as needed ... */}
        </main>
    )
}

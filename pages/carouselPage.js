import Link from "next/link"
import Carousel from "@/components/carousel";
import styles from "../styles/CarouselPage.module.css"

export default function CarouselPage() {
    return(
        <div className={styles.main}>
            <Link href="/" className={styles.link}>Home</Link>
            <div className={styles.header}>
                Carousel Page
            </div>
            <div>
                <Carousel />
            </div>
        </div>
    )
}
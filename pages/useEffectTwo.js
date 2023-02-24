import Link from "next/link"
import { useEffect, useState } from "react";
import styles from "../styles/useEffectTwo.module.css"

export default function UseEffectTwo() {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 50)
    }, [])

    return(
        <div className={styles.main}>
            <Link href="/" className={styles.link}>Home</Link>
            <div className={styles.header}>
                useEffectTwo
            </div>
            <div className={styles.number}>
                {number}
            </div>
        </div>
    )
}
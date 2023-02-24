import Image from "next/image"
import { useState } from "react";
import styles from "./carousel.module.css"

export default function Carousel() {
    const [img, setImg] = useState(0);

    const changeImage = (change) => {
        if(change == "backward") {
            setImg(img - 1);

            if(img == 0){
                setImg(5);
            }
            console.log(img);
        } else if(change == "forward"){
            setImg(img + 1)

            if(img == 5){
                setImg(0);
            }
            console.log(img);
        }
    }

    return(
        <>
            <div className={styles.imgContainer} style={{
                backgroundImage: "url(/carousel-images/" + img + ".jpg)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: 500,
                height: 300
            }}>
                <div className={styles.arrowContainer}>
                    <Image 
                        src={"/icons/leftArrow.png"}
                        alt={"/icons/leftArrow.png"}
                        width={40}
                        height={40}
                        onClick={() => changeImage("backward")}
                        className={styles.arrowBtn}
                    />

                    <Image 
                        src={"/icons/rightArrow.png"}
                        alt={"/icons/rightArrow.png"}
                        width={40}
                        height={40}
                        onClick={() => changeImage("forward")}
                        className={styles.arrowBtn}
                    />
                </div>
            </div>
        </>
    )
}
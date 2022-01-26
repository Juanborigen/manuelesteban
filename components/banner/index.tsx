import React from "react";
import styles from './banner.module.scss';


const Banner = () => {
    return(
        <div className={`${styles.container} h-screen flex`}>
            <div className={'flex justify-center flex-col pl-32'}>
                <h3 className={'text-white text-2xl'}>Compositor</h3>
                <h1 className={'text-white text-6xl text font-bold'}>Manuel Esteban</h1>
            </div>
        </div>
    )
}

export default Banner;
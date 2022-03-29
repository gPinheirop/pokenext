import Image from "next/image"
import Link from "next/link"

import styles from "../styles/About.module.css"

export default function About(){

return (
    <div className={styles.about}>
        <h1>PokeNext</h1>
        <Image 
            src="/images/charizard.png"
            width="250"
            height="250"
            alt="charizard"
        />

        <h2>Sobre o Projeto</h2>
        <p>O projeto consome uma api e retorna os pokemons contidos nela de forma dinâmica</p>

        <h2></h2>
        <a 
        href="https://www.youtube.com/playlist?list=PLnDvRpP8BnezfJcfiClWskFOLODeqI_Ft"
        target="_blank" rel="noreferrer">
            Projeto Original
        </a>
    </div>
)

}
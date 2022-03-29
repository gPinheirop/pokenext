import Image from "next/image"




export default function Card({pokemon}){
return(
    <div>
        <h3>{pokemon.name}</h3>
    </div>
)
}
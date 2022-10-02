import { useSelector } from "react-redux"
import s from "./PokemonDetail.module.css"


const PokemonDetail = () =>{
    const pokemon = useSelector(state => state.pokemon)

    return(
        <div >
          <h1 className={s.name}>Name: {pokemon.name} </h1>
          <div className={s.general}>
          <div> 
            <img src={pokemon.img} alt='' className={s.img}/>
          </div>
          <div >
            <h3>Id: {pokemon.id}</h3>
            <h3>Type(s): {pokemon.types}</h3>
            <span><h3>Height: {pokemon.height} Weight: {pokemon.weight}lbs</h3></span>
          </div>

          <div className={s.stats}>
          <h4 className={s.h3}>STATS:</h4>  
          <ul className={s.ul}>
            <li>HP: {pokemon.hp}</li>
            <li>ATTACK: {pokemon.attack}</li>
            <li>DEFENSE: {pokemon.defense}</li>
            <li>SPEED: {pokemon.speed}</li>
          </ul>
          </div>
          </div>
        </div>
    )
}

    export default PokemonDetail
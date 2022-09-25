import { useSelector } from "react-redux"


const PokemonDetail = ({match}) =>{
    const pokemon = useSelector(state => state.pokemon)

    return(
        <div>
        <h1>Name: {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} </h1> 
        <img alt=''/>
        </div>
    )
}

    export default PokemonDetail
import { useSelector } from "react-redux"


const PokemonDetail = ({match}) =>{
    const pokemon = useSelector(state => state.pokemon)

    return(
        <div>
        <h1>Name: {pokemon.name} </h1> 
        <img alt=''/>
        </div>
    )
}

    export default PokemonDetail
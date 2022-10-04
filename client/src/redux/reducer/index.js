import { GET_ALL_POKEMON , GET_POKEMON, GET_POKEMON_QUERY, GET_TYPES, POKEMON_FILTER } from "../actions";

const initialState = {
    allPokemon: [],
    pokemonFilter: [],
    pokemon: {},
    types: []
}

const rootReducer = (state = initialState , action) => {
    switch(action.type){
        case GET_ALL_POKEMON:
            return{
                ...state,
                allPokemon: action.payload
            }
        case POKEMON_FILTER:
            return{
                ...state,
                pokemonFilter: action.payload
            }    
        case GET_POKEMON:
            return{
                ...state,
                pokemon: action.payload
            }
        case GET_POKEMON_QUERY:
            return{
                ...state,
                pokemon: action.payload
            }
        case GET_TYPES:
            return{
                ...state,
                types: action.payload
            }
        default:
            return state    
    }
}

export default rootReducer
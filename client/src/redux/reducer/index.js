import { GET_ALL_POKEMON , GET_POKEMON, GET_POKEMON_QUERY, GET_TYPES, POKEMON_FILTER, IS_LOADING } from "../actions";

const initialState = {
    isLoading: false,
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
                allPokemon: action.payload,
                isLoading: false
            }
        case POKEMON_FILTER:
            return{
                ...state,
                pokemonFilter: action.payload,
                isLoading: false
            }    
        case GET_POKEMON:
            return{
                ...state,
                pokemon: action.payload,
                isLoading: false
            }
        case GET_POKEMON_QUERY:
            return{
                ...state,
                pokemon: action.payload,
                isLoading: false
            }
        case GET_TYPES:
            return{
                ...state,
                types: action.payload
            }
        case IS_LOADING:
            return{
                ...state,
                isLoading: true
            }
        default:
            return state    
    }
}

export default rootReducer
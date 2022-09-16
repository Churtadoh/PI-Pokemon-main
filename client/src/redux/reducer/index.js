import { GET_ALL_POKEMON , GET_POKEMON, CREATE_POKEMON } from "../actions";

const initialState = {
    allPokemon: [],
    pokemon: {}
}

const rootReducer = (state = initialState , action) => {
    switch(action.type){
        case GET_ALL_POKEMON:
            return{
                ...state,
                allPokemon: action.payload.results
            }
        case GET_POKEMON:
            return{
                ...state,
                pokemon: action.payload
            }
        case CREATE_POKEMON:
            return{
                ...state,
                allPokemon: state.allPokemon.concat(action.payload)
            }
        default:
            return state    
    }
}

export default rootReducer
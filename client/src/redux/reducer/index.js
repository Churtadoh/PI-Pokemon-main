import { GET_ALL_POKEMON , GET_POKEMON, CREATE_POKEMON, INITIATE_PAGE } from "../actions";

const initialState = {
    allPokemon: [],
    pokemon: {},
    nav: false
}

const rootReducer = (state = initialState , action) => {
    switch(action.type){
        case GET_ALL_POKEMON:
            return{
                ...state,
                allPokemon: action.payload
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
        case INITIATE_PAGE:
            return{
                ...state,
                nav : action.payload
            }
        default:
            return state    
    }
}

export default rootReducer
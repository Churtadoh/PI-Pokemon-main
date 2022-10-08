export const GET_ALL_POKEMON = "GET_ALL_POKEMON"
export const POKEMON_FILTER = "POKEMON_FILTER"
export const GET_POKEMON = "GET_POKEMON"
export const GET_POKEMON_QUERY = "GET_POKEMON_QUERY"
export const GET_TYPES = "GET_TYPES"
export const IS_LOADING = "IS_LOADING"

export const getAllPokemon = (a) => dispatch => {
    if(!!a){ dispatch({type: POKEMON_FILTER , payload: a})}
    else{
    dispatch({type: IS_LOADING})  
    return fetch('http://localhost:3001/home')
           .then(response => response.json())
           .then(obj => {
            dispatch({type: GET_ALL_POKEMON , payload: obj})
           })}
}

export const getTypes = () => dispatch => {
  return fetch('http://localhost:3001/types')
         .then(response => response.json())
         .then(obj => {
          dispatch({type: GET_TYPES , payload: obj})
         })
}

export const getPokemon = (id) => dispatch => {
    dispatch({type: IS_LOADING}) 
    return fetch("http://localhost:3001/pokemon/" + id)
          .then(response => response.json())
          .then(obj => {
            dispatch({ type: GET_POKEMON, payload: obj });
          });
};

export const getPokemonQuery = (name) => dispatch => {
    dispatch({type: IS_LOADING}) 
    return fetch("http://localhost:3001/pokemon?name=" + name)
          .then(response => response.json())
          .then(obj => {
            dispatch({ type: GET_POKEMON, payload: obj });
          });
}

export const isLoading = () => dispatch => {
  dispatch({type: IS_LOADING})
}
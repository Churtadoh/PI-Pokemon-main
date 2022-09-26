export const GET_ALL_POKEMON = "GET_ALL_POKEMON"
export const GET_POKEMON = "GET_POKEMON"
export const GET_POKEMON_QUERY = "GET_POKEMON_QUERY"
export const CREATE_POKEMON = "CREATE_POKEMON"
export const INITIATE_PAGE = "INITIATE_PAGE"

var id=3

export const getAllPokemon = () => dispatch => {
    return fetch('http://localhost:3001/home')
           .then(response => response.json())
           .then(obj => {
            dispatch({type: GET_ALL_POKEMON , payload: obj})
           })
}

export const getPokemon = (id) => dispatch => {
    return fetch("http://localhost:3001/pokemon/" + id)
          .then(response => response.json())
          .then(obj => {
            dispatch({ type: GET_POKEMON, payload: obj });
          });
};

export const getPokemonQuery = (name) => dispatch => {
    return fetch("http://localhost:3001/pokemon?name=" + name)
          .then(response => response.json())
          .then(obj => {
            dispatch({ type: GET_POKEMON, payload: obj });
          });
}

export const createPokemon = (payload) => {
  id = id + 1
  return{
    type: CREATE_POKEMON,
    payload: {...payload, id:id}
  }
}

export const initiatePage = () => {
  var a = true
  return{
    type: INITIATE_PAGE,
    payload: a
  }
}
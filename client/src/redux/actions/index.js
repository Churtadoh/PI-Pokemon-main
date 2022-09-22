export const GET_ALL_POKEMON = "GET_ALL_POKEMON"
export const GET_POKEMON = "GET_POKEMON"
export const CREATE_POKEMON = "CREATE_POKEMON"

var id=3

export const getAllPokemon = () => dispatch => {
    return fetch('http://localhost:3001/home')
           .then(response => response.json())
           .then(obj => {
            dispatch({type: GET_ALL_POKEMON , payload: obj})
           })
}

export const getPokemon = (id) => dispatch => {
    return fetch("https://pokeapi.co/api/v2/pokemon/" + id)
          .then(response => response.json())
          .then(obj => {
            dispatch({ type: GET_POKEMON, payload: obj });
          });
};

export const createPokemon = (payload) => {
  id = id + 1
  return{
    type: CREATE_POKEMON,
    payload: {...payload, id:id}
  }

}
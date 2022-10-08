import { Route, useLocation} from "react-router-dom"
import Land from "./components/Land"
import Nav from "./components/Nav"
import Home from "./components/Home"
import CreatePokemon from './components/CreatePokemon';
import PokemonDetail from './components/PokemonDetail';
import Pokemon from './components/Pokemon';
import { useSelector, connect} from "react-redux"
import {useEffect} from "react"
import { getAllPokemon , getTypes } from './redux/actions';


function App(props) {
  const {pathname} = useLocation()

  let save = useSelector(state => [...state.allPokemon])

  let filter = useSelector(state => [...state.pokemonFilter])

  useEffect(()=> {
      props.getAllPokemon()
      .then(props.getTypes())
  },[])

  let current = []
  if(filter.length===0){ current = [...save]}
  else {current = [...filter]}

  const arrayPokemon = current.map(el =>{
    return(<div key={el.id}>
        <Pokemon
        id = {el.id}
        name = {el.name}
        types = {el.types}
        img = {el.img}
        attack = {el.attack}
        speed = {el.speed}
        />
        </div>)
  })

  return (
    <div className="App">
      <>
         <Route exact path = '/' component = {()=>(<Land/>)}/>
         {pathname !== '/' && <Nav/>}
         <Route exact path = '/home' component = {()=>(<Home arrayPokemon={arrayPokemon}/>)}/>
         <Route exact path = '/pokemon-create' component = {()=>(<CreatePokemon/>)}/>
         <Route exact path = {'/pokemon/:id'} component = {() => <PokemonDetail/>}/>
         <Route exact path = '/pokemon' component={() => <PokemonDetail/>}/>
      </>
    </div>
  );
}

export const mapDispatchToProps = (dispatch) => {
  return{
      getAllPokemon: () => dispatch(getAllPokemon()),
      getTypes: () => dispatch(getTypes())
  }
}

export default connect(null, mapDispatchToProps)(App)


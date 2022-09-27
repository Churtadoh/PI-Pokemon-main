import './App.css';
import { Route} from "react-router-dom"
import Land from "./components/Land"
import Nav from "./components/Nav"
import Home from "./components/Home"
import CreatePokemon from './components/CreatePokemon';
import PokemonDetail from './components/PokemonDetail';
import { useSelector, connect} from "react-redux"
import {useEffect} from "react"
import { getAllPokemon } from './redux/actions';
import Pokemon from './components/Pokemon';

function App(props) {
  const nav = useSelector(state => state.nav)

  useEffect(()=> {
    props.getAllPokemon()
  },[])

  const arrayPokemon = props.allPokemon.map(el =>{
    return(<div key={el.id}>
        <Pokemon
        id = {el.id}
        name = {el.name}
        types = {el.types}
        img = {el.img}
        />
        </div>)
  })

  return (
    <div className="App">
      <>
      <Route exact path = '/' component = {()=>(<Land/>)}/>
      {nav && <Nav onSearch={(input) => alert(input)}/>}
      <Route exact path = '/home' component = {()=>(<Home arrayPokemon={arrayPokemon}/>)}/>
      <Route exact path = '/pokemon-create' component = {()=>(<CreatePokemon/>)}/>
      <Route exact path = {'/pokemon/:id'} component = {() => <PokemonDetail/>}/>
      <Route exact path = '/pokemon' component={() => <PokemonDetail/>}/>
      </>
      
    </div>
  );
}

export const mapStateToProps = (state) => {
  return {
      allPokemon: state.allPokemon
  }
};

export const mapDispatchToProps = (dispatch) => {
  return{
      getAllPokemon: () => dispatch(getAllPokemon())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


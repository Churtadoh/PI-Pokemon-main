import './App.css';
import { Route} from "react-router-dom"
import Land from "./components/Land"
import Nav from "./components/Nav"
import Home from "./components/Home"
import CreatePokemon from './components/CreatePokemon';
import PokemonDetail from './components/PokemonDetail';

var nav = true


function App() {
  return (
    <div className="App">
      <>
      <Route exact path = '/' component = {()=>(<Land/>)}/>
      {nav && <Nav onSearch={(input) => alert(input)}/>}
      <Route exact path = '/home' component = {()=>(<Home/>)}/>
      <Route exact path = '/pokemon-create' component = {()=>(<CreatePokemon/>)}/>
      <Route exact path = {'/pokemon/:id'} component = {() => <PokemonDetail/>}/>
      </>
      
    </div>
  );
}

export default App;

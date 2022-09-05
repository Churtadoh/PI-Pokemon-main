import './App.css';
import { Route} from "react-router-dom"
import Land from "./components/Land"
import Nav from "./components/Nav"
import Home from "./components/Home"
import CreatePokemon from './components/CreatePokemon';

var nav = false


function App() {
  return (
    <div className="App">
      <>
      <Route exact path = '/' component = {()=>(<Land/>)}/>
      {nav && <Nav/>}
      <Route exact path = '/home' component = {()=>(<Home/>)}/>
      <Route exact path = '/pokemon/create' component = {()=>(<CreatePokemon/>)}/>
      </>
      
    </div>
  );
}

export default App;

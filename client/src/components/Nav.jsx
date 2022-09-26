import {Link} from 'react-router-dom'
import {useEffect} from 'react';
import { getPokemonQuery } from '../redux/actions';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Nav = (props) =>{

const [input,setInput] = useState('')
const [inputSearch, setInputSearch] = useState('')

const handleInputSearch = () =>{
    setInputSearch(input)
}

const dispatch = useDispatch()

const handleInputChange = (e) =>{
    setInput(e.target.value)
}

useEffect(()=>{if(inputSearch!==''){dispatch(getPokemonQuery(inputSearch))}
},[inputSearch,dispatch])

return(
    <div>
        <Link to = '/home'>Home</Link>
        <Link to = '/pokemon-create'>Create Pokemon</Link>
        <input id='input' value={input} onChange= {handleInputChange} placeholder='Search for pokemon by name or id'/>
        <Link to = {`/pokemon?name=${input}`}><button type='submit' onClick= {handleInputSearch}>Search</button></Link>
    </div> 
)
}

export default Nav
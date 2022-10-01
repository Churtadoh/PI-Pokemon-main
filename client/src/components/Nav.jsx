import {Link} from 'react-router-dom'
import {useEffect} from 'react';
import { getPokemonQuery } from '../redux/actions';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './Nav.module.css'

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
    <div className={s.Nav}>
        <Link to = '/home' className={s.links}>Home</Link>
        <Link to = '/pokemon-create' className={s.links}>Create Pokemon</Link>
        <div>
           <input id='input' className={s.bar} value={input} onChange= {handleInputChange} placeholder='Search for pokemon by name'/>
           <Link to = {`/pokemon?name=${input}`}><button type='submit' className={s.button} onClick= {handleInputSearch}>Search</button></Link>
        </div>
    </div> 
)
}

export default Nav
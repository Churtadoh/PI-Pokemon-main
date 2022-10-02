import {Link} from 'react-router-dom'
import {useEffect} from 'react';
import { getPokemonQuery, getPokemon } from '../redux/actions';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './Nav.module.css'

const Nav = () =>{

let initalRandom = Math.floor((Math.random()*500))    

const [random , setRandom] = useState(initalRandom)    
const [input,setInput] = useState('')
const [inputSearch, setInputSearch] = useState('')

const handleRandom = () => {
    let a = Math.floor((Math.random()*500))
    setRandom(a)
    dispatch(getPokemon(random))
}

const handleInputSearch = () =>{
    setInputSearch(input)
    setInput('')
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
           <Link to = {`/pokemon/${random}`}><button onClick={handleRandom} className={s.button1}>Random</button></Link>
        </div>
    </div> 
)
}

export default Nav
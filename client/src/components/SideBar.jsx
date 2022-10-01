import { useState} from "react"
import {  useDispatch, useSelector} from "react-redux"
import { getAllPokemon} from "../redux/actions"
import s from './SideBar.module.css'

const SideBar = () => {

    const dispatch = useDispatch()

    let save = useSelector(state => [...state.allPokemon])

    let filter = useSelector(state => [...state.pokemonFilter])

    const[type,setType] = useState('')

    const[filters,setFilters] = useState({
        apiPokemon: false,
        userPokemon: false,
        AtoZ : false,
        ZtoA : false,
        attackLG: false,
        attackGL: false,
    })

    function reset(){
        dispatch(getAllPokemon(save))
    }

    function handleTypeChange(e) {
        setType(e.target.value)
    }

    function handleInputChange(e) {
        const newFilter = { 
                ...filters,
                [e.target.name] : true
        }
        setFilters(newFilter);
        applyFilters(newFilter);
    }

    function handleTypeFilter() {
        let pokeTypes = []
        let current = []
        if(filter.length===0){
            current = [...save]
        }
        else {current = [...filter]}
        current.forEach(el => {if(el.types.includes(type)){pokeTypes.push(el)}})
        if(pokeTypes.length===0){alert("No pokemon of that type found")}
        else
        dispatch(getAllPokemon(pokeTypes))
    }

    function applyFilters (filters) {
        let current = []
        if(filter.length===0){
            current = [...save]
        }
        else {current = [...filter]}
        if(!!filters.apiPokemon){
            current = current.filter(el => el.id[0]!=='U')
            dispatch(getAllPokemon(current)) 
        }
        if(!!filters.userPokemon){
             current = current.filter(el => el.id[0]==='U')
             dispatch(getAllPokemon(current)) 
        }
        if(!!filters.AtoZ){
            current = current.sort((a,b) => a.name.localeCompare(b.name))
            dispatch(getAllPokemon(current)) 
        }
        if(!!filters.ZtoA){
            current = current.sort((a,b) => b.name.localeCompare(a.name))
            dispatch(getAllPokemon(current)) 
        }
        if(!!filters.attackLG){
            current = current.sort((a,b) => a.attack - b.attack)
            dispatch(getAllPokemon(current)) 
        }
        if(!!filters.attackGL){
            current = current.sort((a,b) => b.attack - a.attack)
            dispatch(getAllPokemon(current)) 
        }  

    }

    



    return (<div className={s.general}>
        <h3>Sort by:</h3>
        
        <input className={s.button} type="button" name="Reset" value="Reset" onClick={reset}/>
        <div className={s.list}>
        <div>
          <input className={s.button} type="button" name="apiPokemon" value ="Api" onClick={handleInputChange}/>-
          <label>Only Api Pokemon</label>
        </div>
        <div>
          <input className={s.button} type="button" name="userPokemon" value ="User" onClick={handleInputChange}/>- 
          <label>Only User Pokemon</label><br/>
        </div>  
        <div>
          <input className={s.button} type="button" name="AtoZ" value ="A-Z" onClick={handleInputChange}/>-
          <label>Alphabetical Order</label><br/>
        </div>
        <div> 
          <input className={s.button} type="button" name="ZtoA" value ="Z-A" onClick={handleInputChange}/>-
          <label>Alphabetical Order Z-A</label><br/>
        </div>
        <div>
          <input className={s.button} type="button" name="attackLG" value ="Atk L-G" onClick={handleInputChange}/>-
          <label>Attack lowest to greatest</label><br/>
        </div>
        <div> 
          <input className={s.button} type="button" name="attackGL" value ="Atk G-L" onClick={handleInputChange}/>-
          <label>Attack greatest to lowest</label><br/>
        </div>
        </div>
        <h3>Filter by type:</h3>
        <input className={s.bar} type="input" name="type" value ={type} onChange={handleTypeChange} placeholder="write type..."/>
        <input className={s.button} type="button" name="type" value ="Filter" onClick={handleTypeFilter}/>
        

        </div>
    )

}
  
export default SideBar


import { useState } from "react"
import axios from "axios"
import {useEffect} from "react"
import { getTypes } from "../redux/actions"
import { connect} from "react-redux"

const CreatePokemon = (props) =>{
    useEffect(()=> {
        props.getTypes()
      },[])

      const arrayTypes = props.types.map(el =>{
        return(<div key={el.id}>
            id: {el.id}
            name: {el.name}
            </div>)
      })  

    const[input,setInput] = useState({
        name: '',
        id: '',
        height: '',
        weight: '',
        hp: '',
        attack:'',
        defense:'',
        speed:'',
        types:'',
        img:''
    })

    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:3001/pokemon", input)
        .then(res => {console.log(res)
        setInput({
            name: '',
            id: '',
            height: '',
            weight: '',
            hp: '',
            attack:'',
            defense:'',
            speed:'',
            types:'',
            img:''
        })
        })
    }


    return(
       <form onSubmit={handleSubmit}>
          <label>Name: </label>
          <input name = 'name' value = {input.name} onChange = {handleInputChange}/><br/>
          <label>Id: </label>
          <input name = 'id' value = {input.id} onChange = {handleInputChange}/><br/>
          <label>Height: </label>
          <input name = 'height' value = {input.height} onChange = {handleInputChange}/><br/>
          <label>Weight: </label>
          <input name = 'weight' value = {input.weight} onChange = {handleInputChange}/><br/>
          <label>Hp: </label>
          <input name = 'hp' value = {input.hp} onChange = {handleInputChange}/><br/>
          <label>Attack: </label>
          <input name = 'attack' value = {input.attack} onChange = {handleInputChange}/><br/>
          <label>Defense: </label>
          <input name = 'defense' value = {input.defense} onChange = {handleInputChange}/><br/>
          <label>Speed: </label>
          <input name = 'speed' value = {input.speed} onChange = {handleInputChange}/><br/>
          <label>Image URL: </label>
          <input name = 'img' value = {input.img} onChange = {handleInputChange}/><br/>
          <label>Types: </label>
          <input name = 'types' value = {input.types} onChange = {handleInputChange}/><br/>
    

          <button type="submit">Create</button>

          <div>
            <h3>Possible Types</h3>
            <div>{arrayTypes}</div>
          </div>
          
       </form> 
    )
}

export const mapStateToProps = (state) => {
    return{
        types: state.types
    }
};

export const mapDispatchToProps = (dispatch) => {
    return{
        getTypes: () => dispatch(getTypes())
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(CreatePokemon)
import { useState } from "react"
import axios from "axios"
import {useEffect} from "react"
import { getAllPokemon, getTypes } from "../redux/actions"
import { connect} from "react-redux"
import s from './CreatePokemon.module.css'

const CreatePokemon = (props) =>{
    useEffect(()=> {
        props.getTypes()
      },[])

      const arrayTypes = props.types.map(el =>{
        return(<div key={el.id}>
            {`${el.id} : ${el.name}`}
            </div>)
      })
    
    const initialInput =  {
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
    } 

    const[input,setInput] = useState(initialInput)

    const[errors,setErrors] = useState({})

    function handleInputChange(e) {
        const newInput = {
            ...input,
            [e.target.name] : e.target.value
        }
        setInput(newInput)
        setErrors(validate(newInput))
    }

    function validate(input) {
        let errors = {};
        if(!input.id)  {
            errors.id = "Id is required"
        } else if(!/^U+(?=.*[0-9])/.test(input.id)) {
            errors.id = "Id must start with U followed by a number"
        }
        if(!input.types) {
            errors.types = "Type is required"
        } else if(!/(?=.*[0-9])/.test(input.types)){
            errors.types = "Types must be a number or series of numbers"
        }
        return errors
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:3001/pokemon", input)
        .then(res => {console.log(res)
        setInput(initialInput)
        props.getAllPokemon()
        })
    }


    return(
        <div>
        <h1 className={s.create}>Create your own pokemon</h1>
        <div className={s.general}>   
       <form className={s.form} onSubmit={handleSubmit}>
          <label>Name: </label>
          <input name = 'name' value = {input.name} onChange = {handleInputChange}/><br/>
          <label>Id: </label>
          <input name = 'id' value = {input.id} onChange = {handleInputChange} 
          className ={errors.id ? s.danger : ""}/><br/>
          {errors.id && <span className={s.danger}>{errors.id}</span>}
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
          <input name = 'types' value = {input.types} onChange = {handleInputChange}
          className ={errors.id ? s.danger : ""}
          /><br/>
          {errors.types && <span className={s.danger}>{errors.types}</span>}
          <button className={s.button} disabled={errors.id? "disabled": ""} type="submit">Create</button>
       </form> 
          <div className={s.types}>
            <h3>Possible Types</h3>
            <div className={s.types}>{arrayTypes}</div>
            <div className={s.notice}>
                <h2>Notice!</h2>
                <p className={s.p}>To choose the type of your pokemon 
                    type the id into the input box, if
                    you wish to choose more than one type
                    insert the different Id's separated by
                    commas. e.g., ("1,15" for normal and ice)
                </p>    
            </div>
          </div>
       </div>
       </div>
    )
}

export const mapStateToProps = (state) => {
    return{
        types: state.types
    }
};

export const mapDispatchToProps = (dispatch) => {
    return{
        getTypes: () => dispatch(getTypes()),
        getAllPokemon: () => dispatch(getAllPokemon())
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(CreatePokemon)
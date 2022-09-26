import { createPokemon } from "../redux/actions"
import { useDispatch } from "react-redux"
import { useState } from "react"

const CreatePokemon = () =>{

    const[input,setInput] = useState({
        name: '',
        id: 0,
        height: 0,
        weight: 0,
        hp: 0,
        attack:0,
        defense:0,
        speed:0
    })

    const dispatch = useDispatch()

    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(createPokemon(input))
    }


    return(
       <form onSubmit={handleSubmit}>
          <label>Name: </label>
          <input name = 'name' value = {input.name} onChange = {handleInputChange}/>
          <label>Id: </label>
          <input name = 'id' value = {input.id} onChange = {handleInputChange}/>
          <label>Height: </label>
          <input name = 'height' value = {input.height} onChange = {handleInputChange}/>
          <label>Weight: </label>
          <input name = 'weight' value = {input.weight} onChange = {handleInputChange}/>
          <label>Hp: </label>
          <input name = 'hp' value = {input.hp} onChange = {handleInputChange}/>
          <label>Attack: </label>
          <input name = 'attack' value = {input.attack} onChange = {handleInputChange}/>
          <label>Defense: </label>
          <input name = 'defense' value = {input.defense} onChange = {handleInputChange}/>
          <label>Speed: </label>
          <input name = 'speed' value = {input.speed} onChange = {handleInputChange}/>
          

          <button type="submit">Create</button>
          
       </form> 
    )
}

export const mapStateToProps = (state) => {
    return{
        allPokemon: state.allPokemon
    }
};

export default CreatePokemon
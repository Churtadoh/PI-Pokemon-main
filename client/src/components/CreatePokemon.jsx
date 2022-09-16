import { createPokemon } from "../redux/actions"
import { useDispatch } from "react-redux"
import { useState } from "react"

const CreatePokemon = () =>{

    const[input,setInput] = useState({
        name: ''
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
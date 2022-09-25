import React from 'react'
import {connect} from 'react-redux'
import { getAllPokemon } from '../redux/actions'
import { useState } from 'react'

const Home = (props) =>{

    const arrayPokemon = props.arrayPokemon

    const itemsPage = 12

    const[items , setItems] = useState([...arrayPokemon].splice(0,itemsPage))

    const[currentPage, setCurrentPage] = useState(1)

    const nextHandler = () => {
        const totalElementos = props.allPokemon.length
        const nextPage = currentPage + 1
        const firstIndex = (nextPage-1) * itemsPage

        if(totalElementos/(nextPage-1) <= itemsPage) {return;}
        else {
            setItems([...arrayPokemon].splice(firstIndex,itemsPage))
            setCurrentPage(nextPage)
        } 
    }
  
    const prevHandler = () => {
        const prevPage = currentPage - 1
        if(prevPage<1) {return}

        const firstIndex = (prevPage-1) * itemsPage

        setItems([...arrayPokemon].splice(firstIndex,itemsPage))
        setCurrentPage(prevPage)
    }

    return(
        <div>
           <h1>Home</h1> 
           <h2>Pokemon</h2>
           <h3>Pagina: {currentPage}</h3>
           <button onClick={prevHandler}>Prev</button>
           <button onClick={nextHandler}>Next</button>
           {items}
        </div>
    )
}

export const mapStateToProps = (state) => {
    return {
        allPokemon: state.allPokemon
    }
};

export const mapDispatchToProps = (dispatch) => {
    return{
        getAllPokemon: () => dispatch(getAllPokemon())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)


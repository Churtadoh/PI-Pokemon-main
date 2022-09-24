import { useEffect } from 'react'
import {connect} from 'react-redux'
import { getAllPokemon } from '../redux/actions'

const Home = (props) =>{

    useEffect(()=> {
        props.getAllPokemon()
    })

    return(
        <div>
        <h1>Home</h1> 
        <h3>Pokemon</h3>
        {props.allPokemon && props.allPokemon.map(el =>{
            return(<div>
                id: {el.id}
                name: {el.name}
                
                
                </div>)
        })}
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


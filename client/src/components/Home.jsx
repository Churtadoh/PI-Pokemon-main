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
                name: {el.name}
                
                </div>)
        })}
        </div>
    )
}

export const mapStateToProps = (state) => {
    console.log(state)
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


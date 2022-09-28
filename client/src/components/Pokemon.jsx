import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { getPokemon } from "../redux/actions"

const Pokemon = (props) =>{
    return(
        <div>
           <Link to = {'/pokemon/'+ props.id} onClick={() => props.getPokemon(props.id)}>
                 <h1>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</h1>
           </Link>
           <img src= {props.img} alt=''/>
           <h3>{props.id}</h3>
           <h3>{props.types.toString()} </h3>
        </div>
    )
}

export const mapDispatchToProps = {
            getPokemon: getPokemon
}

export default connect(null,mapDispatchToProps)(Pokemon)
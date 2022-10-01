import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { getPokemon } from "../redux/actions"
import s from './Pokemon.module.css'

const Pokemon = (props) =>{
    return(
        <div className={s.general}>
           <Link to = {'/pokemon/'+ props.id} onClick={() => props.getPokemon(props.id)} className={s.link}>
                 <h1>{props.name}</h1>
           </Link>
           <img src= {props.img} alt='' className={s.img}/>
           <h3>Id : {props.id}</h3>
           <h3>Type(s) : {props.types} </h3>
        </div>
    )
}

export const mapDispatchToProps = {
            getPokemon: getPokemon
}

export default connect(null,mapDispatchToProps)(Pokemon)
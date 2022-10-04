import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { getPokemon } from "../redux/actions"
import s from './Pokemon.module.css'

const Pokemon = (props) =>{
    return(
        <div className={s.general} onClick={() => props.getPokemon(props.id)}>
            <Link to = {'/pokemon/'+ props.id}  className={s.link}>
              <div>
                 <h1 className={s.h1}>{props.name}</h1>
                 <img src= {props.img} alt='Not available' className={s.img}/>
                 <h3 className={s.h3}>Id : {props.id}</h3>
                 <h3 className={s.h3}>Attack: {props.attack}</h3>
                 <h3 className={s.h3}>Type(s) : {props.types} </h3>
              </div>
           </Link>
        </div>
    )
}

export const mapDispatchToProps = {
            getPokemon: getPokemon
}

export default connect(null,mapDispatchToProps)(Pokemon)
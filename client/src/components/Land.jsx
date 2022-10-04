import { Link } from 'react-router-dom';
import s from './Land.module.css'

const Land = () =>{
    return(
        <div className={s.land}>
        <h1 className={s.tittle}>Welcome to the Pokemon App</h1> 
        <Link to = '/home' className={s.link}><button className={s.button}>Begin</button></Link>
        </div>
    )
}

export default Land
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';
import { initiatePage } from '../redux/actions';
import s from './Land.module.css'


const Land = (props) =>{

    return(
        <div className={s.land}>
        <h1 className={s.tittle}>Welcome to the pokemon App</h1> 
        <Link to = '/home' className={s.link}><button className={s.button} onClick={props.initiatePage}>Begin</button></Link>
        </div>
    )
}

export const mapDispatchToProps = (dispatch) => {
        return{
            initiatePage: () => dispatch(initiatePage())
        }
}

    export default connect(null,mapDispatchToProps)(Land)
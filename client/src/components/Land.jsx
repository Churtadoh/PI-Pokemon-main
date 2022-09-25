import { Link } from 'react-router-dom';
import { connect} from 'react-redux';
import { initiatePage } from '../redux/actions';


const Land = (props) =>{

    return(
        <div>
        <h1>Landing page</h1> 
        <Link to = '/home'><button onClick={props.initiatePage}>Begin</button></Link>
        </div>
    )
}

export const mapDispatchToProps = (dispatch) => {
        return{
            initiatePage: () => dispatch(initiatePage())
        }
}

    export default connect(null,mapDispatchToProps)(Land)
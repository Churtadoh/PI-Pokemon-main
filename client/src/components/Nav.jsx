import {Link} from 'react-router-dom'

const Nav = (props) =>{
return(
    <div>
        <Link to = '/home'>Home</Link>
        <Link to = '/pokemon-create'>Create Pokemon</Link>
        <input placeholder='Search for pokemon by name or id'/>
        <button>Search</button>
    </div> 
)

}

export default Nav
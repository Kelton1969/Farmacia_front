import { Link } from "react-router-dom"

import "./Navbar.css"


function Navbar(){
    return(
    <nav>
        <Link to='/login' className='hover:underline'>Login</Link>
        <Link to='/home' className='hover:underline'>Home</Link>
        
    </nav>
    )
    
}
export default Navbar
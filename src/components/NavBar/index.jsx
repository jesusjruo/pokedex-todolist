import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <Link to='/'> Go to home page</Link>
            <br/>
            <Link to='/todo'> Go to todo page</Link>
            <br/>
            <Link to='/pokemon'> Go to pokemon page</Link>
        </>  
    )
}

export default NavBar;
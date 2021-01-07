import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Link to="/"> 
                <button>Home</button>
            </Link>
            <Link to="/detail"> 
                <button>Detail</button>
            </Link>
        </div>
    )
};

export default Header;
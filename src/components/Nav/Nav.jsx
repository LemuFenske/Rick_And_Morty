import SearchBar from '../SearchBar/SearchBar.jsx';
import {Link} from 'react-router-dom'
import style from './Nav.module.css'




const Nav = ({onSearch, setAccess}) => {

    const handleLogOut = () =>{
        setAccess(false)
    }

    return (
        <div className={style.nav}>
             <SearchBar onSearch={onSearch} />
             <button className={style.about}>
                <Link to='/about'> About </Link>
             </button>
             <button className={style.home}>
                <Link to='/home'>Home</Link>
             </button>
             <button className={style.home}>
                <Link to='/favorites'>Favorites</Link>
             </button>
             <button className={style.home}>
                <Link to='/'>Salir</Link>
             </button>
             {/* <button onClick={handleLogOut} className={style.home}>salir</button> */}
             {/* //esta es mejor, se usa esta */}
        </div>
    )
}

export default Nav;





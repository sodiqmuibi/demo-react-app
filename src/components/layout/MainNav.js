import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoriteContext from "../../store-state/FavoriteContext";
import classes from './MainNav.module.css'
function MainNav() {
    const favContext = useContext(FavoriteContext)
    return (
        <header className={classes.header}>
            <div className={classes.brand}>Meet Ups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meets</Link>
                    </li>
                    <li>
                        <Link to='/new-meet-ups'>New Meets</Link>
                    </li>
                    <li>
                        <Link to='/favorite'>Favorite Meet
                        <span className={classes.badges}>{favContext.favoriteNumber}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default MainNav
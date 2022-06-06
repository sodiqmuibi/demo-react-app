import { Link } from "react-router-dom";
import classes from './MainNav.module.css'
function MainNav() {
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
                        <Link to='/favorite'>Favorite Meet</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default MainNav
import MainNav from "./MainNav";
import classes from './Layout.module.css'

function Layout(props) {
    return (
        <div>
            <MainNav />
            <div className={classes.main}>{props.children}</div>
        </div>
        
    )
}
export default Layout
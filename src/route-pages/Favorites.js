import { useContext } from "react"
import ListItem from "../components/layout/ListItem/ListItem"
import FavoriteContext from "../store-state/FavoriteContext"

function Favorites() {
    const favContext = useContext(FavoriteContext)
    let content;
    if (favContext.favoriteNumber === 0) {
        content = <p>There are no favorites, wanna add some?</p>
    }
    else {
        content = <ListItem meetups={favContext.favorites} />
    }
    return <section>
        <h1>Favorite Meetup</h1>
        {content}
    </section>
    
}
export default Favorites
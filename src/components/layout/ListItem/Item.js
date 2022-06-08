import { useContext } from 'react'
import FavoriteContext from '../../../store-state/FavoriteContext'
import Wrapper from '../../wrapper/Wrapper'
import classes from './Item.module.css'
function Item(props) {
    const FavContext = useContext(FavoriteContext)
    const isItemfavorite = FavContext.isitemfavorite(props.id)
    function favoriteButtonToggler() {
        if (isItemfavorite) {
            FavContext.removefavorite(props.id)
        }
        else {
            FavContext.addfavorite({
                id: props.id,
                title: props.title,
                image: props.image,
                address: props.address,
                description: props.description
            })
        }
    }
    return (
        <li className={classes.item}>
            <Wrapper>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.btn}>
                    <button onClick={favoriteButtonToggler}>{isItemfavorite ? 'Remove Favorite' : 'Add Favorite' }</button>
                </div>
            </Wrapper>
            
        </li>
       
        
    )
}
export default Item
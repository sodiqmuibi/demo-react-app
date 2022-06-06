import Wrapper from '../../wrapper/Wrapper'
import classes from './Item.module.css'
function Item(props) {
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
                    <button>Add to favorites</button>
                </div>
            </Wrapper>
            
        </li>
       
        
    )
}
export default Item
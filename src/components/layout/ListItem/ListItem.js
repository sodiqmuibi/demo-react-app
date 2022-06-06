import Item from "./Item"
import classes from './ListItem.module.css'
function ListItem(props) {
   return (
       <ul className={classes.list}>
           {props.meetups.map((item) => <Item 
           key={item.id}
           id={item.id}
           image={item.image}
           address={item.address}
           title={item.title}
           description={item.description} />)}
       </ul>
   )
}
export default ListItem
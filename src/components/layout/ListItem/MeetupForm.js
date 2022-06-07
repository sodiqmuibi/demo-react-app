import { useRef } from "react";
import Wrapper from "../../wrapper/Wrapper";
import classes from './MeetupForm.module.css'

function MeetupForm(props) {
    const refTitle = useRef();
    const refImage = useRef();
    const refAddress = useRef();
    const refDescription = useRef();
    function submitHandler(event) {
        event.preventDefault();
        const titleValue = refTitle.current.value 
        const imageValue = refImage.current.value
        const addressValue = refAddress.current.value
        const descriptionValue = refDescription.current.value
        const meetupdata= {
            title: titleValue,
            image: imageValue,
            address: addressValue,
            description: descriptionValue
        }
        props.onAddMeetup(meetupdata)
    }
    return <Wrapper>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="title">Add Meetup Title</label>
                <input type='text' required id="title" ref={refTitle} />
            </div>
            <div className={classes.control}>
                <label htmlFor="image">Add Meetup Picture</label>
                <input type='text' required id="image" ref={refImage} />
            </div>
            <div className={classes.control}>
                <label htmlFor="address">Add Meetup Address</label>
                <input type='text' required id="address" ref={refAddress} />
            </div>
            <div className={classes.control}>
                <label htmlFor="description">Add Meetup Description</label>
                <textarea id="description" required rows='5' ref={refDescription}></textarea>
            </div>
            <div className={classes.btn}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Wrapper>
}
export default MeetupForm
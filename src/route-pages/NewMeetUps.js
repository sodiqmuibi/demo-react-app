import { useNavigate } from "react-router-dom"
import MeetupForm from "../components/layout/ListItem/MeetupForm"

function NewMeetUps() {
    const navigate = useNavigate();
    function onAddMeetupHandler(meetupdata) {
        fetch('https://fir-react-app-aec58-default-rtdb.firebaseio.com/meetups.json', 
        {
            method: 'POST',
            body: JSON.stringify(meetupdata),
            headers: {
                'Application': 'Verilysapp/json'
            }
        }).then(() => {
            navigate('/', {replace: true})
        })
    } 
    return (
        <section>
            <h1>New Meet Ups</h1>
            <MeetupForm onAddMeetup={onAddMeetupHandler} />
        </section>
    )
}
export default NewMeetUps
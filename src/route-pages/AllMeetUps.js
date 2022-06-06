import ListItem from "../components/layout/ListItem/ListItem"

const data = [
    {
        id: 'm1',
        title: 'This the first meet up',
        image: 'images/Bar2.jpg',
        address: 'Beatiful Angel T. Kitchen, 23 Kudaki Road, Opp Foursquare Church, Hotel Bust stop',
        description: 'This is the first meeting, its going to be amazing you dont want to miss. It will be fun'
    },
    {
        id: 'm2',
        title: 'This the second meet up',
        image: 'images/restaurant1.webp',
        address: 'Ikeja City Mall, 9 Adekunle Fajuyi Obafemi Awolowo Way, Ikeja',
        description: 'Second meeting, first was amazing, imagine how breath taking second would be'
    }
]
function AllMeetUps() {
    return (
        <section>
            <h1>All Meet Ups</h1>
            <ul>
                <ListItem meetups={data} />
            </ul>
            
        </section>
    )
        
    
}
export default AllMeetUps
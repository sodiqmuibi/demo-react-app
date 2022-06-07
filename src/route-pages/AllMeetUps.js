import { useEffect, useState } from "react"
import ListItem from "../components/layout/ListItem/ListItem"


function AllMeetUps() {
    const [isLoading, setisLoading] = useState(true);
    const [meetupData, setmeetupData] = useState([]);
    useEffect(() => {
        fetch('https://fir-react-app-aec58-default-rtdb.firebaseio.com/meetups.json'
        ).then((response) => {
            return response.json()
        }).then((data) => {
            const dataArray = []
            for (const key in data) {
                const dataObject = {
                    id: key,
                    ...data[key]
                }
                dataArray.push(dataObject)
            }
            setisLoading(false)
            setmeetupData(dataArray)
        })
    }, [])
    
    if (isLoading) {
        return <section>
            <p>Page is Loading....</p>
        </section>
    }

    return (
        <section>
            <h1>All Meet Ups</h1>
            <ul>
                <ListItem meetups={meetupData} />
            </ul>
            
        </section>
    )
        
    
}
export default AllMeetUps
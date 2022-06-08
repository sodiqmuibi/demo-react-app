import React, { useState } from "react"
const FavoriteContext = React.createContext({
    favorites: [],
    favoriteNumber: 0,
    addfavorite: (meetups) => {},
    removefavorite: (meetupid) => {},
    isitemfavorite: (meetupid) => {} 
})
export function FavoriteContextProvider(props) {
    const [userFavorite, setuserFavorite] = useState([])
    function addFavorite(meetups) {
        setuserFavorite((prevuserFavorite) => {
            return prevuserFavorite.concat(meetups)
        })
    }
    function removeFavorite(meetupid) {
        setuserFavorite((prevuserFavorite) => {
            return prevuserFavorite.filter(item => item.id !== meetupid)
        })
    }
    function isItemFavorite(meetupid) {
        return userFavorite.some(item => item.id === meetupid)
    }
    const context = {
        favorites: userFavorite,
        favoriteNumber: userFavorite.length,
        addfavorite: addFavorite,
        removefavorite: removeFavorite,
        isitemfavorite: isItemFavorite        
    }

    return <FavoriteContext.Provider value={context}>
        {props.children}
    </FavoriteContext.Provider>
}
export default FavoriteContext 


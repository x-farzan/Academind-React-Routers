import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourites: (favMeetup) => {},
  removeFavourites: (meetupId) => {},
  itemIsFavouritehandler: (meetupId) => {},
});

export function FavouritesContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([]);

  function addfavourites(favMeetup) {
    setUserFavourites((prevFav) => {
      return prevFav.concat(favMeetup);
    });
  }

  function removefavourites(meetupId) {
    setUserFavourites((prevFav) => {
      return prevFav.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavouritehandler(meetupId) {
    return userFavourites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourites: addfavourites,
    removeFavourites: removefavourites,
    itemIsFavouritehandler: itemIsFavouritehandler,
  };

  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContext;

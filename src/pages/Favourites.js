import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavouritesContext from "../store/favourites-context";

function FavouritesPage() {
  const favContext = useContext(FavouritesContext);

  let content;
  if (favContext.totalFavourites === 0) {
    content = <p>No favorites added yet!</p>;
  } else {
    content = <MeetupList meetups={favContext.favourites} />;
  }

  return (
    <div>
      <h1>Favourites Page</h1>
      {content}
    </div>
  );
}

export default FavouritesPage;

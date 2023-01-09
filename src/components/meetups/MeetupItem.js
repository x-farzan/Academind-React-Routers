import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useContext } from "react";
import FavouritesContext from "../../store/favourites-context";

function MeetupItem(props) {
  const favContext = useContext(FavouritesContext);
  const isFav = favContext.itemIsFavouritehandler(props.id);

  function toggleFavStatusHandler() {
    if (isFav) {
      favContext.removeFavourites(props.id);
    } else {
      favContext.addFavourites({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description: props.description,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.meetup.image} alt={props.meetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.meetup.title}</h3>
          <address>{props.meetup.address}</address>
          <p>{props.meetup.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavStatusHandler}>
            {isFav ? "Remove from Favourites" : "Add to Favourites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;

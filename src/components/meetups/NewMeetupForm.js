import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();

  function onSubmitHandler(event) {
    event.preventDefault();

    const enteredTitledRef = titleRef.current.value;
    const enteredImageRef = imageRef.current.value;
    const enteredAddressRef = addressRef.current.value;
    const enteredDescriptionRef = descriptionRef.current.value;

    const meetupData = {
      title: enteredTitledRef,
      image: enteredImageRef,
      address: enteredAddressRef,
      description: enteredDescriptionRef,
    };

    console.log(meetupData);

    props.addNewMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={addressRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;

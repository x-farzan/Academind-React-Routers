import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function NewMeetupsPage() {
  const history = useHistory();
  function addNewMeetup(meetupData) {
    fetch(
      "https://react-getting-started-963c7-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: meetupData,
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((success) => {
        console.log(`SUCCESS >>> `, success);
        history.replace("/");
      })
      .catch((error) => {
        console.log(`ERROR >>> `, error.message);
      });
  }

  return (
    <section>
      <h1>New Meetup Page</h1>
      <NewMeetupForm addNewMeetup={addNewMeetup} />
    </section>
  );
}

export default NewMeetupsPage;

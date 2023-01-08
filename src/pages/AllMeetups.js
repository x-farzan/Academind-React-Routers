import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://react-getting-started-963c7-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((data) => {
        console.log(`SUCCESS >>>>>> `, data);

        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      })
      .catch((error) => {
        console.log(`ERROR >>>>>> `, error);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <h1>Loading data, Please wait.....</h1>
      </section>
    );
  }
  return (
    <div>
      <h1>All Meetups Page</h1>
      <MeetupList meetups={loadedMeetups} />;
    </div>
  );
}

export default AllMeetupsPage;

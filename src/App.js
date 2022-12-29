import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetupsPage from "./pages/NewMeetups";

import Layout from "./components/layouts/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path="/">
            <AllMeetupsPage />
          </Route>

          <Route path="/new-meetup">
            <NewMeetupsPage />
          </Route>

          <Route path="/favourites">
            <FavouritesPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./user/pages/Auth";

const App = () => {
  return (
    // Router sets up the routing functionality for the application
    <Router>
      {/* MainNavigation displays the navigation bar at the top of the application */}
      <MainNavigation />
      <main>
        {/* Switch renders only the first Route that matches the current URL */}
        <Switch>
          {/* Route for the home page */}
          <Route path="/" exact>
            <Users />
          </Route>

          {/* Route for a specific user's places */}
          <Route path="/:userId/places" exact>
            <UserPlaces />
          </Route>

          <Route path="/places/new" exact>
            <NewPlace />
          </Route>

          <Route path="/places/:placeId" exact>
            <UpdatePlace />
          </Route>

          <Route path="/auth" exact>
            <Auth />
          </Route>

          <Redirect to="/"/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;

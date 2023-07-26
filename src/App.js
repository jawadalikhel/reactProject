import React, {useState, useCallback} from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./user/pages/Auth";

import { AuthContext } from "./shared/context/auth-context";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(( ) =>{
    setIsLoggedIn(true);
  },[])

  const logout = useCallback(( ) =>{
    setIsLoggedIn(false);
  },[])

  let routes; 
  if(isLoggedIn){
    routes = (
       // Switch renders only the first Route that matches the current URL
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

        <Redirect to="/" />

      </Switch>
    );
  }else{
    routes=(
      <Switch>
        {/* Route for the home page */}
        <Route path="/" exact>
          <Users />
        </Route>
        
        {/* Route for a specific user's places */}
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>

        <Route path="/auth" exact>
          <Auth />
        </Route>

        <Redirect to="/auth" />
      </Switch>
    )
  }
  return (
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login: login, logout: logout}}>
      {/* Router sets up the routing functionality for the application */}
      <Router>
        {/* MainNavigation displays the navigation bar at the top of the application */}
        <MainNavigation />
        <main>
          {routes}
        </main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;

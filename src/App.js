import React, { useState, useCallback }  from 'react';
import {BrowserRouter  as Router , Route,Redirect,Switch} from 'react-router-dom';

import './App.css';
import GoalList from './components/goal/goalList';
import NewGoal from './components/newgoal/newgoal';
import User from './users/pages/User';
import NewPlaces from './places/pages/NewPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UsersPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './users/pages/Auth';
import { AuthContext } from './shared/context/auth-context';

const App= ()=>{

  const  [courseGoals,setCourseGoal] = useState([
    { id:'cg1', name: 'Finish the Course'},
    { id:'cg2', name: 'Learn all about the Course'},
    { id:'cg3', name: 'attemped the Quiz'}
  ])

  const AddNewGoalHandler = (newGoal) => {
    setCourseGoal(courseGoals.concat(newGoal));
   }
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <User />
        </Route>
        <Route path = "/course" exact >
          <div className='my-class'>
            <h1>List of All Course Goals</h1>
            <NewGoal onAddNewGoal = {AddNewGoalHandler} />
            <GoalList goal = {courseGoals} />
          </div>
        </Route>
        <Route path="/:userId/places" exact>
          <UsersPlaces />
        </Route>
        <Route path="/places/new" exact>
          <NewPlaces />
        </Route>
        <Route path="/places/:placeId">
          <UpdatePlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <User />
        </Route>
        <Route path="/:userId/places" exact>
          <UsersPlaces />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }


  
  return (
    <AuthContext.Provider
    value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
  >
    <Router>
      <MainNavigation />
      <main>{routes}</main>
    </Router>
  </AuthContext.Provider>
  );
}


export default App;

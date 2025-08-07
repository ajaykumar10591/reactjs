import React, {useState}  from 'react';
import {BrowserRouter  as Router , Route,Redirect,Switch} from 'react-router-dom';

import './App.css';
import GoalList from './components/goal/goalList';
import NewGoal from './components/newgoal/newgoal';
import User from './users/pages/User';
import NewPlaces from './places/pages/NewPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UsersPlaces from './places/pages/UserPlaces';

const App= ()=>{
  const  [courseGoals,setCourseGoal] = useState([
    { id:'cg1', name: 'Finish the Course'},
    { id:'cg2', name: 'Learn all about the Course'},
    { id:'cg3', name: 'attemped the Quiz'}
  ])

  const AddNewGoalHandler = (newGoal) => {
    setCourseGoal(courseGoals.concat(newGoal));
   }
  return (
    
  <Router>
    <MainNavigation />
    <main style={{ marginTop: '5rem' }}>
      <Switch>
        <Route path = "/course" exact >
          <div className='my-class'>
            <h1>List of All Course Goals</h1>
            <NewGoal onAddNewGoal = {AddNewGoalHandler} />
            <GoalList goal = {courseGoals} />
          </div>
        </Route>
        <Route path = "/" exact>
              <User />
        </Route>
        <Route path = "/:userId/places" exact>
              <UsersPlaces />
        </Route>
        <Route path = "/places/newplace" exact>
          <NewPlaces />
        </Route>
        <Redirect to = "/" />
      </Switch>
    </main>
 </Router>
  
  
  
  
  );
}


export default App;

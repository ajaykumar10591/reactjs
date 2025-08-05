import React, {useState}  from 'react';
import './App.css';
import GoalList from './components/goal/goalList';
import NewGoal from './components/newgoal/newgoal';


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
    
  
  <div className='my-class'>
    <h1>List of All Course Goals</h1>
    <NewGoal onAddNewGoal = {AddNewGoalHandler} />
    <GoalList goal = {courseGoals} />
  </div>
  
  );
}


export default App;

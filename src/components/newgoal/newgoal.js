import react , {useState}  from "react";
import NewgoalCss from "./newgoal.css";


const Newgoal = props => {

     const [text,setText] = useState(''); 
    
   
    const addNewGoal = (event)=>{
        event.preventDefault();
        console.log(text);
        const newGoal = {
            id: Math.random().toString(),
            name: text
        }
        console.log(props.onAddNewGoal(newGoal));
        }
    const getValueOnChange = (event) =>{
        setText(event.target.value);
        console.log(`Value Changed: ${text}`);
        
    }
    return (
        <form className="form-design" onSubmit={addNewGoal}>
            <input  type="text" value={text} onChange={getValueOnChange} />
            <input type="submit" value='add Course'/>
        </form>
    );
}
export default Newgoal;




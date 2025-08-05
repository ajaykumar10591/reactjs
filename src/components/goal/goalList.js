import React  from "react";
import GoalListCss from "../goal/goalList.css"

const GoalList = props => {
console.log(props.goal);
return (<ul>
            {
                props.goal.map((goal,index)=>{
                    return  <li className="Test" key={index}>{goal.name}</li>
                })
            }
</ul>)

}

export  default GoalList;
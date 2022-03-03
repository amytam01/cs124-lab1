import "./Footer.css";
import {useState} from "react";

function Footer(props) {
    const [taskToAdd, setTaskToAdd] = useState("New Task");

    return (
        <div className="addTaskSection">
            <input className={"addTask"}
                   onClick={
                       (e) => setTaskToAdd("")
                   }
                   onChange={
                       (e) => setTaskToAdd(e.target.value)
                   }
                   value={taskToAdd}></input>
            <button className={"addTaskButton"} type={"button"} onClick={(e) => props.onAddTask(taskToAdd)}>Add Task</button>
        </div>
    )
}

export default Footer;
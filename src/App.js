import './App.css';
import {useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './oldIndex.css';

import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

import editIcon from './edit.png';
import deleteIcon from './delete.png';

const initialData = [
    {
        id: 517,
        text: "Eat Lunch"
    },
    {
        id: 787,
        text: "Buy new John Grisham book"
    },
    {
        id: 911,
        text: "Buy new John Grisham book"
    },
    {
        id: 231,
        text: "Buy new John Grisham book"
    },
    {
        id: 589,
        text: "Buy new John Grisham book"
    }
];

/* UI broken into three rendered sections:
- Header with name
- List including tabs that display filtered lists
    - List of tasks
        - invidual tasks + edit + delete icons
    - Delete all tasks button
- Footer with add task button
 */

function Header() {
    return <h2 className={"headerText"}>To Do List:</h2>
}

function Tasks(props) {
    return (
        <Tabs>
            <TabList>
                <Tab onClick={(e) => props.onToggleEditTaskId("")}>Incomplete</Tab>
                <Tab>Complete</Tab>
                <Tab>All</Tab>
            </TabList>

            <TabPanel>
                <TaskList key="Incomplete" taskList={props.taskList.filter(task => !props.completedTaskList.includes(task.id))}
                          editingTaskId={props.editingTaskId}
                          completedTaskList={props.completedTaskList}
                          onEditTask={props.onEditTask}
                          onCompletedTask={props.onCompletedTask}
                          onToggleEditTaskId={props.onToggleEditTaskId}
                          onDeleteTask={props.onDeleteTask}
                          onDeleteAllCompletedTasks={props.onDeleteAllCompletedTasks}></TaskList>
            </TabPanel>
            <TabPanel>
                <TaskList key="Complete" taskList={props.taskList.filter(task => props.completedTaskList.includes(task.id))}
                          editingTaskId={props.editingTaskId}
                          completedTaskList={props.completedTaskList}
                          onEditTask={props.onEditTask}
                          onCompletedTask={props.onCompletedTask}
                          onToggleEditTaskId={props.onToggleEditTaskId}
                          onDeleteTask={props.onDeleteTask}
                          onDeleteAllCompletedTasks={props.onDeleteAllCompletedTasks}></TaskList>
            </TabPanel>
            <TabPanel>
                <TaskList key="All" taskList={props.taskList}
                          editingTaskId={props.editingTaskId}
                          completedTaskList={props.completedTaskList}
                          onEditTask={props.onEditTask}
                          onCompletedTask={props.onCompletedTask}
                          onToggleEditTaskId={props.onToggleEditTaskId}
                          onDeleteTask={props.onDeleteTask}
                          onDeleteAllCompletedTasks={props.onDeleteAllCompletedTasks}></TaskList>
            </TabPanel>
        </Tabs>
    )
}

function TaskList(props) {
    return (
        <div className={"taskList"}>
            {props.taskList.length === 0 ?
                <div>Start by Adding a new Task?</div> :
                <div>
                    {props.taskList.filter(task => !props.completedTaskList.includes(task.id)).map(task => <Task key={task.id}
                                                     text={task.text}
                                                     id={task.id}
                                                     isChecked={props.completedTaskList.includes(task.id)}
                                                     editingTaskId={props.editingTaskId}
                                                     onEditTask={props.onEditTask}
                                                     onCompletedTask={props.onCompletedTask}
                                                     onToggleEditTaskId={props.onToggleEditTaskId}
                                                     onDeleteTask={props.onDeleteTask}/>)
                    }
                    {props.taskList.filter(task => props.completedTaskList.includes(task.id)).map(task => <Task key={task.id}
                                                    text={task.text}
                                                    id={task.id}
                                                    isChecked={props.completedTaskList.includes(task.id)}
                                                    editingTaskId={props.editingTaskId}
                                                    onEditTask={props.onEditTask}
                                                    onCompletedTask={props.onCompletedTask}
                                                    onToggleEditTaskId={props.onToggleEditTaskId}
                                                    onDeleteTask={props.onDeleteTask}/>)
                    }
                    <button className={"deleteCompleted"} type={"button"} onClick={props.onDeleteAllCompletedTasks}>Delete All Completed Tasks</button>
                </div>}
        </div>
    )

        // {props.taskList === [] ?
        //     <div>
        //         {props.taskList.filter(task => !props.completedTaskList.includes(task.id)).map(task => <Task key={task.id}
        //                               text={task.text}
        //                               id={task.id}
        //                               isChecked={props.completedTaskList.includes(task.id)}
        //                               editingTaskId={props.editingTaskId}
        //                               onEditTask={props.onEditTask}
        //                               onCompletedTask={props.onCompletedTask}
        //                               onToggleEditTaskId={props.onToggleEditTaskId}
        //                               onDeleteTask={props.onDeleteTask}/>)
        //         }
        //         {props.taskList.filter(task => props.completedTaskList.includes(task.id)).map(task => <Task key={task.id}
        //                              text={task.text}
        //                              id={task.id}
        //                              isChecked={props.completedTaskList.includes(task.id)}
        //                              editingTaskId={props.editingTaskId}
        //                              onEditTask={props.onEditTask}
        //                              onCompletedTask={props.onCompletedTask}
        //                              onToggleEditTaskId={props.onToggleEditTaskId}
        //                              onDeleteTask={props.onDeleteTask}/>)
        //         }
        //         <button className={"deleteCompleted"} type={"button"} onClick={props.onDeleteAllCompletedTasks}>Delete All Completed Tasks</button
        //     </div> :
        //
        // }
}

function Task(props) {
    return (
        <div className="listItem">
            <input type="checkbox" checked={props.isChecked} onChange={(e) => props.onCompletedTask(props.id)}></input>
            {props.editingTaskId === props.id ?
                <input className="person"
                      onChange={
                          (e) => props.onEditTask(props.id, e.target.value)
                      }
                      value={props.text}></input> :
                <span className="person">{props.text}</span>
            }
            <img className="editIcon" src={editIcon} alt="edit" onClick={(e ) => props.onToggleEditTaskId(props.id)}></img>
            <img className="deleteIcon" src={deleteIcon} alt="delete" onClick={(e) => props.onDeleteTask(props.id)}></img>
        </div>
    )
}

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

function App() {
    const [taskList, setTaskList] = useState(initialData);
    const [completedTaskList, setCompletedTaskList] = useState([517, 911, 231]);
    const [editingTaskId, setEditingTaskId] = useState("");

    function handleEditTask(taskId, newText) {
        setTaskList(taskList.map(
            task => task.id === taskId ? {...task, "text": newText} : task))
    }

    function handleSetCompletedTask(taskId) {
        if (completedTaskList.includes(taskId)) {
            setCompletedTaskList(completedTaskList.filter(id => id !== taskId));
        } else {
            setCompletedTaskList([...completedTaskList, taskId]);
        }
    }

    function handleEditTaskToggle(taskId) {
        if (editingTaskId === taskId) {
            setEditingTaskId("");
        } else {
            setEditingTaskId(taskId);
        }
    }

    function handleDeleteTask(taskId) {
        setCompletedTaskList(completedTaskList.filter(task => task.id !== taskId));
        setTaskList(taskList.filter(task => task.id !== taskId));
    }

    function handleDeleteAllCompletedTasks() {
        setTaskList(taskList.filter(task => !completedTaskList.includes(task.id)));
        setCompletedTaskList([]);
    }

    function handleAddTask(taskText) {
        setTaskList([...taskList, {
            id: generateUniqueID(),
            text: taskText
        }])
    }

    return (
        <div className={"app"}>
            <div className={"header"}>
                <Header></Header>
            </div>
            <div className={"tasks"}>
                <Tasks taskList={taskList} completedTaskList={completedTaskList} editingTaskId={editingTaskId}
                       onEditTask={handleEditTask}
                       onCompletedTask={handleSetCompletedTask}
                       onToggleEditTaskId={handleEditTaskToggle}
                       onDeleteTask={handleDeleteTask}
                       onDeleteAllCompletedTasks={handleDeleteAllCompletedTasks}></Tasks>
            </div>
            <div className="footer">
                <Footer onAddTask={handleAddTask}></Footer>
            </div>
        </div>
    )

}
export default App;

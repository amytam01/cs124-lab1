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

function Header() {
    return <h2 className={"headerText"}>To Do List:</h2>
}

function Tasks(props) {
    return (
        <Tabs>
            <TabList>
                <Tab onClick={(e) => props.onToggleEditTaskId("")}>Incomplete</Tab>
                <Tab onClick={(e) => props.onToggleEditTaskId("")}>All</Tab>
                <Tab onClick={(e) => props.onToggleEditTaskId("")}>Complete</Tab>
            </TabList>

            <TabPanel>
                <TaskList key="Incomplete" taskList={props.taskList.filter(task => !props.completedTaskList.includes(task.id))}
                          editingTaskId={props.editingTaskId}
                          completedTaskList={props.completedTaskList}
                          onEditTask={props.onEditTask}
                          onCompletedTask={props.onCompletedTask}
                          onToggleEditTaskId={props.onToggleEditTaskId}
                          onDeleteTask={props.onDeleteTask}
                          toggleModal={props.toggleModal}
                          showDeleteButton={false}></TaskList>
            </TabPanel>
            <TabPanel>
                <TaskList key="All" taskList={props.taskList}
                          editingTaskId={props.editingTaskId}
                          completedTaskList={props.completedTaskList}
                          onEditTask={props.onEditTask}
                          onCompletedTask={props.onCompletedTask}
                          onToggleEditTaskId={props.onToggleEditTaskId}
                          onDeleteTask={props.onDeleteTask}
                          toggleModal={props.toggleModal}
                          showDeleteButton={true}></TaskList>
            </TabPanel>
            <TabPanel>
                <TaskList key="Complete" taskList={props.taskList.filter(task => props.completedTaskList.includes(task.id))}
                          editingTaskId={props.editingTaskId}
                          completedTaskList={props.completedTaskList}
                          onEditTask={props.onEditTask}
                          onCompletedTask={props.onCompletedTask}
                          onToggleEditTaskId={props.onToggleEditTaskId}
                          onDeleteTask={props.onDeleteTask}
                          toggleModal={props.toggleModal}
                          showDeleteButton={true}></TaskList>
            </TabPanel>
        </Tabs>
    )
}

function TaskList(props) {
    return (
        <div className={"taskList"}>
            {props.taskList.length === 0 ?
                <div>Start by Adding a New Task?</div> :
                <div>
                    {props.taskList.filter(task =>
                        !props.completedTaskList.includes(task.id)).map(task => <Task key={task.id}
                                                                                     text={task.text}
                                                                                     id={task.id}
                                                                                     isChecked={props.completedTaskList.includes(task.id)}
                                                                                     editingTaskId={props.editingTaskId}
                                                                                     onEditTask={props.onEditTask}
                                                                                     onCompletedTask={props.onCompletedTask}
                                                                                     onToggleEditTaskId={props.onToggleEditTaskId}
                                                                                     onDeleteTask={props.onDeleteTask}
                                                                                      toggleModal={props.toggleModal}/>)
                    }
                    {props.taskList.filter(task =>
                        props.completedTaskList.includes(task.id)).map(task => <Task key={task.id}
                                                                                     text={task.text}
                                                                                     id={task.id}
                                                                                     isChecked={props.completedTaskList.includes(task.id)}
                                                                                     editingTaskId={props.editingTaskId}
                                                                                     onEditTask={props.onEditTask}
                                                                                     onCompletedTask={props.onCompletedTask}
                                                                                     onToggleEditTaskId={props.onToggleEditTaskId}
                                                                                     onDeleteTask={props.onDeleteTask}
                                                                                     toggleModal={props.toggleModal}/>)
                    }
                    {props.showDeleteButton && <button className={"deleteCompleted"} type={"button"} onClick={(e) => props.onDeleteTask("", true)}>Delete All Completed Tasks</button>}
                </div>}
        </div>
    )
}

function Alert(props) {
    return (
        <div className={"backdrop"} onClick={(e) => props.onClose("")}>
            <div className="modal">
                {props.children}
                <div className="alert-buttons">
                    <button className={"alert-button alert-cancel"} type={"button"}
                            onClick={(e) => props.onClose("")}>
                        Cancel
                    </button>
                    <button className={"alert-button alert-ok"} type={"button"}
                            onClick={(e) => {
                                props.onClose("");
                                props.onOK(props.taskToDelete, false);
                            }}>
                        OK
                    </button>
                </div>
            </div>
        </div>
    )
}

function Task(props) {
    return (
        <div className="listItem" id={props.isChecked ? "completedTask" : "incompleteTask"}>
            <input type="checkbox" checked={props.isChecked} onChange={(e) => props.onCompletedTask(props.id)}></input>
            {props.editingTaskId === props.id ?
                <input className={props.id === props.editingTaskId ? "person editing" : "person"}
                      onChange={
                          (e) => props.onEditTask(props.id, e.target.value)
                      }
                      value={props.text}></input> :
                <span className="person">{props.text}</span>
            }
            <img className="editIcon" src={editIcon} alt="edit" onClick={(e ) => props.onToggleEditTaskId(props.id)}></img>
            <img className="deleteIcon" src={deleteIcon} alt="delete" onClick={(e) => props.toggleModal(props.id)}></img>
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
    const [showAlert, setShowAlert] = useState(false);
    const [taskToDelete, setTaskToDelete] = useState("");

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
        console.log("tab")
        if (editingTaskId === taskId) {
            setEditingTaskId("");
        } else {
            setEditingTaskId(taskId);
        }
    }

    function handleDeleteTask(taskId, deleteAll) {
        if (deleteAll) {
            console.log("delete all");
            setTaskList(taskList.filter(task => !completedTaskList.includes(task.id)));
            setCompletedTaskList([]);
        } else {
            console.log("delete one");
            setCompletedTaskList(completedTaskList.filter(task => task.id !== taskId));
            setTaskList(taskList.filter(task => task.id !== taskId));
        }
    }

    function handleAddTask(taskText) {
        setTaskList([{
            id: generateUniqueID(),
            text: taskText
            },
            ...taskList])
    }

    function toggleModal(taskId) {
        setTaskToDelete(taskId);
        setShowAlert(!showAlert);
    }

    return (
        <div className={"app"}>
            <div className={"header"}>
                <Header></Header>
            </div>
            <div className={"tasks"}>
                {showAlert && <Alert onClose={toggleModal} onOK={handleDeleteTask} taskToDelete={taskToDelete}>
                    <div>
                        Are you sure you want to delete this task?
                    </div>
                </Alert>}
                <Tasks taskList={taskList} completedTaskList={completedTaskList} editingTaskId={editingTaskId}
                       onEditTask={handleEditTask}
                       onCompletedTask={handleSetCompletedTask}
                       onToggleEditTaskId={handleEditTaskToggle}
                       onDeleteTask={handleDeleteTask}
                       toggleModal={toggleModal}
                       showAlert={showAlert}></Tasks>
            </div>
            <div className="footer">
                <Footer onAddTask={handleAddTask}></Footer>
            </div>
        </div>
    )

}
export default App;

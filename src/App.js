import {useState} from "react";
import 'react-tabs/style/react-tabs.css';
import './App.css';

import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

import Header from "./Header.js";
import Footer from "./Footer.js";
import Alert from "./Alert.js";
import Tasks from "./Tasks.js";

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
        if (editingTaskId === taskId) {
            setEditingTaskId("");
        } else {
            setEditingTaskId(taskId);
        }
    }

    function handleDeleteTask(taskId, deleteAll) {
        if (deleteAll) {
            setTaskList(taskList.filter(task => !completedTaskList.includes(task.id)));
            setCompletedTaskList([]);
        } else {
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

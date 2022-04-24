import './Task.css';
import MarkdownView from 'react-showdown';
import EditTask from './EditTask';
import { useState } from 'react';

const Task = ({ id, title, color="gray", deleteTask }) => {

    const [showEditTask, setShowEditTask] = useState(false);

    return (
        <div className="task">
            <div className={`checkbox ${color}`} onClick={() => deleteTask(id)}></div>
            <div className="title" onClick={e => setShowEditTask(true)}>
                <MarkdownView markdown={title} />
            </div>
            { showEditTask && 
            <EditTask 
                setShowEditTask={setShowEditTask}
                id={id}
                title={title}
                color={color}
                deleteTask={deleteTask} /> }
        </div>
    );
}
 
export default Task;
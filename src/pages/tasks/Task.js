import './Task.css';

const Task = ({ id, title, color="gray", deleteTask }) => {
    return (
        <div className="task">
            <div className={`checkbox ${color}`} onClick={() => deleteTask(id)}>    
            </div>
            <div className="title">{title}</div>
        </div>
    );
}
 
export default Task;
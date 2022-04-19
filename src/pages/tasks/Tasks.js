import './Tasks.css';

import Tabs from '../../components/Tabs';
import Task from './Task';
import NewTask from './NewTask';
import { useEffect, useRef, useState } from 'react';

const Tasks = () => {

    const [render, setRender] = useState(false);

    const tasks = useRef(localStorage.getItem('plannerTasks') ? 
        JSON.parse(localStorage.getItem('plannerTasks')) : []);
    const [showNewTask, setShowNewTask] = useState(false); 

    const deleteTask = (id) => {
        tasks.current = tasks.current.filter(task => task.id !== id);
        saveTasks();
    }

    const saveTasks = (newTask=null) => {
        if(newTask) {
            tasks.current = [newTask, ...tasks.current];
        }
        localStorage.setItem('plannerTasks', JSON.stringify(tasks.current));
        setRender(!render);
    }

    useEffect(() => {
    }, [tasks, render])

    return (
        <div className="tasks">
            <div className="space-between">
                <h1>My Tasks</h1>
                <button onClick={() => setShowNewTask(true)}>Add Task +</button>
            </div>
            <Tabs>
                <div className="tab active">All</div>
                <div className="tab">In progress</div>
                <div className="tab">Completed</div>
                <div className="tab">Backlogged</div>
                <div className="tab">Blocked</div>
            </Tabs>
            <div className="search">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <input type="text" placeholder='Search' />
            </div>

            { tasks.current.length === 0 && (
                <p className='no-tasks'>No tasks.</p>
            )}

            { tasks.current.length > 0 && (
                tasks.current.map(task => (
                    <Task key={task.id}
                        id={task.id} 
                        title={task.title} 
                        color={task.color}
                        deleteTask={deleteTask} />
                ))
            )}
            { showNewTask && 
                <NewTask 
                    setShowNewTask={setShowNewTask} 
                    tasks={tasks}
                    saveTasks={saveTasks} /> }
        </div>
    );
}
 
export default Tasks;
import './Tasks.css';

import { useEffect, useRef, useState } from 'react';
import Tabs from '../../components/Tabs';
import Tab from '../../components/Tab';
import Task from './Task';
import { v4 as uuid } from 'uuid';
import NewGroup from './NewGroup';

const Tasks = () => {

    const [render, setRender] = useState(false);

    const groups = useRef(localStorage.getItem('plannerTaskGroups') ? 
        JSON.parse(localStorage.getItem('plannerTaskGroups')) : []);
    const tasks = useRef(localStorage.getItem('plannerTasks') ? 
        JSON.parse(localStorage.getItem('plannerTasks')) : []);
    const [showNewTask, setShowNewTask] = useState(false);
    const [newTask, setNewTask] = useState('');
    const [showNewGroup, setShowNewGroup] = useState(false); 
    const [searchFocused, setSearchFocused] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [currentTab, setCurrentTab] = useState('all');

    const saveGroup = (newGroup) => {
        groups.current = [...groups.current, newGroup];
        localStorage.setItem('plannerTaskGroups', JSON.stringify(groups.current));
        setRender(!render);
    }

    const handleNewTask = (e) => {
        setNewTask(e.target.value);
        if(e.keyCode === 27) { // Escape
            setShowNewTask(false);
            setNewTask('');
        }
        if(e.keyCode === 13) { // Enter
            if(e.target.value.trim() !== '') {
                saveTasks({
                    id: uuid(),
                    createdAt: new Date(),
                    title: e.target.value.trim(),
                    groups: [],
                    important: false,
                    color: 'blue'
                })
            }
            setShowNewTask(false);
            setNewTask('');
        }
    }

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
                <div className='task-actions'>
                    { !showNewTask && <button onClick={() => setShowNewTask(true)}>Add Task +</button> }
                    { showNewTask && <button style={{ backgroundColor: 'var(--alert-60)'}} 
                        onClick={() => setShowNewTask(false)}>Cancel</button> }
                </div>
            </div>
            <Tabs>
                <Tab id='all' label='All' currentTab={currentTab} onClick={() => setCurrentTab('all')} />
                {/* <Tab id='important' label='Important' currentTab={currentTab} onClick={() => setCurrentTab('important')} /> */}
                { groups.current.map(group => (
                    <Tab key={group.id} id={group.id} 
                        label={group.name} 
                        currentTab={currentTab}
                        onClick={() => setCurrentTab(group.id)} />
                ))}
                <Tab label='+' currentTab={currentTab} onClick={() => setShowNewGroup(true)} />
            </Tabs>
            <div className={`search ${ searchFocused && 'search-focused'}`} 
                style={{ 
                    transition: 'var(--transition)',
                    backgroundColor: searchFocused ? '' : 'transparent'
                    }}>
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <input type="text" 
                    placeholder='Search' 
                    onFocus={() => setSearchFocused(true)} 
                    onBlur={() => setSearchFocused(false)}
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)} />
            </div>

            { showNewTask &&
                <div className="new-task">
                    <input type="text" placeholder='New task' 
                        onKeyDown={(e) => handleNewTask(e)} 
                        autoFocus/>
                </div> 
            }

            { tasks.current.length === 0 && (
                <p className='no-tasks'>No tasks.</p>
            )}

            { searchInput.length === 0 && tasks.current.length > 0 && (
                tasks.current.map(task => (
                    <Task key={task.id}
                        id={task.id} 
                        title={task.title} 
                        color={task.color}
                        deleteTask={deleteTask} />
                ))
            )}

            { searchInput.length > 0 && (
                tasks.current.map(task => (
                   task.title.toLowerCase().includes(searchInput.toLowerCase()) && 
                    <Task key={task.id}
                        id={task.id} 
                        title={task.title} 
                        color={task.color}
                        deleteTask={deleteTask} />
                ))
            )}

            { showNewGroup && 
                <NewGroup 
                    saveGroup={saveGroup}
                    setShowNewGroup={setShowNewGroup} />
            }
        </div>
    );
}
 
export default Tasks;
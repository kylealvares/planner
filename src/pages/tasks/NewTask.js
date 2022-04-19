import './NewTask.css';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Modal from '../../components/Modal';

const NewTask = ({ setShowNewTask, tasks, saveTasks }) => {

    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: uuid(),
            title,
            color: 'blue'
        }
        saveTasks(newTask);
        setShowNewTask(false);
        // TODO: handle empty case
    }

    return (
        <Modal onBackdropClick={() => setShowNewTask(false)} className="new-task">
            <div className="new-task">
                <h1>Create a task</h1>
                <form onSubmit={e => handleSubmit(e)}>
                    <input type="text" 
                        placeholder='Enter task'
                        value={title}
                        onChange={e => setTitle(e.target.value)} />
                    <div className="justify-right">
                        <button type="submit">Create</button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}
 
export default NewTask;
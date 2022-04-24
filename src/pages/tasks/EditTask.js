import './EditTask.css';
import Modal from '../../components/Modal';
import { useState } from 'react';

const EditTask = ({ setShowEditTask, id, title, groups, deleteTask }) => {
    return (
        <Modal onBackdropClick={() => setShowEditTask(false)}>
            <div className="edit-task">
                { title }
                { groups && groups.map(group => <p>{group}</p>)}
            </div>
        </Modal>
    );
}
 
export default EditTask;
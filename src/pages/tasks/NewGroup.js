import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Modal from '../../components/Modal';
import ColorPicker from './ColorPicker/ColorPicker';
import './NewGroup.css';

const NewGroup = ({ saveGroup, setShowNewGroup }) => {

    const [groupName, setGroupName] = useState('');
    const [color, setColor] = useState('var(--red-60)');
    const [errorAnimation, setErrorAnimation] = useState('');

    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(groupName.trim() === '') {
            setErrorAnimation('inputErrorShake 500ms');
            setTimeout(() => setErrorAnimation(''), 500);
        } else {
            saveGroup({
                id: uuid(),
                name: groupName.trim(),
                color
            });
            setShowNewGroup(false);
        }
    }

    const handleKeyDown = (e) => {
        e.preventDefault();
        if(groupName.trim() === '') {
            setErrorAnimation('inputErrorShake 500ms');
            setTimeout(() => setErrorAnimation(''), 500);
        }
    }

    return (
        <Modal 
            title="New Group"
            width='500px' 
            onBackdropClick={() => setShowNewGroup(false)}>
            <form className="new-group" onSubmit={e => handleSubmit(e)}>
 
                <label>Group name</label>
                <input type="text" 
                    placeholder='New group name'
                    onChange={(e) => { setGroupName(e.target.value) }}
                    onKeyDown={(e) => { e.key === 'Enter' && handleKeyDown(e) }}
                    style={{animation: errorAnimation}}
                    autoFocus />

                <label htmlFor="">Pick a color</label>
                <ColorPicker setColor={setColor} />
                
                <div className="submit">
                    <button className='ghost' onClick={() => setShowNewGroup(false)}>Cancel</button>
                    <button type='submit'>Create</button>
                </div>

            </form>
        </Modal>
    );
}
 
export default NewGroup;
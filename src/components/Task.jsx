// import { FaTimes } from 'react-icons/fa'

import { useState } from 'react';

const Task = ({ task, onDelete, onToggle, onComplete }) => {
    const [completed, setCompleted] = useState(task.completed);
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}
            onClick={
                () => onToggle(task.id)}>
            <div className={`task-item ${task.completed ? 'completed' : ''}`} >
                <div>
                    <h3>{task.title} </h3>
                    <p>{task.description}</p>
                </div>

                <h4 onClick={() => onDelete(task.id)}
                    style={{ color: 'red', cursor: 'pointer' }}>
                    Delete
                </h4>
            </div>

            <div className='form-control-check'>
                <input type='checkbox' checked={completed} value={completed}
                    onChange={(e) => {
                        setCompleted(e.currentTarget.checked);
                        onComplete(task.id, e.currentTarget.checked)
                    }} />
                <label>Completed</label>
            </div>
        </div>
    )
}

export default Task;
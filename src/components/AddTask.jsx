import { nanoid } from 'nanoid'
import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [completed, setCompleted] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!title) {
            alert('Please add a task')
            return
        }

        onAdd({ id: nanoid(), title, description, completed })

        setTitle('')
        setDescription('')
        setCompleted(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={title}
                    onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Description</label>
                <input type='text' placeholder='Task description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />
            </div>
            <input className='btn' type='submit' value='Save Task' />
        </form>
    )
}

export default AddTask;
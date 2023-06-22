import Task from './Task';

const Tasks = ({ tasks, showAdd, onShowAdd, onDelete, onToggle, onComplete }) => {
    return (
        <div className='tasks-container'>
            <div className='tasks-header'>
                <h1>Task Manager</h1>
                <button className={showAdd ? 'close-btn' : 'add-btn'} onClick={() => onShowAdd(!showAdd)}>
                    {showAdd ? 'Close' : 'Add'}
                </button>
            </div>

            {tasks.length > 0 ?
                <div>
                    {tasks.map((task, i) => (
                        <>
                            <Task key={task.title}
                                task={task}
                                onComplete={onComplete}
                                onDelete={onDelete}
                                onToggle={onToggle} />

                            {i < tasks.length - 1 && <hr />}
                        </>
                    ))}
                </div>
                :
                <p>No tasks to show</p>
            }
        </div>
    )
}

export default Tasks;
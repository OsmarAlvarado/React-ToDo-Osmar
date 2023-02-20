import React from 'react'
import ToDoItem from '../ToDoItem/ToDoItem'
import './ToDoList.css'


const ToDoList = ({ ToDos, handleUpdateToDo, handleDeleteToDo, handleCompleteToDo }) => {

    return (
        <div>
            <ul>
                {ToDos.map(ToDo => (
                    <ToDoItem key={ToDo.id}
                        ToDo={ToDo}
                        handleUpdateToDo={handleUpdateToDo}
                        handleDeleteToDo={handleDeleteToDo}
                        handleCompleteToDo={handleCompleteToDo}
                    />
                ))}
            </ul>
        </div>
    )

}

export default ToDoList
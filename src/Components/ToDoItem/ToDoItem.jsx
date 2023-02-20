import React from 'react'
import './ToDoItem.css'
import { FaTrash } from 'react-icons/fa'
import ToDoUpdate from '../ToDoUpdate/ToDoUpdate'



const ToDoItem = ({ ToDo, handleUpdateToDo, handleDeleteToDo, handleCompleteToDo }) => {

    return (
        <li>
            <p>
                <span onClick={() => handleCompleteToDo(ToDo.id)}>
                    <label className={`container-done ${ToDo.done ? 'active' : ''}`}></label>
                </span>
            </p>
            <ToDoUpdate ToDo={ToDo} handleUpdateToDo={handleUpdateToDo} />
            <button className='btn-delete' onClick={() => handleDeleteToDo(ToDo.id)}><FaTrash /></button>
        </li>
    )

}

export default ToDoItem
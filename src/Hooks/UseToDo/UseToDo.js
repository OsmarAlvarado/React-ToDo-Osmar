import { useEffect, useReducer } from 'react'
import { ToDoReducer } from '../../ToDoReducer'
import './UseToDo.css'



export const UseToDo = () => {

    const initialState = []

    const init = () => {
        return JSON.parse(localStorage.getItem('ToDos')) || []
    }

    const [ToDos, dispatch] = useReducer(ToDoReducer, initialState, init)

    const ToDosCount = ToDos.length
    const pendingToDosCount = ToDos.filter(ToDo => !ToDo.done).length

    useEffect(() => {
        localStorage.setItem('ToDos', JSON.stringify(ToDos))
    }, [ToDos])

    const handleNewToDo = ToDo => {

        const action = {
            type: "Add ToDo",
            payload: ToDo,
        }
        dispatch(action)
    };

    const handleDeleteToDo = id => {
        const action = {
            type: "Delete ToDo",
            payload: id
        }

        dispatch(action)
    };

    const handleCompleteToDo = id => {
        const action = {
            type: "Complete ToDo",
            payload: id
        }

        dispatch(action)
    };

    const handleUpdateToDo = (id, description) => {

        const action = {
            type: "Update ToDo",
            payload: {
                id, description
            }
        }

        dispatch(action)
    };

    return {
        ToDos, ToDosCount, pendingToDosCount,
        handleNewToDo, handleDeleteToDo, handleCompleteToDo, handleUpdateToDo
    }

}
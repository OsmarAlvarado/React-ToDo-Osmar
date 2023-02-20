import React from 'react'
import { useForm } from '../../Hooks/UseForm/UseForm'
import './CardToDo.css'



const CardToDo = ({ handleNewToDo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    })

    const onFormSubmit = e => {
        e.preventDefault();

        if (description.length <= 1) return

        let newToDo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }

        handleNewToDo(newToDo)
        onResetForm();

    }

    return (

        <div className='add-todo'>
            <h3>Agregar Tarea</h3>
            <form className='Add' onSubmit={onFormSubmit}>
                <input type="text" className='input-add' name='description' value={description}
                    onChange={onInputChange}
                    placeholder='Cosas que hacer?' />
                <button className='btn-add' type='submit'>Add</button>
            </form>
            <br />
            <div className='row orders'>
                <form className='col check' action="">
                    <label htmlFor="">Prioridad Alta</label>
                    <input type="checkbox" className='' />

                    <label htmlFor="">Prioridad media</label>
                    <input type="checkbox" className='' />

                    <label htmlFor="">Prioridad media</label>
                    <input type="checkbox" className='' />
                </form>
                <form className='' action="">
                    <label htmlFor="">Fecha</label>
                    <input type="date" className='' name='fecha' />
                </form>
            </div>

        </div>
    )

}

export default CardToDo
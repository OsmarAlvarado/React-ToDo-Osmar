
import { useState } from 'react';
import './App.css';
import CardToDo from './Components/CardToDo/CardToDo';
import ToDoList from './Components/ToDoList/ToDoList';
import 'bootstrap/dist/css/bootstrap.css';
import { UseToDo } from './Hooks/UseToDo/UseToDo';



function App() {

  const { ToDos, ToDosCount, pendingToDosCount,
    handleNewToDo, handleDeleteToDo, handleCompleteToDo, handleUpdateToDo } = UseToDo();


  return (
    <>
      <div className='card-to-do'>
        <h1>Lista de tareas</h1>
        <CardToDo handleNewToDo={handleNewToDo} />

        <div className='counter-todos'>
          <h3>N° de Tareas: <span>{ToDosCount}</span> </h3>
          <h3>Tareas pendientes: <span>{pendingToDosCount}</span> </h3>

        </div>
        <hr />
        <ToDoList
          ToDos={ToDos}
          handleUpdateToDo={handleUpdateToDo}
          handleDeleteToDo={handleDeleteToDo}
          handleCompleteToDo={handleCompleteToDo}
        />
      </div>

    </>
  );
}

export default App;

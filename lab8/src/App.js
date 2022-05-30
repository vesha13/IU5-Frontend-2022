import React, { useState } from 'react';
import List from './List';
import Adder from './Adder';
import './App.css';

function App() {
    const[goal, SetGoal]= useState([])

    const addTask = (userInput) =>{
            const newItem = {
                id: goal.length,
                task: userInput,
                completed: false

            }
            SetGoal([...goal, newItem])
    }

    const done = (id) => {
       const cur = goal.splice(id, 1)
       SetGoal([...goal.filter((todo) => todo !==cur)])
    }


    const Tap = (id) => {
        SetGoal(goal.map(todo =>
            {
              if (todo.id === id) { todo.completed = !todo.completed }
              return todo;
          }))
    }

  return (
    <div className = "App">
      <header className = 'head' >
            <h1>Список дел, чтобы быть молодцом</h1>
      </header>
      <Adder
     addTask={addTask}
      />
      {goal.map((todo) =>{
      return (<List 
        todo = {todo}
        Tap = {Tap}
        done = {done}
        />)
      })}
    </div>
  );
}

export default App;
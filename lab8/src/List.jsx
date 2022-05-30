import './App.css';
import React from "react"
import del from './del.png'
import yes from './yes.png'
function List({todo, Tap, done}){
    const classChange = ["item-text"]

    if (todo.completed)
    {
        classChange.push("out");
    }
    return ( 
        <div className = 'List'>
            <img className="del" src={yes} alt="Y" onClick = {() => Tap(todo.id)}/>

            <div className = "item">
                <div className = {todo.complete ? classChange.join(' ') : classChange.join(' ')}>
                    {todo.task}
                </div>
                    <img className="del" src={del} alt="N" onClick = {() => done(todo.id)}/>
            </div>
        </div>
    )
}

export default List
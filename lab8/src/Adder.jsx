import React, { useState } from "react"
import './App.css';

function Adder({addTask}) {
    const[userInput, setUserInput] = useState('')
 
    const handleSubmit = (e) =>{
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }

    return (
        <div onSubmit = {handleSubmit} className='Adder'>
            <input
            class='input'
            value = {userInput}
            type = 'text'
            onChange = {(e) =>{
                setUserInput(e.currentTarget.value)}}
            onKeyDown = {(e) =>{
                if(e.key === "Enter" && userInput!== ''){
                    handleSubmit(e)
                }}}
            placeholder = "Добавляй сюда свои делишки!"
            />
            <button className='Button' onClick={(e) => {if(userInput!== '')handleSubmit(e); else alert('пустая строчка - не совсем дело, впиши что-то')}}><h4>тык</h4></button>
        </div>

    )
}

export default Adder
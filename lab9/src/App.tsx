import React, { useState } from "react";
import {User} from "./User";
import "./App.css"

export const App = () =>
{
    const[currtUser,setUser] = useState("");
    const[currInput,setInput] = useState("")

    return ( 
    <User user={currtUser} userID={()=>setUser(()=>currInput.trim())} inputText={(id: string)=>setInput(()=>id)} back={()=>{setUser("");
    setInput("")}}/>
    );
};
import React from "react";
import {UserProps} from "./Types";
import { UserSearch } from "./Search";
import search from "./search.jpg"
import "./App.css"

export const User :React.FC<UserProps> = ({user,userID,inputText,back}) =>
{
    if(user.length === 0)
    {
        return(
            <div className="main">
                <h1 >Кто прогер?</h1>
                <img id = "pic" src={search} alt=""/>
                <div className="nav">
                    <input
                    onKeyPress = {(e:any) =>
                    {if (e.key === "Enter")
                        userID();}}
                    onChange={(e:any) =>
                    {inputText(e.target.value)}} />
                    <button onClick={()=>userID()}>Поищем-ка его на гите</button>
                </div>
            </div>)
    }
    else
    {
        return(
        <UserSearch back={back} user={user} />
        )
    }
}
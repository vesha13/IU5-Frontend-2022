import React, { useState, useEffect } from "react";
import {SearchProps} from "./Types";
import error from "./error.jpeg"
import "./App.css"



export const UserSearch:React.FC<SearchProps>  = ({user,back}) => {
    const[errorСondition,setError] = useState(false);
    const[loadingCondition,setLoading] = useState(true);
    const[ userData,setUserData] = useState<any>();

    useEffect(()=>
    {
        fetch(`https://api.github.com/users/${user}` ,
        {
            method: 'GET',
            headers: {Authorization: `token ${'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'}`,},
        }).then((data)=>
        {
            if(data.status !== 200 )
                setError(true);
            else
            { return data.json();}
        }).then((data) =>
            {
                setUserData(data);
               setLoading(false);
            })
            },[user]);

    if(errorСondition)
        return(
            <div className="main">

                <h2 >Такого пользователя пока нет на гите</h2>
                <img id="pic" src={error} alt=""/>
                <button onClick={()=>back()}>Назад</button>



            </div>
        )
        if(loadingCondition)
        return(
         <div className="main"> <h1>Загрузка..</h1></div>
        )
    else
    return(<div className="main" >

        <div>
            <h2>Прогер найден:</h2>
            <img id="minipic" src={userData.avatar_url} alt=""/>
            <h2 >Login: {userData.login}</h2>
            <h2>Folowers: {userData.followers}</h2>
            <h2>Repos to look through: {userData.public_repos}</h2>
            <button onClick={()=>back()}>Поискать ещё прогеров</button>
        </div>
    </div>)
}
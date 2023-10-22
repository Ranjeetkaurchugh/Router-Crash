import React, { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom";
function Gitub(){
const data=useLoaderData()
    //const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Ranjeetkaurchugh')
    //     .then(response => response.json())//change the response in json format
    //     .then(data =>{
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])

    
    return(
        <div  className="bg-gray-400 text-center mg-10
        text-3xl text-white p-4">Gitub Followers:{data.followers}
       <img src={data.avatar_url } width={300}/></div>


    )
}
export default Gitub;
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Ranjeetkaurchugh')
    return response.json()
}
import React from "react";
import{useParams} from 'react-router-dom'

function Users(){
    const {usersid} = useParams()
return(
    <>
    <div>Users:{usersid}</div>

    </>
)
}
export default Users;
'use client' ;

import { useState } from "react";

export default function SigUpPage() {
    const [user,setUser] = useState({
        email: "",
        password: "",
        username: "",
    });

    const onSignup = async ()=> {

    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen py-2">
            <h1 className="text-2xl">SignUp</h1>
            <hr/>
            <label htmlFor="username">Username</label>
            <input 
                className="p-2"
                id="username"
                type="text"
                value={user.username}
                onChange={(e)=> setUser({...user,username: e.target.value})}
                placeholder="Username"
            ></input>
            <label htmlFor="password">Password</label>
        </div>
    )
}
'use client' ;

import Link from "next/link";
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
        <div className="flex flex-col justify-center items-center min-h-screen py-2 ">
            <h1 className="text-2xl">SignUp</h1>
            <hr/>
            <label  className='mt-4' htmlFor="email">Email</label>
            <input 
                className="p-2 border border-black"
                id="email"
                type="text"
                value={user.email}
                onChange={(e)=> setUser({...user,email: e.target.value})}
                placeholder="Email"
            ></input>
            <label className="mt-4" htmlFor="username">Username</label>
            <input 
                className="p-2 border border-black"
                id="username"
                type="text"
                value={user.username}
                onChange={(e)=> setUser({...user,username: e.target.value})}
                placeholder="Username"
            ></input>
            <label  className='mt-4' htmlFor="password">Password</label>
            <input 
                className="p-2 border border-black"
                id="password"
                type="password"
                value={user.password}
                onChange={(e)=> setUser({...user,password: e.target.value})}
                placeholder="Password"
            ></input>
            <button className="mt-4 border rounded-2xl p-2" onClick={onSignup}>SignUp</button>
            <p className="mt-2">Already registered ? <Link className="text-red-400" href='/login'>Login</Link> here .</p>
        </div>
    )
}
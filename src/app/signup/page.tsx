'use client' ;

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import toast from "react-hot-toast";

export default function SigUpPage() {
    const router = useRouter();
    const [user,setUser] = useState({
        email: "",
        password: "",
        username: "",
    });
    const [buttonDisabled,setButtonDisabled] = useState(false) ;
    const [loading,setLoading] = useState(false) ;

    const onSignup = async ()=> {
        try {
            setLoading(true) ;
            const response = await axios.post('/api/users/signup',user) ;
            console.log("SignUp successfull",response.data) ;
            router.push('/login') ;
        } catch (error: any) {
            console.log("signUp failed", error.message)
            toast.error(error.message) ;
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        if(user.email.length>0 && user.username.length>0 && user.password.length>0) {
            setButtonDisabled(false) ;
        }
        else {
            setButtonDisabled(true) ;
        }
    },[user]) ;

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
            <button className="mt-4 border rounded-2xl p-2" onClick={onSignup}>{buttonDisabled? "Loading..." : "SignUp"}</button>
            <p className="mt-2">Already registered ? <Link className="text-red-400" href='/login'>Login</Link> here .</p>
        </div>
    )
}
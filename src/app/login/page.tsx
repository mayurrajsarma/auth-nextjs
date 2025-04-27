'use client' ;

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
    const router = useRouter();
    const [user,setUser] = useState({
        email: "",
        password: ""
    });
    const [loading,setLoading] = useState(false);

    const onLogin = async ()=> {
        try {
            setLoading(true);
            const res = await axios.post("api/users/login",user);
            console.log("Login success",res.data) ;
            toast.success("Login success") ;
            router.push("/profile") ;
        } catch (error: any) {
            console.log("Login failed",error.message);
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen py-2 ">
            <h1 className="text-2xl">Login</h1>
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
            <label  className='mt-4' htmlFor="password">Password</label>
            <input 
                className="p-2 border border-black"
                id="password"
                type="password"
                value={user.password}
                onChange={(e)=> setUser({...user,password: e.target.value})}
                placeholder="Password"
            ></input>
            <button className="mt-4 border rounded-2xl p-2" onClick={onLogin}>{loading? "Loading..." : "Login"}</button>
            <p className="mt-2">New user ? <Link className="text-red-400" href='/signup'>SignUp</Link> here .</p>
        </div>
    )
}
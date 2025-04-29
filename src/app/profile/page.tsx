'use client' ;
import axios from 'axios' ;
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ProfilePage() {
    const router = useRouter() ;
    const [data,setData] = useState("nothing") ;
    const logout = async ()=> {
        try {
            await axios.get('/api/users/logout')
            router.push('/login') ;

        } catch (error: any) {
            console.log(error.message);
        }
    }

    const getUserDetails = async ()=> {
        const res = await axios.get('/api/users/me') ;
        // console.log(res.data) ;
        setData(res.data.user._id) ;
        console.log(data);
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1>Profile Page</h1>
            <hr/>
            <h2 className='bg-gray-400 p-2'>{data === "nothing" ? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
            <hr/>
            <button onClick={logout} className="p-2 border hover:bg-blue-300 mt-2">Logout</button>
            <button onClick={getUserDetails} className="p-2 border mt-2">User Data</button>
        </div>
    )
}
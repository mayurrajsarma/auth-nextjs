'use client' ;
import axios from 'axios' ;
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
    const router = useRouter() ;
    const logout = async ()=> {
        try {
            await axios.get('/api/users/logout')
            router.push('/login') ;

        } catch (error: any) {
            console.log(error.message);
        }
    }
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1>Profile Page</h1>
            <hr/>
            <button onClick={logout} className="p-2 border hover:bg-blue-300 mt-2">Logout</button>
        </div>
    )
}
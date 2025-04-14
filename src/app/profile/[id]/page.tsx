export default function UserProfile({params}: any) {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1>Profile Page</h1>
            <p className="mt-4">Profile ID: <span className="text-red-400">{params.id}</span></p>
        </div>
    )
}
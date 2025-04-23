export default async function UserProfile({params}: any) {
    const {id} = await params ;
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1>Profile Page</h1>
            <p className="mt-4">Profile ID: <span className="text-red-400">{id}</span></p>
        </div>
    )
}
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";


const AdminPage = () => {

    const Navigate = useNavigate()

    useEffect(()=>{
        const fetchedUserIsAdmin = async () => {
            const userType = await fetchUserType() //With user token from local storage
            if (userType !== "admin") {
                Navigate("/")
            }
            return userType
        }
        fetchedUserIsAdmin()
    }, [])

    return (
        <div>
            <h1>Admin Page</h1>
        </div>
    )
}

export default AdminPage
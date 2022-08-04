import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, validateToken } from "../Auth";

const LoginPage = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const Navigate = useNavigate()
    return (
      <div>
        <h1>Login Page</h1>
        <label>Username</label>
        <input type="text" onChange={(e)=>{
            setUsername(e.target.value)
        }}/>
        <label>Password</label>
        <input type="password" onChange={(e)=>{
            setPassword(e.target.value)
        }}/>
        <button onClick={async ()=>{
            props.setIsAuthLoading(true)
            const loginResult = await loginUser(username, password)
            if (loginResult) {
                props.setIsAuthLoading(false)
            }
        }}>Login</button>
        <button onClick={async ()=>{
            await validateToken()
        }}>Validate</button>

      </div>
    );
  };
  
  export default LoginPage;
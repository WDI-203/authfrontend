import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, loginUser } from "../Auth";

const RegistrationPage = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate()
  return (
    <div>
      <h1>Registration Page</h1>
      <label>Username</label>
      <input
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <label>Password</label>
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={async () => {
          props.setIsAuthLoading(true);
          const registerResult = await registerUser(username, password);
          if (registerResult) {
            const loginResult = await loginUser(username, password);
            if (loginResult) {
              props.setIsAuthLoading(false);
              Navigate("/");
            }
          }
        }}
      >
        Signup
      </button>
    </div>
  );
};

export default RegistrationPage;

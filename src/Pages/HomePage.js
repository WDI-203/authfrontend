import { Auth } from 'aws-amplify';
import { useState } from "react";
import { getUserToken } from "../Auth";

const HomePage = (props) => {
  const [secretMessage, setSecretMessage] = useState("");

  const requestSecretMessage = async () => {
    const url = `${process.env.REACT_APP_URL_ENDPOINT}/auth/validate-token`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        [process.env.REACT_APP_TOKEN_HEADER_KEY]: getUserToken(),
      },
    });
    const responseJSON = await response.json();
    setSecretMessage(responseJSON.message)
    return responseJSON;
  };
  return (
    <div>
      <h1>Home Page</h1>
      <h3>{secretMessage}</h3>
      <button onClick={()=>{
        requestSecretMessage()
      }}>Get Message</button>
    </div>
  );
};

export default HomePage;

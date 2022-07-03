import React, {useState} from "react";

const uname = "Kai"
const upass = "KaiKai"




const Login = () => {
    const [username, setUsername] = useState("");   
    const [password, setPassword] = useState("");   
    const [loggedin, setLoggedin] = useState(false); 
  

if (username == uname && password == upass) {
    setLoggedin(true);
}
    return(
        <div>
           <h1>Login</h1> 
          <input type="text" onChange={(event) => {
            setUsername(event.target.value)
            
          }}/>
          <br />
          <input type="password" onChange={(event) => {
            setPassword(event.target.value) 
            }}/>
          <br />
          <button onSubmit={() => Login} >Submit</button>

          {loggedin && (
            <h1>User is logged in</h1>
          )}
        </div>
    )
}

export default Login; 
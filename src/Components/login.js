import React from "react";

const Login=()=>{

    function submitUser(){
        
    }
    return(
     <div className="login-box">
        <p>Welcome back!</p>
        <h2>Sign in to your account</h2>
        <form className="field-box" onSubmit={submitUser}>
        <div>
            <label>Your email</label><br></br>
            <input type="text" placeholder="Write your email" className="in-field"></input>
        </div>

        <div>
            <label>Password</label><br></br>
            <input type="password" placeholder="Write your password" className="in-field"></input>
        </div>
        <button className="cont-btn" type="submit">CONTINUE</button>
        </form>
        <p className="forget-pass">Forget your password?</p>
     </div>
    )
}


export default Login;
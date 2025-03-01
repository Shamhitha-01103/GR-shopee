// import React from 'react'
// import './Login.css'
// import Home from './Home';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   var a=[{username:"LOGU",password:"3103"},{username:"ARUN",password:"1409"}] 
//   const navi=useNavigate() 
//   function login()
//   {
//     var userName=document.getElementById("name").value;
//     var userKey=document.getElementById("pass").value;
//     var user=a.filter((data)=>{
//         return data.username===userName && data.password===userKey;      
//     })
//     if(user.length>0)
//     {
//         localStorage.setItem('username',user[0].userName);
//         navi('./Home')
//     }                                                                                                      
//    else if(user[0].username===userName && user[0].password==="")
//       alert("Invalid Password");
//     else if(user[0].username==="" && user[0].password===userKey)
//       alert("Invalid User Name");
//     else
//        alert("Both UserName and Password are Wrong");
//   }
//   return (
//     <div className='two'>
//        <div className="div">
//            <div onSubmit={login} className="form">
//               <center><h1 className="h1">Login</h1></center>
//               <input className="name" text="text" placeholder="Enter user name" />
//               <input className="pass" text="password" placeholder="Enter password" />
//               <button className="sub" type="submit">SUBMIT</button>
//            </div>
//        </div>
//     </div>
//   )
// }
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const users = [{ username: "SHAM", password: "2005" }, { username: "GIRI", password: "2003" }];
  const navigate = useNavigate();

  const login = () => {
    const userName = document.getElementById("name").value;
    const userKey = document.getElementById("pass").value;

    const user = users.find((data) => data.username === userName && data.password === userKey);

    if (user) {
      localStorage.setItem('username', user.username);
      navigate('/Home'); 
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className='two'>
      <div className="div">
        <form onSubmit={(e) => { e.preventDefault(); login(); }} className="form">
          <center><h1 className="h1">Login</h1></center>
          <input id="name" className="name" type="text" placeholder="Enter user name" />
          <input id="pass" className="pass" type="password" placeholder="Enter password" />
          <button className="sub" type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
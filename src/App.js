import React,{ useState } from "react";
import "./App.css";
import LoginPage from './components/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import {Routes,Route} from 'react-router-dom';
import ForgotComponent from "./components/ForgotComponent";
// Simple Login form in React


function App() {
  const adminUser={
      email: 'admin@example.com',
      password:'admin@123'
  }
  const [user,setUser]=useState({email:"",password:""});
  const [error,setError]=useState("")

  const loginDetails = (details)=>{
console.log(details)
if(details.email===adminUser.email&&details.password===adminUser.password){
    setUser({email:details.email})
}
else{
    console.log("Invalid Credentials Please try again")
    setError("Invalid Credentials Please try again")
}

  }
  const Logout=()=>{
setUser({email:"",password:""})
  }

return (
    <div>
   
        {(user.email !=="")?(<div><Dashboard Logout={Logout}/><br/>
      
        </div>):<LoginPage loginDetails={loginDetails} error={error}/>}
        <Routes>
          <Route path="/forgot" element={<ForgotComponent/>}/>
        </Routes>
    </div>
)

}
export default App;
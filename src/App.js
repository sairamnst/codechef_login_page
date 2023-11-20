import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";
function App() {
  const [register, setRegister] = useState(false);
  return (
    <div className="App">
      <div style={{flexDirection:'row'}}>
      <header className="App-header">
        <h1 className="title ">CODECHEF</h1>

        <div className="box">
          {register ?
            <h2>Register</h2> :
            <h2>Login</h2>
          }
          <p style={{textAlign:"left",marginLeft:"40px"}}>username</p>
          <input className="input"></input>
          <p style={{textAlign:"left",marginLeft:"40px"}}>password</p>
          <input className="input"></input>
          <p>
             
          </p>
            {register?
            <div>
              <button className="button" style={{backgroundColor:"#7C1176",marginRight:"20px",color:"white"}} onClick={()=>{setRegister(true);}}>Register</button>
              <button className="button" style={{backgroundColor:'white',color:"purple"}} onClick={()=>setRegister(false)}>Login</button> 
            </div>
            :
            <div>
              <button className="button" style={{backgroundColor:"#7C1176",marginRight:"20px",color:"white"}} onClick={()=>setRegister(false)}>Login</button> 
              <button className="button" style={{backgroundColor:'white',color:"purple"}} onClick={()=>{setRegister(true);}}>Register</button>
            </div>
            }
            
          
        </div>
        
      </header>
      </div>
    </div>
  );
}

export default App;

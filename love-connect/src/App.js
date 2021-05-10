import React, { useState } from "react";

import './App.css';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';

function App() {
  const[user, setUser] = useState({
    loggedIn: false,
    username: null,
    email:null,
    age:null,
    distance:null,
    recent:null,
    gender:null,
    tastes:[],
    localitzation:{lat:null, long:null}
  });
  return (
      <div>
        {user.loggedIn ?  <Home user={user} setUser={setUser}/>: <Register setUser={setUser} />}
      </div>
  );
}

export default App;

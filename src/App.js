import logo from './logo.svg';
import './App.css';
import fs from 'fs'
import Uploader from './Uploader';
import Navbar from './Navbar'
import  ReactNotification  from 'react-notifications-component';
// import {store} from "react-notifications-component"
// import "animate.css"
// import "react-notifications-component/dist/theme.css"
import React from 'react';

function App() {
  return (
   <>

 <div className='App'>
<Navbar /> 

   <Uploader/>
   </div>
   </>
  );
}

export default App;

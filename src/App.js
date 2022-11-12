import logo from './logo.svg';
import './App.css';
import fs from 'fs'
import Uploader from './Uploader';
import Navbar from './Navbar'

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

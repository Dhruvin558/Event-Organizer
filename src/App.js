import logo from './logo.svg';

import './App.css';
import Home from './Components/Home';
import Navbar1 from "./Components/Navbar1";
import Registration from './Components/Registration';
import { createBrowserRouter } from 'react-router-dom';
import About from './Components/About';



function App() {
  
  return (<>
    <Navbar1 />
    <Home />
    <Registration  />
    <About />
    </>
  );
}

export default App;

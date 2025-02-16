import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Screencomponents/Homecomponents/Home" 
import About from './Screencomponents/Aboutcomponents/About'
import Login from './Components/Student/Login';
import Header from './Components/Header';
import Requestform from './Components/Request/Requestform';
import Registration from './Components/Student/Registration';
function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Registration/>}/>
          <Route path='/request' element={<Requestform/>}/>

        </Routes>
      </BrowserRouter>
      {/* <Registration/> */}
    </>
  );
}

export default App;

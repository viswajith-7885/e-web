
import './App.css';
import Home from './pages/Home';


import{BrowserRouter,Route,Routes}from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div >
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;

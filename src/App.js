import { Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import MyNavbar from './components/Navbar';
import List from './pages/List';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <MyNavbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/book/list' element={<List/>}/>
    </Routes>
    </div>
      
  );
}

export default App;

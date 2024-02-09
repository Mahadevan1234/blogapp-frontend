import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Viewpost from './components/Viewpost';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/viewall' element={<Viewpost/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

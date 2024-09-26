import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  );
}

export default App;

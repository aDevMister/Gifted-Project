import './App.css';
import LandingPage from './Components/LandingPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/signup'element={<SignUp />}
          />
          <Route path='/signin' element={<SignIn />}
          />


        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

import './App.css';
import LandingPage from './Components/LandingPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Components/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />


        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

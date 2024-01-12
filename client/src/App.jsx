import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import AdminLogin from './pages/Login/AdminLogin'
import './styles/global.css'
import Login from './pages/Login/Login';
import SignupForm from './pages/SignUp/signupform';
function App() {
  return (
    <>
      
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/adminlogin" element={<AdminLogin/>}/>
            <Route path="/signup" element={<SignupForm/>}/>
          </Routes>
      </Router>
      </>
  )
}

export default App

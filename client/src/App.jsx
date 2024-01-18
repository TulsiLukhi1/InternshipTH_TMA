import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import UserRoutes from './routes/userroute';
// import AdminRoutes from './routes/adminroute';
import Home from "./pages/Home/Home";
import "./styles/global.css";
import AdminHome from "./pages/Admin/adminhome";
import AdminLogin from "./pages/Admin/AdminLogin";
import Login from "./pages/Login/Login";
import SignupForm from "./pages/SignUp/signupform";
import AdminWorkspace from "./pages/Admin/Workspace/workspace";
import AdminDevlopers from "./pages/Admin/Developers/developers";
import UserHome from "./pages/User/UserHome/userhome";
import UserTasks from "./pages/User/UserTasks/usertasks";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" index element={<Home />} />
          {/* <Route path="user/*" component={UserRoutes} />
            <Route path="admin/*" component={AdminRoutes} />
             */}
          <Route path="admin" element={<AdminHome />}>
            <Route path="workspace" element={<AdminWorkspace />} />
            <Route path="developers" element={<AdminDevlopers />} />
          </Route>
          <Route path="user" element={<UserHome/>}>
            <Route path="tasks" element={<UserTasks/>}/>
          </Route>
            <Route path="admin/login" element={<AdminLogin />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignupForm />} />
        </Routes>
      </Router>
    </>
  );

  //logo b8b8b8
}

export default App;

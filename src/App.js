import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/logins/Login";
import StudentLogin from "./components/logins/StudentLogin";
import ParentsLogin from "./components/logins/ParentsLogin"
//import WardenLogin from "./components/WardenLogin"
import Dashboard from "./components/Dashboard";
import AdministrationLogin from "./components/logins/AdministrationLogin";
//import AdministrationDashboard from "./components/AdministrationDashboard";
import AdministrationDrawer from "./components/AdministrationDrawer";
function App() {
  return (
    <BrowserRouter>
      <Routes>    
        <Route path="/" element={<Login/>}/>
        <Route path="/studentlogin" element={<StudentLogin/>}/>
        <Route path="/parentslogin" element={<ParentsLogin/>}/>
        <Route path="/administrationlogin" element={<AdministrationLogin/>}/>
        <Route path="/administrationdrawer" element={<AdministrationDrawer/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

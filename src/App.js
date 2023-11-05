import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import StudentLogin from "./components/StudentLogin";
import ParentsLogin from "./components/ParentsLogin"
//import WardenLogin from "./components/WardenLogin"
import Dashboard from "./components/Dashboard";
import AdministrationLogin from "./components/AdministrationLogin";
function App() {
  return (
    <BrowserRouter>
      <Routes>    
        <Route path="/" element={<Login/>}/>

        <Route path="/studentlogin" element={<StudentLogin/>}/>
        <Route path="/parentslogin" element={<ParentsLogin/>}/>
        <Route path="/administrationlogin" element={<AdministrationLogin/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

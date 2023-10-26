

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import StudentLogin from "./components/StudentLogin";
import ParentsLogin from "./components/ParentsLogin"
import WardenLogin from "./components/WardenLogin"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/studentlogin" element={<StudentLogin/>}/>
        <Route path="/parentslogin" element={<ParentsLogin/>}/>
        <Route path="/wardenlogin" element={<WardenLogin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

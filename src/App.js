import { Routes, Route } from "react-router-dom";
import Home from'./pages/Home'
import Loginpage from'./pages/Login'
import SignPage from'./pages/Signup'

import Reports from'./pages/Reports'
import Groups from "./pages/Group";


function App() {
  return (
    <>
    <div>
      
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={< Loginpage/>} />    
        <Route path='/sign' element={< SignPage/>} />
        <Route path='/reports' element={< Reports/>} />
        <Route path='/groups' element={< Groups/>} />
        </Routes>
    </div>
    </>
  );
}

export default App;

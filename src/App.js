import { Routes, Route } from "react-router-dom";
import Home from'./pages/Home'
import Loginpage from'./pages/Login'

function App() {
  return (
    <>
    <div>
      
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={< Loginpage/>} />    
        <Route path='/sign' element={< SignPage/>} />
        </Routes>
    </div>
    </>
  );
}

export default App;

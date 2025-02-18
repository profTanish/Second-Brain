import { RecoilRoot } from 'recoil'
import SideBar from './components/subComponents/SideBar'
import { BrowserRouter, Routes, Route } from "react-router";
import Login from './components/Login'
import Home from './components/Home';
import Signup from './components/Signup';

function App() {

  return (
      <RecoilRoot>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        </BrowserRouter>
      </RecoilRoot>
  )
}

export default App

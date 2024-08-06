import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/sign-in" element={<SignIn/>}/>
        <Route exact path="/sign-up" element={<SignUp/>}/>
        <Route exact path="/dashborad" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}


// import React from 'react'

// export default function App() {
//   return (
//     <div>App</div>
//   )
// }

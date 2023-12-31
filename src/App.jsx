import React from 'react'
import { Routes, Route} from 'react-router-dom'
import './App.css'
import NavLayout from './components/NavLayout'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Admin from './pages/Admin'
function App() {
 

  return (
    <>

    <Routes>
      <Route path='/' element={<NavLayout/>}>
         <Route path='signup' element={<SignUp/>}/>
         <Route path='login' element={<Login/>}/>
         <Route path='admin' element={<Admin/>}/>
      </Route>
    </Routes>
   
    </>
  )
}

export default App

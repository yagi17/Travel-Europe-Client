
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Navbar/Pages/Home'

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Outlet></Outlet>
      
    </>
  )
}

export default App

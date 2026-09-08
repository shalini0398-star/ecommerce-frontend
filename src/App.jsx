import { Outlet } from 'react-router-dom';
import './App.css'
import NavBar from './component/Navbar/NavBar.jsx';

function App() {
  
  return (
   
        <>
        <NavBar/>
        <main>
          <Outlet/>
        </main>
        </>
  )
}

export default App


import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Homescreen from './Pages/Homescreen/Homescreen'
import Signup from './Pages/Signuppage/Signup'
import Login from './Pages/Loginpage/Login'

function App() {

  return (
   <div className='app'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homescreen/>}/>
      <Route path='/signup' element = {<Signup/>}/>
      <Route path='/signin' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App


import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {QueryClient,QueryClientProvider} from "react-query"
import Homescreen from './Pages/Homescreen/Homescreen'
import Signup from './Pages/Signuppage/Signup'
import Login from './Pages/Loginpage/Login'
import Bloglisting from './Pages/Bloglistingpage/Bloglisting'

function App() {
const client = new QueryClient();
  return (
     <div className='app'>
      <QueryClientProvider client={client}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homescreen/>}/>
      <Route path='/signup' element = {<Signup/>}/>
      <Route path='/signin' element={<Login/>}/>
      <Route path='/bloglisting' element={<Bloglisting/>}/>
    </Routes>
    </BrowserRouter>
    </QueryClientProvider>
   </div>
   
  )
}

export default App

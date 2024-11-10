

import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {QueryClient,QueryClientProvider} from "react-query"
import Homescreen from './Pages/Homescreen/Homescreen'
import Signup from './Pages/Signuppage/Signup'
import Login from './Pages/Loginpage/Login'
import Bloglisting from './Pages/Bloglistingpage/Bloglisting'
import Writepg from './Pages/Writepage/Writepg'
import Foryoupg from './Pages/Articlespage/Foryoupg'
import Profilepg from './Pages/Myprofilepage/Profilepg'
import Editpostpage from './Pages/Editpostpage/Editpostpage'
import Seeallfromspecificuser from './Pages/See all from user/Seeallfromspecificuser'

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
      <Route path='/write' element={<Writepg/>}/>
      <Route path='/article-read' element={<Foryoupg/>}/>
      <Route path='/my-profile' element = {<Profilepg/>}/>
      <Route path='/edit-post' element={<Editpostpage/>}/>
      <Route path='/see/all' element = {<Seeallfromspecificuser/>}/>
    
    </Routes>
    </BrowserRouter>
    </QueryClientProvider>
   </div>
   
  )
}

export default App

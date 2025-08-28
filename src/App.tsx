
import { Toaster } from 'react-hot-toast'
import './App.css'
import Login from './pages/login';
import SignUp from './pages/register'
import LandingPage from './pages/landing'
import {BrowserRouter as Router,Routes, Route} from 'react-router'
function  App () {

  return (
    <main className='h-full w-full '>

      <Router> 

        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/login' element={<Login />} /> 
          <Route path='/register' element={<SignUp />} />  
          <Route path='*' element={<h1>Page not found</h1>} /> 
          
        </Routes>
      </Router>
<Toaster
            position="top-center"
            reverseOrder={false}
          />


    </main>
    
  )
}

export default App

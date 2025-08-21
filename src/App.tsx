
import './App.css'
import Login from './pages/login'
import SignUp from './pages/register'
import {BrowserRouter as Router,Routes, Route} from 'react-router'
function  App () {

  return (
    <main className='h-full w-full '>

      <Router> 

        <Routes>
          <Route path='/' element={<h1>Homepage</h1>} />
          <Route path='/login' element={<Login />} /> 
          <Route path='/register' element={ <SignUp/>} />  
          
        </Routes>
      </Router>



    </main>
    
  )
}

export default App

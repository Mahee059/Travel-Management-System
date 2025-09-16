
import { Toaster } from 'react-hot-toast'
import './App.css'
import Login from './pages/login';
import SignUp from './pages/register'
import LandingPage from './pages/landing'
import { BrowserRouter as Router, Routes, Route } from 'react-router' 
import PackgaeDetailPage from './pages/package.detail';
import ClientLayout from "./layouts/client.layout";
import BookPackage from "./pages/book"
import AboutUs from './components/landing/About Us';


function  App () {

  return (
    <main className="h-full w-full ">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<ClientLayout />}>
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/package/:id" element={<PackgaeDetailPage />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Route>
          <Route path="/book/:id" element={<BookPackage />} />;
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </Router>
      <Toaster position="top-center" reverseOrder={false} />
    </main>
  );
}

export default App

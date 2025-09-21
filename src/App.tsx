
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
import AdminLayout from './layouts/admin.layout';
import Dashboard from './pages/admin/dashboard';
import PackagePage from './pages/admin/package/package'
import UsersPage from './pages/admin/users';
import BookingPage from './pages/admin/booking';



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
          {/* admin routes  */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/packages" element={<PackagePage />} />
            <Route path="/admin/bookings" element={<BookingPage />} />
            <Route path="/admin/users" element={<UsersPage />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Route>
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </Router>
      <Toaster position="top-center" reverseOrder={false} />
    </main>
  );
}
export default App

import { Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from  "./pages/Home/Home";
import Store from './pages/Store/Store';
import About from './pages/About/About';
import Uniq from './components/Uniq/Uniq';
import SignIn from './pages/SignIn/SignIn';
import LogIn from './pages/LogIn/LogIn';
import Cart from './pages/Cart/Cart';
import Payment from './pages/Paymnent/Payment';
function App() {
  return (
    <>
    <Routes>
      <Route path='/'>
        <Route index element={<SignIn/>}/>
        <Route path='/login' element={<LogIn/>}/>
      </Route>
      <Route  element={<Navbar/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/store' element={<Store/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/store/:id' element={<Uniq/>}/>
      <Route path='/store/:id/buy' element={<Payment/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;

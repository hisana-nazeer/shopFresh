import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import  Home  from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Newproduct from './pages/Newproduct';
import Cart from './pages/Cart';
import Login from './pages/Login';
import {store} from './redux/index';
import { Provider } from 'react-redux';
import Success from "./pages/Success"
import Cancel from "./pages/Cancel"







const router = createBrowserRouter(
createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route index element={<Home/>}/>
    <Route path='menu' element={<Menu/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='cart' element={<Cart/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='newproduct' element={<Newproduct/>}/>
    
    <Route path = 'success' element ={<Success/>}/>
    <Route path = 'cancel' element={<Cancel/>}/>
    

    
    
    </Route>

    


 

)

)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <RouterProvider router ={router}/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import { Routes } from 'react-router-dom'
import Store from './components/Store.jsx'
import Contact from './components/Contact.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { createContext } from 'react'
import CompleteOrders from './components/CompleteOrders.jsx'
import ConfirmOrder from './components/ConfirmOrder.jsx'
// eslint-disable-next-line react-refresh/only-export-components
export const dataFetched = createContext();


function App() {
  const url = "https://saad-elghaba.github.io/Achraf-Store-Data/product.json";
  const [data,setData] = useState([]);
  useEffect(()=>{
    axios.get(url)
    .then(res=>{
      setData(res.data);
    })
    .catch(err=>{
      console.log(err);
    })
  },[])
  // localStorage.clear();
  return (
    <div>
    <dataFetched.Provider value={data}>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
          <Route path="/Store" element={<Store/>}>
          </Route>
          <Route path="/Contact" element={<Contact/>}>
          </Route>
          <Route path="/ProductDetails/:id" element={<ProductDetails/>}>
          </Route>
          <Route path="/CompleteOrders" element={<CompleteOrders/>}>
          </Route>
          <Route path="/CompleteOrders/ConfirmOrder" element={<ConfirmOrder/>}>
          </Route>
        </Routes>
      <Footer/>
      </dataFetched.Provider>
    </div>
  )
}

export default App

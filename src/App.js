import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import Navbar from './component/Navbar';
import Mobile_list from './component/Mobile_list';
import Data from"./component/Data.json"
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Mobile from './component/Mobile';
export const MobileData = createContext()
function App() {
  const [ListArray,setListArray] = useState([...Data.data])
  const [filter,setFilter] = useState([...ListArray]) 
  const [value,setValue] = useState("")
  console.log(ListArray)
  return (
<Router>
  <MobileData.Provider value = {{ListArray,setListArray,filter,setFilter,value,setValue}}>
    <Routes>
      <Route path='/' element={<><Navbar/>
      <Mobile_list/></>}/>
      <Route path='/mobile/:Id' element={<Mobile/>}></Route>
    </Routes>
  </MobileData.Provider>
</Router>
  );
}

export default App;

import { Customertable } from './components/customersheet';
import { Addcustomer } from './components/addcustomer';
import { Editdetails } from './components/editdetails';
import { Viewcustomeretails } from './components/viewcustomer'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Customertable/>}/>
        <Route path='/add' element={<Addcustomer/>}/>
        <Route path='/edit/:sno' element={<Editdetails/>}/>
        <Route path='/view/:sno' element={<Viewcustomeretails/>}/>
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;

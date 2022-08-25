import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './Components/Home/Home'
import Company from './Components/Company/Company';
import Products from './Components/Products/Products';
import ContactUs from './Components/ContactUs/ContactUs';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/company' element={<Company/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
      </Routes>
    </div>
  );
}

export default App;

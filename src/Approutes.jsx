import Shutter from './Shutter';
import About from './pages/About/About';
import Blogreading from './pages/Blogs/Blogreading/Blogreading';
import Blogs from './pages/Blogs/Blogs';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Allportfolio from './pages/Portfolio/Allportfolio/Allportfolio';
import Portfolio from './pages/Portfolio/Portfolio';
import Services from './pages/Services/Services';
import { Routes, Route } from 'react-router-dom';


function Approutes() {
  return (

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service' element={<Services />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/allprojects' element={<Allportfolio/>} />
        <Route path='/blogdetail' element={<Blogreading/>} />
        <Route path='/contactus' element={<Contact/>} />
        <Route path='/shutter' element={<Shutter/>} />
      </Routes>


  );
}

export default Approutes;

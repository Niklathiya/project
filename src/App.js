import './App.css';
import Pr2 from './Pr2_explorer';
import Home from './pages/Home.js'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact';
import{
  Routes, Route
}from "react-router-dom"
import Layout from './Layout';
import Exam1 from './Exam1';
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  
  return (
    <div className="App">
        {/* <Pr2/> */}
        {/* <Exam1/> */}
      <Routes>
        <Route path='/' element={<Layout><Home/></Layout>}  />
        <Route path='/About' element={<Layout><About/></Layout>}  />
        <Route path='/Services' element={<Layout><Services/></Layout>}  />
        <Route path="/Contact" element={<Layout><Contact/></Layout>} />
      </Routes>
        
    </div>
  );
}

export default App;

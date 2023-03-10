import './App.css';
// import Pr1 from './Pr1_circlet';
import Pr2 from './Pr2_explorer';
import Home from './pages/Home.js'
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
        {/* <Pr1/> */}
        <Pr2/>
        {/* <Exam1/> */}
      {/* <Routes>
        <Route path='/Home' element={<Layout><Home/></Layout>}  />
        <Route path="/Contact" element={<Contact/>} />
      </Routes> */}
        
    </div>
  );
}

export default App;

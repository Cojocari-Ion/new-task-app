import logo from './logo.svg';
import './App.css';
import Navbar from './commponents/Navbar/Navbar';
import FormAndGrid from './commponents/FormAndGrid/FormAndGrid';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";


function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        
        <h1 className='heading'>
          search name
        </h1>

        <Routes> 
          <Route path="/" element={<FormAndGrid />} />
          <Route path="/:id" element={<FormAndGrid />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;

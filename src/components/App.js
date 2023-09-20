import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './HOME/Home';
export default function App(){
  return(
    <>
      <Router>
      

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={''} />
        <Route path="/contact" element={''} />
      </Routes>
    </Router>
    </>
  )
}
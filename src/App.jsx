import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
// import About from './pages/About';
import Home from './pages/home/Home';
// import ScrollToTop from './ScrollToTop';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      {/* <ScrollToTop /> */}
      {/* <MainLayout> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      {/* </MainLayout> */}
    </div>
  )
}

export default App
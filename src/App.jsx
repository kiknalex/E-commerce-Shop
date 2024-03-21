import {BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from "./components/Home/Home"
import './index.css'

function App() {

  return (
    <BrowserRouter>
      <div>
      <Header />
      
      
      
      </div>

      <Routes>
      <Route path='/' element={<Home />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Contact from './views/Contact'
import Header from './views/Header'
import './styles/App.scss'


function App() {


  return (

     <BrowserRouter>

       <Header />

       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/contact" element={<Contact />} />
       </Routes>

     </BrowserRouter>

  )
}

export default App

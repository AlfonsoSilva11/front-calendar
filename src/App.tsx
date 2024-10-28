import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import { ToastContainer } from "react-toastify"
import 'react-toastify/ReactToastify.css';

function App(){

  return (
    <>
     <BrowserRouter basename="/">
     <Routes>
<Route path="/" element={<Home/>} />
<Route path="/about" element={<About/>}/>
     </Routes>
     <ToastContainer position='top-right'
        pauseOnHover={false}
        pauseOnFocusLoss={false}
      />
     </BrowserRouter>
    </>
  )
}

export default App



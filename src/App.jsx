import { Routes, Route  } from "react-router-dom"
import AboutUsSection from "./components/AboutUs"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import CareerPage from "./pages/CareerPage"
import ContactPage from "./pages/ContactPage"
import HomePage from "./pages/HomePage"
import ProductGrid from "./components/ProductGrid"
import CategoryPage from "./pages/CategoryPage"
import Footer from "./components/Footer"

function App() {
  

  return (
    <>
     
      <Navbar />
        <Routes>
           <Route path="/" element= {<HomePage/>}/>
           <Route path="/about" element={<AboutUsSection/>}/>
           <Route path="/career" element={<CareerPage />} />
           <Route path="/products" element={<ProductGrid />}/>
           <Route path="/products/:slug" element={<CategoryPage />}/>
           <Route path="/contact" element= {<ContactPage />}/>
       </Routes>
    <Footer/>
    </>   
  )
}

export default App

import { Routes, Route  } from "react-router-dom"
import AboutUsSection from "./components/AboutUs"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import CareerPage from "./pages/CareerPage"
import ContactPage from "./pages/ContactPage"
import HomePage from "./pages/HomePage"
import ProductGrid from "./components/ProductGrid"
import CategoryPage from "./pages/CategoryPage"
import CustomCursor from "./components/CustomCursor"
import Footer from "./components/Footer"
import ProductSection from "./components/ProductSection"
import { useEffect } from "react"
import WhatsAppFloat from "./components/WhatsAppFloat"

function App() {
   useEffect(() => {
    document.body.style.cursor = "url('/blue.cur'), auto";
  }, []);

  return (
    <div className="cursor-none">
     
      <Navbar />
      <CustomCursor/>
      <WhatsAppFloat/>
        <Routes>
           <Route path="/" element= {<HomePage/>}/>
           <Route path="/about" element={<AboutUsSection/>}/>
           <Route path="/career" element={<CareerPage />} />
           <Route path="/products" element={<ProductGrid />}/>
           {/* <Route path="/products/:slug" element={<CategoryPage />}/> */}
           <Route path="/contact" element= {<ContactPage />}/>
           <Route path="/product" element={<ProductSection/>}/>
       </Routes>
    <Footer/>
    </div>   
  )
}

export default App

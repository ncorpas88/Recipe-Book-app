import Navbar from "./Components/Navbar.jsx"
import Footer from "./Components/Footer.jsx"
import Sidebard from "./Components/Sidebard.jsx"
import recetasData from "./data/recetas.json"
import './App.css'
import { useState } from "react"




function App() {
  const [recetasObj, setRecetasObj] = useState(recetasData)

  return (
    <>
     <Navbar />
     <Sidebard />
     <Footer />
     

    </>
  )
}

export default App

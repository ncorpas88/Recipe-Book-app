import Navbar from "./Components/Navbar.jsx"
import Footer from "./Components/Footer.jsx"
import Sidebard from "./Components/Sidebard.jsx"
import recetasData from "./data/recetas.json"
import './App.css'
import { useState } from "react"

const [recetasObj, setRecetasObj] = useState(recetasData)

function App() {
  

  return (
    <>
     <Navbar />
     <Sidebard />
     <Footer />

    </>
  )
}

export default App

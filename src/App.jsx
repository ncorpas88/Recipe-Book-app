import HomePage from "./pages/Homepage";
import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebard from "./Components/Sidebar";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import RecipeList from "./pages/RecipeList";
import ItemDetails from "./pages/ItemDetails";
import AboutUs from "./pages/Aboutus";
import Error from "./pages/error";

function App() {
  return (
    <>
      <Navbar />
      <Sidebard />
      
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/recipeList" element={<RecipeList />} />
        <Route path="*" element={<Error/> }/>
        <Route path="/recipeList/:idRecipe" element={<ItemDetails />}/>
      
      </Routes>
      <Footer />
    </>
  );
}

export default App;

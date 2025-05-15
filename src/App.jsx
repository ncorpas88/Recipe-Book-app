import HomePage from "./pages/Homepage";
import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebard from "./Components/Sidebar";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import RecipeList from "./pages/RecipeList";
import ItemDetails from "./pages/ItemDetails";

function App() {
  return (
    <>
      <Navbar />
      <Sidebard />
      
      <Routes>

        <Route path="/" element={<HomePage />} />
        {/*<Route path="/about" element={<About />} />*/}
        <Route path="/recipeList" element={<RecipeList />} />
        {/*<Route path="*" element={<NotFound/> }/>*/}
        <Route path="/recipeList/:idRecipe" element={<ItemDetails />}/>
      
      </Routes>
      <Footer />
    </>
  );
}

export default App;

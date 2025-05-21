
import "./Homepage.css";
import chicote from "../assets/image/chicote.png";
import Formulario from "../Components/Formulario";
import ActualizarForm from "../Components/FormularioDeEdicion";


function HomePage({recipes,setRecipes}) {

  return (
    <>
      <div className="info-container">
        
        <img className="chicote" src={chicote} alt="chicotee" />
        <br />
        <br />
        <br />
        <div className="form-container">
        <Formulario recipes={recipes} setRecipes={setRecipes} />
        <br />
        <ActualizarForm recipes={recipes} setRecipes={setRecipes} />
        </div>
      </div>
    </>
  );
}

export default HomePage;

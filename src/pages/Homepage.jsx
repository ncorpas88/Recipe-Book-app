
import "./Homepage.css";
import chicote from "../image/chicote.png";
import Formulario from "../Components/Formulario";



function HomePage({recipes,setRecipes}) {
  

  return (
    <>
      <div className="info-container">
        <img className="chicote" src={chicote} alt="chicotee" />
        <br />
        <br />
        <br />
        <Formulario recipes={recipes} setRecipes={setRecipes} />
      </div>
    </>
  );
}

export default HomePage;

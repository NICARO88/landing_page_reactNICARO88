import './App.css';
import Jumbotron from "./componentes/Jumbotron";
import Navbar from './componentes/Navbar';
import Cards from './componentes/Cards';
import Footer from './componentes/Footer';

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="container">
        <div>
          <Jumbotron />
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          <div className="col mb-3">
            <Cards image="https://via.placeholder.com/150" title="Card 1" text="Descubre cómo nuestro software de gestión de proyectos te permite planificar, asignar y monitorear tus proyectos de manera eficiente y efectiva." />
          </div>
          <div className="col mb-3">
            <Cards image="https://via.placeholder.com/150/0000FF" title="Card 2" text="Mejora la comunicación y la colaboración entre tus equipos con nuestra plataforma de chat en tiempo real." />
          </div>
          <div className="col mb-3">
            <Cards image="https://via.placeholder.com/150/00FF00" title="Card 3" text="Optimiza tus procesos de ventas y atención al cliente con nuestra solución de automatización de ventas y CRM." />
          </div>
          <div className="col mb-3">
            <Cards image="https://via.placeholder.com/150/FF0000" title="Card 4" text="Aumenta la satisfacción del cliente y la retención con nuestra plataforma de análisis y segmentación de datos." />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

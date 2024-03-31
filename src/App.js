import './App.css';
import Jumbotron from "./componentes/Jumbotron";
import Navbar from './componentes/Navbar';
import Cards from './componentes/Cards';
import Footer from './componentes/Footer';
import Carousel from './componentes/Cardimage';
import Cardimage from './componentes/Cardimage';

function App() {
  return (
    <div>
    <Navbar />
    <div className = "container">
    <Jumbotron />
      <div className = "row">
        <div className = "col-6">
          <Cards colortype = "card text-bg-primary mb-3" header = "Card 1" title = "Card 1" text = "This is card 1"/> 
        </div>
        <div className = "col-6">
        <Cards colortype = "card text-bg-secondary mb-3" header = "Card 2" title = "Card 2" text = "This is card 2"/> 
        </div><div className = "col-6">
        <Cards colortype = "card text-bg-success mb-3 cards" header = "Card 3" title = "Card 3" text = "This is card 3"/> 
        </div><div className = "col-6">
        <Cards colortype = "card text-bg-danger mb-3 cards" header = "Card 4" title = "Card 4" text = "This is card 4"/> 
        </div>
      </div>
       <div><Cardimage /></div>
      <div>
        <Footer/>
      </div>
    </div>
    </div>
  );
}

export default App;
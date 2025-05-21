import './App.css';
import Home from './PortfolioContainer/Home/Home';
import AboutMe from './PortfolioContainer/AboutMe/AboutMe';
import Resume from './PortfolioContainer/Resume/Resume';
import Testimonial from './PortfolioContainer/Testimonial/Testimonial';
import ContactMe from './PortfolioContainer/ContactMe/ContactMe';

function App() {
  return (
    <>
      <div className="App">
      <section id="home"><Home/></section>
      <section id="about"><AboutMe/></section>
      <section id="resume"><Resume/></section>
      <section id="testimonial"><Testimonial/></section>
      <section id="contact"><ContactMe/></section>
      </div>
    </>
  )
}

export default App

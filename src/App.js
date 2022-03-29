// import logo from './logo.svg';
import './App.css';
import Nav from './Components/Navigation/Nav';
import Banner from './Components/Banner/Banner';
import Sliderbanner from './Components/SliderBanner/Sliderbanner';
import Aboutus from './Components/Aboutus/Aboutus';
import Services from './Components/Services/Services';
import Process from './Components/Process/Process';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Footer from'./Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <>
      <Nav></Nav>
      <Banner></Banner>
      <Sliderbanner></Sliderbanner>
      <Aboutus></Aboutus>
      <Services></Services>
      <Process></Process>
      <Blog></Blog>
      <Contact></Contact>
      <Footer></Footer>
      </>
    </div>
  );
}

export default App;

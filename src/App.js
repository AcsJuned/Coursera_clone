
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar2 from './Components/NavBar/NavBar2';
import HeroComponent from './Components/HeroComponent/HeroComponent ';
import HeroSubSection from './Components/HeroSubSection/HeroSubSection';
import CourseraPlus from './Components/CourseraPlus/CourseraPlus';
import ProductCardCollection from './Components/ProductCardCollection/ProductCardCollection';


function App() {
  return (
    <div className="App">
     <NavBar />
     <NavBar2/>
     <HeroComponent/>
     <HeroSubSection/>
     <CourseraPlus/>
     <ProductCardCollection/>
    </div>
  );
}

export default App;


import './App.css';
import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar2 from './Components/NavBar/NavBar2';
import HeroComponent from './Components/HeroComponent/HeroComponent ';
import HeroSubSection from './Components/HeroSubSection/HeroSubSection';
import CourseraPlus from './Components/CourseraPlus/CourseraPlus';
import ProductCardCollection from './Components/ProductCardCollection/ProductCardCollection';
import SearchComponent from './Components/SearchComponent/SearchComponent';
import Testimonials from './Components/Testimonials/Testimonials';
import PriceComparison from './Components/PriceComparison/PriceComparison';
import FAQComponent from './Components/FAQComponent/FAQComponent';
import Subcription from './Components/Subscription/Subscription';
import Footer from './Components/Footer/Footer';
import { navbar2_json, navbar_json } from './Components/JSON_File';


function App() {
  return (
    <div className="App">
     <NavBar  data={navbar_json}/>
     <NavBar2  data={navbar2_json}/>
     <HeroComponent/>
     <HeroSubSection/>
     <CourseraPlus/>
     <ProductCardCollection/>
     <SearchComponent/>
     <Testimonials/>
     <PriceComparison/>
     <FAQComponent/>
     <Subcription/>
     <Footer/>
    </div>
  );
}

export default App;

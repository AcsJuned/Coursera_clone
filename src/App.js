
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
import { courSeraPlus, faqComponent, footer, heroComponent, heroSubSection, navbar2_json, navbar_json, priceComparison, productCardCollection, searchComponent, subsCription, testimonials } from './Components/JSON_File';


function App() {
  return (
    <div className="App">
    {navbar_json && ( <NavBar  data={navbar_json}/>)} 
   { navbar2_json && (<NavBar2  data={navbar2_json}/> )}
   {heroComponent &&( <HeroComponent data={heroComponent}/>)}
   {heroSubSection && (<HeroSubSection data = {heroSubSection}/>)}
   {courSeraPlus &&  (<CourseraPlus data = {courSeraPlus} />)}
   {productCardCollection && (<ProductCardCollection data = {productCardCollection}/>)}
   {searchComponent && ( <SearchComponent data = {searchComponent}/>)}
    {testimonials &&(<Testimonials data = {testimonials}/>)}
   {priceComparison &&( <PriceComparison data = {priceComparison}/>)}
    {faqComponent &&( <FAQComponent data = {faqComponent} />)}
    {subsCription && (<Subcription data = {subsCription}/>)}
    {footer && ( <Footer data = {footer}/>)}
    </div>
  );
}

export default App;

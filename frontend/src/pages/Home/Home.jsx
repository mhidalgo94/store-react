import SliderHome from "../../components/Slider/SliderHome";
import AdProducts from "../../components/AdProducts/AdProducts";
import './Home.scss';
import Contact from "../../components/Contact/Contact";

function Home() {
  
  return (
    <div className='home'>
      <SliderHome />
      <AdProducts />
      <Contact />
    </div>
  )
}
export default Home;
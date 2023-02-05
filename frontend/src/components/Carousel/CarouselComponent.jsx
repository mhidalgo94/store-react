import Carousel from 'react-material-ui-carousel'; 
import ItemsCarousel from './ItemsCarousel';
import value from './CarouselData'
export default function CarouselComponent() {

  return (
    <Carousel height='500px' >
      {value.map((item,index)=>{
        return <ItemsCarousel item={item} key={index}/>
      })}
    </Carousel>
  )
}

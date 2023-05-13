import { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './MiniSlider.scss';
export default function MiniSlider({values, imageSelected,setImageSelected}) {
    
    const [currentSlider,setcurrentSlider] = useState(0);
    const prevImage=()=>{
        setcurrentSlider(currentSlider === 0 ? 1 : (prev) => prev - 1);

      }

      const nextImage = ()=>{
        setcurrentSlider(currentSlider === (values.images.length - 3) ? 0 : (prev) => prev + 1);
      }

      const styleIcons = {
        zIndex:'10',
        height:'100%',
        backgroundColor:'#F6F9FC'
      }


  return (
    <div className="slider-images">
        {values.images.length > 4 && <ArrowBackIosIcon onClick={prevImage} sx={styleIcons}/>}
        <div className="images" style={{transform:`translateX(-${(currentSlider * 100)/2}px)`}} >
            {values.images.map((value,index)=>{
                return (
                <img key={index} 
                    onClick={()=>setImageSelected(index)} 
                    className='image' 
                    src={value} 
                    data-select={Boolean(imageSelected === index)} 
                    alt={`${values.title}-${index + 1}`} />
                )
            })}
            
        </div>
        {values.images.length > 4 && <ArrowForwardIosIcon  onClick={nextImage} sx={styleIcons}/>}

        
    </div>
  )
}

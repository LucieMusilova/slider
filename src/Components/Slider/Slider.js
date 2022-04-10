import React, {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1);

    React.useEffect(() => {

      setTimeout(
        () => {
          if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }},
        2500
      );
  
      return () => {};
    }, [slideIndex]);


    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
          <div className="container-carousel">
            {dataSlider.map((obj, index) => {
                return (
                        <img 
                        key={obj.id}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                        src={obj.src} alt={obj.title}
                        />    
                )
            })}
          </div>

            
            <div className="container-move">
              
              <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

              <div className="container-dots">
                  {Array.from({length: 3}).map((item, index) => (
                      <div 
                      key={index}
                      onClick={() => moveDot(index + 1)}
                      className={slideIndex === index + 1 ? "dot active" : "dot"}
                      ></div>
                  ))}
              </div>

              <BtnSlider moveSlide={nextSlide} direction={"next"} />
            </div>  
        </div>
    )
}
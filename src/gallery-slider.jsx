import './css/fonts.css';
import './css/gallery-slider.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import globalContext from './context/global-context';
import Carousel from 'react-bootstrap/Carousel';
import { useEffect } from 'react';
import { useState } from 'react';

import React, { useRef} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


const GallerySlider = (props) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return ( 
        <div className='gallery-slider-container d-flex w-100 flex-column justify-content-start'>
            <div className=" p-4 d-flex flex-row justify-content-end">
                <span className='p-2 d-flex justify-content-center align-items-center' onClick={function(e){
                    let fullContainer=e.currentTarget.parentElement.parentElement.parentElement;
                    fullContainer.classList.remove("show");  
                    document.body.style.overflowY = 'scroll';
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </span>
            </div>
            <div className=" d-flex justify-content-center align-items-center flex-column">
                <div className=" p-3 d-flex justify-content-end align-items-center flex-column gap-5">
                    <Swiper
                        style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                        }}
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        {props.object.gallery ? props.object.gallery.slice(0,10).map((item,index)=>{
                            return(
                                <SwiperSlide key={index}>
                                    <img src={item}/>
                                </SwiperSlide>
                            )
                        }):null}
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={6}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        {props.object.gallery ? props.object.gallery.slice(0,10).map((item,index)=>{
                            return(
                                <SwiperSlide key={index}>
                                    <img src={item}/>
                                </SwiperSlide>
                            )
                        }):null}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
 
export default GallerySlider;
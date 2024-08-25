import './css/fonts.css';
import './css/gallery.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import globalContext from './context/global-context';
import Carousel from 'react-bootstrap/Carousel';
import { useEffect } from 'react';
import { useState } from 'react';
import GallerySlider from './gallery-slider';

const Gallery = (props) => {
    let globalCon=useContext(globalContext)
    const [clickedImg,setClickedImg]=useState();

    useEffect(()=>{
        if(props.object.img){
            setClickedImg(props.object.img);
        }
        // if(clickedCar.properties){
        //     setClickedCarPropKeys(Object.keys(clickedCar.properties));
        //     setClickedCarPropValues(Object.values(clickedCar.properties));

        // }
    },[props.object])
    

    return ( 
        <div className='gallery d-flex flex-column gap-3 h-100 container-fluid p-0 w-100'>
            <div className="p-0 m-0 d-flex main-img h-100 justify-content-center align-items-center">
                {clickedImg ?
                    <img src={clickedImg} className='object-fit-cover' alt="#" />
                :null}
                <div onClick={function(e){
                    document.body.style.overflowY = 'hidden';
                    let fullContainer=e.currentTarget.parentElement.parentElement.querySelector("div.gallery-full-container");
                    console.log(fullContainer);
                    fullContainer.classList.add("show");
                }}>
                    <span className='p-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-images" viewBox="0 0 16 16">
                            <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                            <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2M14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1M2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1z"/>
                        </svg>
                    </span>
                </div>
            </div>
            <div className="w-100 border rounded p-2 bg-light">
                <div className="gallery-container w-100 justify-content-end d-flex flex-row gap-2">
                    {props.object.gallery ? props.object.gallery.slice(0,10).map((item,index)=>{
                        if(index===props.object.gallery.slice(0,10).length-1){
                            return(
                                <div key={index} className="gallery-see-more" onClick={function(e){
                                    document.body.style.overflowY = 'hidden';
                                    let fullContainer=e.currentTarget.parentElement.parentElement.nextSibling;
                                    console.log(fullContainer);
                                    fullContainer.classList.add("show");
                                }}>
                                    <img src={item} alt="#" />
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-three-dots" viewBox="0 0 16 16">
                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                                        </svg>
                                    </span>
                                </div>
                            )
                        }
                        return(
                            <img key={index} src={item} alt="#" onClick={function(){
                                setClickedImg(item);
                            }}/>
                        )
                    }) : null}
                </div>
            </div>
            <div className="gallery-full-container position-fixed top-0 start-0">
                <GallerySlider object={props.object}></GallerySlider>
            </div>
        </div>
    );
}
 
export default Gallery;
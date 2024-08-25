import Header from "./header";
import './css/single-car-page.css';
import Footer from "./footer";
import { useEffect } from "react";
import HomePageMain from "./home-page-main";
import { useState } from "react";
import Ads from "./ads";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import globalContext from "./context/global-context";
import { Link } from "react-router-dom";
import PostCarousel from "./post-carousel";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import { Autoplay ,Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRef } from 'react';
import SwiperButtonNext from './swiper-button-next';
import SwiperButtonPrev from './swiper-button-prev';
import Carousel from 'react-bootstrap/Carousel';
import { Nav } from "react-bootstrap";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Pooster1 from "./pooster1";
import Gallery from "./gallery";
import IssuesWidget from "./issues-widget";




const SingleCarPage = () => {
    let params = useParams();
    let globalCon=useContext(globalContext);
    const [clickedCar,setClickedCar]=useState([]);
    const [clickedCarImg,setClickedCarImg]=useState();
    const [clickedCarPropKeys,setClickedCarPropKeys]=useState([]);
    const [clickedCarPropValues,setClickedCarPropValues]=useState([]);
    
    useEffect(()=>{
        for(let car of globalCon.cars){
            if(car.id===params.id){
                console.log("this is clicked car : ")
                console.log(car);
                setClickedCar(car);
            }
        }
    },[globalCon])

    function accordion(e){
        let allItems=e.currentTarget.parentElement.querySelectorAll("div.item");
        let allContents=e.currentTarget.parentElement.parentElement.querySelectorAll("div.content");
        let clickedItem=e.currentTarget;
        let number=e.currentTarget.attributes.number.value;
        for(let item of allItems){
            item.classList.remove("clicked")
        }
        clickedItem.classList.add("clicked");
        console.log("this is number : ")
        console.log(number)
        for(let content of allContents){
            content.classList.remove("show");
            if(content.attributes.number.value===number){
                content.classList.add("show");
            }
        }

    }

    useEffect(()=>{
        if(clickedCar.img){
            setClickedCarImg(clickedCar.img);
        }
        // if(clickedCar.properties){
        //     setClickedCarPropKeys(Object.keys(clickedCar.properties));
        //     setClickedCarPropValues(Object.values(clickedCar.properties));

        // }
    },[clickedCar])


    useEffect(()=>{
        console.log("this is properties keys : ")
        console.log(clickedCarPropKeys);
        console.log("this is properties values : ")
        console.log(clickedCarPropValues);

    },[clickedCarPropKeys,clickedCarPropValues])



    useEffect(() => {
        stickeyCheck()
    },[]);
    function stickeyCheck(){
        console.log("stickey check start");
        let bodyContainer=document.querySelector("div#single-car-page div#single-car-page-main>div.container>div.sticky>div.body-container");
        let sideContainer = document.querySelector("div#single-car-page div#single-car-page-main>div.container>div.sticky>aside.side-container");
        let sideWrapper = document.querySelector("div#single-car-page div#single-car-page-main>div.container>div.sticky>aside.side-container>div.aside-wrapper");
        sideWrapper.style.position="relative";
        window.onscroll=()=>{
            let viewportHeight = window.innerHeight;
            let bodyHeight=bodyContainer.getBoundingClientRect().height;
            let sideHeight=sideContainer.getBoundingClientRect().height;
            let wrapperHeight=sideWrapper.getBoundingClientRect().height;  
            let space=sideHeight-wrapperHeight;
            let wrapperWidth;
            if(sideWrapper.style.position==="relative"){
                wrapperWidth=sideWrapper.getBoundingClientRect().width;
            }  
            if(sideHeight>wrapperHeight){
                if(bodyHeight-viewportHeight>0 && bodyContainer.getBoundingClientRect().bottom-viewportHeight<=space){
                    sideWrapper.style.position="fixed";
                    //پنجاه ارتفاع هدر است
                    // sideWrapper.style.top=0+"50"+"px";
                    sideWrapper.style.bottom=0+"px";
                    sideWrapper.style.width=wrapperWidth+"px";
                    sideWrapper.style.top="unset";
                    if(bodyContainer.getBoundingClientRect().bottom-viewportHeight<=0){
                        sideWrapper.style.position="relative";
                        sideWrapper.style.width="unset";
                        sideWrapper.style.bottom="unset";
                        sideWrapper.style.top=space+"px";
                    }
                }
                if(bodyContainer.getBoundingClientRect().bottom-viewportHeight>space){
                    // sideWrapper.style.width="2px";
                    sideWrapper.style.position="relative";
                    sideWrapper.style.width="unset";


                }

    
            }
        }

    }
    return (
        <div id="single-car-page">
            <Header></Header>
            <div id="single-car-page-main" className="container-fluid d-flex flex-column gap-5 w-100">
                <div className="container p-0">
                    <div className=" m-0 flex-column-reverse flex-md-row small-review">
                        <div className="col-md-6 col-12 ps-0 pt-3 p-md-0 ps-md-5  intro-text">
                            <div className="d-flex flex-row p-0 m-0 justify-content-between align-items-end">
                                <h1 className="">{clickedCar.title}</h1>
                                <div className="small-review-icons d-flex flex-row justify-content-end align-items-center gap-3 p-0 m-0">
                                    <span onClick={function(e){
                                        let redHeart=e.currentTarget.querySelector("svg.red-heart");
                                        redHeart.classList.toggle("show");
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-suit-heart" viewBox="0 0 16 16">
                                            <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-suit-heart-fill red-heart" viewBox="0 0 16 16">
                                            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"/>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-share" viewBox="0 0 16 16">
                                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="anchor-links">
                                <AnchorLink href="#review" className="btn">بررسی تخصصی</AnchorLink>
                                <AnchorLink href="#issue" className="btn">عیب یابی</AnchorLink>
                                <AnchorLink href="#properties" className="btn">مشخصات فنی</AnchorLink>
                            </div>
                            <p>
                                {clickedCar.intro}
                            </p>
                        </div>
                        <div className="col-md-6 col-12 p-0 intro-image d-flex flex-column gap-3">
                            <Gallery object={clickedCar}></Gallery>
                        </div>
                    </div>
                    <div className=" p-0 container-fluid">
                        <div className="w-100 pos-neg p-0 d-flex flex-column flex-md-row gap-3">
                            <div className="col ratings p-0 d-flex flex-column justify-content-start align-items-start gap-3">
                                {clickedCar.scales ? 
                                    clickedCar.scales.map((item,index)=>{
                                        return(
                                            <div className=" w-100 d-flex flex-column gap-1 p-0 m-0">
                                                <h4>{item.scale[0]}</h4>
                                                <div className="d-flex flex-row align-items-center gap-3 justify-content-between">
                                                    <div className="ratings-line">
                                                        <span className="h-100" style={{width:`${item.scale[1]*20}`+'%'}}>
                                                        </span>
                                                    </div>
                                                    <span className="ratings-number">
                                                        {item.scale[1]}
                                                    </span>
                                                </div>
                                            </div>
                                        )
                                    })
                                :null}
                            </div>
                            <hr className="pos-neg-hr d-none d-md-block"/>
                            <div className="col text-success">
                                <div className="p-3">نقاط قوت</div>
                                <ul className="list-group border-0 rounded-0 pos-neg-list">
                                    {clickedCar.positive ? clickedCar.positive.map((item,index)=>{
                                        return(
                                            <li key={index} className="list-group-item text-success d-flex flex-row justify-content-start align-items-center gap-2 border-0 px-5 w-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                                    <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                                </svg>
                                                {item}
                                            </li>
                                        )
                                    }):
                                        <li className="list-group-item border-0 px-5 w-100">ندارد</li>
                                    }
                                </ul>
                            </div>
                            <hr className="pos-neg-hr d-none d-md-block"/>
                            <div className="col text-danger">
                                <div className="p-3">نقاط ضعف</div>
                                <ul className="list-group border-0 rounded-0  pos-neg-list">
                                    {clickedCar.negative ? clickedCar.negative.map((item,index)=>{
                                        return(
                                            <li key={index} className="list-group-item border-0 rounded-0 text-danger d-flex flex-row justify-content-start align-items-center gap-2 border-0 px-5 w-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                                                </svg>
                                                {item}
                                            </li>
                                        )
                                    }):
                                        <li className="list-group-item border-0 px-5 w-100">ندارد</li>
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bg-primary p-0 container-fluid">
                        <Pooster1></Pooster1>
                    </div>
                    {/* <div className="main-content m-0 p-0">
                        <div className="items">
                            <div className="item clicked" number={0} onClick={function(e){
                                accordion(e);
                            }}>
                                بررسی تخصصی
                            </div>
                            <div className="item" number={1} onClick={function(e){
                                accordion(e);
                            }}>
                                مشخصات
                            </div>
                            <div className="item" number={2} onClick={function(e){
                                accordion(e);
                            }}>
                                عیب یابی و تعمیر
                            </div>

                        </div>
                        <div className="contents">
                            <div className=" content show" number={0}>
                                بررسی
                                <div className="p-5"></div>
                                <div className="p-5"></div>
                                <div className="p-5"></div>
                                <div className="p-5"></div>
                                <div className="p-5"></div>
                                <div className="p-5"></div>
                                <div className="p-5"></div>
                                <div className="p-5"></div>
                                <div className="p-5"></div>
                                <div className="p-5"></div>
                                <div className="p-5"></div>
                                <div className="p-5"></div>
                                <div className="p-5"></div>
                            </div>
                            <div className=" content" number={1}>
                                <ul>
                                    {clickedCarPropKeys ? clickedCarPropKeys.map((keyItem,keyIndex)=>{
                                        return(
                                            <li>
                                                <span>                                                
                                                    {keyItem}
                                                </span>
                                                {clickedCarPropValues ? clickedCarPropValues.map((valueItem,valueIndex)=>{
                                                    if(keyIndex===valueIndex){
                                                        return(
                                                            <span>{valueItem}</span>
                                                        )
                                                    }
                                                }) :null}
    
                                            </li>
                                            
                                            
                                        )
                                    }) : null}
                                </ul>
                            </div>
                            <div className="content" number={2}>
                                عیب یابی
                                <div className="p-5"></div>
                                <div className="p-5"></div>
                                <div className="p-5"></div>
                                <div className="p-5"></div>
                                <div className="p-5"></div>
                                <div className="p-5"></div>
                                <div className="p-5"></div>
                                <div className="p-5"></div>
                                <div className="p-5"></div>
                                <div className="p-5"></div>
                                <div className="p-5"></div>
                                <div className="p-5"></div>
                                <div className="p-5"></div>
                            </div>
                        </div>
                    </div> */}
                    <div className="m-0 row sticky">
                        <div className="body-container d-flex flex-column gap-3 p-0 ps-md-3 ">
                            <div className="gap-4 d-flex flex-column">
                                <span>مشخصات کلی :</span>
                                <div className="property-scrollable p-4 border rounded gap-5 d-flex flex-row flex-wrap">
                                    {clickedCar.company ? 
                                        <div className="property-container">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-building-gear" viewBox="0 0 16 16">
                                                <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6.5a.5.5 0 0 1-1 0V1H3v14h3v-2.5a.5.5 0 0 1 .5-.5H8v4H3a1 1 0 0 1-1-1z"/>
                                                <path d="M4.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm4.386 1.46c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
                                            </svg>                                    
                                            <div>
                                                کمپانی سازنده
                                                <span dir="ltr">
                                                    {clickedCar.company}
                                                </span>
                                            </div>
                                        </div>
                                    :null}
                                    {clickedCar.year ? 
                                        <div className="property-container">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-calendar4-week" viewBox="0 0 16 16">
                                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                                                    <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
                                                </svg>                                            
                                                <div>
                                                سال تولید
                                                <span dir="ltr">
                                                    {clickedCar.year}
                                                </span>
                                            </div>
                                        </div>
                                    :null}
                                    {clickedCar.price ? 
                                        <div className="property-container">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-currency-dollar" viewBox="0 0 16 16">
                                                    <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/>
                                                </svg>                                            
                                                <div>
                                                قیمت عرضه
                                                <span dir="ltr">
                                                    {clickedCar.price}
                                                </span>
                                            </div>
                                        </div>
                                    :null}
                                    {clickedCar.price ? 
                                        <div className="property-container">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-arrows-vertical" viewBox="0 0 16 16">
                                            <path d="M8.354 14.854a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 13.293V2.707L6.354 3.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 2.707v10.586l1.146-1.147a.5.5 0 0 1 .708.708z"/>
                                            </svg>                                    
                                            <div>
                                                قیمت عرضه
                                                <span dir="ltr">
                                                    {clickedCar.price}
                                                </span>
                                            </div>
                                        </div>
                                    :null}
                                    {clickedCar.price ? 
                                        <div className="property-container">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-arrows-vertical" viewBox="0 0 16 16">
                                            <path d="M8.354 14.854a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 13.293V2.707L6.354 3.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 2.707v10.586l1.146-1.147a.5.5 0 0 1 .708.708z"/>
                                            </svg>                                    
                                            <div>
                                                قیمت عرضه
                                                <span dir="ltr">
                                                    {clickedCar.price}
                                                </span>
                                            </div>
                                        </div>
                                    :null}

                                </div>
                            </div>
                            <span id="review"></span>
                            <div className="d-flex flex-column m-0 p-0 gap-2">
                                <div className="w-100 rounded section-header d-flex flex-row align-items-center gap-3">
                                    <span className="rounded d-flex justify-content-center align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-tags-fill" viewBox="0 0 16 16">
                                          <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                                          <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043z"/>
                                        </svg>
                                    </span>
                                    <span>بررسی تخصصی {clickedCar.title}</span>
                                </div>
                                <div className="w-100 section-body p-0 py-4">
                                    <div className="content-container pe-1 ">
                                        <p>
                                            با این که شفافیت یکی از چالش‌های تبلیغات در قالب ریتیل مدیا است اما پاکزاد می‌گوید چالش جدی‌تری در این حوزه وجود دارد و این طور توضیحش می‌دهد:
                                            «چالش مهمی که وجود دارد به چگونگی استفاده از داده‌های کاربران برای انجام تبلیغ مربوط می‌شود؛ در این زمینه مساله حریم شخصی افراد مطرح می‌شود. از یک سو این موضوع مطرح است که طوری نباشد که بتوان از بررسی رفتار به کاربر رسید و به اطلاعات بسیاری که پلتفرم‌ از کاربر دارد دسترسی داشت. ایجاد تعادل در این مساله یکی از چالش‌های مهم این حوزه در دنیاست. از سوی دیگر هم نباید کاربر را با تبلیغات آزار بدهیم؛ باید فقط تبلیغ کالایی را نشان بدهیم که کاربر واقعا آن را می‌خواهد و قصد خریدش را دارد. هرچه دیتای دست اول بیشتری از کاربر داشته باشیم عملا تبلیغات کمتر آزاردهنده خواهند بود.»
                                            ریتیل مدیا با همه ویژگی‌ها و تکیه‌ای که بر تکنولوژی دارد می‌خواهد ضمن افزایش فروش و سود تبلیغ‌کننده، عرصه رقابت را داغ‌تر کند. در کنار این اهداف قصد این گونه تبلیغات هدفمند کردن هرچه بیشتر تبلیغات است تا هم هزینه‌ای که کسب‌وکارها برای تبلیغ می‌کنند به دست مشتری درست برسد و خرید اتفاق بیفتد، هم کاربران با انبوهی از تبلیغات نامناسب که هیچ ارتباطی با آن‌ها ندارد آزار نبینند.
                                        </p>
                                        <img src={clickedCar.img} alt="" />
                                        <p>
                                            با این که شفافیت یکی از چالش‌های تبلیغات در قالب ریتیل مدیا است اما پاکزاد می‌گوید چالش جدی‌تری در این حوزه وجود دارد و این طور توضیحش می‌دهد:
                                            «چالش مهمی که وجود دارد به چگونگی استفاده از داده‌های کاربران برای انجام تبلیغ مربوط می‌شود؛ در این زمینه مساله حریم شخصی افراد مطرح می‌شود. از یک سو این موضوع مطرح است که طوری نباشد که بتوان از بررسی رفتار به کاربر رسید و به اطلاعات بسیاری که پلتفرم‌ از کاربر دارد دسترسی داشت. ایجاد تعادل در این مساله یکی از چالش‌های مهم این حوزه در دنیاست. از سوی دیگر هم نباید کاربر را با تبلیغات آزار بدهیم؛ باید فقط تبلیغ کالایی را نشان بدهیم که کاربر واقعا آن را می‌خواهد و قصد خریدش را دارد. هرچه دیتای دست اول بیشتری از کاربر داشته باشیم عملا تبلیغات کمتر آزاردهنده خواهند بود.»
                                            ریتیل مدیا با همه ویژگی‌ها و تکیه‌ای که بر تکنولوژی دارد می‌خواهد ضمن افزایش فروش و سود تبلیغ‌کننده، عرصه رقابت را داغ‌تر کند. در کنار این اهداف قصد این گونه تبلیغات هدفمند کردن هرچه بیشتر تبلیغات است تا هم هزینه‌ای که کسب‌وکارها برای تبلیغ می‌کنند به دست مشتری درست برسد و خرید اتفاق بیفتد، هم کاربران با انبوهی از تبلیغات نامناسب که هیچ ارتباطی با آن‌ها ندارد آزار نبینند.
                                        </p>
                                        <p>
                                            با این که شفافیت یکی از چالش‌های تبلیغات در قالب ریتیل مدیا است اما پاکزاد می‌گوید چالش جدی‌تری در این حوزه وجود دارد و این طور توضیحش می‌دهد:
                                            «چالش مهمی که وجود دارد به چگونگی استفاده از داده‌های کاربران برای انجام تبلیغ مربوط می‌شود؛ در این زمینه مساله حریم شخصی افراد مطرح می‌شود. از یک سو این موضوع مطرح است که طوری نباشد که بتوان از بررسی رفتار به کاربر رسید و به اطلاعات بسیاری که پلتفرم‌ از کاربر دارد دسترسی داشت. ایجاد تعادل در این مساله یکی از چالش‌های مهم این حوزه در دنیاست. از سوی دیگر هم نباید کاربر را با تبلیغات آزار بدهیم؛ باید فقط تبلیغ کالایی را نشان بدهیم که کاربر واقعا آن را می‌خواهد و قصد خریدش را دارد. هرچه دیتای دست اول بیشتری از کاربر داشته باشیم عملا تبلیغات کمتر آزاردهنده خواهند بود.»
                                            ریتیل مدیا با همه ویژگی‌ها و تکیه‌ای که بر تکنولوژی دارد می‌خواهد ضمن افزایش فروش و سود تبلیغ‌کننده، عرصه رقابت را داغ‌تر کند. در کنار این اهداف قصد این گونه تبلیغات هدفمند کردن هرچه بیشتر تبلیغات است تا هم هزینه‌ای که کسب‌وکارها برای تبلیغ می‌کنند به دست مشتری درست برسد و خرید اتفاق بیفتد، هم کاربران با انبوهی از تبلیغات نامناسب که هیچ ارتباطی با آن‌ها ندارد آزار نبینند.
                                        </p>
                                        <p>
                                            با این که شفافیت یکی از چالش‌های تبلیغات در قالب ریتیل مدیا است اما پاکزاد می‌گوید چالش جدی‌تری در این حوزه وجود دارد و این طور توضیحش می‌دهد:
                                            «چالش مهمی که وجود دارد به چگونگی استفاده از داده‌های کاربران برای انجام تبلیغ مربوط می‌شود؛ در این زمینه مساله حریم شخصی افراد مطرح می‌شود. از یک سو این موضوع مطرح است که طوری نباشد که بتوان از بررسی رفتار به کاربر رسید و به اطلاعات بسیاری که پلتفرم‌ از کاربر دارد دسترسی داشت. ایجاد تعادل در این مساله یکی از چالش‌های مهم این حوزه در دنیاست. از سوی دیگر هم نباید کاربر را با تبلیغات آزار بدهیم؛ باید فقط تبلیغ کالایی را نشان بدهیم که کاربر واقعا آن را می‌خواهد و قصد خریدش را دارد. هرچه دیتای دست اول بیشتری از کاربر داشته باشیم عملا تبلیغات کمتر آزاردهنده خواهند بود.»
                                            ریتیل مدیا با همه ویژگی‌ها و تکیه‌ای که بر تکنولوژی دارد می‌خواهد ضمن افزایش فروش و سود تبلیغ‌کننده، عرصه رقابت را داغ‌تر کند. در کنار این اهداف قصد این گونه تبلیغات هدفمند کردن هرچه بیشتر تبلیغات است تا هم هزینه‌ای که کسب‌وکارها برای تبلیغ می‌کنند به دست مشتری درست برسد و خرید اتفاق بیفتد، هم کاربران با انبوهی از تبلیغات نامناسب که هیچ ارتباطی با آن‌ها ندارد آزار نبینند.
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <span id="properties"></span>
                            <div className="d-flex flex-column m-0 p-0 gap-2">
                                <div className="w-100 rounded section-header d-flex flex-row align-items-center gap-3">
                                    <span className="rounded d-flex justify-content-center align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-tags-fill" viewBox="0 0 16 16">
                                          <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                                          <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043z"/>
                                        </svg>
                                    </span>
                                    <span>مشخصات فنی {clickedCar.title}</span>
                                </div>
                                <div className="w-100 p-0 section-body flex-wrap d-flex flex-row">
                                    <ul className="list-group properties-list rounded-0 w-100">
                                        {clickedCar.properties ? clickedCar.properties.map((item,index)=>{
                                            return(
                                                <li key={index} className="list-group-item border-0 border-bottom d-flex flex-row gap-4 p-3">
                                                    <span className="w-25">                                                
                                                        {item.property[0]}
                                                    </span>
                                                    <span className="d-flex flex-column gap-3">
                                                        {item.property.slice(1,1000).map((i,x)=>{
                                                            return(
                                                                <div>{i}</div>
                                                            )
                                                        })}
                                                    </span>
                                                </li>

                                                
                                            )
                                        }) : null}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <aside className="d-none d-md-block side-container p-0 ">
                            <div className="aside-wrapper">
                                {/* هیچ عنصری مارجین نباید داشته باشد */}
                                <div className="latest-posts p-0 pe-3 d-flex flex-column gap-3 m-0">
                                <Ads adsId={[2]}></Ads>
                                <Ads adsId={[4]}></Ads>
                                <div className="row p-2 rounded m-0">
                                        آخرین مطالب
                                    </div>
                                    <div className="d-flex flex-column gap-3 p-0 m-0">
                                        {globalCon.posts ? globalCon.posts.slice(0,5).map((item,index)=>{
                                            return(
                                                <Link key={index} to={"#"} className="p-0 item">
                                                    <img src={item.img} alt="" />
                                                    <span className="title">
                                                        <h4>
                                                            {item.title}
                                                        </h4>
                                                    </span>
                                                    <div className="bottom">
                                                        <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                                              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                                                              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                                                            </svg>
                                                            {item.readingTime}
                                                        </span>
                                                    </div>
                                                </Link>
                                            )
                                        }):null}
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>                    
                </div>
                <div className="container-fluid p-0 bg-dark">
                    <IssuesWidget object={clickedCar}></IssuesWidget>
                </div>
                <div className="container p-0">
                    <div className="m-0 p-0">
                            {/* PostCarousel can have this propses : title , mother , seeAllUrl */}

                        <PostCarousel slideSpace={30} slideNum={4} title={`مطالب مرتبط با ${clickedCar.title}`} mother={"news-&-articles"} label={["خودروی 001"]}></PostCarousel>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
 
export default SingleCarPage;
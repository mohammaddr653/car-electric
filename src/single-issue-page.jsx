import Header from "./header";
import './css/single-issue-page.css';
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




const SingleIssuePage = () => {
    let params = useParams();
    let globalCon=useContext(globalContext);

    useEffect(() => {
        stickeyCheck()
    },[]);
    function stickeyCheck(){
        console.log("stickey check start");
        let bodyContainer=document.querySelector("div#single-issue-page div#single-issue-page-main>div.container>div.sticky>div.body-container");
        let sideContainer = document.querySelector("div#single-issue-page div#single-issue-page-main>div.container>div.sticky>aside.side-container");
        let sideWrapper = document.querySelector("div#single-issue-page div#single-issue-page-main>div.container>div.sticky>aside.side-container>div.aside-wrapper");
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
        <div id="single-issue-page">
            <Header></Header>
            <div id="single-issue-page-main" className="container-fluid d-flex flex-column gap-5 w-100">
                <div className="container p-0">
                    <div className="m-0 d-flex flex-row sticky">
                        <div className="body-container bg-danger d-flex flex-column gap-3 p-0 ps-md-3 ">
                            <div className="bg-success">
                                sdsd
                            </div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>
                            <div>sdsd</div>

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
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
}
 
export default SingleIssuePage;
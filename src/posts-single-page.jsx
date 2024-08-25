import Header from "./header";
import './css/posts-single-page.css';
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
import Sticky from "./sticky";
import StickyBody from "./sticky-body";
import StickyAside from "./sticky-aside";




const  PostsSinglePage= () => {
    let params = useParams();
    let globalCon=useContext(globalContext);

    return (
        <div id="posts-single-page">
            <Header></Header>
            <div id="posts-single-page-main" className="container-fluid d-flex flex-column gap-5 w-100">
                <div className="container p-0">
                    <Sticky>
                        <StickyBody>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>

                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>

                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                            <div className="bg-danger m-0 p-0">sdsd</div>
                        </StickyBody>
                        <StickyAside showinmobile={false}>
                            <div className="aside-wrapper rounded overflow-hidden">
                                {/* هیچ عنصری مارجین نباید داشته باشد */}
                                <div className="latest-posts p-0 d-flex flex-column gap-3 m-0">
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
                        </StickyAside>
                    </Sticky>       
                    <div className="bg-primary">sds</div> 
                    <div className="bg-primary">sds</div> 
                    <div className="bg-primary">sds</div> 
                    <div className="bg-primary">sds</div> 
                </div>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
}
 
export default PostsSinglePage;
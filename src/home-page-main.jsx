import './css/fonts.css';
import './css/home-page-main.css';
import Banner from './banner';
import Ads from './ads';
import { useEffect } from 'react';
import ThreeBox from './three-box';
import PostCarousel from './post-carousel';
import PostList from './post-list';
import Pooster1 from "./pooster1";
const HomePageMain = () => {
    // useEffect(() => {
    //     sideBarStick();
    // },[]);

    // function sideBarStick(){
    //     let archBody=document.getElementsByClassName("main-page-arch-body")[0];
    //     let sidebar = document.getElementsByClassName("main-page-arch-side")[0];
    //     let sidebar_content = document.getElementsByClassName("arch-side-wrapper")[0];
    //     window.onscroll=()=>{
    //         let scrollTop = window.scrollY;
    //         let viewportHeight = window.innerHeight;
    //         let sidebarTop = sidebar.getBoundingClientRect().top + window.pageYOffset;
    //         let sidebarHeight=sidebar.getBoundingClientRect().height;
    //         let contentHeight = sidebar_content.getBoundingClientRect().height;
    //         if(window.innerWidth>=1170 && sidebar_content.clientHeight<archBody.clientHeight){
    //             if(contentHeight+sidebarTop>viewportHeight){
    //                 if( scrollTop >= contentHeight - viewportHeight + sidebarTop) {
    //                     sidebar_content.style.transform = `translateY(-${(contentHeight - viewportHeight + sidebarTop)}px)`;
    //                     sidebar_content.style.position  = "fixed"; 
    //                     sidebar_content.style.top  = ""; 
    //                     sidebar_content.style.width=sidebar.clientWidth+"px";

         
    //                   }
    //                   else {
    //                     sidebar_content.style.transform = "";
    //                     sidebar_content.style.position  = "static"; 
    //                     sidebar_content.style.top  = ""; 
    //                     sidebar_content.style.width="";

         
    //                   }     
    //                 if(viewportHeight>=sidebarHeight+sidebar.getBoundingClientRect().top){
    //                     sidebar_content.style.position  = "relative"; 
    //                     sidebar_content.style.transform = "";
    //                     sidebar_content.style.top  = sidebarHeight-contentHeight+"px"; 
    //                     sidebar_content.style.width="";

    
    //                 }
    //             }else{
    
    //                 if( scrollTop >= sidebarTop-50) {
    //                     sidebar_content.style.position  = "fixed"; 
    //                     sidebar_content.style.top  = "50px"; 
    //                     sidebar_content.style.width=sidebar.clientWidth+"px";

         
    //                 }
    //                   else {
    //                     sidebar_content.style.transform = "";
    //                     sidebar_content.style.position  = "static"; 
    //                     sidebar_content.style.top  = ""; 
    //                     sidebar_content.style.width="";

         
    //                   }
    
    //                 if(scrollTop-620>=sidebarHeight-contentHeight){
    //                     sidebar_content.style.position  = "relative"; 
    //                     sidebar_content.style.top  = sidebarHeight-contentHeight+"px";
    //                     sidebar_content.style.width="";
 
    
    //                 }
    //             }
    
    //         }
    //         else{
    //             sidebar_content.style.transform = "";
    //             sidebar_content.style.position  = "static"; 
    //             sidebar_content.style.top  = ""; 
    //             sidebar_content.style.width="";
    //         }
    //     }

    // }
    useEffect(() => {
        stickeyCheck()
    },[]);
    function stickeyCheck(){
        console.log("stickey check start");
        let bodyContainer=document.querySelector("div#main-page-arch-container div.sticky>div.body-container");
        let sideContainer = document.querySelector("div#main-page-arch-container div.sticky>aside.side-container");
        let sideWrapper = document.querySelector("div#main-page-arch-container div.sticky>aside.side-container>div.aside-wrapper");
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
        <main>
            <div id="home-page-main-container" className='container-fluid bg-light p-0 w-100'>
                <Banner></Banner>
                <div className="container bg-success p-0">
                    <Ads adsId={[1,3]}></Ads>
                </div>
                <div className="container bg-success p-0">
                    <Pooster1></Pooster1>
                </div>
                <div className="container p-0">
                    {/* PostCarousel can have this propses : title , slideSpace , slideNum , mother , seeAllUrl , label */}
                    {/* پیشنهاد سردبیر و پربازدید ترین مطالب دسته بندی های پنهان هستند بنابراین در اتربیوت مادر قرار می گیرد با عنوان admin-offer و most-seen */}

                    <PostCarousel slideSpace={30} slideNum={4} title={"پیشنهاد سردبیر"} mother={"admin-offer"} seeAllUrl={"https://digikala.com"} label={["ویدیو","مطلب"]}></PostCarousel>
                </div>


                {/* start for main archive */}

                <div id="main-page-arch-container" className='container-fluid w-100'>
                    <div className="container">
                        <div className="m-0 row sticky p-0">
                            <aside className="d-none d-md-block side-container p-0 ps-xl-5">
                                <div className="aside-wrapper d-flex flex-column gap-5">
                                    <Ads adsId={[5,6]}></Ads>
                                    {/* ThreeBox can have this propses : title , mother , seeAllUrl */}
                                    <ThreeBox title={"پربازدیدترین مطالب"} mother={"most-seen"} seeAllUrl={"https://digikala.com"}></ThreeBox>
                                    <Ads adsId={[2,4]}></Ads>
                                    <PostCarousel slideSpace={15} slideNum={2} cardStyle={"full-image"} title={"راهنمای خرید"} mother={"tech"} seeAllUrl={"https://digikala.com"}></PostCarousel>
                                    <Ads adsId={[8,7]}></Ads>
                                </div>
                            </aside>
                            <div className="body-container d-flex flex-column gap-3 p-0 py-4 pe-xl-4">
                                <PostList title={"آخرین مطالب"} mother={"news-&-articles"} seeAllUrl={"https://digikala.com"} label={["ویدیو","مطلب"]}></PostList>
                                {/* <PostList title={"آخرین مطالب"} seeAllUrl={"https://digikala.com"} label={["ویدیو","مطلب"]}></PostList> */}
                            </div>
                        </div>
                    </div>
                </div>


                {/* finish for main archive */}

            </div>
        </main>
    );
}
 
export default HomePageMain;
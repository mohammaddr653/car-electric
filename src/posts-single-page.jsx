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
    const[selectedPost,setSelectedPost]=useState([])

    useEffect(()=>{
        if(globalCon.posts){
            for(let item of globalCon.posts){
                if(item.id===params.postId){
                    setSelectedPost(item);
                }
            }
        }
    },[params.postId,globalCon.posts])


    useEffect(()=>{
        console.log("this is selected post")
        console.log(selectedPost);
    },[selectedPost])

    return (
        <div id="posts-single-page">
            <Header></Header>
            <div id="posts-single-page-main" className="container-fluid d-flex flex-column gap-5 w-100">
                <div className="container p-0">
                    <Sticky>
                        <StickyBody>
                            <div className="bg-light border rounded p-4 d-flex flex-column gap-3">
                                <div className=" p-0 d-flex flex-row justify-content-between align-items-center">
                                    <h1 className="fs-5 m-0">{selectedPost?.title}</h1>
                                </div>
                                <div className=" writing-info p-0 d-flex flex-row justify-content-start gap-2 align-items-center">
                                    <span className="rounded-circle overflow-hidden">
                                        <img src={`/images/${selectedPost?.authorImg}`} alt="" />
                                    </span>
                                    <h4 className="fs-6 m-0">{selectedPost?.authorName}</h4>
                                </div>
                            </div>
                            <img src={selectedPost?.img} alt="" />
                            <div className="content-container">
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
                                <p>
                                    با این که شفافیت یکی از چالش‌های تبلیغات در قالب ریتیل مدیا است اما پاکزاد می‌گوید چالش جدی‌تری در این حوزه وجود دارد و این طور توضیحش می‌دهد:
                                    «چالش مهمی که وجود دارد به چگونگی استفاده از داده‌های کاربران برای انجام تبلیغ مربوط می‌شود؛ در این زمینه مساله حریم شخصی افراد مطرح می‌شود. از یک سو این موضوع مطرح است که طوری نباشد که بتوان از بررسی رفتار به کاربر رسید و به اطلاعات بسیاری که پلتفرم‌ از کاربر دارد دسترسی داشت. ایجاد تعادل در این مساله یکی از چالش‌های مهم این حوزه در دنیاست. از سوی دیگر هم نباید کاربر را با تبلیغات آزار بدهیم؛ باید فقط تبلیغ کالایی را نشان بدهیم که کاربر واقعا آن را می‌خواهد و قصد خریدش را دارد. هرچه دیتای دست اول بیشتری از کاربر داشته باشیم عملا تبلیغات کمتر آزاردهنده خواهند بود.»
                                    ریتیل مدیا با همه ویژگی‌ها و تکیه‌ای که بر تکنولوژی دارد می‌خواهد ضمن افزایش فروش و سود تبلیغ‌کننده، عرصه رقابت را داغ‌تر کند. در کنار این اهداف قصد این گونه تبلیغات هدفمند کردن هرچه بیشتر تبلیغات است تا هم هزینه‌ای که کسب‌وکارها برای تبلیغ می‌کنند به دست مشتری درست برسد و خرید اتفاق بیفتد، هم کاربران با انبوهی از تبلیغات نامناسب که هیچ ارتباطی با آن‌ها ندارد آزار نبینند.
                                </p>
                            </div>
                        </StickyBody>
                        <StickyAside showinmobile={false}>
                            <div className="aside-wrapper rounded overflow-hidden">
                                {/* هیچ عنصری مارجین نباید داشته باشد */}
                                <div className="latest-posts p-0 d-flex flex-column gap-3 m-0">
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
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
 
export default PostsSinglePage;
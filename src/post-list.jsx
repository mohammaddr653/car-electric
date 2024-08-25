import './css/fonts.css';
import './css/post-list.css';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import globalContext from './context/global-context';
import { buildQueries } from '@testing-library/react';
import { useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRef } from 'react';
import SwiperButtonNext from './swiper-button-next';
import SwiperButtonPrev from './swiper-button-prev';




const PostList = (props) => {
    let globalCon=useContext(globalContext);
    const[contentArray,setContentArray]=useState([]);
    // const[Array,setContentArray]=useState([]);

    let a;
    const swiper=useSwiper();

    useEffect(()=>{
        a=[];
        for(let item of globalCon.posts){
            if(props.label && !props.mother){
                if(item.label.includes(props.label[0])){
                    a.push(item);
                }
            }
            if(props.label && props.mother){
                if(item.mother.includes(props.mother) && item.label.includes(props.label[0])){
                    a.push(item);
                }
            }
            if(!props.label && props.mother){
                if(item.mother.includes(props.mother)){
                    a.push(item);
                }
            }
            if(!props.label && !props.mother){
                a.push(item);
            }
        }
        for(let item of globalCon.cars){
            if(props.label && !props.mother){
                if(item.label.includes(props.label[0])){
                    a.push(item);
                }
            }
            if(props.label && props.mother){
                if(item.mother.includes(props.mother) && item.label.includes(props.label[0])){
                    a.push(item);
                }
            }
            if(!props.label && props.mother){
                if(item.mother.includes(props.mother)){
                    a.push(item);
                }
            }
            if(!props.label && !props.mother){
                a.push(item);
            }
        } 
        setContentArray([
            ...a
        ])                            
    },[globalCon.posts,globalCon.cars])

    function setData(e){
        let a=[];
        let target=e.currentTarget;
        let allButtons=target.parentElement.querySelectorAll("button");
        console.log(target);
        for(let button of allButtons){
            button.classList.remove("clicked");
        }
        target.classList.add("clicked");
        for(let content of globalCon.posts){
            if(props.mother && content.mother.includes(props.mother) && content.label.includes(target.attributes.label.value)){
                a.push(content);
            }
            if(!props.mother && content.label.includes(target.attributes.label.value)){
                a.push(content);

            }
        }
        for(let content of globalCon.cars){
            if(props.mother && content.mother.includes(props.mother) && content.label.includes(target.attributes.label.value)){
                a.push(content);
            }
            if(!props.mother && content.label.includes(target.attributes.label.value)){
                a.push(content);

            }
        }
        setContentArray([
            ...a
        ])                        

    }

    // useEffect(()=>{
    //     globalCon.posts.sort((a,b)=>new Date(b.date) - new Date(a.date));
    //     setContentArray(globalCon.posts);
    // },[globalCon.posts])


    return ( 
        <div className='post-list-container container-fluid w-100'>
            <div className='row close w-100 p-0'>
                <h4 role='button'>
                    {props.title}
                </h4>
                <hr />
            </div>
            <div className='row buttons w-100 p-0 m-0'>
                <div className=''>
                    {props.label? props.label.map((item,index)=>{
                        return(
                            <button key={index} className={index===0 ? 'post-list-batton clicked':'post-list-batton'} label={item} onClick={function(e){
                                setData(e);
                            }}>{item}</button>
                        )
                    }):null}
                </div>
            </div>

            <div className="post-list w-100 m-0">
                <ul>
                    {contentArray.map((item,index)=>{
                        return(
                            <li key={index} className={[5,10].includes(index) ? 'special' : null}>
                                <Link to={"#"}>
                                    <div className='li-right'>
                                        <div className='li-right-top'>
                                            <h4>{item.title}</h4>
                                            <span>
                                             گوگل به‌زودی امکان به‌روزرسانی اپلیکیشن‌های سایدلودشده را ازطریق پلی‌استور فراهم می‌کند.
                                            </span>
                                        </div>
                                        <div className='li-right-bottom'>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg"fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                                                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"></path>
                                                </svg>
                                                {item.commentsNum}
                                            </span>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                                                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                                                </svg>
                                                {new Date(item.date).getUTCFullYear()}
                                            </span>
                                            <span>
                                                {item.label}
                                            </span>
                                        </div>
                                    </div>
                                    <div className='li-left'>
                                        <img src={item.img} alt="#" />
                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="row see-all-url w-100 p-0 m-0">
                {props.seeAllUrl ?
                    <Link to={props.seeAllUrl}>
                        مشاهده همه
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                        </svg>
                    </Link>
                :null}
            </div>
        </div>
    );
}
 
export default PostList;
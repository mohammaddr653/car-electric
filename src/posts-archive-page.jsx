import Header from "./header";
import './css/posts-archive-page.css';
import Footer from "./footer";
import { useEffect, useState } from "react";
import HomePageMain from "./home-page-main";
import Ads from "./ads";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import globalContext from "./context/global-context";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Pagination from "./pagination";
const PostsArchivePage = () => {
    let location = useLocation();
    let params = useParams();
    let globalCon=useContext(globalContext);
    const navigate=useNavigate();
    const[posts,setPosts]=useState([]);
    const[archHead,setArchHead]=useState("همه");
    const[start,setStart]=useState();
    const[end,setEnd]=useState();

    useEffect(() => {
        stickeyCheck();
    },[]);
    function stickeyCheck(){
        console.log("stickey check start");
        let bodyContainer=document.querySelector("div#posts-archive-page div#posts-archive-page-main>div.container>div.sticky>div.body-container");
        let sideContainer = document.querySelector("div#posts-archive-page div#posts-archive-page-main>div.container>div.sticky>aside.side-container");
        let sideWrapper = document.querySelector("div#posts-archive-page div#posts-archive-page-main>div.container>div.sticky>aside.side-container>div.aside-wrapper");
        let header= document.querySelector("div#posts-archive-page div#header-container div.menu-top");
        sideWrapper.style.position="relative";
        window.onscroll=()=>{
            let viewportHeight = window.innerHeight;
            let bodyHeight=bodyContainer.getBoundingClientRect().height;
            let sideHeight=sideContainer.getBoundingClientRect().height;
            let wrapperHeight=sideWrapper.getBoundingClientRect().height;  
            let space=sideHeight-wrapperHeight;
            let headerHeight= header.clientHeight;
            let wrapperWidth;

            //if all wrapper content is visible in one height of the screen "stick to the top" if not "stick to the bottom"
            if(wrapperHeight+headerHeight>viewportHeight){
                console.log("bigger");
                sideWrapper.style.top="unset";
                if(sideWrapper.style.position==="relative"){
                    wrapperWidth=sideWrapper.getBoundingClientRect().width;
                }  
                if(sideHeight>wrapperHeight && window.innerWidth>992){
                    if(bodyHeight-viewportHeight>0 && bodyContainer.getBoundingClientRect().bottom-viewportHeight<=space){
                        sideWrapper.style.position="fixed";
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
            else{
                sideWrapper.style.bottom="unset";
                if(sideWrapper.style.position==="relative"){
                    wrapperWidth=sideWrapper.getBoundingClientRect().width;
                }  
                if(sideHeight>wrapperHeight && window.innerWidth>992){
                    if(bodyHeight-viewportHeight>0 && bodyContainer.getBoundingClientRect().top<=headerHeight){
                        sideWrapper.style.position="fixed";
                        sideWrapper.style.top=headerHeight+"px";
                        sideWrapper.style.width=wrapperWidth+"px";
                        if(-bodyContainer.getBoundingClientRect().top+headerHeight>space){
                            console.log("sd");
                            sideWrapper.style.position="relative";
                            sideWrapper.style.width="unset";
                            sideWrapper.style.top=space+"px";
                        }
                    }
                    if(bodyContainer.getBoundingClientRect().top>headerHeight){
                        sideWrapper.style.position="relative";
                        sideWrapper.style.width="unset";
                        sideWrapper.style.top="unset";

                    }
                }else{
                    sideWrapper.style.position="relative";
                    sideWrapper.style.width="unset";
                    sideWrapper.style.top="unset";
                }
            }
        }

    }

    useEffect(()=>{
        if(globalCon.posts){
            let a=[];
            for(let item of globalCon.posts){
                if(item.mother.includes(params.tag)){
                    a.push(item);
                }
            }
            setPosts([...a])
        }
        if(globalCon.secondClassMenu){
            for(let item of globalCon.secondClassMenu){
                if(item.tag===params.tag){
                    setArchHead(item.title)
                }
            }
        }
    },[params,globalCon.posts,globalCon.secondClassMenu])


    useEffect(()=>{
        console.log("this is start : ")
        console.log(start)
        console.log("this is end : ")
        console.log(end)

    },)

    return (
        <div id="posts-archive-page">
            <Header></Header>
            <div id="posts-archive-page-main" className="container-fluid w-100">
                <div className="container p-0">
                    <div className="m-0 d-flex flex-column flex-lg-row gap-lg-0 gap-3 sticky">
                        <aside className=" d-block side-container p-0 ps-lg-3">
                            <div className="aside-wrapper py-2 overflow-hidden">
                                {/* هیچ عنصری مارجین نباید داشته باشد */}
                                <div className="categories container d-flex flex-column p-0">
                                    <h4 className="fs-6 mb-3">دسته بندی ها</h4>
                                    <nav>
                                        <ul className="list-group">
                                            {globalCon.secondClassMenu?.map((item,index)=>{
                                                if(item.mother==="news-&-articles"){
                                                    return <li key={index} className="list-group-item bg-light" onClick={function(e){navigate(`/posts-archive/${item.tag}`)}}>{item.title}</li>
                                                }else{
                                                    return null
                                                }
                                            })}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </aside>
                        <div className="body-container py-2 d-flex flex-column gap-3 p-0 ">
                            <h4 className="fs-6 m-0">{archHead}</h4>
                            <div className="archive-main row row-cols-1 row-cols-md-3 rounded p-4 border m-0">
                                {posts?.slice(start,end).map((item,index)=>{
                                    return(
                                        <div className="post-card col p-2 overflow-hidden">
                                            <Link to={item.href}>
                                                <div>
                                                    <div className='image'> 
                                                        <img src={item.img} alt="#" />
                                                        {item.label ? 
                                                            <div className="image-icons">
                                                                {item.label.map((icon,iconIndex)=>{
                                                                    if(icon==="ویدیو"){
                                                                        return(
                                                                            <span key={iconIndex} className=''>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill p-0 m-0" viewBox="0 0 16 16">
                                                                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                                                                                </svg>
                                                                            </span>

                                                                        )
                                                                    }
                                                                    if(icon==="مطلب"){
                                                                        return(
                                                                            <span key={iconIndex} className=''>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-text-paragraph p-0 m-0" viewBox="0 0 16 16">
                                                                                    <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5"/>
                                                                                </svg>
                                                                            </span>
                                                                        )
                                                                    }
                                                                    else{
                                                                        return null;
                                                                    }

                                                                })}
                                                            </div>
                                                        :null}
                                                    </div>
                                                    <div className='caption'>
                                                        <div className="title w-100">
                                                            <h4>{item.title}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='bottom'>
                                                    <div className='right'>
                                                        <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat" viewBox="0 0 16 16">
                                                                <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
                                                            </svg>
                                                            {item.commentsNum}
                                                        </span>
                                                    </div>
                                                    <div className='left'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>
                            <Pagination mainobj={posts} start={setStart} end={setEnd} number={2}/>
                        </div>
                    </div>                    
                </div>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
}
 
export default PostsArchivePage;
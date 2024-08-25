import './css/fonts.css';
import './css/header.css';
import axios from 'axios';
import Search from './search';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { click } from '@testing-library/user-event/dist/click';
import globalContext from './context/global-context';
import LoginForm from './login-form';
import RegisterForm from './register-form';

const Header = () => {
    let globalCon=useContext(globalContext);


    function setScrollOptions(){
        var firstClassMenutainer=document.getElementById("header-container");
        let menuBottom=document.getElementsByClassName("menu-bottom")[0];
        var lastScrollTop = 0;
    
        window.addEventListener("scroll", function(){
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
            if(!(firstClassMenutainer.classList.contains==="header-container-change")){
                firstClassMenutainer.classList.add("header-container-change");
            } 
        } else if (st===0) {
            if(!menuBottom.classList.contains("open")){
                firstClassMenutainer.classList.remove("header-container-change");
            }
            lastScrollTop=st;
        }
        lastScrollTop = st <= 0 ? 0 : st;
        }, false);
    
    }
    
    useEffect(()=>{
        setScrollOptions();
        // toggleMobileMenu();
    },[])

    function checkThirdClass(e,handler){
        // document.querySelector
        let secondClassUl;
        if(handler==="firstClass"){
            secondClassUl=e.target.parentElement.querySelector("div.second-class-menu>div.second-class-menu-container>ul");
        }
        if(handler==="secondClass"){
            secondClassUl=e.target.parentElement.parentElement;
        }

        let div=e.target.parentElement.querySelector("div.third-class-menu");
        let ul=e.target.parentElement.querySelector("div.third-class-menu>ul");
        // checkMenuPos(e,div,handler);
        if(div && div.attributes.sizechecked.value==="false"){
            // let sizeChecked=div.attributes.sizechecked.value;
            //"چهل تا به ازای پدینگ که در استایل داده بودیم کم کردم"
            let divH=div.offsetHeight-40;
            let ulH=ul.offsetHeight;
            if(ulH>=divH){
                let divide=Math.trunc(ulH/divH+1);
                ul.style.columnCount=divide;
            }
            div.attributes.sizechecked.value="true";
        }
        if(div && secondClassUl){
            let divH=div.offsetHeight;
            let secondClassUlH=secondClassUl.offsetHeight;
            secondClassUl.style.height="100%";
            if(divH>=secondClassUlH){
                secondClassUl.style.height=divH+"px";
            }

        }
        else if(secondClassUl){
            secondClassUl.style.height="100%";
        }
    }

    return ( 
        <header>
            <div id="header-container" className='container-fluid p-0'>
                <div className="container-fluid p-0">
                    <div className="w-100 menu-top m-0 d-flex align-items-center justify-content-between">
                        <div className='menu-right'>
                            <div className='image'>
                                <Link to={"/"}>
                                
                                </Link>
                            </div>
                            <div className='d-none d-md-flex h-100'>
                                <nav className='h-100'>
                                    <ul>
                                        {globalCon.firstClassMenu ? globalCon.firstClassMenu.map((item,index)=>{
                                            return(
                                                <li key={index}>
                                                    <Link to={item.href} onMouseEnter={function(e){
                                                        checkThirdClass(e,"firstClass");
                                                    }}>
                                                        {item.title}
                                                    </Link>
                                                    {item.hasChild && globalCon.secondClassMenu ? 
                                                        <div className='second-class-menu'>
                                                            <div className='second-class-menu-container'>
                                                                <ul>
                                                                    {globalCon.secondClassMenu.map((secondItem,secondIndex)=>{
                                                                        if(secondItem.mother===item.tag){
                                                                            return(
                                                                                <li key={secondIndex} onMouseEnter={function(e){
                                                                                    checkThirdClass(e,"secondClass");
                                                                                }}>
                                                                                    <Link to={item.tag==="news-&-articles"?`/posts-archive/${secondItem.tag}`:"#"}>
                                                                                        {secondItem.title}
                                                                                    </Link>
                                                                                    {secondItem.hasChild && globalCon.thirdClassMenu ? 
                                                                                        <div className='third-class-menu' sizechecked="false">
                                                                                            <ul>
                                                                                                {globalCon.thirdClassMenu.map((thirdItem,thirdIndex)=>{
                                                                                                    if(thirdItem.mother===secondItem.tag){
                                                                                                        return(
                                                                                                            <li key={thirdIndex} onMouseEnter={function(){
                                                                                                                globalCon.setMenuImg(thirdItem.img);
                                                                                                            }}>
                                                                                                                <Link to={thirdItem.href}>
                                                                                                                    {thirdItem.title}
                                                                                                                </Link>
                                                                                                                {thirdItem.hasChild && globalCon.forthClassMenu ? 
                                                                                                                    <div className='forth-class-menu'>
                                                                                                                        <ul>
                                                                                                                            {globalCon.forthClassMenu.map((forthItem,forthIndex)=>{
                                                                                                                                if(forthItem.mother===thirdItem.tag){
                                                                                                                                    return(
                                                                                                                                        <li key={forthIndex}>
                                                                                                                                            <Link to={`/archive/${forthItem.category}/${forthItem.tag}`}>
                                                                                                                                                {forthItem.title}
                                                                                                                                            </Link>
                                                                                                                                        </li>
                                                                                                                                    )    
                                                                                                                                }else{return null}
                                                                                                                            })}
                                                                                                                        </ul>
                                                                                                                    </div>
                                                                                                                : null}
                                                                                                            </li>
                                                                                                        )    
                                                                                                    }else{return null}
                                                                                                })}
                                                                                            </ul>
                                                                                            <img src={globalCon.menuImg} alt="" className='d-none d-xl-flex' />
                                                                                        </div>
                                                                                    : null}
                                                                                </li>
                                                                            )    
                                                                        }else{
                                                                            return null
                                                                        }
                                                                    })}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    : null}
                                                </li>
                                            )
                                        }) : null}
                                    </ul>
                                </nav>
                                <button className="search " onClick={function(){
                                    let menuBottom=document.getElementsByClassName("menu-bottom")[0];
                                    menuBottom.classList.toggle("open");
                                    let bgDark=document.getElementsByClassName("menu-bottom-dark-face")[0];
                                    bgDark.classList.add("show");
                                    let firstClassMenutainer=document.getElementById("header-container");
                                    firstClassMenutainer.classList.add("header-container-change");

                                }}>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-search p-0 m-0" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                        </svg>
                                    </span>
                                    جستجو
                                </button>
                            </div>
                        </div>
                        <div className='menu-left d-flex flex-row h-100 justify-content-end align-items-center'>
                            <div className="user-btn-container h-100">
                                <div className='d-flex justify-content-center h-100 align-items-center'>
                                    {globalCon.loginCheck ?
                                        <div className="bg-danger h-100 d-flex align-items-center justify-content-center user-avatar-hoverable">
                                            <span>
                                                <img src="/images/3.jpg" alt="" />
                                            </span>
                                            <div className="bg-primary">
                                                fdf
                                                <Link className='btn btn-primary d-flex' to={`/dashboard/cart`}>
                                                    go to dashboard
                                                </Link>
                                            </div>
                                        </div>
                                    :
                                        <div className='h-100 login-btn-container d-flex align-items-center justify-content-center' onClick={function(){
                                            globalCon.setLoginFormState(true)
                                            document.body.style.overflowY="hidden";
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-person-circle" viewBox="0 0 16 16">
                                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                                            </svg>
                                        </div>
                                    }
                                </div>
                            </div>
                            <button className='d-md-none d-flex justify-content-center align-item-center' onClick={function(){
                                let mobileMenu=document.getElementsByClassName("mobile-menu")[0];
                                let bgDark=document.getElementsByClassName("dark-face")[0];
                                mobileMenu.classList.add("open");
                                bgDark.classList.add("show");
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#444" className="bi bi-list" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="w-100 menu-bottom bg-dark m-0">
                        <div className='w-50'>
                            <Search tagsNum={0}></Search>
                        </div>
                    </div>
                </div>
                <div className="mobile-menu d-md-none d-flex">
                    <div className="close">
                        <span className='p-1' onClick={function(){
                            let mobileMenu=document.getElementsByClassName("mobile-menu")[0];
                            let bgDark=document.getElementsByClassName("dark-face")[0];
                            mobileMenu.classList.remove("open");
                            bgDark.classList.remove("show");
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                        </span>
                    </div>
                    <div className='image'>
                        <img src="" alt="" />
                    </div>
                    <hr />
                    <div className='list w-100 mt-3'>
                        <Search tagsNum={1}></Search>
                        <ul className='p-0 m-0 w-100'>
                            {globalCon.firstClassMenu ? globalCon.firstClassMenu.map((item,index)=>{
                                return(
                                    <li key={index}>
                                        <div className='head' onClick={function(e){
                                            // حالت کشویی
                                            let allLi=e.currentTarget.parentElement.parentElement.parentElement.querySelectorAll("ul>li");
                                            let clickedLi=e.currentTarget.parentElement;
                                            let clickedMbThird=clickedLi.querySelector("div.mb-second-class-menu");
                                            for(let li of allLi){
                                                let mbThird=li.querySelector("div.mb-second-class-menu");
                                                if(mbThird && li !==clickedLi){
                                                    mbThird.classList.remove("open");
                                                }
                                            }
                                            if(clickedMbThird){
                                                clickedMbThird.classList.toggle("open");
                                            }
                                        }}>
                                            {/* اگر لینک است که به صفحه مورد نظر منتقل می شوید و اگر زیر منو دارد با کلیک روی لینک زیر منو باز می شود */}
                                            <Link to={item.href}>
                                                {item.title}
                                                {item.hasChild && globalCon.secondClassMenu ?
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                                                        <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"/>
                                                    </svg>                                                
                                                : null}
                                            </Link>
                                        </div>
                                        {item.hasChild && globalCon.secondClassMenu ?
                                            <div className='mb-second-class-menu'>
                                                <div className='close-button'>
                                                    <span onClick={function(e){
                                                        let openedMbSecond=e.currentTarget.parentElement.parentElement;
                                                        if(openedMbSecond){
                                                            openedMbSecond.classList.remove("open");
                                                        }
                                                    }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-x" viewBox="0 0 16 16">
                                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <p>{item.title}</p>
                                                <ul>
                                                    {globalCon.secondClassMenu.map((secondItem,secondIndex)=>{
                                                        if(secondItem.mother===item.tag){
                                                            return(
                                                                <li key={secondIndex}>
                                                                    <div className='head' onClick={function(e){
                                                                        // حالت کشویی
                                                                        let allLi=e.currentTarget.parentElement.parentElement.parentElement.querySelectorAll("ul>li");
                                                                        let clickedLi=e.currentTarget.parentElement;
                                                                        let clickedMbThird=clickedLi.querySelector("div.mb-third-class-menu");
                                                                        for(let li of allLi){
                                                                            let mbThird=li.querySelector("div.mb-third-class-menu");
                                                                            if(mbThird && li !==clickedLi){
                                                                                mbThird.classList.remove("open");
                                                                            }
                                                                        }
                                                                        if(clickedMbThird){
                                                                            clickedMbThird.classList.toggle("open");
                                                                        }
                                                                    }}>
                                                                        {/* اگر لینک است که به صفحه مورد نظر منتقل می شوید و اگر زیر منو دارد با کلیک روی لینک زیر منو باز می شود */}
                                                                        <Link to={secondItem.href}>
                                                                            {secondItem.title}
                                                                            {secondItem.hasChild && globalCon.thirdClassMenu ?
                                                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                                                                                    <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"/>
                                                                                </svg>                                                
                                                                            : null}
                                                                        </Link>
                                                                    </div>
                                                                    {secondItem.hasChild && globalCon.thirdClassMenu ?
                                                                        <div className="mb-third-class-menu">
                                                                            <div className='close-button'>
                                                                                <span onClick={function(e){
                                                                                    let openedMbThird=e.currentTarget.parentElement.parentElement;
                                                                                    if(openedMbThird){
                                                                                        openedMbThird.classList.remove("open");
                                                                                    }
                                                                                }}>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-x" viewBox="0 0 16 16">
                                                                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                                                                                    </svg>
                                                                                </span>
                                                                            </div>
                                                                            <p>{item.title} / {secondItem.title}</p>
                                                                            <ul>
                                                                                {globalCon.thirdClassMenu.map((thirdItem,thirdIndex)=>{
                                                                                    if(thirdItem.mother===secondItem.tag){
                                                                                        return(
                                                                                            <li key={thirdIndex}>
                                                                                                <Link to={thirdItem.href}>
                                                                                                    {thirdItem.title}
                                                                                                </Link>
                                                                                                {thirdItem.hasChild && globalCon.forthClassMenu ? 
                                                                                                    <div className='mb-forth-class-menu'>
                                                                                                        <ul>
                                                                                                            {globalCon.forthClassMenu.map((forthItem,forthIndex)=>{
                                                                                                                if(forthItem.mother===thirdItem.tag){
                                                                                                                    return(
                                                                                                                        <li key={forthIndex}>
                                                                                                                            <Link to={`/archive/${forthItem.category}/${forthItem.tag}`}>
                                                                                                                                {forthItem.title}
                                                                                                                            </Link>
                                                                                                                        </li>
                                                                                                                    )    
                                                                                                                }else{return null}
                                                                                                            })}
                                                                                                        </ul>
                                                                                                    </div>
                                                                                                : null}
                                                                                            </li>
                                                                                        )    
                                                                                    }else{return null}
                                                                                })}
                                                                            </ul>

                                                                        </div>
                                                                    :null}
                                                                </li>
                                                            )
                                                        }else{return null}
                                                    })}
                                                </ul>
                                            </div> 
                                        :null}                           
                                    </li>
                                )
                            }) : "لیستی وجود ندارد"}
                        </ul>
                    </div>
                </div>
                <div className="dark-face" onClick={function(){
                    let mobileMenu=document.getElementsByClassName("mobile-menu")[0];
                    let bgDark=document.getElementsByClassName("dark-face")[0];
                    mobileMenu.classList.remove("open");
                    bgDark.classList.remove("show");
                }}></div>
                <div className="menu-bottom-dark-face" onClick={function(){
                    let firstClassMenutainer=document.getElementById("header-container");
                    let menuBottom=document.getElementsByClassName("menu-bottom")[0];
                    let bgDark=document.getElementsByClassName("menu-bottom-dark-face")[0];
                    menuBottom.classList.remove("open");
                    bgDark.classList.remove("show");
                    var st = window.pageYOffset || document.documentElement.scrollTop;
                    if(st===0){
                        firstClassMenutainer.classList.remove("header-container-change");
                    }
                }}></div>
                <div className={globalCon.loginFormState ? "login-form login-form-show" : "login-form"}>
                    <h3>ورود</h3>
                    <LoginForm></LoginForm>
                    <div className={globalCon.loginFormState ? "dark-win dark-win-show" : "dark-win"} onClick={function(){globalCon.setLoginFormState(false);document.body.style.overflowY="scroll";}}></div>
                </div>
                <div className={globalCon.registerFormState ? "register-form register-form-show" : "register-form"}>
                    <h3>ثبت نام</h3>
                    <RegisterForm></RegisterForm>
                    <div className={globalCon.registerFormState ? "dark-win dark-win-show" : "dark-win"} onClick={function(){globalCon.setRegisterFormState(false);document.body.style.overflowY="scroll";}}></div>
                </div>
            </div>
        </header>
    );
}

 
export default Header;
import './css/fonts.css';
import './css/sticky.css';
import { useEffect } from 'react';
const Sticky = (props) => {

    useEffect(() => {
        stickeyCheck();
    });
    function stickeyCheck(){
        console.log("stickey check start");
        let stickys=document.querySelectorAll("div.sticky");
        let bodyContainer=document.querySelectorAll("div.sticky>div.body-container");
        let sideContainer = document.querySelectorAll("div.sticky>aside.side-container");
        let sideWrapper = document.querySelectorAll("div.sticky>aside.side-container>div.aside-wrapper");
        let header= document.querySelector("div#header-container div.menu-top");
        for(let x=0;x<=stickys.length-1;x++){
            sideWrapper[x].style.position="relative";    
        }
        window.onscroll=()=>{
            for(let x=0;x<=stickys.length-1;x++){
                let viewportHeight = window.innerHeight;
                let bodyHeight=bodyContainer[x].getBoundingClientRect().height;
                let sideHeight=sideContainer[x].getBoundingClientRect().height;
                let wrapperHeight=sideWrapper[x].getBoundingClientRect().height;  
                let space=sideHeight-wrapperHeight;
                let headerHeight= header.clientHeight;
                let wrapperWidth;

                //if all wrapper content is visible in one height of the screen "stick to the top" if not "stick to the bottom"
                if(wrapperHeight+headerHeight>viewportHeight){
                    console.log("bigger");
                    sideWrapper[x].style.top="unset";
                    if(sideWrapper[x].style.position==="relative"){
                        wrapperWidth=sideWrapper[x].getBoundingClientRect().width;
                    }  
                    if(sideHeight>wrapperHeight && window.innerWidth>992){
                        if(bodyHeight-viewportHeight>0 && bodyContainer[x].getBoundingClientRect().bottom-viewportHeight<=space){
                            sideWrapper[x].style.position="fixed";
                            sideWrapper[x].style.bottom=0+"px";
                            sideWrapper[x].style.width=wrapperWidth+"px";
                            sideWrapper[x].style.top="unset";
                            if(bodyContainer[x].getBoundingClientRect().bottom-viewportHeight<=0){
                                sideWrapper[x].style.position="relative";
                                sideWrapper[x].style.width="unset";
                                sideWrapper[x].style.bottom="unset";
                                sideWrapper[x].style.top=space+"px";
                            }
                        }
                        if(bodyContainer[x].getBoundingClientRect().bottom-viewportHeight>space){
                            // sideWrapper.style.width="2px";
                            sideWrapper[x].style.position="relative";
                            sideWrapper[x].style.width="unset";

        
                        }
                    }    
                }
                else{
                    sideWrapper[x].style.bottom="unset";
                    if(sideWrapper[x].style.position==="relative"){
                        wrapperWidth=sideWrapper[x].getBoundingClientRect().width;
                    }  
                    if(sideHeight>wrapperHeight && window.innerWidth>992){
                        if(bodyHeight-viewportHeight>0 && bodyContainer[x].getBoundingClientRect().top<=headerHeight){
                            sideWrapper[x].style.position="fixed";
                            sideWrapper[x].style.top=headerHeight+"px";
                            sideWrapper[x].style.width=wrapperWidth+"px";
                            if(-bodyContainer[x].getBoundingClientRect().top+headerHeight>space){
                                console.log("sd");
                                sideWrapper[x].style.position="relative";
                                sideWrapper[x].style.width="unset";
                                sideWrapper[x].style.top=space+"px";
                            }
                        }
                        if(bodyContainer[x].getBoundingClientRect().top>headerHeight){
                            sideWrapper[x].style.position="relative";
                            sideWrapper[x].style.width="unset";
                            sideWrapper[x].style.top="unset";

                        }
                    }else{
                        sideWrapper[x].style.position="relative";
                        sideWrapper[x].style.width="unset";
                        sideWrapper[x].style.top="unset";
                    }
                }
            }
        }
    }

    return (
        <div className="m-0 d-flex flex-column flex-lg-row gap-lg-4 sticky">
            {props.children}
        </div>                    
    );
}
 
export default Sticky;
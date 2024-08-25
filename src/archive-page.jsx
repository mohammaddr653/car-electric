import Header from "./header";
import './css/archive-page.css';
import Footer from "./footer";
import { useEffect, useState } from "react";
import HomePageMain from "./home-page-main";
import Ads from "./ads";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import globalContext from "./context/global-context";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const ArchivePage = () => {
    let location = useLocation();
    let params = useParams();
    let globalCon=useContext(globalContext);
    const[clickedItem,setClickedItem]=useState([]);
    const[bannerAnimation,setBannerAnimation]=useState(false);
    useEffect(() => {
        for(let item of globalCon.forthClassMenu){
            if(item.tag===params.tag){
                let a=item;
                setClickedItem(a);
            }
            setBannerAnimation(true);
        }
    },[location,globalCon.forthClassMenu]);

    useEffect(() => {
        console.log("this is clicked item : ")
        console.log(clickedItem.img);
    },[clickedItem]);

    return (
        <div id="archive-page">
            <Header></Header>
            <div className="archive-banner container-fluid p-0 w-100 bg-primary">
                <img src={clickedItem.img} alt="" />
                <span></span>
                <h1 className={bannerAnimation===true ? "move" : null}>{clickedItem.title}</h1>
            </div>
            <div id="archive-page-main" className="container-fluid w-100 p-0">
                <div className="container p-0">
                    <div className="archive-body w-100 m-0">
                        {globalCon.cars.map((item,index)=>{
                            if(item.mother.includes(params.tag)){
                                return(
                                    <div key={index}>
                                        <div key={index} className="card">
                                            <div className="card-info">
                                                <img className='card-img' src={item.img} alt="5" />
                                                <div className="card-title">
                                                    <h3>{item.title}</h3>
                                                </div>
                                                <span className='card-tag'>{item.engTitle}</span>
                                                <div className="card-explain">
                                                    {item.company ? 
                                                    <p>
                                                        {"کمپانی سازنده : "+item.company}
                                                    </p> : null}
                                                    {item.year ? 
                                                    <p>
                                                        {"سال تولید : "+item.year}
                                                    </p> : null}
                                                    {item.price ? 
                                                    <p>
                                                        {"قیمت : "+item.price}
                                                    </p> : null}
                                                </div>
                                                    
                                            </div>
                                            <Link to={`./single-car-page/${item.id}`} className="card-link">
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-return-right" viewBox="0 0 16 16">
                                                        <path fillRule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5"/>
                                                    </svg>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            }else{
                                return null
                            }
                        })}
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
}
 
export default ArchivePage;
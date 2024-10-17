import Header from "./header";
import './css/products-archive-page.css';
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
import Sticky from "./sticky";
import StickyAside from "./sticky-aside";
import StickyBody from "./sticky-body";
const ProductsArchivePage = () => {
    let params = useParams();
    let globalCon=useContext(globalContext);
    const[products,setProducts]=useState([]);
    const[start,setStart]=useState();
    const[end,setEnd]=useState();

    useEffect(()=>{
        if(globalCon.products){
            let a=[];
            for(let item of globalCon.products){
                if(item.mother.includes(params.tag)){
                    a.push(item);
                }
            }
            setProducts([...a])
        }
    },[params,globalCon.products])


    useEffect(()=>{
        console.log("this is start : ")
        console.log(start)
        console.log("this is end : ")
        console.log(end)

    },[start,end])

    return (
        <div id="products-archive-page">
            <Header></Header>
            <div id="products-archive-page-main" className="container-fluid w-100">
                <div className="container p-0">
                    <Sticky>
                        <StickyAside>
                        </StickyAside>
                        <StickyBody>
                            {/* <h4 className="fs-6 m-0">{archHead}</h4> */}
                            <div className="archive-main row row-cols-1 row-cols-md-3 rounded p-4 border m-0">
                                {products?.slice(start,end).map((item,index)=>{
                                    return(
                                        <div className="product-card d-flex justify-content-center align-items-center p-2 col overflow-hidden">
                                            <Link className="d-flex border flex-column justify-content-between w-100 h-100">
                                                <div className="card-top pt-3 d-flex flex-column">
                                                    <img src={item.img} alt="" />
                                                    <h4 className="fs-6 m-0 p-4 text-dark">{item.name}</h4>
                                                </div>
                                                <div className=" p-4 d-flex flex-row justify-content-between align-items-center">
                                                    <span>قیمت :</span>
                                                    <span>{item.price}</span>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>
                            {products.length?
                            //pagination gets mainobj , start , end , number attrebiutes .
                            <Pagination mainobj={products} start={setStart} end={setEnd} number={4}/>
                            :null}
                        </StickyBody>
                    </Sticky>                    
                </div>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
}
 
export default ProductsArchivePage;
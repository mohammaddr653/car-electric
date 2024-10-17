// import './css/fonts.css';
import './css/pagination.css';
import { Link } from 'react-router-dom';
import { useContext, useEffect , useState } from 'react';
import globalContext from './context/global-context';
import Carousel from 'react-bootstrap/Carousel';

const Pagination = (props) => {
    const[arrayLength,setArrayLength]=useState(0);
    const[pages,setPages]=useState([]);
    const[selectedPage,setSelectedPage]=useState();

    useEffect(()=>{
        setArrayLength(props.mainobj?.length)
    },[props.mainobj])
    

    useEffect(()=>{
        let intPortion=Math.floor(arrayLength/props.number);
        let decimalPortion=(arrayLength/props.number)%1;
        if(intPortion>=0){
            let result;
            let array=[];
            if(decimalPortion===0){
                result=intPortion;
            }else{
                result=intPortion+1;
            }
            for(let x=1;x<=result;x++){
                array.push(x);
            }
            setPages([...array]);
        }
    },[props.number,arrayLength])


    useEffect(()=>{
        changePage(1);
        console.log(pages);
    },[pages])

    function changePage(value){
        if(value>0 && value-1<pages.length){
            setSelectedPage(value);
            let start=(value*props.number)-props.number;
            let end=(value*props.number);
            props.start(start);
            props.end(end);    
        }
    }

    // useEffect(()=>{
    //     console.log("this is array length")
    //     console.log(arrayLength)
    // },[arrayLength])
    // useEffect(()=>{
    //     console.log("this is pages")
    //     console.log(pages)
    // },[pages])



    return ( 
        <div className='pagination-container container-fluid p-0 m-0'>
            <nav className='rounded overflow-hidden'>
                <ul class="pagination m-0 rounded overflow-hidden">
                    <li class="page-item rounded-0 btn btn-primary" onClick={function(){changePage(selectedPage+1)}}>
                        صفحه بعد
                    </li>
                    {pages.map((item,index)=>{
                        return <li key={index} class="page-item btn bg-light rounded-0" onClick={function(){changePage(item)}}>{item}</li>
                    })}
                    <li class="page-item rounded-0 btn btn-primary" onClick={function(){changePage(selectedPage-1)}}>
                        صفحه قبل
                    </li>
                </ul>
            </nav>
        </div>
    );
}
 
export default Pagination;
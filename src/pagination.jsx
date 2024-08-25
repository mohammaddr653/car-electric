import './css/fonts.css';
import './css/pagination.css';
import { Link } from 'react-router-dom';
import { useContext, useEffect , useState } from 'react';
import globalContext from './context/global-context';
import Carousel from 'react-bootstrap/Carousel';

const Pagination = (props) => {
    const[arrayLength,setArrayLength]=useState(0);
    const[pages,setPages]=useState(0);
    const[selectedPage,setSelectedPage]=useState(1);

    useEffect(()=>{
        setArrayLength(props.mainobj?.length)
    },[props.mainobj])
    

    useEffect(()=>{
        let intPortion=Math.floor(arrayLength/props.number);
        let decimalPortion=(arrayLength/props.number)%1;
        if(intPortion>=0){
            let result;
            if(decimalPortion===0){
                result=intPortion;
            }else{
                result=intPortion+1;
            }
            setPages(result);
        }
    },[props.number,arrayLength])


    function changePage(value){
        let start=(value*props.number)-props.number;
        let end=(value*props.number);
        props.start(start);
        props.end(end);
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
                    <li class="page-item rounded-0 btn btn-primary">
                        صفحه بعد
                    </li>
                    <li class="page-item btn bg-light rounded-0">1</li>
                    <li class="page-item btn bg-light rounded-0" onClick={function(){changePage(2)}}>2</li>
                    <li class="page-item btn bg-light rounded-0">3</li>
                    <li class="page-item rounded-0 btn btn-primary">
                        صفحه قبل
                    </li>
                </ul>
            </nav>
        </div>
    );
}
 
export default Pagination;
import './css/fonts.css';
import './css/issues-widget.css';
import { Link , useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import globalContext from './context/global-context';
import Carousel from 'react-bootstrap/Carousel';
import { useEffect } from 'react';
import { useState } from 'react';
import GallerySlider from './gallery-slider';

const IssuesWidget = (props) => {
    const navigate=useNavigate();
    let globalCon=useContext(globalContext);
    const [defaultIssues,setDefaultIssues]=useState([]);  
    const [filteredIssues,setFilteredIssues]=useState([]);  
    
    function searchFilter(e){
        let value = e.currentTarget.value;
        let valueArray=value.split(" ");
        console.log(valueArray)
        let a=[];
        // console.log(value);
        for(let item of defaultIssues){
            for(let value of valueArray){
                if(value !=="" && value !==null && value !==" " && item.title.includes(value)){
                    console.log(item.title)
                    a.push(item);
                    
                    break;
                }    
            }
        }
        if(value===""){
            console.log("empty")
            setFilteredIssues([...defaultIssues])

        }else{
            setFilteredIssues([...a])
        }
    }

    useEffect(()=>{
        let a=[];
        if(props.object.issues){
            for(let carIssue of props.object.issues){
                for(let issue of globalCon.issues){
                    if(carIssue===issue.id){
                        a.push(issue);
                    }
                }
            }
            setFilteredIssues([...a])
            setDefaultIssues([...a])    
        }


    },[globalCon.issues,props.object.issues])

    useEffect(()=>{
        console.log("this is it :")
        console.log(filteredIssues)
    },[filteredIssues]);

    return ( 
        <div className="issues-widget-container p-0 container-fluid d-flex justify-content-center align-items-center overflow-hidden">
            <div className="position-absolute broken-glass w-100 h-100">
                
            </div>
            <div className=" p-0 container-fluid w-100 d-md-flex">
                <div className="card card-body d-flex p-0 py-5">
                    <div className="container p-0 d-flex p-0 py-5 flex-column flex-md-row">
                        <div className=' issues-widget-right d-flex flex-column justify-content-center gap-4 align-itmes-start'>
                            <div className='text-center issues-widget-title'>
                                <h3>ایرادات فنی {props.object.title}</h3>
                            </div>
                            <div className='issues-widget-intro'>
                                <p>
                                تیم متخصص و با تجربه الکران آماده ارائه خدمات فنی بصورت تلفنی یا حضوری درب محل می باشد .
                                </p>
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <img src="/images/66198268_9627518.svg" alt="" />
                            </div>
                        </div>
                        {/* <hr  className='issues-widget-hr'/> */}
                        <div className=' issues-widget-left p-5 gap-4 d-flex flex-column rounded shadow-lg'>
                            <div className="issues-top d-flex flex-row justify-content-between gap-2 align-items-center">
                                <div className='d-flex flex-row p-1 justify-content-between gap-2 align-items-center'>
                                    <div className='bg-danger rounded overflow-hidden issues-input'>
                                        <input type="text" onChange={function(e){
                                            searchFilter(e);
                                        }}/>
                                        <span className=''>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-search" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className='issues-counter d-flex flex-row gap-1 justify-content-end align-items-center'>
                                        <span>{filteredIssues ? filteredIssues.length :0}</span>
                                        <span>نتیجه</span>
                                    </div>
                                </div>
                                <div className=" issues-widget-ticket d-none d-md-flex flex-row justify-content-end gap-2 align-items-center">
                                    <span>
                                        <p className='m-0'>مشکل فنی جدیدی برای گزارش دارید ؟</p>
                                    </span>
                                    <button className='btn' onClick={function(e){navigate(`/dashboard/tickets/newTicket`)}}>تیکت بزنید !</button>
                                </div>
                            </div>
                            <div className='issues-archive'>
                                <ul className='d-flex flex-column gap-3 p-1 ps-3 m-0'>
                                    {filteredIssues ? filteredIssues.map((item,index)=>{
                                        return(
                                            <li key={index} className=''>
                                                <Link to={`./single-issue-page/${item.id}`} className='d-flex rounded p-3 flex-row justify-content-between'>
                                                    <div className='d-flex flex-row gap-2 align-items-center'>
                                                        <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wrench-adjustable" viewBox="0 0 16 16">
                                                                <path d="M16 4.5a4.5 4.5 0 0 1-1.703 3.526L13 5l2.959-1.11q.04.3.041.61"/>
                                                                <path d="M11.5 9c.653 0 1.273-.139 1.833-.39L12 5.5 11 3l3.826-1.53A4.5 4.5 0 0 0 7.29 6.092l-6.116 5.096a2.583 2.583 0 1 0 3.638 3.638L9.908 8.71A4.5 4.5 0 0 0 11.5 9m-1.292-4.361-.596.893.809-.27a.25.25 0 0 1 .287.377l-.596.893.809-.27.158.475-1.5.5a.25.25 0 0 1-.287-.376l.596-.893-.809.27a.25.25 0 0 1-.287-.377l.596-.893-.809.27-.158-.475 1.5-.5a.25.25 0 0 1 .287.376M3 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
                                                            </svg>
                                                        </span>
                                                        <span>
                                                            {item.title}
                                                        </span>
                                                    </div>
                                                    <div className=" d-flex justify-content-center align-items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                                                        </svg>
                                                    </div>
                                                </Link>
                                            </li>
                                        )
                                    }):null}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);
}
 
export default IssuesWidget;
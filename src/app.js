import HomePage from "./home-page";
import React from "react";
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import globalContext from "./context/global-context";
import ArchivePage from "./archive-page";
import SingleCarPage from "./single-car-page";
import SingleIssuePage from "./single-issue-page";
import DashboardPage from "./dashboard-page";
import PrivateRoutes from "./private-routes";
import PostsArchivePage from "./posts-archive-page";
// import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";




const App = () => {
    const[cars,setCars]=useState([]);
    const[posts,setPosts]=useState([]);
    const[ads,setAds]=useState([]);
    const[usersList,setUsersList]=useState([]);
    const[cart,setCart]=useState([]);
    const[loggedInUser,setLoggedInUser]=useState(
      {
        "id":"1",
        "name":"محمد امین درخشنده",
        "email":"mohammaddr653@gmail.com",
        "pass":"Dr7370**"
    }
    );
    const[loginCheck,setLoginCheck]=useState(true);
    let [loginFormState , setLoginFormState] = useState(false);
    let [registerFormState , setRegisterFormState] = useState(false);
    const[firstClassMenu,setFirstClassMenu]=useState([]);
    const[secondClassMenu,setSecondClassMenu]=useState([]);
    const[thirdClassMenu,setThirdClassMenu]=useState([]);
    const[forthClassMenu,setForthClassMenu]=useState([]);
    const[issues,setIssues]=useState([]);
    const[menuImg,setMenuImg]=useState("/images/5.jpg");

    useEffect(() => {
        async function getFirstClassData(){
            const response = await axios.get("/first-class-menu.json");
            setFirstClassMenu(response.data);
        };
        async function getSecondClassData(){
            const response = await axios.get("/second-class-menu.json");
            setSecondClassMenu(response.data);
        };
        async function getThirdClassData(){
            const response = await axios.get("/third-class-menu.json");
            setThirdClassMenu(response.data);
        };
        async function getForthClassData(){
            const response = await axios.get("/forth-class-menu.json");
            setForthClassMenu(response.data);
        };


        getFirstClassData();
        getSecondClassData();
        getThirdClassData();
        getForthClassData();
    },[]);



    useEffect(()=>{
      async function getData(){
        const response = await axios.get("/cars.json");
        console.log("this is your cars : ")
        console.log(response.data);
        setCars(response.data);
      }
      getData();
  
    },[])


    useEffect(()=>{
      async function getData(){
        const response = await axios.get("/posts.json");
        console.log("this is your posts : ")
        console.log(response.data);
        response.data.sort((a,b)=>new Date(b.date) - new Date(a.date));
        setPosts(response.data);
      }
      getData();
    
    },[])

    useEffect(()=>{
      async function getData(){
        const response = await axios.get("/ads.json");
        console.log("this is your ads : ")
        console.log(response.data);
        setAds(response.data);
      }
      getData();
  
    },[])

    useEffect(()=>{
      async function getData(){
        const response = await axios.get("/issues.json");
        console.log("this is your issues : ")
        console.log(response.data);
        setIssues(response.data);
      }
      getData();
  
    },[])
    
    useEffect(()=>{
      async function getData(){
        const response = await axios.get("/usersList.json");
        console.log("this is your usersList : ")
        console.log(response.data);
        setUsersList(response.data);
      }
      getData();
  
    },[])

    return ( 
        <globalContext.Provider value={{cart,setCart,loggedInUser,setLoggedInUser,usersList,setUsersList,registerFormState , setRegisterFormState,loginFormState , setLoginFormState,loginCheck,setLoginCheck,issues,setIssues,firstClassMenu,setFirstClassMenu,secondClassMenu,setSecondClassMenu,thirdClassMenu,setThirdClassMenu,forthClassMenu,setForthClassMenu,menuImg,setMenuImg,posts,setPosts,ads,setAds,cars,setCars}}>
            <Routes>
                <Route path="/archive/:category/:tag/single-car-page/:id/single-issue-page/:issueId" element={<SingleIssuePage/>}/>
                <Route path="/archive/:category/:tag/single-car-page/:id" element={<SingleCarPage/>}/>
                <Route path="/archive/:category/:tag" element={<ArchivePage/>}/>
                <Route path="/posts-archive/:tag?" element={<PostsArchivePage/>}/>
                <Route element={<PrivateRoutes/>}>
                  <Route path="/dashboard/:section/:ticketSection?" element={<DashboardPage/>}/>
                </Route>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </globalContext.Provider>
     );
}   
 
export default App;
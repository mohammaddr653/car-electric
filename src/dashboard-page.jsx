import './css/fonts.css';
import './css/dashboard-page.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import globalContext from './context/global-context';
import Carousel from 'react-bootstrap/Carousel';
import { useParams } from 'react-router-dom';
import Header from './header';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import CartCalculator from './cart-calculator';
// import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
    let globalCon=useContext(globalContext);
    const params=useParams();
    const navigate=useNavigate();

    useEffect(() => {
        stickeyCheck()

        globalCon.setCart([
            {
                "name":"محصول شماره 01",
                "id":1,
                "img":"/images/test2.jpg",
                "price":"223000",
                "count":1
            },
            {
                "name":"محصول شماره 02",
                "id":2,
                "img":"/images/test3.jpg",
                "price":"223000",
                "count":1
            },
            {
                "name":"محصول شماره 03",
                "id":3,
                "img":"/images/test4.jpg",
                "price":"223000",
                "count":1
            },
            {
                "name":"محصول شماره 04",
                "id":4,
                "img":"/images/test5.jpg",
                "price":"223000",
                "count":1
            },
            {
                "name":"محصول شماره 05",
                "id":5,
                "img":"/images/test6.jpg",
                "price":"223000",
                "count":1
            },
            {
                "name":"محصول شماره 06",
                "id":6,
                "img":"/images/test7.jpg",
                "price":"223000",
                "count":1
            },
            {
                "name":"محصول شماره 07",
                "id":7,
                "img":"/images/test8.jpg",
                "price":"223000",
                "count":1
            }
        ])

    },[]);
    useEffect(() => {
        console.log("this is your cart");
        console.log(globalCon.cart);

    },[globalCon.cart])

    // sticky to the top
    function stickeyCheck(){
        console.log("stickey check start");
        let bodyContainer=document.querySelector("div#dashboard-page div#dashboard-page-main>div.container>div.sticky>div.body-container");
        let sideContainer = document.querySelector("div#dashboard-page div#dashboard-page-main>div.container>div.sticky>aside.side-container");
        let sideWrapper = document.querySelector("div#dashboard-page div#dashboard-page-main>div.container>div.sticky>aside.side-container>div.aside-wrapper");
        let header= document.querySelector("div#dashboard-page div#header-container div.menu-top");
        sideWrapper.style.position="relative";
        window.onscroll=()=>{
            let viewportHeight = window.innerHeight;
            let bodyHeight=bodyContainer.getBoundingClientRect().height;
            let sideHeight=sideContainer.getBoundingClientRect().height;
            let wrapperHeight=sideWrapper.getBoundingClientRect().height;  
            let space=sideHeight-wrapperHeight;
            let headerHeight= header.clientHeight;
            let wrapperWidth;
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



    return(
        <div id='dashboard-page'>
            <Header></Header>
            <div id="dashboard-page-main" className="container-fluid d-flex flex-column gap-5 w-100">
                <div className="container p-0">
                    <div className="m-0 d-flex flex-column flex-lg-row gap-lg-0 gap-3 sticky">
                        <aside className=" d-block side-container p-0 ps-lg-3">
                            <div className="aside-wrapper py-4 bg-dark rounded overflow-hidden">
                                {/* هیچ عنصری مارجین نباید داشته باشد */}
                                <div className="dashboard-right-top d-flex gap-3 bg-dark flex-column align-items-center">
                                    <h3 className='text-light p-0 m-0'>ELECRUN</h3>
                                    <img src="/images/3.jpg" alt="" />
                                    <h4 className=''>{globalCon.loggedInUser.name}</h4>
                                    <div className="d-flex flex-row justify-content-center gap-2 align-items-center">
                                        <button className='top-btns btn'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
                                                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                                            </svg>
                                        </button>
                                        <button className='top-btns btn'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <hr  className='middle-hr'/>
                                <div className="dashboard-right-bottom d-flex gap-3 bg-dark flex-column align-items-center">
                                    <nav className='w-100'>
                                        <ul className='list-group rounded-0 w-100 border-0 m-0 p-0'>
                                            <li className={params.section==="cart"?'list-group-item border-0 active':'list-group-item border-0'} onClick={function(e){navigate('/dashboard/cart')}}>سبد خرید</li>
                                            <li className={params.section==="tickets"?'list-group-item border-0 active':'list-group-item border-0'} onClick={function(e){navigate('/dashboard/tickets')}}>تیکت ها</li>
                                            <li className={params.section==="favorites"?'list-group-item border-0 active':'list-group-item border-0'} onClick={function(e){navigate('/dashboard/favorites')}}>علاقه مندی ها</li>
                                        </ul>
                                    </nav>
                                    <div className="d-flex bg-danger flex-row justify-content-center align-items-center gap-2">
                                        
                                    </div>
                                </div>
                            </div>
                        </aside>
                        <div className="body-container rounded d-flex flex-column gap-3 p-0 ">
                            <div className={params.section==="cart"?'d-flex flex-column gap-2 cart p-4':'d-none cart flex-column gap-2 ticket-section p-4'}>
                                <div className='mb-4'>
                                    <h4>سبد خرید</h4>
                                </div>
                                <div className="">
                                    <CartCalculator/>
                                </div>
                                <div className="buyer-info">
                                    <h4 className='fs-6 text-dark mb-3'>اطلاعات گیرنده :</h4>
                                    <form className=' ticket-box d-flex flex-column gap-4 p-2'>
                                        <input type="text" id='buyer-name' className='form-control' placeholder='نام و نام خانوادگی' />
                                        <input type="text" id='buyer-phone' className='form-control' placeholder='شماره تماس' />
                                        <input type="text" id='buyer-province' className='form-control' placeholder='استان' />
                                        <input type="text" id='buyer-city' className='form-control' placeholder='شهر' />
                                        <input type="text" id='buyer-address' className='form-control' placeholder='آدرس منزل' />
                                        <input type="text" id='buyer-postal-code' className='form-control' placeholder='کد پستی' />
                                    </form>
                                </div>
                                <button className='btn btn-success align-self-end'>پرداخت</button> 
                            </div>
                            <div className={params.section==="tickets" && !params.ticketSection ?'d-flex flex-column gap-5  tickets p-4':'d-none tickets p-4'}>
                                <div className='d-flex flex-row align-items-center gap-2'>
                                    <h3>تیکت های شما</h3>
                                    <button className='btn btn-primary' onClick={function(e){navigate(`/dashboard/tickets/newTicket`)}}>ثبت تیکت جدید</button>
                                </div>
                                <div className="d-flex table-container flex-column p-2 gap-2">
                                    <table class="table table-bordered">
                                        <thead class="table-dark border-0">
                                            <tr>
                                                <th>شماره تیکت</th>
                                                <th>عنوان</th>
                                                <th>وضعیت تیکت</th>
                                                <th>آخرین بروزرسانی</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[0,1,2,2,2,4,4,4,2,4,4,5,5,5,2,2,2,4,5,5,6,4,5].map((item,index)=>{
                                                return(
                                                    <tr onClick={function(e){navigate(`/dashboard/tickets/${item}`)}}>
                                                        <td>{item}</td>
                                                        <td>
                                                            <p className='m-0 title text-nowrap'>
                                                                خاموش و روشن شدن خودروی 002
                                                            </p>
                                                        </td>
                                                        <td className='answered'>
                                                            <span>پاسخ داده شد</span>
                                                        </td>
                                                        <td>22/3/1403</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className={params.ticketSection==="0"?'d-flex flex-column gap-2 ticket-section p-4':'d-none ticket-section p-4'}>
                                <div className="ticket-information rounded p-3 d-flex flex-column gap-3">
                                    <h4>
                                        خاموش و روشن شدن خودروی 002
                                    </h4>
                                    <p className='d-flex flex-row gap-1 m-0'>
                                        <span>شماره تیکت :</span>
                                        <span>1</span>
                                    </p>
                                    <p className='d-flex flex-row gap-1 m-0'>
                                        <span>وضعیت :</span>
                                        <span>پاسخ داده شده</span>
                                    </p>
                                    <p className='d-flex flex-row gap-1 m-0'>
                                        <span>تاریخ ثبت درخواست :</span>
                                        <span>22/4/1403</span>
                                    </p>
                                    <p className='d-flex flex-row gap-1 m-0'>
                                        <span>آخرین بروزرسانی :</span>
                                        <span>25/4/1403</span>
                                    </p>
                                </div>
                                <div className="ticket-content rounded p-3 d-flex flex-column gap-3">
                                    <h4>
                                        متن درخواست
                                    </h4>
                                    <p className='border p-3 rounded'>
                                        با سلام . من دو سالی هست که خودروی 002 را خریداری کردم و تا یکماه پیش راضی بودم و مشکلی نداشته . اما الان یک ماه است که خودروی من خود به خود خاموش می شود . بطوری که یدفعه وسط جاده موتور از کار می افته و من باید دوباره استارت بزنم تا بتونم ماشین رو روشن کنم . خواستم بدونم اگر امکانش هست راهنمایی کنید . ممنون میشم .
                                    </p>
                                </div>
                                <div className="ticket-comments p-3 d-flex flex-column gap-3">
                                    <h4>
                                        گفتگو
                                    </h4>
                                    <form className=' comment-box d-flex flex-column gap-2 mb-5'>
                                        <div class="form-group d-flex flex-column gap-2">
                                            <label for="comment-box">دیدگاه شما</label>
                                            <textarea class="form-control" id="comment-box" rows="3"></textarea>
                                        </div>
                                        <button className='btn btn-success'>افزودن</button> 
                                    </form>
                                    <div className=' comment-card rounded border p-3 d-flex flex-column gap-4'>
                                        <div className='d-flex flex-row justify-content-between align-items-center'>
                                            <h5>امین زاهدی <span className='author-label'>پشتیبان فنی</span></h5>
                                            <span>22/3/1403</span>
                                        </div>
                                        <p>
                                            با سلام خدمت شما . ایراد میتونه از سیم کشی موتور یا کانکتور ها باشه . اگر مایل هستید تیم فنی خودروی شما رو بررسی کنند لطفا فرم پذیرش رسیبییسل یسبلیب لیسبلیل یسلیسل سلسلس لسل سلسل سل سلسلسل سلسلیبلبی سلیسلل سلس لسل سللسل سل لل سللسل سلو تکمیل کنید .
                                            با سلام خدمت شما . ایراد میتونه از سیم کشی موتور یا کانکتور ها باشه . اگر مایل هستید تیم فنی خودروی شما رو بررسی کنند لطفا فرم پذیرش رسیبییسل یسبلیب لیسبلیل یسلیسل سلسلس لسل سلسل سل سلسلسل سلسلیبلبی سلیسلل سلس لسل سللسل سل لل سللسل سلو تکمیل کنید .
                                            با سلام خدمت شما . ایراد میتونه از سیم کشی موتور یا کانکتور ها باشه . اگر مایل هستید تیم فنی خودروی شما رو بررسی کنند لطفا فرم پذیرش رسیبییسل یسبلیب لیسبلیل یسلیسل سلسلس لسل سلسل سل سلسلسل سلسلیبلبی سلیسلل سلس لسل سللسل سل لل سللسل سلو تکمیل کنید .
                                            با سلام خدمت شما . ایراد میتونه از سیم کشی موتور یا کانکتور ها باشه . اگر مایل هستید تیم فنی خودروی شما رو بررسی کنند لطفا فرم پذیرش رسیبییسل یسبلیب لیسبلیل یسلیسل سلسلس لسل سلسل سل سلسلسل سلسلیبلبی سلیسلل سلس لسل سللسل سل لل سللسل سلو تکمیل کنید .
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div className={params.ticketSection==="newTicket"?'d-flex flex-column gap-2 new-ticket p-4':'d-none new-ticket p-4'}>
                                <div className='mb-4'>
                                    <h4>ثبت تیکت جدید</h4>
                                </div>
                                <form className=' ticket-box d-flex flex-column gap-4 mb-5'>
                                    <div class="form-group d-flex flex-column gap-3">
                                        <label for="ticket-title">عنوان تیکت</label>
                                        <input type="text" id='ticket-title' className='form-control' />
                                    </div>
                                    <div class="form-group d-flex flex-column gap-3">
                                        <label for="ticket-text">درخواست شما</label>
                                        <textarea class="form-control" id="ticket-text" rows="3"></textarea>
                                    </div>
                                    <button className='btn btn-success'>ثبت</button> 
                                </form>
                            </div>
                            <div className={params.section==="favorites"?'d-block':'d-none'}>favorites</div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    );
}
 
export default DashboardPage;
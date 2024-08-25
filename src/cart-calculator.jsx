import './css/fonts.css';
import './css/cart-calculator.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import globalContext from './context/global-context';
import { useEffect } from 'react';
import { useState } from 'react';

const CartCalculator = () => {
    let globalCon=useContext(globalContext);
    let[totalPrice,setTotalPrice]=useState(0);
    useEffect(()=>{
        let priceResult=0;
        let x=false;
        if(!(globalCon.cart.length===0)){
            for(let item of globalCon.cart){
                let count=parseInt(item.count);
                let price=parseInt(item.price);
                let cross=count*price;
                priceResult +=cross;
            }    
        }
        x=true;
        if(x===true){
            setTotalPrice(()=>{
                let t=priceResult;
                return t;
            })
        }
        
    },[globalCon.cart])

    function handleIncrease(e){
        let uniqe=e.currentTarget.attributes.uniqe.value;
        let cartDuplicate=globalCon.cart;
        for(let item of cartDuplicate){
            if(parseInt(item.id) === parseInt(uniqe)){
                item.count +=1;
            }
        }
        globalCon.setCart([...cartDuplicate]);
    }
    function handleDecrease(e){
        let uniqe=e.currentTarget.attributes.uniqe.value;
        let cartDuplicate=globalCon.cart;
        for(let item of cartDuplicate){
            if(parseInt(item.id) === parseInt(uniqe)){
                if(item.count>1){
                    item.count -=1;
                }else{
                    let i=cartDuplicate.indexOf(item);
                    cartDuplicate.splice(i,1);
                }
            }
        }
        globalCon.setCart([...cartDuplicate]);
    }

    function handleDelete(e){
        let uniqe=e.currentTarget.attributes.uniqe.value;
        let cartDuplicate=globalCon.cart;
        for(let item of cartDuplicate){
            if(parseInt(item.id) === parseInt(uniqe)){
                let i=cartDuplicate.indexOf(item);
                cartDuplicate.splice(i,1);
            }
        }
        globalCon.setCart([...cartDuplicate]);
    }



    return(
        <div className="cart-calculator-container">
                <div className='d-flex flex-column gap-3 user-cart'>
                    <div className="ul-container d-flex flex-column gap-2 reserve-list">
                        <ul className='p-0 d-flex flex-column list-group'>
                            {!(globalCon.cart.length===0) ? globalCon.cart.map((item,index)=>{
                                return(
                                    <li key={index} className='border w-100 list-group-item list-li d-flex flex-row gap-5  justify-content-between'>
                                        <div className=' item-img li-right d-flex flex-row gap-2 align-items-center'>
                                            <img src={item.img} width={50} alt="#" />
                                            <h4 className='m-0 fs-6 text-nowrap text-dark'>{item.name}</h4>
                                        </div>
                                        <div className='d-flex li-left flex-row gap-2 justify-content-end align-items-center'>
                                            <span className='price'>{item.price}</span>
                                            <button className='bg-success text-light rounded p-1 px-2 border-0 increase' onClick={function(e){handleIncrease(e)}} uniqe={item.id}>+</button>
                                            <input type='text' className='counter border w-fit px-2 p-1 rounded' value={item.count} readOnly></input>
                                            <button className='bg-warning text-light rounded p-1 px-2 border-0 decrease' onClick={function(e){handleDecrease(e)}} uniqe={item.id}>-</button>
                                            <button className='bg-danger btn text-light delete' onClick={function(e){handleDelete(e)}} uniqe={item.id}>
                                                <img src="/images/trash3.svg" className='bg-danger rounded' alt="" />
                                            </button>
                                        </div>
                                    </li>
                                )
                            }) : "سبد خرید شما خالی است"}
                        </ul>
                    </div>
                    <div className=" d-flex flex-column gap-3 total p-3">
                        <h4 className='fs-6'>قیمت کل :</h4>
                        <div className='p-0 m-0 align-self-end d-flex flex-row gap-3 align-items-center'>
                            <span>
                                {totalPrice}
                                <span>تومان</span>
                            </span>
                        </div>
                    </div>
                </div>
        </div>
    );

}

export default CartCalculator; 

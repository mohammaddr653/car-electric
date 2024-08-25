import './css/fonts.css';
import './css/pooster1.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import globalContext from './context/global-context';

const Pooster1 = (props) => {
    let globalCon=useContext(globalContext);
    return ( 
        <div className='pooster1-container p-0 bg-danger container-fluid'>
            <div className="pooster1">
                <div className='pooster1-content text-light gap-4 flex-column justify-content-start d-flex w-100'>
                    <div className='d-flex gap-2 align-items-baseline'>
                        <span>ELECRUN</span>
                        <span>مرجع تخصصی خودروهای الکتریکی</span>
                    </div>
                    <div className='pooster1-parag'>
                        <p>
                        شاین کمپانی از ابتدا به تولید خودروهای سوپر‌لوکس و سوپراسپرت مشهور است و تمامی تولیدات خود را از ابتدای فعالیت خود تا به امروز را به‌صورت دست‌ساز و محدود تولید ‌کرده است.
                        </p>
                    </div>
                    <div className='pooster1-buttons d-flex flex-row align-items-center justify-content-start gap-2'>
                        <button className='btn'>مشاوره خرید</button>
                        <button className='btn'>دریافت خدمات</button>
                    </div>
                </div>
                <img src="/images/2024-Pagani-Huayra-Epitome-004-1440w.jpg" alt="" />
            </div>
        </div>
    );
}
 
export default Pooster1;
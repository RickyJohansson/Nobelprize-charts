import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import anime from 'animejs';
import './Header.css';

type ActiveButton = {
    gender: boolean;
    category_by_year: boolean;
    categorys: boolean;
    average_price: boolean;
}

const Header = () => {
    
    const [activeButton, setActiveButton] = useState<ActiveButton>(
        { 
            gender: false, 
            category_by_year: false, 
            categorys: false, 
            average_price: false 
        });


    const navigate = useNavigate();

    const gotoGenders = () => {
        setActiveButton({ gender: true, category_by_year: false, categorys: false, average_price: false })
        navigate("/Genders");
    }

    const gotoCategorys = () => {
        setActiveButton({ gender: false, category_by_year: false, categorys: true, average_price: false })
        navigate('/Categorys');
    }

    const gotoCategoryByYear = () => {
        setActiveButton({ gender: false, category_by_year: true, categorys: false, average_price: false })
        navigate('/CategoryByYear');
    }

    const gotoAveragePriceSum = () => {
        setActiveButton({ gender: false, category_by_year: false, categorys: false, average_price: true })
        navigate('/AveragePriceSum');
    }

    useEffect(() => {
            anime({
                targets: '.header_wrapper .category_container section',
                textShadow: { value: ['0 0 .2em', '0 0 1.2em'] },
                duration: 1100,
                direction: 'alternate',
                easing: 'easeInQuad',
                loop: true,
                autoplay: true
            });
    }, []);




    return(
        <header className="header_wrapper">
            <div className="category_container">
                <section className={`${activeButton.gender}`} onClick={gotoGenders}>Genders</section>
                <section className={`${activeButton.category_by_year}`} onClick={gotoCategoryByYear}>Category by year</section>
                <section className={`${activeButton.categorys}`} onClick={gotoCategorys}>Categorys</section>
                <section className={`${activeButton.average_price}`} onClick={gotoAveragePriceSum}>Average pricesum</section>
            </div>
        </header>

    )
}

export default Header;
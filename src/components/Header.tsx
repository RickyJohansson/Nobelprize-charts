import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import anime from 'animejs';
import './Header.css';

const Header = () => {

    const navigate = useNavigate();

    const gotoGenders = () => {
        navigate("/Genders");
    }

    const gotoCategorys = () => {
        navigate('/Categorys');
    }

    const gotoCategoryByYear = () => {
        navigate('/CategoryByYear');
    }

    const gotoAveragePriceSum = () => {
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
                <section onClick={gotoGenders}>Genders</section>
                <section onClick={gotoCategoryByYear}>Category by year</section>
                <section onClick={gotoCategorys}>Categorys</section>
                <section onClick={gotoAveragePriceSum}>Average pricesum</section>
            </div>
        </header>

    )
}

export default Header;
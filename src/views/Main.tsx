import './Main.css';
import alfred from '../assets/alfredNobel.svg';
import anime from 'animejs';
import { useEffect } from 'react';

const Main = () => {

    useEffect(() => {
        anime({
            targets: '.main_wrapper .main_info img.alfred',
            translateX: { value: ['-65vw', '0']},
            rotate: { value: ['0', '360'] },
            easing: 'easeOutCubic',
            duration: 5000,
            endDelay: 0
        });
    }, []);

    return(
        <div className="main_wrapper">
            <main className="main_info">
                <h1>View statistics amongst Nobelprize winners.</h1>
                <img className="alfred" src={ alfred } alt="" />
                <h2>Alfred Nobel was an inventor, entrepreneur, scientist</h2>
                <h2>and businessman who also wrote poetry and drama.</h2>
                <p>His varied interests are reflected in the prize he established and which he lay the foundation for in 1895</p>
                <p>when he wrote his last will, leaving much of his wealth to the establishment of the prize.</p>

                <p>Since 1901, the Nobel Prize has been honoring men and women from around the world for outstanding</p>
                <p>achievements in physics, chemistry, physiology or medicine, literature and for work in peace.</p>
            </main>
        </div>
    )
}

export default Main;

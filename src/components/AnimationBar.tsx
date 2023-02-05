import './AnimationBar.css';
import { useEffect, useRef, useState } from 'react';
import anime, { AnimeInstance } from 'animejs';

type Props = {
    setCurrentAnimation: React.Dispatch<React.SetStateAction<string>>;
}

type ActiveAnime = {
    dive: boolean;
    fade: boolean;
    stairy: boolean;
    slide: boolean;
    roll: boolean
}

const AnimationBar = ({setCurrentAnimation}: Props) => {

    const [activeAnimation, setActiveAnimation] = useState<ActiveAnime>(
        { 
            dive: false, 
            fade: false, 
            stairy: false, 
            slide: false,
            roll: false
        });


    useEffect(() => {
        anime({
            targets: '.animation_bar__wrapper .animations_container section',
            textShadow: { value: ['0 0 .2em', '0 0 1.2em'] },
            duration: 1100,
            direction: 'alternate',
            easing: 'easeInQuad',
            loop: true,
            autoplay: true
        });
    }, []);

 
    useEffect(() => {
            anime({
                targets: '.animation_bar__wrapper h2',
                keyframes: [
                    { translateX: '0em' },
                    { translateX: '0em' },
                    { translateX: '0em' },
                    { translateX: '.25em' },
                    { translateX: '0em' },
                    { translateX: '-.25em' },
                    { translateX: '0em' },
                    { translateX: '0em' },
                    { translateX: '0em' },
                ],
                duration: 4000,
                easing: 'easeInOutElastic',
                loop: true,
                autoplay: true
            });
    }, []);

    return(
        <div className="animation_bar__wrapper">
            <h2>Choose among the animations</h2>
            <div className="animations_container">

                <section className={`${activeAnimation.dive}`} onClick={ () => {setCurrentAnimation('dive'); 
                setActiveAnimation({ dive: true, fade: false, stairy: false, slide: false, roll: false})} }>Dive</section>

                <section className={`${activeAnimation.fade}`} onClick={ () => {setCurrentAnimation('fade'); 
                setActiveAnimation({ dive: false, fade: true, stairy: false, slide: false, roll: false})} }>Fade</section>

                <section className={`${activeAnimation.stairy}`} onClick={ () => {setCurrentAnimation('stairy'); 
                setActiveAnimation({ dive: false, fade: false, stairy: true, slide: false, roll: false})} }>Stairy</section>

                <section className={`${activeAnimation.slide}`} onClick={ () => {setCurrentAnimation('slide'); 
                setActiveAnimation({ dive: false, fade: false, stairy: false, slide: true, roll: false})} }>Slide</section>

                <section className={`${activeAnimation.roll}`} onClick={ () => {setCurrentAnimation('roll'); 
                setActiveAnimation({ dive: false, fade: false, stairy: false, slide: false, roll: true})} }>Roll</section>
            </div>
        </div>
    )
}

export default AnimationBar;
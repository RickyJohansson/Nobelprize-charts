import './AnimationBar.css';
import { useEffect, useRef } from 'react';
import anime, { AnimeInstance } from 'animejs';

type Props = {
    setCurrentAnimation: React.Dispatch<React.SetStateAction<String>>;
}

const AnimationBar = ({setCurrentAnimation}: Props) => {

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
                <section onClick={ () => setCurrentAnimation('dive') }>Dive</section>
                <section onClick={ () => setCurrentAnimation('fade') }>Fade</section>
                <section onClick={ () => setCurrentAnimation('stairy') }>Stairy</section>
                <section onClick={ () => setCurrentAnimation('slide') }>Slide</section>
                <section onClick={ () => setCurrentAnimation('roll') }>Roll</section>
            </div>
        </div>
    )
}

export default AnimationBar;
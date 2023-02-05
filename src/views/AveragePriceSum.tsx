import { Line } from 'react-chartjs-2';
import './AveragePriceSum.css';
import { useEffect } from 'react';
import data from '../../json_award.json';
import anime from 'animejs';

type Props = {
    currentAnimation: String;
}

const AveragePriceSum = ({currentAnimation}: Props) => {

    // returning prizeAmounts and awardYear for each category every year.

    useEffect(() => {
        if (currentAnimation === 'roll') {
            anime({
                targets: 'section.diagram_data',
                translateX: { value: ['-90vw', '0']},
                rotate: { value: ['0', '360'] },
                easing: 'easeOutCubic',
                duration: 4000,
                endDelay: 0,
                autoplay: true
            });
        } else if (currentAnimation === 'fade') {
            anime({
                targets: 'section.diagram_data',
                opacity: { value: ['0%', '100%'] },
                easing: 'easeInQuad',
                duration: 2000,
                endDelay: 0,
                autoplay: true
            });
        } else if (currentAnimation === 'slide') {
            anime({
                targets: 'section.diagram_data',
                translateX: { value: ['-120vw', '0']},
                endDelay: 500,
                duration: 3500,
                autoplay: true
            });
        } else if (currentAnimation === 'dive') {
            anime({
                targets: 'section.diagram_data',
                translateY: { value: ['-100vw', '0']},
                endDelay: 500,
                duration: 2000,
                easing: 'spring(.2, 30, 3.5, .2)',
                autoplay: true
            });
        } else if (currentAnimation === 'stairy') {
            anime({
                targets: 'section.diagram_data',
                keyframes: [
                    { translateX: '-90vw', opacity: '0%' },
                    { translateX: '-85vw', opacity: '100%' },
                    { translateX: '-60vw' },
                    { translateY: '-20vh' },
                    { translateX: '-45vw' },
                    { translateY: '-30vh' },
                    { translateX: '-30vw' },
                    { translateY: '-20vh' },
                    { translateX: '-15vw' },
                    { translateY: '-10vh' },
                    { translateX: '0vw' },
                    { translateY: '0vh' }

                ],
                easing: 'easeInOutElastic',
                duration: 6000,
                autoplay: true
            })
        }
    }, []);

    type PrizeByYear = {
        x: string;
        y: number;
    }

    const prizeAmountsByYear: PrizeByYear[] = data.map((award) => {
            return { x: award.awardYear, y: award.prizeAmount };
    });

    // Since we got multiple years holding equal values, we store one of them.
    let averagePriceSumDataset: PrizeByYear[] = [];
    prizeAmountsByYear.forEach(award => {
        if (!averagePriceSumDataset.some( prize => prize.x === award.x )) {
            averagePriceSumDataset.push(award);
        } else {
            return
        }
    });


    const averagePriceSumLabels = averagePriceSumDataset.map((prize) => {
        return prize.x;
    });



    const averagePriceSumData = {
        datasets: [
            {
                label: 'Average pricesum',
                data: averagePriceSumDataset,
                backgroundColor: ['#001F7A', '#003DF5', '#4775FF', '#6622CC', '#A755C2', '#B07C9E'],
            }
        ],
        labels: averagePriceSumLabels,
    }
        


    return(
        <div className="average_price-sum--wrapper">
            <section className="diagram_container">

                <h1 className="diagram_title">Average pricesum per year</h1>

                <section className="diagram_data">
                    < Line data={averagePriceSumData} />
                </section>
                
            </section>
        </div>
    )
}

export default AveragePriceSum;

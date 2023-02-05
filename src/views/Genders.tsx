import { Pie } from 'react-chartjs-2';
import './Genders.css';
import data from '../../json_laureates.json';
import { useEffect } from 'react';
import anime from 'animejs';

type Props = {
    currentAnimation: String;
}

const Genders = ({currentAnimation}: Props) => {

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
                translateX: { value: ['-100vw', '0']},
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
                    { translateX: '-110vw', opacity: '0%' },
                    { translateX: '-100vw', opacity: '100%' },
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


    // There are undefined genders, by console.log(data) while looping corresponding indexes, therefore:

    const genderData: any = data.map((laureate) => {
        if (laureate.gender === undefined) {
            return 'organisations';
        } else {
            return laureate.gender;
        }
    });
    // Now we return the undefined ones as the winning organisations.

    
    // Storing individual genders in array to display as labels

    let genderLabels: string[] = [], genderCount: any = {};

    for( let i=0; i<genderData.length; i++ ) {
        if( !genderLabels.includes(genderData[i])) {
            genderLabels.push(genderData[i]);
            genderCount[genderData[i]] = 1;
        } else {
            genderCount[genderData[i]] ++;
        }
        /*if ( genderData[i] === undefined ) {
            console.log(data[i]);
        } Discovering the organisations*/
    }

    
    // Going through how many counts we have on each label to display as count

    let genderDataset: number[] = [];

    genderLabels.forEach(label => {
        genderDataset.push(genderCount[label]);
    })

    const genderDiagramData = {
        datasets: [
            {
                data: genderDataset,
                label: 'Amount',
                backgroundColor: ['#001F7A', '#003DF5', '#4775FF', '#6622CC', '#A755C2', '#B07C9E']
            }
        ],
        labels: genderLabels
    }

    return(
        <div className="genders_wrapper">
            <section className="diagram_container">

                <h1 className="diagram_title">Distribution of men and women amongst laureates</h1>

                <section className="diagram_data">
                    <Pie data={genderDiagramData} />
                </section>
                
            </section>
        </div>
    )
}

export default Genders;
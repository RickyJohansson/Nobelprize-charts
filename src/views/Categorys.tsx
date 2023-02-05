import { Pie } from 'react-chartjs-2';
import data from '../../json_laureates.json';
import './Categorys.css';
import { useEffect } from 'react';
import anime from 'animejs';

type Props = {
    currentAnimation: String;
}

const Categorys = ({currentAnimation}: Props) => {

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
                    { translateX: '-80vw', opacity: '0%' },
                    { translateX: '-80vw', opacity: '100%' },
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


    const totalLaureates: number = data.length;

    // returning all nobelPrizes

    const getNobelPrizes = data.map((laureates) => {
        return laureates.nobelPrizes;
    });


    let getNobelCategorys: string[] = [], tempArray: string[] = [];
    // returning categorys from nobelPrizes in english

    for ( let i = 0; i < getNobelPrizes.length; i++) {

        tempArray = [];  // Temporarily holding the indivdual categorys for each laureate

        /* Maybe one out of the total laureates could hold prizes in more then one category?
         if so, add the laureates to these categorys aswell.*/
         if ( getNobelPrizes[i].length > 1 ) {
            for ( let j = 0; j < getNobelPrizes[i].length; j++) {
                if ( !tempArray.includes(getNobelPrizes[i][j].category.en) ) {
                    tempArray.push(getNobelPrizes[i][j].category.en);
                }
            }
            if (tempArray.length > 0) {
                tempArray.forEach(category => getNobelCategorys.push(category));
            }
         } else {
            getNobelCategorys.push(getNobelPrizes[i][0].category.en);
         }
    };


    // Storing individual categorys in an array to display as labels
    let categoryLabels: string[] = [], categoryCount: any = {};

    for ( let i = 0; i < getNobelCategorys.length; i++ ) {
        if ( !categoryLabels.includes(getNobelCategorys[i])) {
            categoryLabels.push(getNobelCategorys[i]);
            categoryCount[getNobelCategorys[i]] = 1;
        } else {
            categoryCount[getNobelCategorys[i]] ++;
        } 
    }


    // Going through how many counts we got on each label to display as count 

    let categoryDataset: number[] = [];

    categoryLabels.forEach( label => {
        categoryDataset.push(categoryCount[label]);
    });


    const categoryDiagramData = {
        datasets: [
            {
                data: categoryDataset,
                label: 'Laureates',
                backgroundColor: ['#001F7A', '#003DF5', '#4775FF', '#6622CC', '#A755C2', '#B07C9E']
            }
        ],
        labels: categoryLabels
    }


    return(
        <div className="category_wrapper">
            <section className="diagram_container">

                <section className="diagram_titles">
                    <h1>From a total of { totalLaureates } laureates: </h1>
                    <h2>Distribution of categorys amongst laureates</h2>
                </section>

                <section className="diagram_data">
                    <Pie data={categoryDiagramData} />
                </section>
            </section>
        </div>
    )
}

export default Categorys;
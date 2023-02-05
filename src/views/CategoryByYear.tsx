import './CategoryByYear.css';
import { Bar } from 'react-chartjs-2';
import data from '../../json_laureates.json';
import { useState, useEffect } from 'react';
import anime, { AnimeInstance } from 'animejs';

type Props = {
    currentAnimation: String;
}

const CategoryByYear = ({currentAnimation}: Props) => {

    const [ chosenYear, setChosenYear ] = useState<string>('2019');


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


    // Limiting the input to a 4-digit numeric value.
    const handleChange = (e: any) => {

        const result = e.target.value.replace(/\D/g, '');

        if (result.length > 4) {
            const newResult = result.slice(0, -1);
            setChosenYear(newResult);
        } else {
            setChosenYear(result);
        }
    }

    // returning all nobelPrizes

    const getNobelPrizes = data.map((laureates) => {
        return laureates.nobelPrizes;
    });

    
    // checking for the years who equal the search-term
    const nobelPrizesByYear = getNobelPrizes.filter((nobelPrize) => {
        for ( let i = 0; i < nobelPrize.length; i++ ) {
            if ( nobelPrize[i].awardYear == chosenYear ) {
                return nobelPrize;
            }
        }
    });

    // capturing all available years to show first -> last year for the user search field.
    const allNobelPrizeYears = getNobelPrizes.map((nobelPrize) => {
        for ( let i = 0; i < nobelPrize.length; i++ ) {
            return nobelPrize[i].awardYear;
        }
    });

    const sortedYears = [...allNobelPrizeYears].sort();



    let getNobelCategorys: string[] = [], tempArray: string[] = [];
    // returning categorys from nobelPrizes in english

    for ( let i = 0; i < nobelPrizesByYear.length; i++) {

        tempArray = [];  // Temporarily holding the indivdual categorys for each laureate

        /* Maybe one out of the total laureates could hold prizes in more then one category?
         if so, add the laureates to these categorys aswell.*/
         if ( getNobelPrizes[i].length > 1 ) {
            for ( let j = 0; j < nobelPrizesByYear[i].length; j++) {
                if ( !tempArray.includes(nobelPrizesByYear[i][j].category.en) ) {
                    tempArray.push(nobelPrizesByYear[i][j].category.en);
                }
            }
            if (tempArray.length > 0) {
                tempArray.forEach(category => getNobelCategorys.push(category));
            }
         } else {
            getNobelCategorys.push(nobelPrizesByYear[i][0].category.en);
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


    const categoryBarData = {
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
        <div className="category_by-year--wrapper">
            <section className="diagram_container">

                <h1 className="diagram_title">Number of laureates for each category at a given year </h1>
                <p>year 1940 - 1942: No Nobel Prize was awarded this year. The prize money was with 1/3 allocated to the Main Fund and with 2/3 to the Special Fund of this prize section.</p>

                <section className="form">
                    <label htmlFor="year"> Enter a year between { sortedYears[0] } - { sortedYears[sortedYears.length - 1] } (yyyy): </label>
                    <input type="text" value={ chosenYear } onChange={ handleChange }/>
                </section>

                <h2 className="diagram_year">Year: { chosenYear }</h2>

                <section className="diagram_data">
                    <Bar data={categoryBarData} />
                </section>

            </section>
        </div>
    )

}

export default CategoryByYear;
import './App.css'
import Header from './components/Header';
import Main from './views/Main';
import { Routes, Route } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import Genders from './views/Genders';
import Categorys from './views/Categorys';
import CategoryByYear from './views/CategoryByYear';
import AveragePriceSum from './views/AveragePriceSum';
import AnimationBar from './components/AnimationBar';
import anime from 'animejs';


function App() {

  const [currentAnimation, setCurrentAnimation] = useState<String>('fade');


  let animationRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const startLoop = () => {
      if (animationRef.current) {
        anime({
          targets: ' figure.random_star',
          left: () => {
            return anime.random(350, Math.random() * 2000);
          },
          top: () => {
            return anime.random(200, Math.random() * 850);
          },
          easing: 'easeInOutCubic',
          duration: 8000,
          complete: () => {
            startLoop();
          }
        });
      } else {

      }
    }
    startLoop();
  }, []);



  let starArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="App">
      { starArray.map((item) => 
      <figure ref={ animationRef } className="random_star" key={ item }>
        <div className="star_piece__one"></div>
        <div className="star_piece__two"></div>
        <div className="star_piece__three"></div>
      </figure>) }

      < Header />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/Genders" element={<Genders currentAnimation={ currentAnimation }/>} />
        <Route path="/Categorys" element={<Categorys currentAnimation={ currentAnimation }/>} />
        <Route path="/CategoryByYear" element={<CategoryByYear currentAnimation={ currentAnimation }/>} />
        <Route path="/AveragePriceSum" element={<AveragePriceSum currentAnimation={ currentAnimation }/>} />
      </Routes>
      < AnimationBar setCurrentAnimation={setCurrentAnimation} />
    </div>
  )
}

export default App

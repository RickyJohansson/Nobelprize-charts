import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
  BarElement,
	Title,
	Tooltip,
	Legend,
  ArcElement
} from 'chart.js'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
  BarElement,
	Title,
	Tooltip,
	Legend,
  ArcElement
)



import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RestaurantsApp from './RestaurantsApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RestaurantsApp />, document.getElementById('root'));
registerServiceWorker();

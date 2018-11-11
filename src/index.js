import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ItemsList from './pages/ItemsList';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ItemsList />, document.getElementById('root'));


serviceWorker.unregister();

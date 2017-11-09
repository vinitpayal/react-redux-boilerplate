import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

ReactDom.render(<App/>,document.getElementById('root'));
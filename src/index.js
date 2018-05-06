import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Typography from 'typography'
import bootstrapTheme from 'typography-theme-bootstrap'

const typography = new Typography(bootstrapTheme)
typography.injectStyles()

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

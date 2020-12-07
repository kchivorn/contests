import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// ReactDOM.hydrate(
//   <App />,
//   document.getElementById('mountNode'),
// );


ReactDOM.render(
    <App initialData={window.initialData} />,
    document.getElementById('root')
);

import Axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// ReactDOM.hydrate(
//   <App />,
//   document.getElementById('mountNode'),
// );


ReactDOM.render(
    <App initialContests={window.initialData.contests} />,
    document.getElementById('root')
);
    



import React from 'react';
import ReactDOM from 'react-dom';
import data from './testData';
import App from './components/App';

// ReactDOM.hydrate(
//   <App />,
//   document.getElementById('mountNode'),
// );

ReactDOM.render(
    <App contests={data.contests} />,
  document.getElementById('root')
);

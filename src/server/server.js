import express from 'express';
import config from '../../config';
import apiRouter from '../../api';
import sassMiddleWare from 'node-sass-middleware';
import path from 'path';


const server = express();

server.use(sassMiddleWare({
    src: path.join(__dirname, '../../sass'),
    dest: path.join(__dirname, '../../dist'),
}));

server.set('view engine', 'ejs');

server.use('/api', apiRouter);
server.use(express.static('dist'));

import serverRender from '../../serverRender';

server.get(['/', '/contest/:contestId'], (req, res) => {
  serverRender(req.params.contestId)
    .then(({initialMarkup, initialData}) => {
        res.render('index', {
            initialMarkup,
            initialData
        });
    })
    .catch(console.error);
});

server.listen(config.port, config.host, () => 
  console.log('Server is running on port: ' + config.port));
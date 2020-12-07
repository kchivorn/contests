import express from 'express';
import config from '../../config';
import apiRouter from '../../api';
import sassMiddleWare from 'node-sass-middleware';
import path from 'path';
import bodyParser from 'body-parser';

const server = express();
server.use(bodyParser.json());

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
    .catch(error => {
        console.error(error);
        res.status(404).send('Bad Request');
    });
});

server.listen(config.port, config.host, () => 
  console.log('Server is running on port: ' + config.port));
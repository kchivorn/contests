import express from 'express';
import config from '../../config';
import apiRouter from '../../api';
import sassMiddleWare from 'node-sass-middleware';
import path from 'path';


const server = express();

server.use(sassMiddleWare({
    src: path.join(__dirname, '../../sass'),
    dest: path.join(__dirname, '../../public'),
})
);

server.set('view engine', 'ejs');

server.use('/api', apiRouter);
server.use(express.static('dist'));

server.get('/', (req, res) => {

  res.render('index', {
    content: '...'
  });
});

server.listen(8080, () => 
  console.log('Server is running on port: ' + config.port));
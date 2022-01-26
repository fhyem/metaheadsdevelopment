import 'core-js/stable';
import 'regenerator-runtime/runtime';

const express = require('express');
const path = require('path');
const app = express();
const React = require('react');
import App from './src/App';
import { Provider } from 'react-redux';
const ReactDOMServer = require('react-dom/server');
import { StaticRouter } from 'react-router';
import { store } from './src/redux/store';
import compression from 'compression';

app.use(compression());

app.use('*.gz', (req, res, next) => {
  console.log('inside gzip');
  console.log(req.hostname);
  res.set('Content-Encoding', 'gzip');
  next();
});
app.use(express.static('build/public', { maxAge: '1d' }));

const defaultPort = 3000;
const PORT = process.env.PORT || defaultPort;

const getRequestOrigin = (req) => {
  // let protocol = req.get('X-Forwarded-Proto');
  // if (!protocol) {
  //   return 'http://' + req.hostname + ':' + defaultPort;
  // }
  // return protocol + '://' + req.hostname;
  return `https://${req.hostname}`;
};

app.get('*', function (req, res) {
  const staticHtml = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={{}}>
      <Provider store={store}>
        <App isLoaded={true} />
      </Provider>
    </StaticRouter>
  );
  // const origin = getRequestOrigin(req);
  res.send(
    `<html><head>
    <meta charset="utf-8" />
    <link rel="icon" href="favicon.ico" />
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" type="text/css" href="main_V5.css">
    <meta http-equiv=X-UA-Compatible content="ie=edge" />
    </head><body><div id=root>${staticHtml}</div><script src=client_bundle_V5.js></script></body></html>`
  );
});

app.listen(PORT, () => console.log('React is running on port 3000 Hi'));

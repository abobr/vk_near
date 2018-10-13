import 'core-js/es6/map';
import 'core-js/es6/set';
import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vkui-connect';
import App from './App';
import registerServiceWorker, {unregister} from './sw';

// Init VK App
connect.send('VKWebAppInit', {});

// Service Worker For Cache
unregister();

ReactDOM.render(<App />, document.getElementById('root'));

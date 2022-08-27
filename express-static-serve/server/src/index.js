import logMessage from './js/logger';
import './css/style.css';

//Log message to console
logMessage('A very warm welcome to Expack');

// Needed for hot module reloading
if(typeof(module.hot) != 'undefined') { // eslint-disable-line no-undef
    console.log('yess'); // eslint-disable-line no-undef
    module.hot.accept() // eslint-disable-line no-undef
}
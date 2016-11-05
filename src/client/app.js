import 'babel-polyfill';
import Dog from '../shared/dog';

const browserYen = new Dog('browser Yen');

document.querySelector('.app').innerText = browserYen.bark();

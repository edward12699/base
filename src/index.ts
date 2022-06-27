
import './style.css';
import Icon from './inner-peace.jpg';
import { printMe } from './print.js';
import _ from 'lodash';


function getComponent() {
  const element = document.createElement('div');
  // const { default: _ } = await import('lodash');
  // lodash 在当前 script 中使用 import 引入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
  return element;
}


const element = getComponent();
element.onclick = printMe
document.body.appendChild(element);







if (module.hot) {
  module.hot.accept('./print.js', async function () {
    console.log('Accepting the updated printMe module!');
    // document.body.removeChild(element)
    // element.onclick = printMe
    // document.body.appendChild(element);
  })
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
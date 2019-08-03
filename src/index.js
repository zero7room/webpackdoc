// import _ from 'lodash';
import './style.css';
import { cube } from './math.js';
// import Icon from './icon.png';
// import printMe from './print.js';

function component() {
    // let element = document.createElement('div');
    var btn = document.createElement('button');
    var btn = document.createElement('pre');
    element.innerGTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');
    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // element.classList.add('hello');

    // 将图像添加到我们已存在的div中
    // var myIcon = new Image();
    // myIcon.src = Icon;
    // element.appendChild(myIcon);

    // btn.innerHtml = '点击这里，然后查看 console！';
    // btn.onclick = printMe;
    // element.appendChild(btn);

    return element;
}

document.body.appendChild(component());

// if (module.hot) {
//     module.hot.accept('./print.js', function () {
//         console.log('Accepting the updated printMe module!');
//         printMe();
//     })
// }
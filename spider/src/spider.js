import Heading from './components/heading/heading.js';
import SpiderImage from './components/spider-image/spider-image.js';

const heading = new Heading();
heading.render('Spider');
const spiderImage = new SpiderImage();
spiderImage.render();

import('HelloWorldApp/HelloWorldButton')
    .then(HelloWorldButtonModule => {
        const HelloWorldButton = HelloWorldButtonModule.default;
        const helloWorldButton = new HelloWorldButton();
        helloWorldButton.render();
    })
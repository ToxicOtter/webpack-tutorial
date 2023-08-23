import HelloWorldButton from './components/hello-world-button/hello-world-button.js';
import Heading from './components/heading/heading.js';

const heading = new Heading();
heading.render('Hello world');

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();
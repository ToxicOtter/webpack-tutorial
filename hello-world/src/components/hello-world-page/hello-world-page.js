import HelloWorldButton from '../hello-world-button/hello-world-button.js';
import Heading from '../heading/heading.js';

export default class HelloWorldPage {
    render(){
        const heading = new Heading();
        heading.render('Hello world');

        const helloWorldButton = new HelloWorldButton();
        helloWorldButton.render();
    }
}
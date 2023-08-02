import './hello-world-button.css'

export default class HelloWorldButton{
    render (){
        const button =  document.createElement('button');
        const body = document.querySelector('body');

        button.innerHTML = 'Hello World';
        button.classList.add('hello-world-button');
        button.onclick = function() {
            const p = document.createElement('p');
            p.innerHTML = 'Hello World';
            p.classList.add('hello-world-text');
            body.appendChild(p);
        }

        body.appendChild(button);
    }
}
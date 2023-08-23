import Spider from './spider.jpg';
import './spider-image.scss';

export default class SpiderImage{
    render(){
        const img = document.createElement('img');
        img.src = Spider;
        img.alt = 'Spider';
        img.classList.add('spider-image');

        const bodyDomElement = document.querySelector('body');
        bodyDomElement.appendChild(img);
    }
}
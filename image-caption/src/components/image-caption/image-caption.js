import './image-caption.scss';

export default class ImageCapton{
    render(text){
        const p = document.createElement('p');
        p.innerHTML = text;
        p.classList.add('image-caption');
        const body = document.querySelector('body');
        body.appendChild(p);
    }
}
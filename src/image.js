import spider from './spider.jpg';

function addImage(){
    const img = document.createElement('img');
    img.alt = "Spider";
    img.width = 300;
    img.src = spider;
    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage();
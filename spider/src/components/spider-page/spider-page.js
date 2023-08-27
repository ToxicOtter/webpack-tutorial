import Heading from '../heading/heading.js';
import SpiderImage from '../spider-image/spider-image.js';

export default class SpiderPage {
    render(){
        const heading = new Heading();
        heading.render('Spider');
        const spiderImage = new SpiderImage();
        spiderImage.render();

        import('ImageCaptionApp/ImageCaption')
            .then(ImageCaptionModule => {
                const ImageCaption = ImageCaptionModule.default;
                const imageCaption = new ImageCaption();
                imageCaption.render('Dois homens aranhas');
            });
    }
}
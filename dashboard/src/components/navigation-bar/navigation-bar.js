import './navigation-bar.scss';

export default class NavigarionBar{
    render(navigationItems){
        const liItems = navigationItems.map(navigationItem => {
            return `
                <li>
                    <a href="${navigationItem.url}">${navigationItem.title}</a>
                </li>
            `;
        });
        const ul = document.createElement('ul');
        ul.innerHTML = liItems.join('');
        ul.classList.add('navigation-bar');
        document.querySelector('body').appendChild(ul);
    }
}
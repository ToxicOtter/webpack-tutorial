import NavigationBar from './components/navigation-bar/navigation-bar.js';

const navigationItems = [
    {
        url: '/hello-world-page',
        title: 'Hello World Page'
    },
    {
        url: '/spider-page',
        title: 'Spider Page'
    }
]

const navigationBar = new NavigationBar();
navigationBar.render(navigationItems);

const url = window.location.pathname;

if (url === '/hello-world-page'){
    import('HelloWorldApp/HelloWorldPage')
        .then(HelloWorldPageModule => {
            const HelloWorldPage = HelloWorldPageModule.default;
            const helloWorldPage = new HelloWorldPage();
            helloWorldPage.render();
        })
} else if (url === '/spider-page'){
    import('SpiderApp/SpiderPage')
        .then(SpiderPageModule => {
            const SpiderPage = SpiderPageModule.default;
            const spiderPage = new SpiderPage();
            spiderPage.render();
        })
}

console.log('dashboard');
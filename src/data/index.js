import navbar from './pages/navbar_page'
import hero from './pages/hero_page'
import footer from './pages/footer_page'

export default (page) => {
    switch(page) {
        case '/index.html':
            return { ...navbar, ...hero, ...footer};
        default:
            return {};
    }
};

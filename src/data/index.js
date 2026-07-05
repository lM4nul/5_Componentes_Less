import navbar from './pages/navbar_page'
import hero from './pages/hero_page'

export default (page) => {
    switch(page) {
        case '/index.html':
            return { ...navbar, ...hero };
        default:
            return {};
    }
};

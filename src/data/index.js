import navbar from './pages/navbar_page'
import hero from './pages/hero_page'
import half from './pages/half_data'
import footer from './pages/footer_page'

export default (page) => {
    switch(page) {
        case '/index.html':
            return { ...navbar, ...hero, ...half,...footer};
        default:
            return {};
    }
};

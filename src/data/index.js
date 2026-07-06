import navbar from './pages/navbar_page'
import hero from './pages/hero_page'
import half from './pages/half_data'

export default (page) => {
    switch(page) {
        case '/index.html':
            return { ...navbar, ...hero, ...half };
        default:
            return {};
    }
};

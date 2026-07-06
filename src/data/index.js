import navbar from './pages/navbar_page'
import hero from './pages/hero_page'
import half from './pages/half_data'
import footer from './pages/footer_page'
import cards from './pages/cards_page'

export default (page) => {
    switch(page) {
        case '/index.html':
            return { ...navbar, ...hero, ...cards, ...half,...footer};
        default:
            return {};
    }
};

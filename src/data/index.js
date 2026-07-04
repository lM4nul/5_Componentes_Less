import navbar from './pages/navbar_page'

export default (page)=>{
    switch(page){
        case '/index.html':
            return navbar;
        default:
            return {};
    }
};
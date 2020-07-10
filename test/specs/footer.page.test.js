import footer from '../pages/footer.page';

describe('Footer', function() {

    it ('Footer-displayed', function(){
        browser.url('/');
        footer.footerDisplayed();
    })

    it ('First-line', function(){
        footer.firstLine();
    })

    it ('Second-line', function(){
        footer.secondLine();
    })


})
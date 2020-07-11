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

    it ('Footer-coloms-first-displayed', function(){
        footer.footerColomsFirst();
    })

    it ('Footer-coloms1-text1', function(){
        footer.footerColomsText1();
    })

    it ('Coloms1-link1-displayed', function(){
        footer.coloms1Link1Displayed();
    })

    it ('Coloms1-link1-text', function(){
        footer.coloms1Link1Text();
    })

    it ('Coloms1-link2-displayed', function(){
        footer.coloms1Link2Displayed();
    })

    it ('Coloms1-link2-text', function(){
        footer.coloms1Link2Text();
    })

    it ('Footer-coloms-second-displayed', function(){
        footer.footerColomsSecond();
    })

    it ('Footer-coloms2-text2', function(){
        footer.footerColomText2();
    })

    /*it ('Coloms2-phone-displayed', function(){
        footer.coloms2PhoneDisplayed();
    })

    it ('Coloms2-phone-text', function(){
        footer.coloms2PhoneText();
    })

    it ('Coloms2-email-displayed', function(){
        footer.coloms2EmailDisplayed();
    })

    it ('Coloms2-email-text', function(){
        footer.coloms2EmailText();
    })

    it ('Coloms2-fax-displayed', function(){
        footer.coloms2FaxDisplayed();
    })

    it ('Coloms2-fax-text', function(){
        footer.coloms2FaxText();
    })*/

    it ('Footer-coloms-third-displayed', function(){
        footer.footerColomsThird();
    })

    it ('Footer-coloms-text3', function(){
        footer.footerColomstext3();
    })

    it ('Facebook-icon-is-displayed', function(){
        footer.facebookIconDisplayed();
    })

    it ('Twitter-icon-is-displayed', function(){
        footer.twitterIconDisplayed();
    })

    it ('linkedin-icon-is-displayed', function(){
        footer.linkedinIconDisplayed();
    })

    it ('Alluma-icon-is-displayed', function(){
        footer.allumaIconDisplayed();
    })

})
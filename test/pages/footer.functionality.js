import sel from '../selectors/footer.page.sel';
import exp from '../expected/footer.exp';
import { assert } from 'chai';


class FooterFunctionality  { 

    siteLink1IsClickable(){
        $(sel.colomsFirstLink1).isDisplayed();
        let link1 = $(sel.colomsFirstLink1).isClickable();
        assert.equal(link1, true);        
    }  

    siteLink2IsClickable(){
        $(sel.colomsFirstLink2).isDisplayed();
        let link2 = $(sel.colomsFirstLink2).isClickable();
        assert.equal(link2, true);        
    }

    emailAddressIsClickable(){
        $(sel.colom2str2).isDisplayed();
        let mail = $(sel.colom2str2).isClickable();
        assert.equal(mail, true);        
    }

    emailAddressIsClickable(){
        $(sel.colom2str2).isDisplayed();
        let mail = $$(sel.colom2str2)[0].isClickable();
        assert.equal(mail, true);        
    }

    facebookIconIsClickable(){
        $(sel.facebookIcon).isDisplayed();
        let fbicon = $(sel.facebookIcon).isClickable();
        assert.equal(fbicon, true);        
    }

    facebookIconRedirect(){
        $(sel.facebookIcon).click(); 
        let allumaFB = $(sel.allumaFB).isDisplayed();
        assert.equal(allumaFB, true)
        browser.url('/');
    }

    twitterIconIsClickable(){
        $(sel.twitterIcon).isDisplayed();
        let twicon = $(sel.twitterIcon).isClickable();
        assert.equal(twicon, true);        
    }

    twitterIconRedirect(){
        $(sel.twitterIcon).click();
        let allumaTw = $(sel.allumaTwitter).isDisplayed();
        assert.equal(allumaTw, true);
        browser.url('/');
    }

    linkedinIconRedirect(){
        $(sel.linkedinIcon).click(); 
        browser.pause(10000);
        let allumaLN = $(sel.allumaLinkedin).isDisplayed();
        browser.pause(10000);
       // console.log($(sel.allumaLinkedin))
        assert.equal(allumaLN, true)
        browser.url('/');
    }

}

export default new FooterFunctionality(); 
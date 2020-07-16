import sel from '../selectors/footer.page.sel';
import exp from '../expected/footer.exp';
import { assert } from 'chai';
import Base from './Base';


class FooterFunctionality extends Base { 

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
        let mail = $$(sel.colom2str2)[0].isClickable();
        assert.equal(mail, true);        
    }
    emailAddressRedirect(){
        this.openBase();
        $(sel.colom2str2).click();
        assert.equal(browser.getUrl(), exp.emailAddressRedirect);
        this.openBase();
    }
    
    facebookIconIsClickable(){
        $(sel.facebookIcon).isDisplayed();
        let fbicon = $(sel.facebookIcon).isClickable();
        assert.equal(fbicon, true);        
    }

    facebookIconRedirect(){
        $(sel.facebookIcon).click(); 
        assert.equal(browser.getUrl(), exp.faceboolRedirect);
        this.openBase();
    }

    twitterIconIsClickable(){
        $(sel.twitterIcon).isDisplayed();
        let twicon = $(sel.twitterIcon).isClickable();
        assert.equal(twicon, true);        
    }

    twitterIconRedirect(){
        $(sel.twitterIcon).click();
        assert.equal(browser.getUrl(), exp.twitterRedirect);
        this.openBase();
    }

    linkedinIconIsClickable(){
        $(sel.linkedinIcon).isDisplayed();
        let inicon = $(sel.linkedinIcon).isClickable();
        assert.equal(inicon, true);        
    }

    linkedinIconRedirect(){
        $(sel.linkedinIcon).click(); 
        assert.equal(browser.getUrl(), exp.limkedineRedirect);        
    }

    allumaIconIsClickable(){
        this.openBase();
        $(sel.allumaIcon).isDisplayed();
        let alluma = $(sel.allumaIcon).isClickable();
        assert.equal(alluma, true);        
    }

    allumaIconRedirect(){
        $(sel.allumaIcon).click();
        assert.equal(browser.getUrl(), exp.allumaRedirect);
        this.openBase();
    }

    appVersionClickable() {
        $$(sel.appVersion)[0].isDisplayed();
        let appCl = $$(sel.appVersion)[0].isClickable();
        assert.equal(appCl, true);
    }

    allumaLinkInAppVersionClickable() {
        $(sel.allumaLincInAppVersion).isDisplayed();
        let appL2 = $(sel.allumaLincInAppVersion).isClickable();
        assert.equal(appL2, true);
    } 
    
    allumaLinkInAppVersionRedirect() {
        $(sel.allumaLincInAppVersion).click();
        assert.equal(browser.getUrl(), exp.allumaRedirect);
        this.openBase();
    }

    privacyPolicyClickable() {
        $$(sel.privacyPolicy)[2].isDisplayed();
        let pol4 = $$(sel.privacyPolicy)[2].isClickable();
        assert.equal(pol4, true);
    }

    nonDiscriminationPolicyClickable() {
        $$(sel.nonDiscriminationPolicy)[4].isDisplayed();
        let pol5 = $$(sel.nonDiscriminationPolicy)[4].isClickable();
        assert.equal(pol5, true);
    }

    termsOfUseClickable() {
        $$(sel.termsOfUse)[6].isDisplayed();
        let term2 = $$(sel.termsOfUse)[6].isClickable();
        assert.equal(term2, true);
    }
}

export default new FooterFunctionality(); 
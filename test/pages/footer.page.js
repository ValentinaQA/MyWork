import sel from '../selectors/footer.page.sel';
import exp from '../expected/footer.exp';
import { assert } from 'chai';


class Footer  { //extends Base

    footerDisplayed (){
        $(sel.footer).waitForDisplayed();        
    }

    firstLine() {
        let first = $(sel.footerContactLine).isDisplayed();
        assert.equal(first, true);
    }

    secondLine() {
        let second = $(sel.footerSecondLine).isDisplayed();
        assert.equal(second, true);
    }    

    footerColomsFirst() {
        let col1 = $(sel.colomsFirst).isDisplayed();
        assert.equal(col1, true);
    }

    footerColomsText1() {
        let col1 = $(sel.colomsFirst).getText();
        assert.equal(col1, exp.colon1);
    }

    coloms1Link1Displayed() {
        let link = $(sel.colomsFirstLink1).isDisplayed();
        assert.equal(link, true);
    }

    coloms1Link1Text() {
        let link1 = $(sel.colomsFirstLink1).getText();
        assert.equal(link1, exp.colon1Link1);
    }

    coloms1Link2Displayed() {
        let link2 = $$(sel.colomsFirstLink2)[0].isDisplayed();
        assert.equal(link2, true);
    }

    coloms1Link2Text() {
        let link22 = $$(sel.colomsFirstLink2)[1].getText();
        assert.equal(link22, exp.colon1Link2);
    }

    footerColomsSecond() {
        let col2 = $(sel.colomsSecond).isDisplayed();
        assert.equal(col2, true);
    }

    footerColomText2() {
        let col2 = $(sel.colomsSecond).getText();
        assert.equal(col2, exp.colon2);
    }

    coloms2PhoneDisplayed() {
        let phone = $(sel.colom2str1).isDisplayed();
        console.log(phone)
        assert.equal(phone, true);
    }

    coloms2PhoneText() {
        let phone1 = $(sel.colom2str1).isDisplayed();
        assert.equal(phone1, exp.phoneSuport);
    }

    coloms2EmailDisplayed() {
        let email = $(sel.colom2str2).isDisplayed();
        assert.equal(email, true);
    }

    coloms2EmailText() {
        let email1 = $$(sel.colom2str2)[0].isDisplayed();
        assert.equal(email1, exp.mailSuport);
    }

    coloms2FaxDisplayed() {
        let fax = $(sel.colom2str3).isDisplayed();
        assert.equal(fax, true);
    }

    coloms2FaxText() {
        let fax1 = $(sel.colom2str3).isDisplayed();
        assert.equal(fax1, exp.faxSuport);
    }

    footerColomsThird() {
        let col3 = $(sel.colomsThird).isDisplayed();
        assert.equal(col3, true);
    }

    footerColomstext3() {
        let col3 = $(sel.colomsThird).getText();
        assert.equal(col3, exp.colon3);
    }

    facebookIconDisplayed() {
        let fb = $(sel.facebookIcon).isDisplayed();
        assert.equal(fb, true);
    }

    twitterIconDisplayed() {
        let tw = $(sel.twitterIcon).isDisplayed();
        assert.equal(tw, true);
    }

    linkedinIconDisplayed() {
        let ld = $(sel.linkedinIcon).isDisplayed();
        assert.equal(ld, true);
    }


}

export default new Footer(); 
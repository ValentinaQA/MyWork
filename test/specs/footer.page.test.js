import footer from '../pages/footer.page';
import footerF from '../pages/footer.functionality';

describe('FooterDisplayed', function () {

    it('Footer-displayed', function () {
        footer.openBase();
        footer.footerDisplayed();
    })

    it('First-line-is-displayed', function () {
        footer.firstLine();
    })

    it('Second-line-is-displayed', function () {
        footer.secondLine();
    })

    it('Footer-coloms-first-displayed', function () {
        footer.footerColomsFirst();
    })
    it('Coloms1-link1-displayed', function () {
        footer.coloms1Link1Displayed();
    })

    it('Coloms1-link2-displayed', function () {
        footer.coloms1Link2Displayed();
    })

    it('Footer-coloms-second-displayed', function () {
        footer.footerColomsSecond();
    })

    it('Coloms2-phone-displayed', function () {
        footer.coloms2PhoneDisplayed();
    })

    it('Coloms2-email-displayed', function () {
        footer.coloms2EmailDisplayed();
    })

    it('Coloms2-fax-displayed', function () {
        footer.coloms2FaxDisplayed();
    })

    it('Footer-coloms-third-displayed', function () {
        footer.footerColomsThird();
    })

    it('Facebook-icon-is-displayed', function () {
        footer.facebookIconDisplayed();
    })

    it('Twitter-icon-is-displayed', function () {
        footer.twitterIconDisplayed();
    })

    it('Coloms2-phone-displayed', function () {
        footer.coloms2PhoneDisplayed();
    })

    it('Linkedin-icon-is-displayed', function () {
        footer.linkedinIconDisplayed();
    })

    it('Alluma-icon-is-displayed', function () {
        footer.allumaIconDisplayed();
    })

    it('App-version-displayed', function () {
        footer.appVersionDisplayed();
    })

    it('Alluma-link-in-app-version-displayed', function () {
        footer.allumaLinkInAppVersionDisplayed();
    })

    it('Privacy-policy-displayed', function () {
        footer.privacyPolicyDisplayed();
    })

    it('Non-discrimination-policy-displayed', function () {
        footer.nonDiscriminationPolicyDisplayed();
    })

    it('Terms-of-use-displayed', function () {
        footer.termsOfUseDisplayed();
    })
})

describe('FooterText', function () {

    it('Footer-coloms1-text1', function () {
        footer.footerColomsText1();
    })

    it('Coloms1-link1-text', function () {
        footer.coloms1Link1Text();
    })

    it('Coloms1-link2-text', function () {
        footer.coloms1Link2Text();
    })

    it('Footer-coloms2-text2', function () {
        footer.footerColomText2();
    })

    it('Coloms2-phone-text', function () {
        footer.coloms2PhoneText();
    })

    it('Coloms2-email-text', function () {
        footer.coloms2EmailText();
    })

    it('Coloms2-fax-text', function () {
        footer.coloms2FaxText();
    })

    it('Footer-coloms-text3', function () {
        footer.footerColomstext3();
    })

    it('App-version-text', function () {
        footer.appVersionText();
    })

    it('Alluma-link-in-app-version-text', function () {
        footer.allumaLinkInAppVersionText();
    })

    it('Privacy-policy-text', function () {
        footer.privacyPolicyText();
    })

    it('Non-discrimination-policy-text', function () {
        footer.nonDiscriminationPolicyText();
    })

    it('Terms-of-use-text', function () {
        footer.termsOfUseText();
    })
})

describe('FooterFunctionality', function () {

    it('SiteLink1-is-clickable', function () {
        footerF.siteLink1IsClickable();
    })

    it('SiteLink2-is-clickable', function () {
        footerF.siteLink2IsClickable();
    })

    it('Email-address-is-clickable', function () {
        footerF.emailAddressIsClickable();
    })

    it('Facebook-icon-is-clickable', function () {
        footerF.facebookIconIsClickable();
    })

    it('Facebook-icon-redirect', function () {
        footerF.facebookIconRedirect();
    })

    it('Twitter-icon-is-clickable', function () {
        footerF.twitterIconIsClickable();
    })

    it('Twitter-icon-redirect', function () {
        footerF.twitterIconRedirect();
    })

    it('Linkedin-icon-is-clickable', function () {
        footerF.linkedinIconIsClickable();
    })

    it('Alluma-icon-is-clickable', function () {
        footerF.allumaIconIsClickable();
    })

    it('Alluma-icon-redirect', function () {
        footerF.allumaIconRedirect();
    })

    it('App-version-is-clickable', function () {
        footerF.appVersionClickable();
    })

    it('Alluma-link-in-app-version-is-clickable', function () {
        footerF.allumaLinkInAppVersionClickable();
    })

    it('Alluma-link-in-app-version-is-redirect', function () {
        footerF.allumaLinkInAppVersionRedirect();
    })

    it('Privacy-policy-is-clickable', function () {
        footerF.privacyPolicyClickable();
    })

    it('Non-discrimination-policy-is-clickable', function () {
        footerF.nonDiscriminationPolicyClickable();
    })

    it('Terms-of-use-is-clickable', function () {
        footerF.termsOfUseClickable();
    })
})
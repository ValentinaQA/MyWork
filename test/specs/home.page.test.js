import home from '../pages/home.page';

describe('Home', function() {

    it ('Page-displayed', function(){       
        home.open();      
    })  
    
    it('Form-displayed', function () {
        home.logoFormDisplayed();
    })

    it('Login-form-title-connection-displayed', function () {
        home.loginFormTitleConnectionDisplayed();
    })

    it('Login-form-title-connection-text', function () {
        home.loginFormTitleConnectionText();
    })

    it('Login-form-title-welcome-displayed', function () {
        home.loginFormTitleWelcomeDisplayed();
    })

    it('Login-form-title-welcome-text', function () {
        home.loginFormTitleWelcomeText();
    })

    it('Login-form-title-connect-people-displayed', function () {
        home.loginFormTitleConnectPeopleDisplayed();
    })

    it('Login-form-title-connect-people-text', function () {
        home.loginFormTitleConnectPeopleText();
    })

    it('Login-form-title-what-you-may-qualify-for-displayed', function () {
        home.loginFormTitleWhatYouMayQualifyForDisplayed();
    })

    it('Login-form-title-what-you-may-qualify-for-text', function () {
        home.loginFormTitleWhatYouMayQualifyForText();
    })

    it('Login-form-title-try-screener-displayed', function () {
        home.loginFormTitleTryScreenerDisplayed();
    })

    it('Login-form-title-try-screener-text', function () {
        home.loginFormTitleTryScreenerText();
    })

    it('Login-form-label-text-for-user-displayed', function () {
        home.loginFormLabelTextForUserDisplayed();
    })

    it('Username-field-displayed', function () {
        home.usernameFieldDisplayed();
    })

    it('Username-field-icon-displayed', function () {
        home.usernameFieldIconDisplayed();
    })

    it('Login-form-label-text-for-pass-displayed', function () {
        home.loginFormLabelTextForPassDisplayed();
    })

    it('Password-field-displayed', function () {
        home.passFieldDisplayed();
    })
   
    it('Password-field-icon-displayed', function () {
        home.passFieldIconDisplayed();
    })

    it('Forgot-link-displayed', function () {
        home.forgotLinkDisplayed();
    })

    it('Forgot-link-text', function () {
        home.forgotLinkText();
    })   

    it('Login-btn-displayed', function () {
        home.loginBtnDisplayed();
    })    

    it('Login-btn-background-color', function () {
        home.loginBtnBgColor();
    })

    it('Login-btn-text', function () {
        home.loginBtnText();
    })

    it('Login-btn-text-color', function () {
        home.loginBtnTextColor();
    })

    it('Login-button-font-size', function () {
        home.loginBtnFontSize();
    })

    it('Login-button-font-family', function () {
        home.loginBtnFont();
    })

    it('Login-form-title-if-you-need-displayed', function () {
        home.loginFormTitleIfYouNeedDisplayed();
    })

    it('Login-form-title-if-you-need-text', function () {
        home.loginFormTitleIfYouNeedText();
    })

    it('Login-form-title-learn-more-displayed', function () {
        home.loginFormTitleLearnMoreDisplayed();
    })

    it('Login-form-title-learn-more-text', function () {
        home.loginFormTitleLearnMoreText();
    })
})
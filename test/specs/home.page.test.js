import home from '../pages/home.page';

describe('HomeDisplayed', function () {

    it('Page-displayed', function () {
        home.open();
    })

    it('Login-form-displayed', function () {
        home.logoFormDisplayed();
    })

    it('Login-form-title-connection-displayed', function () {
        home.loginFormTitleConnectionDisplayed();
    })

    it('Login-form-title-welcome-displayed', function () {
        home.loginFormTitleWelcomeDisplayed();
    })

    it('Login-form-title-connect-people-displayed', function () {
        home.loginFormTitleConnectPeopleDisplayed();
    })

    it('Login-form-title-what-you-may-qualify-for-displayed', function () {
        home.loginFormTitleWhatYouMayQualifyForDisplayed();
    })

    it('Login-form-title-try-screener-displayed', function () {
        home.loginFormTitleTryScreenerDisplayed();
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

    it('Login-btn-displayed', function () {
        home.loginBtnDisplayed();
    })

    it('Login-form-title-if-you-need-displayed', function () {
        home.loginFormTitleIfYouNeedDisplayed();
    })

    it('Login-form-title-learn-more-displayed', function () {
        home.loginFormTitleLearnMoreDisplayed();
    })
})

describe('HomeText', function () {

    it('Login-form-title-connection-text', function () {
        home.loginFormTitleConnectionText();
    })

    it('Login-form-title-welcome-text', function () {
        home.loginFormTitleWelcomeText();
    })

    it('Login-form-title-connect-people-text', function () {
        home.loginFormTitleConnectPeopleText();
    })

    it('Login-form-title-what-you-may-qualify-for-text', function () {
        home.loginFormTitleWhatYouMayQualifyForText();
    })

    it('Login-form-title-try-screener-text', function () {
        home.loginFormTitleTryScreenerText();
    })

    it('Forgot-link-text', function () {
        home.forgotLinkText();
    })

    it('Login-btn-text', function () {
        home.loginBtnText();
    })

    it('Login-form-title-if-you-need-text', function () {
        home.loginFormTitleIfYouNeedText();
    })

    it('Login-form-title-learn-more-text', function () {
        home.loginFormTitleLearnMoreText();
    })
})

describe('HomeFunctionality', function () {

    it('Login-form-title-try-screener-clickable', function () {
        home.loginFormTitleTryScreenerClickable();
    })

    it('Login-form-title-try-screener-redirect', function () {
        home.openBase();
        home.loginFormTitleTryScreenerRedirect();
    })

    it('Forgot-link-username-clickable', function () {
        home.forgotLinkUsernameClickable();
    })

    it('Forgot-link-username-redirect', function () {
        home.forgotLinkUserRedirect();
    })

    it('Forgot-link-password-clickable', function () {
        home.openBase();
        home.forgotLinkPasswordClickable();
    })

    it('Forgot-link-password-redirect', function () {
        home.openBase();
        home.forgotLinkPassRedirect();
    })

    it('Login-btn-is-clickable', function () {
        home.loginBtnClickable();
    })

    it('Username-field-max-length', function () {
        home.userNameFieldMax();
    })

    it('Error-both-fields-is-empty-displayed', function () {
        home.errorBothFieldsEmpty();
    })

    it('Error-text-both-fields-is-empty', function () {
        home.errorTextBothField();
    })

    it('Error-icon-is-displayed', function () {
        home.errorIconIsDisplayed();
    })

    it('Error-password-field-is-empty-displayed', function () {
        home.errorPassFieldEmpty();
    })

    it('Error-text-password-field-is-empty', function () {
        home.errorTextPassFieldEmpty();
    })

    it('Error-username-field-is-empty-displayed', function () {
        home.errorUserFieldEmpty();
    })

    it('Error-text-username-field-is-empty', function () {
        home.errorTextUserFieldEmpty();
    })
})
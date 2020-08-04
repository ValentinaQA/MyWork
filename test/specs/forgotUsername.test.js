import forget from '../pages/forgotUsername.page';

describe('ForgotUserNameDisplayed', function () {

    it('Open-forgot-userPage', function () {
        forget.openForgotUserPage();
    })

    it('Forgot-form-title-Connections-is-displayed', function () {
        forget.forgotFormTitleConnectionsDisplayed();
    })

    it('Forgot-form-title-Recover-Username-is-displayed', function () {
        forget.forgotFormTitleRecoverUsernameDisplayed();
    })

    it('Label-text-email-is-displayed', function () {
        forget.labelTextEmailDisplayed();
    })

    it('Label-stron-required-is-displayed', function () {
        forget.labelStronRequiredDisplayed();
    })

    it('Input-email-field-is-displayed', function () {
        forget.inputEmailFieldDisplayed();
    })

    it('Icon-in-input-email-field-is-displayed', function () {
        forget.iconInInputEmailFieldDisplayed();
    })

    it('Link-I-forgot-my-Password-is-displayed', function () {
        forget.linkIForgotMyPasswordDisplayed();
    })

    it('BackToLogin-Btn-is-displayed', function () {
        forget.backToLoginBtnDisplayed();
    })

    it('RecoverUsername-Btn-is-displayed', function () {
        forget.recoverUsernameBtnDisplayed();
    })
})

describe('ForgotUserNameText', function () {

    it('Forgot-form-title-Connections-text', function () {
        forget.forgotFormTitleConnectionsText();
    })

    it('Forgot-form-title-Recover-Username-text', function () {
        forget.forgotFormTitleRecoverUsernameText();
    })

    it('Label-text-email-text', function () {
        forget.labelTextEmailText();
    })

    it('Label-stron-required-text', function () {
        forget.labelStronRequiredText();
    })

    it('Link-I-forgot-my-Password-text', function () {
        forget.linkIForgotMyPasswordText();
    })

    it('BackToLogin-Btn-text', function () {
        forget.backToLoginBtnText();
    })

    it('RecoverUsername-Btn-text', function () {
        forget.recoverUsernameBtnText();
    })
})

describe('ForgotFunctionality', function () {

    it('Link-I-forgot-my-Password-isClickable', function () {
        forget.linkIForgotMyPasswordClickable();
    })

    it('Link-I-forgot-my-Password-Redirect', function () {
        forget.linkIForgotMyPasswordRedirect();
    })

    it('BackToLogin-btn-isClickable', function () {
        forget.backToLoginBtnIsClickable();
    })

    it('BackToLogin-btn-isRedirect', function () {
        forget.backToLoginBtnIsRedirect();
    })

    it('RecoverUsername-btn-isClickable', function () {
        forget.recoverUsernameBtnIsClickable();
    })

    it('Email-field-not-accept-201', function () {
        forget.emailFieldMaxLength();
    })

    it('Email-field-accept-200', function () {
        forget.emailFieldMaxNegattive();
    })

    it('Error-email-field-empty', function () {
        forget.errorEmailFieldEmpty();
    })

    it('Error-text-email-field-empty', function () {
        forget.errorTextEmailFieldEmpty();
    })

    it('Email-not-exist-message-display', function () {
        forget.inputWrongEmail();
        forget.clickRecoverUsernameBtn();
        forget.errorTextDisplayed();
    })
})
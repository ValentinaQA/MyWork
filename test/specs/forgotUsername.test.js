import forget from '../pages/forgotUsername.page';
import forgotF from '../pages/forgotUsername.function';

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
        forgotF.linkIForgotMyPasswordClickable();
    })

    it('Link-I-forgot-my-Password-Redirect', function () {
        forgotF.linkIForgotMyPasswordRedirect();
    })

    it('BackToLogin-btn-isClickable', function () {
        forgotF.backToLoginBtnIsClickable();
    })

    it('BackToLogin-btn-isRedirect', function () {
        forgotF.backToLoginBtnIsRedirect();
    })

    it('RecoverUsername-btn-isClickable', function () {
        forgotF.recoverUsernameBtnIsClickable();
    })

    it('Email-field-not-accept-201', function () {
        forgotF.emailFieldMaxLength();
    })

    it('Email-field-accept-200', function () {
        forgotF.emailFieldMaxNegattive();
    })

    it('Error-email-field-empty', function () {
        forgotF.errorEmailFieldEmpty();
    })

    it('Error-text-email-field-empty', function () {
        forgotF.errorTextEmailFieldEmpty();
    })

    it('Email-not-exist-message-display', function () {
        forgotF.inputWrongEmail();
        forgotF.clickRecoverUsernameBtn();
        forgotF.errorTextDisplayed();
    })
})
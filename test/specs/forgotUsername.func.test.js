import forgot from '../pages/forgotUsername.function';

describe('Forgot', function () {

    it('Link-I-forgot-my-Password-isClickable', function () {
        forgot.linkIForgotMyPasswordClickable();
    })

    it('Link-I-forgot-my-Password-Redirect', function () { 
        forgot.linkIForgotMyPasswordRedirect();
    })

    it('BackToLogin-btn-isClickable', function () {
        forgot.backToLoginBtnIsClickable();
    })

    it('BackToLogin-btn-isRedirect', function () {
        forgot.backToLoginBtnIsRedirect();
    })

    it('RecoverUsername-btn-isClickable', function () {
        forgot.recoverUsernameBtnIsClickable();
    })

    it('Email-field-not-accept-201', function () {
        forgot.emailFieldMaxLength();
    })

    it('Email-field-accept-200', function () {
        forgot.emailFieldMaxNegattive();
    })

    it('Error-email-field-empty', function () {
        forgot.errorEmailFieldEmpty();
    })

    it('Error-text-email-field-empty', function () {
        forgot.errorTextEmailFieldEmpty();
    })

    it('Email-not-exist-message-display', function () {
        forgot.inputWrongEmail();
        forgot.clickRecoverUsernameBtn();
        forgot.errorTextDisplayed();
    })

    /*it('Email-not-exist-message-text', function () {
        forgot.inputWrongEmail();
        forgot.clickRecoverUsernameBtn();
        forgot.wrongEmailMsg();
    })*/
})
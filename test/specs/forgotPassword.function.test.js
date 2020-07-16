import forgot from '../pages/forgotPassword.function';

describe('Forgot', function () {

    it('Link-I-forgot-my-UserName-isClickable', function () {
        forgot.linkIForgotMyUserNameClickable();
    })

    it('Link-I-forgot-my-Password-Redirect', function () { 
        forgot.linkIForgotMyPasswordRedirect();
    })

    it('Cancel-btn-isClickable', function () {
        forgot.cancelBtnIsClickable();
    })

    it('Cancel-btn-isRedirect', function () {
        forgot.cancelBtnIsRedirect();
    })

    it('Continue-btn-isClickable', function () {
        forgot.continueBtnIsClickable();
    })

    it('Continue-btn-isRedirect', function () {
        forgot.continueBtnIsRedirect();
    })

    it('UserName-field-not-accept-201', function () {
        forgot.userNameFieldMaxLength();
    })

    it('UserName-field-accept-200', function () {
        forgot.userNameFieldMaxNegattive();
    })

    it('Error-UserName-field-empty', function () {
        forgot.errorUserNameFieldEmpty();
    })

    it('Error-text-UserName-field-empty', function () {
        forgot.errorTextUserNameFieldEmpty();
    })
})
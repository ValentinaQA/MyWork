import forgetP from '../pages/forgotPassword.page';
import forgotF from '../pages/forgotPassword.function';

describe('ForgotPasswordDisplayed', function () {

    it('Open-forgot-password-Page', function () {
        forgetP.openForgotPasswordPage();
    })

    it('Forgot-form-title-Connections-is-displayed', function () {
        forgetP.forgotFormTitleConnectionsDisplayed();
    })

    it('Forgot-form-title-Forgot-Passwor-is-displayed', function () {
        forgetP.forgotFormTitleForgotPasswordDisplayed();
    })

    it('Forgot-form-title-tell-us-your-name-is-displayed', function () {
        forgetP.forgotFormTitleTellUsYourNameDisplayed();
    })

    it('Label-text-UserName-is-displayed', function () {
        forgetP.labelTextUsernameDisplayed();
    })

    it('Input-UserName-field-is-displayed', function () {
        forgetP.inputUserNameFieldDisplayed();
    })

    it('Icon-in-input-UserName-field-is-displayed', function () {
        forgetP.iconInInputUsernameFieldDisplayed();
    })

    it('Link-I-forgot-my-UserName-is-displayed', function () {
        forgetP.linkIForgotMyUserNameDisplayed();
    })

    it('Cancel-Btn-is-displayed', function () {
        forgetP.cancelBtnText();
    })    

    it('Continue-Btn-is-displayed', function () {
        forgetP.continueBtnDisplayed();
    })    
})

describe('ForgotPasswordDisplayed', function () {

    it('Forgot-form-title-Connections-text', function () {
        forgetP.forgotFormTitleConnectionsText();
    })

    it('Forgot-form-title-Forgot-Passwor-text', function () {
        forgetP.forgotFormTitleForgotPasswordText();
    })

    it('Forgot-form-title-tell-us-your-name-text', function () {
        forgetP.forgotFormTitleTellUsYourNameDisplayed();
    })

    it('Label-text-Username-text', function () {
        forgetP.labelTextUsernameText();
    })

    it('Link-I-forgot-my-UserName-text', function () {
        forgetP.linkIForgotMyUserNameText();
    })

    it('Cancel-Btn-text', function () {
        forgetP.cancelBtnText();
    })

    it('Continue-Btn-text', function () {
        forgetP.continueBtnText();
    })
})


describe('ForgotFunctionality', function () {

    it('Link-I-forgot-my-UserName-isClickable', function () {
        forgotF.linkIForgotMyUserNameClickable();
    })

    it('Link-I-forgot-my-Password-Redirect', function () { 
        forgotF.linkIForgotMyPasswordRedirect();
    })

    it('Cancel-btn-isClickable', function () {
        forgotF.cancelBtnIsClickable();
    })

    it('Cancel-btn-isRedirect', function () {
        forgotF.cancelBtnIsRedirect();
    })

    it('Continue-btn-isClickable', function () {
        forgotF.continueBtnIsClickable();
    })

    it('Continue-btn-isRedirect', function () {
        forgotF.continueBtnIsRedirect();
    })

    it('UserName-field-not-accept-201', function () {
        forgotF.userNameFieldMaxLength();
    })

    it('UserName-field-accept-200', function () {
        forgotF.userNameFieldMaxNegattive();
    })

    it('Error-UserName-field-empty', function () {
        forgotF.errorUserNameFieldEmpty();
    })

    it('Error-text-UserName-field-empty', function () {
        forgotF.errorTextUserNameFieldEmpty();
    })
})
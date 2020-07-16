import forgetP from '../pages/forgotPassword.page';

describe('ForgotPassword', function () {

    it('Open-forgot-password-Page', function () {
        forgetP.openForgotPasswordPage();
    })

    it('Forgot-form-title-Connections-is-displayed', function () {
        forgetP.forgotFormTitleConnectionsDisplayed();
    })

    it('Forgot-form-title-Connections-text', function () {
        forgetP.forgotFormTitleConnectionsText();
    })

    it('Forgot-form-title-Forgot-Passwor-is-displayed', function () {
        forgetP.forgotFormTitleForgotPasswordDisplayed();
    })

    it('Forgot-form-title-Forgot-Passwor-text', function () {
        forgetP.forgotFormTitleForgotPasswordText();
    })

    it('Forgot-form-title-tell-us-your-name-is-displayed', function () {
        forgetP.forgotFormTitleTellUsYourNameDisplayed();
    })

    it('Forgot-form-title-tell-us-your-name-text', function () {
        forgetP.forgotFormTitleTellUsYourNameDisplayed();
    })

    it('Label-text-UserName-is-displayed', function () {
        forgetP.labelTextUsernameDisplayed();
    })

    it('Label-text-Username-text', function () {
        forgetP.labelTextUsernameText();
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

    it('Link-I-forgot-my-UserName-text', function () {
        forgetP.linkIForgotMyUserNameText();
    })

    it('Cancel-Btn-is-displayed', function () {
        forgetP.cancelBtnText();
    })

    it('Cancel-Btn-text', function () {
        forgetP.cancelBtnText();
    })

    it('Continue-Btn-is-displayed', function () {
        forgetP.continueBtnDisplayed();
    })

    it('Continue-Btn-text', function () {
        forgetP.continueBtnText();
    })
})
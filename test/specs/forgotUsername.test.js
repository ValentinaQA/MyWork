import forget from '../pages/forgotUsername.page';

describe('ForgotUserName', function() {

    it ('Open-forgot-userPage', function(){
       forget.openForgotUserPage();
    }) 
    
    it ('Forgot-form-title-Connections-is-displayed', function(){
        forget.forgotFormTitleConnectionsDisplayed();
    })

    it ('Forgot-form-title-Connections-text', function(){
        forget.forgotFormTitleConnectionsText();
    })

    it ('Forgot-form-title-Recover-Username-is-displayed', function(){
        forget.forgotFormTitleRecoverUsernameDisplayed();
    })

    it ('Forgot-form-title-Recover-Username-text', function(){
        forget.forgotFormTitleRecoverUsernameText();
    })

    it ('Label-text-email-is-displayed', function(){
        forget.labelTextEmailDisplayed();
    })

    it ('Label-text-email-text', function(){
        forget.labelTextEmailText();
    })

    it ('Label-stron-required-is-displayed', function(){
        forget.labelStronRequiredDisplayed();
    })

    it ('Label-stron-required-text', function(){
        forget.labelStronRequiredText();
    })

    it ('Input-email-field-is-displayed', function(){
        forget.inputEmailFieldDisplayed();
    })

    it ('Icon-in-input-email-field-is-displayed', function(){
        forget.iconInInputEmailFieldDisplayed();
    })

    it ('Link-I-forgot-my-Password-is-displayed', function(){
        forget.linkIForgotMyPasswordDisplayed();
    })

    it ('Link-I-forgot-my-Password-text', function(){
        forget.linkIForgotMyPasswordText();
    })

    it ('BackToLogin-Btn-is-displayed', function(){
        forget.backToLoginBtnDisplayed();
    })

    it ('BackToLogin-Btn-text', function(){
        forget.backToLoginBtnText();
    })

    it ('RecoverUsername-Btn-is-displayed', function(){
        forget.recoverUsernameBtnDisplayed();
    })

    it ('RecoverUsername-Btn-text', function(){
        forget.recoverUsernameBtnText();
    })
})
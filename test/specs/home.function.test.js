import home from '../pages/home.functionality';

describe('Home', function() {

    it ('Login-form-title-try-screener-clickable', function(){
        home.openBase();
        home.loginFormTitleTryScreenerClickable();
    }) 

    it ('Login-form-title-try-screener-redirect', function(){
        home.openBase();
        home.loginFormTitleTryScreenerRedirect();
    })

    it ('Forgot-link-username-clickable', function(){
        home.forgotLinkUsernameClickable();
    })

    it ('Forgot-link-username-redirect', function(){
        home.forgotLinkUserRedirect();        
    })

    it ('Forgot-link-password-clickable', function(){
        home.openBase();
        home.forgotLinkPasswordClickable();
    })

    it ('Forgot-link-password-redirect', function(){
        home.openBase();
        home.forgotLinkPassRedirect();
    })
    
    it ('Login-btn-is-clickable', function(){
        home.loginBtnClickable();
    }) 

    it ('Username-field-max-length', function(){       
        home.userNameFieldMax();        
    }) 

    it ('Error-both-fields-is-empty-displayed', function(){
        home.errorBothFieldsEmpty();
    })
    
    it ('Error-text-both-fields-is-empty', function(){
        home.errorTextBothField();
    })

    it ('Error-icon-is-displayed', function(){
        home.errorIconIsDisplayed();
    })

    it ('Error-password-field-is-empty-displayed', function(){        
        home.errorPassFieldEmpty();
    })

    it ('Error-text-password-field-is-empty', function(){
        home.errorTextPassFieldEmpty();
    })

    it ('Error-username-field-is-empty-displayed', function(){
        home.errorUserFieldEmpty();
    })

    it ('Error-text-username-field-is-empty', function(){
        home.errorTextUserFieldEmpty();
    })
    
})
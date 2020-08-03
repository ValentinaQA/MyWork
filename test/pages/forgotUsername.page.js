import sel from '../selectors/forgotUsername.sel';
import exp from '../expected/forgotUsername.exp';
import { assert } from 'chai';
import Base from './Base';


class ForgotUsername extends Base { 
    
    openForgotUserPage(){
        this.openBase();
        this.forgotLinkUsernameRedirect();
    }

    forgotFormTitleConnectionsDisplayed(){
        let title1 = $(sel.loginFormTitleConnectionsDisplayed).isDisplayed();
        assert.equal(title1, true);
    }

    forgotFormTitleConnectionsText(){
        let title1T = $(sel.loginFormTitleConnectionsDisplayed).getText();
        assert.equal(title1T, exp.loginFormTitleConnectionsText);
    }

    forgotFormTitleRecoverUsernameDisplayed(){
        let title2 = $(sel.loginFormTitleRecoverUsernameDisplayed).isDisplayed();
        assert.equal(title2, true);
    }

    forgotFormTitleRecoverUsernameText(){
        let title2T = $(sel.loginFormTitleRecoverUsernameDisplayed).getText();
        assert.equal(title2T, exp. loginFormTitleRecoverUsernameText);
    }
    
    labelTextEmailDisplayed(){
        let email = $(sel.labelTextEmailDisplayed).isDisplayed();
        assert.equal(email, true);
    }

    labelTextEmailText(){
        let emailT = $(sel.labelTextEmailDisplayed).getText();
        assert.equal(emailT, exp.labelTextEmailText);
    }

    labelStronRequiredDisplayed(){
        let require = $(sel.labelStronRequiredDisplayed).isDisplayed();
        assert.equal(require, true);
    }

    labelStronRequiredText(){
        let require1 = $(sel.labelStronRequiredDisplayed).getText();
        assert.equal(require1, exp.labelStronRequiredText);
    }

    inputEmailFieldDisplayed(){
        let input = $(sel.inputEmailFieldDisplayed).isDisplayed();
        assert.equal(input, true);
    }

    iconInInputEmailFieldDisplayed(){
        let icon = $(sel.iconInInputEmailFieldDisplayed).isDisplayed();
        assert.equal(icon, true);
    }    

    linkIForgotMyPasswordDisplayed(){
        let link = $(sel.linkIForgotMyPasswordDisplayed).isDisplayed();
        assert.equal(link, true);
    }

    linkIForgotMyPasswordText(){
        let link1 = $(sel.linkIForgotMyPasswordDisplayed).getText();
        assert.equal(link1, exp.linkIForgotMyPasswordText);
    }

    backToLoginBtnDisplayed(){
        let btn = $(sel.backToLoginBtn).isDisplayed();
        assert.equal(btn, true);
    }

    backToLoginBtnText(){
        let btn1 = $(sel.backToLoginBtn).getText();
        assert.equal(btn1, exp.backToLoginBtnText);
    }

    recoverUsernameBtnDisplayed(){
        let btn2 = $(sel.recoverUsernameBtn).isDisplayed();
        assert.equal(btn2, true);
    }

    recoverUsernameBtnText(){
        let btn3 = $(sel.recoverUsernameBtn).getText();
        assert.equal(btn3, exp.recoverUsernameBtnText);
    }
    
}

export default new ForgotUsername(); 
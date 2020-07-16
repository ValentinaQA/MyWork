import sel from '../selectors/forgotPassword.sel';
import exp from '../expected/forgotPassword.exp';
import { assert } from 'chai';
import Base from './Base';


class ForgotPassword extends Base {

    openForgotPasswordPage() {
        this.openBase();
        this.forgotLinkPasswordRedirect();
    }

    forgotFormTitleConnectionsDisplayed() {
        let title1 = $(sel.loginFormTitleConnections).isDisplayed();
        assert.equal(title1, true);
    }

    forgotFormTitleConnectionsText() {
        let title1T = $(sel.loginFormTitleConnections).getText();
        assert.equal(title1T, exp.loginFormTitleConnections);
    }

    forgotFormTitleForgotPasswordDisplayed() {
        let title2 = $(sel.forgotFormTitleForgotPassword).isDisplayed();
        assert.equal(title2, true);
    }

    forgotFormTitleForgotPasswordText() {
        let title2T = $(sel.forgotFormTitleForgotPassword).getText();
        assert.equal(title2T, exp.forgotFormTitleForgotPassword);
    }

    forgotFormTitleTellUsYourNameDisplayed() {
        let title3 = $(sel.forgotFormTitleTellUsYourName).isDisplayed();
        assert.equal(title3, true);
    }

    forgotFormTitleForgotPasswordText() {
        let title3T = $(sel.forgotFormTitleTellUsYourName).getText();
        assert.equal(title3T, exp.forgotFormTitleTellUsYourName);
    }

    labelTextUsernameDisplayed() {
        let user = $(sel.labelTextUserName).isDisplayed();
        assert.equal(user, true);
    }

    labelTextUsernameText() {
        let userlT = $(sel.labelTextUserName).getText();
        assert.equal(userlT, exp.labelTextUserName);
    }

    inputUserNameFieldDisplayed() {
        let input = $(sel.inputUserNameField).isDisplayed();
        assert.equal(input, true);
    }

    iconInInputUsernameFieldDisplayed() {
        let icon = $$(sel.iconInInputUsernameField)[0].isDisplayed();
        assert.equal(icon, true);
    }

    linkIForgotMyUserNameDisplayed() {
        let link = $(sel.linkIForgotMyUserName).isDisplayed();
        assert.equal(link, true);
    }

    linkIForgotMyUserNameText() {
        let link1 = $(sel.linkIForgotMyUserName).getText();
        assert.equal(link1, exp.linkIForgotMyUserName);
    }

    cancelBtnDisplayed() {
        let btn = $(sel.cancelBtn).isDisplayed();
        assert.equal(btn, true);
    }

    cancelBtnText() {
        let btn1 = $(sel.cancelBtn).getText();
        assert.equal(btn1, exp.cancelBtn);
    }

    continueBtnDisplayed() {
        let btn2 = $$(sel.continueBtn)[0].isDisplayed();
        assert.equal(btn2, true);
    }

    continueBtnText() {
        let btn3 = $$(sel.continueBtn)[0].getText();
        assert.equal(btn3, exp.continueBtn);
    }

}

export default new ForgotPassword(); 
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

    linkIForgotMyUserNameClickable() {
        this.openBase();
        this.forgotLinkPasswordRedirect();
        $(sel.linkIForgotMyUserName).waitForDisplayed();
        let link = $(sel.linkIForgotMyUserName).isClickable();
        assert.equal(link, true);
    }

    linkIForgotMyPasswordRedirect() {
        $(sel.linkIForgotMyUserName).click();
        let userRedir = $(sel.linkIForgotMyUserName).isDisplayed();
        assert.equal(userRedir, true);
        this.openBase();
        this.forgotLinkPasswordRedirect();
    }

    cancelBtnIsClickable() {
        $(sel.cancelBtn).waitForDisplayed();
        let btn = $(sel.cancelBtn).isClickable();
        assert.equal(btn, true);
    }

    cancelBtnIsRedirect() {
        $(sel.cancelBtn).click();
        let btnRedir = $(sel.btnLogin).waitForDisplayed();
        assert.equal(btnRedir, true);
        this.forgotLinkPasswordRedirect();
    }

    continueBtnIsClickable() {
        $(sel.continueBtn).waitForDisplayed();
        let btn1 = $(sel.continueBtn).isClickable();
        assert.equal(btn1, true);
    }

    continueBtnIsRedirect() {
        $(sel.inputUserNameField).setValue(this.randomString(10));
        $(sel.continueBtn).click();
        let btnRedir1 = $(sel.resendTheEmailLink).isDisplayed();
        assert.equal(btnRedir1, true);
        $(sel.backToLoginBtn).click();
        this.forgotLinkPasswordRedirect();
    }

    userNameFieldMaxLength() {
        $(sel.inputUserNameField).setValue(this.randomString(exp.userNameFeildLength));
        assert.equal($(sel.inputUserNameField).getValue().length, exp.userNameFeildLengthMax);
        this.clearInputField($(sel.inputUserNameField));
    }
    userNameFieldMaxNegattive() {
        $(sel.inputUserNameField).setValue(this.randomString(exp.userNameFeildLengthMax));
        assert.equal($(sel.inputUserNameField).getValue().length, exp.userNameFeildLengthMax);
        this.clearInputField($(sel.inputUserNameField));
    }

    errorUserNameFieldEmpty() {
        $$(sel.continueBtn)[0].click();
        let error = $(sel.errorTextFieldEmpty).isDisplayed();
        assert.isTrue(error);
    }

    errorTextUserNameFieldEmpty() {
        let errorUText1 = $(sel.errorTextFieldEmpty).getText();
        assert.equal(errorUText1, exp.errorTextFieldEmpty);
    }

    errorTextDisplayed() {
        $(sel.errorTextFieldEmpty).waitForDisplayed();
    }
}
export default new ForgotPassword(); 
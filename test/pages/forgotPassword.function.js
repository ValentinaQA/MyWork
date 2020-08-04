import sel from '../selectors/forgotPassword.sel';
import exp from '../expected/forgotPassword.exp';
import { assert } from 'chai';
import Base from './Base';


class ForgotPassFunctionality extends Base {

    linkIForgotMyUserNameClickable() {
        this.openBase();
        this.forgotLinkPasswordRedirect();
        $(sel.linkIForgotMyUserName).isDisplayed();
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
        $(sel.cancelBtn).isDisplayed();
        let btn = $(sel.cancelBtn).isClickable();
        assert.equal(btn, true);
    }

    cancelBtnIsRedirect() {
        $(sel.cancelBtn).click();
        let btnRedir = $(sel.btnLogin).isDisplayed(); 
        assert.equal(btnRedir, true);         
        this.forgotLinkPasswordRedirect();
    }

    continueBtnIsClickable() {
        $(sel.continueBtn).isDisplayed();
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
export default new ForgotPassFunctionality(); 
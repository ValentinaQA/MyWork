import sel from '../selectors/forgotUsername.sel';
import exp from '../expected/forgotUsername.exp';
import { assert } from 'chai';
import Base from './Base';


class ForgotFunctionality extends Base {

    linkIForgotMyPasswordClickable() {
        this.openBase();
        this.forgotLinkUsernameRedirect();
        $(sel.linkIForgotMyPasswordDisplayed).isDisplayed();
        let link = $(sel.linkIForgotMyPasswordDisplayed).isClickable();
        assert.equal(link, true);
    }

    linkIForgotMyPasswordRedirect() {
        $(sel.linkIForgotMyPasswordDisplayed).click();
        let userRedir = $(sel.linkIForgotMyUserNamedDisplayed).isDisplayed();
        assert.equal(userRedir, true);
        this.openBase();
        this.forgotLinkUsernameRedirect();
    }

    backToLoginBtnIsClickable() {
        $(sel.backToLoginBtn).isDisplayed();
        let btn = $(sel.backToLoginBtn).isClickable();
        assert.equal(btn, true);
    }

    backToLoginBtnIsRedirect() {
        this.backToLoginBtnRedirect();
        this.forgotLinkUsernameRedirect();
    }

    recoverUsernameBtnIsClickable() {
        $(sel.recoverUsernameBtn).isDisplayed();
        let btn1 = $(sel.recoverUsernameBtn).isClickable();
        assert.equal(btn1, true);
    }

    emailFieldMaxLength() {
        $(sel.emailFeild).setValue(this.randomString(exp.emailFeildLength));
        assert.equal($(sel.emailFeild).getValue().length, exp.emailFeildLengthMax);
        this.clearInputField($(sel.emailFeild));
    }
    emailFieldMaxNegattive() {
        $(sel.emailFeild).setValue(this.randomString(exp.emailFeildLengthMax));
        assert.equal($(sel.emailFeild).getValue().length, exp.emailFeildLengthMax);
        this.clearInputField($(sel.emailFeild));
    }

    errorEmailFieldEmpty() {
        $$(sel.recoverUsernameBtn)[0].click();
        let error = $(sel.errorTextFieldEmpty).isDisplayed();
        assert.isTrue(error);
    }

    errorTextEmailFieldEmpty() {
        let errorUText1 = $(sel.errorTextFieldEmpty).getText();
        assert.equal(errorUText1, exp.errorTextEmailFieldEmpty);
    }

    inputWrongEmail() {
        $(sel.emailFeild).setValue('@');
    }

    clickRecoverUsernameBtn() {
        $$(sel.recoverUsernameBtn)[0].click();
    }

    errorTextDisplayed() {
        $(sel.errorTextFieldEmpty).waitForDisplayed();
    }

    /*wrongEmailMsg() {
        let textError = $(sel.).getText();
        assert.equal(textError, exp.);
    }*/

}

export default new ForgotFunctionality(); 
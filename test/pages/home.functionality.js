import sel from '../selectors/home.sel';
import exp from '../expected/home.exp';
import { assert } from 'chai';
import Base from './Base';


class HomeFunctionality extends Base {

    loginFormTitleTryScreenerClickable() {
        $$(sel.infoTryScreener)[0].isDisplayed();
        let quickScreener = $$(sel.infoTryScreener)[0].isClickable();
        assert.equal(quickScreener, true);
    }

    loginFormTitleTryScreenerRedirect() {
        $$(sel.infoTryScreener)[0].click();
        assert.equal(browser.getUrl(), exp.loginFormTitleTryScreenerRedirect);
        this.openBase();
    }

    forgotLinkUsernameClickable() {
        let userLink = $(sel.forgotUsername).isDisplayed();
        assert.equal(userLink, true);
        console.log(userLink);
        let userLink1 = $(sel.forgotUsername).isClickable();
        assert.equal(userLink1, true);
    }

    forgotLinkUserRedirect() {
        this.forgotLinkUsernameRedirect();
        this.openBase();  
    }

    forgotLinkPasswordClickable() {
        let passLink = $(sel.forgotPassword).isDisplayed();
        assert.equal(passLink, true);
        let passLink1 = $(sel.forgotPassword).isClickable();
        assert.equal(passLink1, true);
    }

    forgotLinkPassRedirect() {
        this.forgotLinkPasswordRedirect();       
        this.openBase();
    }

    loginBtnClickable() {
        $(sel.btnLogin).isDisplayed();
        let link1 = $(sel.btnLogin).isClickable();
        assert.equal(link1, true);
    }

    //LOGIN

    userNameFieldMax() {
        $(sel.usernameField).setValue(this.randomString(201));
        assert.equal($(sel.usernameField).getValue().length, exp.maxlengthUserField);
        this.clearInputField($(sel.usernameField));
    }

    errorBothFieldsEmpty() {
        this.loginBtnClick();
        let errorU = $$(sel.errorTextFieldEmpty)[0].isDisplayed();
        assert.isTrue(errorU);
        let errorP = $$(sel.errorTextFieldEmpty)[1].isDisplayed();
        assert.isTrue(errorP);
    }

    errorTextBothField() {
        let errorUText = $$(sel.errorTextFieldEmpty)[0].getText();
        assert.equal(errorUText, exp.errorTextEmptyUser);
        let errorPText1 = $$(sel.errorTextFieldEmpty)[1].getText();
        assert.equal(errorPText1, exp.errorTextEmptyPass);
    }

    errorIconIsDisplayed() {
        let errorIcon1 = $(sel.errorIconIsDisplayed).isDisplayed();
        assert.equal(errorIcon1, true);
        let errorIcon2 = $$(sel.errorIconIsDisplayed).length;
        assert.equal(errorIcon2, exp.errorIconIsDisplayed);
    }

    errorPassFieldEmpty() {
        $(sel.usernameField).setValue(this.randomString(10));
        this.loginBtnClick();
        let errorU1 = $$(sel.errorTextFieldEmpty)[0].isDisplayed();
        assert.isTrue(errorU1);
        this.clearInputField($(sel.usernameField));
    }

    errorTextPassFieldEmpty() {
        let errorUText1 = $$(sel.errorTextFieldEmpty)[0].getText();
        assert.equal(errorUText1, exp.errorTextEmptyPass);
    }

    errorUserFieldEmpty() {
        $(sel.passwordField).setValue(this.randomString(10));
        this.loginBtnClick();
        let errorP1 = $(sel.errorTextFieldEmpty).isDisplayed();
        assert.isTrue(errorP1);
        this.clearInputField($(sel.passwordField));
    }

    errorTextUserFieldEmpty() {
        let errorPText1 = $(sel.errorTextFieldEmpty).getText();
        assert.equal(errorPText1, exp.errorTextEmptyUser);
    }
}

export default new HomeFunctionality(); 
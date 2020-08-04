import { assert } from 'chai';
import Base from './Base';
import sel from '../selectors/home.sel';
import exp from '../expected/home.exp';

class Home extends Base {

    open() {
        this.openBase();
        $(sel.clienttimezone).waitForDisplayed();
    }

    logoFormDisplayed() {
        let loginForm = $$(sel.loginForm)[0].isDisplayed();
        assert.equal(loginForm, true);
    }

    loginFormTitleConnectionDisplayed() {
        let inf1 = $$(sel.infConnections)[0].isDisplayed();
        assert.equal(inf1, true);
    }

    loginFormTitleConnectionText() {
        let inf = $$(sel.infConnections)[0].getText();
        assert.equal(inf, exp.infConnections);
    }

    loginFormTitleWelcomeDisplayed() {
        let wel = $(sel.infoWelcome).isDisplayed();
        assert.equal(wel, true);
    }

    loginFormTitleWelcomeText() {
        let wel1 = $(sel.infoWelcome).getText();
        assert.equal(wel1, exp.infoWelcome);
    }

    loginFormTitleConnectPeopleDisplayed() {
        let conPeople = $(sel.infoConnectPeople).isDisplayed();
        assert.equal(conPeople, true);
    }

    loginFormTitleConnectPeopleText() {
        let conPeople = $(sel.infoConnectPeople).getText();
        assert.equal(conPeople, exp.infoConnectPeople);
    }

    loginFormTitleWhatYouMayQualifyForDisplayed() {
        let infQ = $$(sel.infoWhatYouMayQualifyFor)[1].isDisplayed();
        assert.equal(infQ, true);
    }

    loginFormTitleWhatYouMayQualifyForText() {
        let infQ1 = $$(sel.infoWhatYouMayQualifyFor)[1].getText();
        assert.equal(infQ1, exp.infoWhatYouMayQualifyFor);
    }

    loginFormTitleTryScreenerDisplayed() {
        let infQ2 = $$(sel.infoTryScreener)[0].isDisplayed();
        assert.equal(infQ2, true);
    }

    loginFormTitleTryScreenerText() {
        let infQ3 = $$(sel.infoTryScreener)[0].getText();
        assert.equal(infQ3, exp.infoTryScreener);
    }

    loginFormLabelTextForUserDisplayed() {
        let label = $$(sel.labelTextForUser)[0].isDisplayed();
        assert.equal(label, true);
    }

    usernameFieldDisplayed() {
        let userName = $(sel.usernameField).isDisplayed();
        assert.equal(userName, true);
    }

    usernameFieldIconDisplayed() {
        let userName1 = $$(sel.usernameFieldIcon)[0].isDisplayed();
        assert.equal(userName1, true);
    }

    loginFormLabelTextForPassDisplayed() {
        let label = $$(sel.labelTextForPass)[1].isDisplayed();
        assert.equal(label, true);
    }

    passFieldDisplayed() {
        let password = $(sel.passwordField).isDisplayed();
        assert.equal(password, true);
    }
    passFieldIconDisplayed() {
        let password1 = $$(sel.passwordFieldIcon)[1].isDisplayed();
        assert.equal(password1, true);
    }

    forgotLinkDisplayed() {
        let remindUser = $$(sel.forgotLink)[1].isDisplayed();
        assert.equal(remindUser, true);
    }

    forgotLinkText() {
        let remindUserT = $$(sel.forgotLink)[1].getText();
        assert.equal(remindUserT, exp.forgotLinkText);
    }

    loginBtnDisplayed() {
        let btnLogin = $(sel.btnLogin).isDisplayed();
        assert.equal(btnLogin, true);
    }

    loginBtnText() {
        let textHTML = $(sel.btnLogin).getText();
        assert.equal(textHTML, exp.loginBtnText);
    }

    loginFormTitleIfYouNeedDisplayed() {
        let info = $$(sel.infoifYouNeed)[0].isDisplayed();
        assert.equal(info, true);
    }

    loginFormTitleIfYouNeedText() {
        let info1 = $$(sel.infoifYouNeed)[0].getText();
        assert.equal(info1, exp.infoifYouNeed);
    }

    loginFormTitleLearnMoreDisplayed() {
        let info2 = $$(sel.infoLearnMore)[1].isDisplayed();
        assert.equal(info2, true);
    }

    loginFormTitleLearnMoreText() {
        let info3 = $$(sel.infoLearnMore)[1].getText();
        assert.equal(info3, exp.infoLearnMore);
    }

    loginFormTitleTryScreenerClickable() {
        $$(sel.infoTryScreener)[0].waitForDisplayed();
        let quickScreener = $$(sel.infoTryScreener)[0].isClickable();
        assert.equal(quickScreener, true);
    }

    loginFormTitleTryScreenerRedirect() {
        $$(sel.infoTryScreener)[0].click();
        assert.equal(browser.getUrl(), exp.loginFormTitleTryScreenerRedirect);
        this.openBase();
    }

    forgotLinkUsernameClickable() {
        let userLink = $(sel.forgotUsername).waitForDisplayed();
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
        let passLink = $(sel.forgotPassword).waitForDisplayed();
        assert.equal(passLink, true);
        let passLink1 = $(sel.forgotPassword).isClickable();
        assert.equal(passLink1, true);
    }

    forgotLinkPassRedirect() {
        this.forgotLinkPasswordRedirect();
        this.openBase();
    }

    loginBtnClickable() {
        $(sel.btnLogin).waitForDisplayed();
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
export default new Home();
import { assert } from 'chai';
import loginSel from '../selectors/login.sel';
import homeSel from '../selectors/home.sel';
import forgotSel from '../selectors/forgotUsername.sel';
import ForgotSelP from '../selectors/forgotPassword.sel';


class Base {

    openBase() {
        browser.url('/');
    }

    openForgot() {
        browser.url('/forgot');
    }

    loginBtnClick(){
        $(homeSel.btnLogin).click();
    }

    anyUserLogin(login, pass) { //call this function with two arguments (login, Password)
        this.openBase()
        $(loginSel.userName).setValue(login); //you need to enter your login existing email
        $(loginSel.pass).setValue(pass); //correct pass
        $(homeSel.btnLogin).click();
        $(loginSel.logOutBtn).waitForDisplayed(3000); //logOutBtn foe example
    }

    randomString(max) { // maxlength="100" you need to set value for string length
        let str = '';
        for (let i = 1; i <= max; i++) {
            str += String.fromCharCode(Math.random() * (126 - 35) + 35); //UTF-16 table
        }
        return str
    }

    clearInputField(selector) {
        $(selector).setValue(['0', 'Backspace']);
    }

    forgotLinkUsernameRedirect(){
        $(homeSel.forgotUsername).click(); 
        let userRedir = $$(homeSel.backToLoginBtn)[0].isDisplayed(); 
        assert.equal(userRedir, true);
    }

    forgotLinkPasswordRedirect() {
        $(homeSel.forgotPassword).click();
        let passRedir = $(ForgotSelP.inputUserNameField).isDisplayed();
        assert.equal(passRedir, true);
    }

    backToLoginBtnRedirect() {
        $(forgotSel.backToLoginBtn).click();
        let btnRedir = $(homeSel.btnLogin).isDisplayed(); 
        assert.equal(btnRedir, true);        
    }
    
}
export default Base;
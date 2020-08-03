import sel from '../selectors/header.sel';
import exp from '../expected/header.exp';
import { assert } from 'chai';
import Base from './Base';


class Header extends Base { 

    headerLocation() {
        let headerLoc = $(sel.headerLoc).getLocation('y');
        console.log(headerLoc);
        assert.equal(headerLoc, exp.headerLoc);
    }

    headerIsDisplayed(){
        let head = $(sel.connectionsBtn).isDisplayed();
        assert.equal(head, true);              
    } 
    
    connectionBtnText(){
        let btn = $(sel.connectionsBtn).getText();
        assert.equal(btn, exp.connectionsBtnText);              
    } 

    engBtnIsDisplayed(){
        let eng = $(sel.engBtn).waitForDisplayed();
        console.log($(sel.engBtn))
        assert.equal(eng, true);              
    } 
    
    engBtnText(){
        let eng1 = $(sel.engBtn).getText();
        console.log(eng1)
        assert.equal(eng1, exp.engBtn);              
    } 

    espanolBtnIsDisplayed(){
        let span = $(sel.spanishBtn).isDisplayed();
        assert.equal(span, true);              
    } 
    
    espanolBtnText(){
        let esp = $(sel.spanishBtn).getText();
        assert.equal(esp, exp.spanishBtn);              
    }
}

export default new Header(); 
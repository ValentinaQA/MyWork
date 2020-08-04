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
}

export default new Header(); 
import sel from '../selectors/footer.page.sel'
import { assert } from 'chai';


class Footer  { //extends Base

    footerDisplayed (){
        $(sel.footer).waitForDisplayed();        
    }

    firstLine() {
        let first = $(sel.footerContactLine).isDisplayed();
        console.log(sel.footerContactLinet)
        assert.equal(first, true)
    }

    secondLine() {
        let second = $(sel.footerSecondLine).isDisplayed();
        assert.equal(second, true)
    }

}

export default new Footer(); 
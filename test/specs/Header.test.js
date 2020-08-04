import header from '../pages/header.page';

describe('Header', function () {

    it('Header-location', function () {
        header.openBase();
        header.headerLocation();
    })

    it('Header-is-displayed', function () {
        header.headerIsDisplayed();
    })

    it('Connection-text', function () {
        header.connectionBtnText();
    })
})
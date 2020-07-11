import header from '../pages/Header.page';

describe('Header', function() {

    it ('Header-is-displayed', function(){
        browser.url('/');
        header.headerIsDisplayed();      
    }) 
    
    it ('Connection-btn-text', function(){
        header.connectionBtnText();      
    }) 
    
    /*it ('Eng-btn-is-displayed', function(){
        header.engBtnIsDisplayed();      
    }) 
    
    it ('Eng-btn-text', function(){
        header.engBtnText();      
    }) 

    it ('Spanish-btn-is-displayed', function(){
        header.espanolBtnIsDisplayed();      
    }) 
    
    it ('Spanish-btn-text', function(){
        header.espanolBtnText();      
    })*/
   
})
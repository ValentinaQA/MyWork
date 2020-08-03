import header from '../pages/header.page';

describe('Header', function() {

    it ('Header-location', function(){
        header.openBase();
        header.headerLocation();      
    })

    it ('Header-is-displayed', function(){
        header.headerIsDisplayed();      
    }) 
    
    it ('Connection-text', function(){
        header.connectionBtnText();      
    }) 
    
    /*it ('Header-language-English-is-displayed', function(){
        header.engBtnIsDisplayed();      
    }) 
    
    it ('Eng-switcher-language-text', function(){
        header.engBtnText();      
    }) 

    it ('Header-language-Spanish-is-displayed', function(){
        header.espanolBtnIsDisplayed();      
    }) 
    
    it ('Spanish-switcher-language-text', function(){
        header.espanolBtnText();      
    })*/   
})
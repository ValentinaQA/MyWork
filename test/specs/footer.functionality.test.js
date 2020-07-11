import footer from '../pages/footer.functionality';

describe('Footer', function() {

    it ('SiteLink1-is-clickable', function(){
        browser.url('/');
        footer.siteLink1IsClickable();
    })  
    
    it ('SiteLink2-is-clickable', function(){       
        footer.siteLink2IsClickable();
    })

    it ('Email-address-is-clickable', function(){       
        footer.emailAddressIsClickable();
    })

    it ('Facebook-icon-is-clickable', function(){       
        footer.facebookIconIsClickable();
    })

    it ('Facebook-icon-redirect', function(){       
        footer.facebookIconRedirect();
    })

    it ('Twitter-icon-is-clickable', function(){       
        footer.twitterIconIsClickable();
    })

    it ('Twitter-icon-redirect', function(){       
        footer.twitterIconRedirect();
    })
/*
    it ('Linkedin-icon-redirect', function(){       
        footer.linkedinIconRedirect();
    })
    */

})
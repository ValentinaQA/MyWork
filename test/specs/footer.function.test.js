import footer from '../pages/footer.functionality';

describe('Footer', function() {

    it ('SiteLink1-is-clickable', function(){
        footer.openBase();
        footer.siteLink1IsClickable();
    })  
    
    it ('SiteLink2-is-clickable', function(){       
        footer.siteLink2IsClickable();
    })

    it ('Email-address-is-clickable', function(){       
        footer.emailAddressIsClickable();
    })

    /*it ('Email-address-redirect', function(){       
        footer.emailAddressRedirect();
        footer.openBase();
    })*/

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

    it ('Linkedin-icon-is-clickable', function(){       
        footer.linkedinIconIsClickable();
    })

    /*it ('Linkedin-icon-redirect', function(){       
        footer.linkedinIconRedirect();
    })*/

    it ('Alluma-icon-is-clickable', function(){       
        footer.allumaIconIsClickable();
    })

    it ('Alluma-icon-redirect', function(){       
        footer.allumaIconRedirect();
    })

    it ('App-version-is-clickable', function(){       
        footer.appVersionClickable();
    })

    it ('Alluma-link-in-app-version-is-clickable', function(){       
        footer.allumaLinkInAppVersionClickable();
    })

    it ('Alluma-link-in-app-version-is-redirect', function(){       
        footer.allumaLinkInAppVersionRedirect();
    })

    it ('Privacy-policy-is-clickable', function(){       
        footer.privacyPolicyClickable();
    })

    it ('Non-discrimination-policy-is-clickable', function(){       
        footer.nonDiscriminationPolicyClickable();
    })

    it ('Terms-of-use-is-clickable', function(){       
        footer.termsOfUseClickable();
    })

})
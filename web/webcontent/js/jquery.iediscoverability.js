
(function ($) {


    var settings = {       
        //the number of times we want to display the banner to a user
        countDisplay: 5,
        //the number of days we want to remind the user to come using the pin mode since its last access
        days: 5
    }, 
        actionButton, instructionsDisplayed = false, infoAttached = false, trackerName = 'iepin', displayedName = 'iecount';    

    var methods = {
        init: function (callerSettings) {
            settings = $.extend(settings, callerSettings);            
            settings.element = this;            
            showBannerIfNeed();
        },
        destroy: function () {           
            settings.element.find('.close').unbind('click');
            settings.element.find('.close').show();            
            settings.mode = 'expand';
            settings.element = undefined;
        }
    };

    function browserCanPin() {
        return ('external' in window && 'msIsSiteMode' in window.external);
    }

    function isPinned(){
        return ('external' in window && 'msIsSiteMode' in window.external && window.external.msIsSiteMode());    
    }

    function isFirstTime(){
        return (isPinned() && window.external.msIsSiteModeFirstRun() !== 0);    
    }

    //Win7+
    function osSupportsPin(){
         try {
            var userAgent = navigator.userAgent;

            if (userAgent.indexOf("Windows NT 6.") !== -1 && userAgent.indexOf("Windows NT 6.0") === -1)
                return true;
            else return false;
        } catch (exc) {
            return false;
        }
    }

    //the link depends on the user computer (OS + Architecture)
    function getIE9Download()
    {
	    var userAgent = navigator.userAgent.toLowerCase(),
		    appMinorVersion = window.navigator.appMinorVersion,
		    appMinorVersionF = parseFloat(window.navigator.appMinorVersion),
		    Check = function (value) {
			    return userAgent.indexOf(value) >= 0;
		    };

	    this.IsWin = Check("windows nt");
	    this.IsVista = Check("windows nt 6.0");
	    this.IsWin7 = Check("windows nt 6.1");
	    this.IsXP = Check("windows nt 5.1");
	    this.IsIE = Check("msie");
	    this.IsIE7 = Check("msie 7");
	    this.IsIE8 = Check("msie 8");
	    this.IsIE9 = Check("trident/5.0");
	    this.IsIE9CompatMode = this.IsIE9 && this.IsIE7;
	    this.IsIE10 = Check("trident/6.0");
	    this.IsIE10Preview = (this.IsIE10 && window.external == null); // check for IE10 Platform Preview
	    this.IsFirefox = Check("firefox");
	    this.IsChrome = Check("chrome");
	    if (this.IsChrome) {
		    var t = userAgent.match(/chrome\/(\d{1,2})/);
		    this.Version = t[1];
	    }
	    if (this.IsFirefox && /Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
		    //test for Firefox/x.x or Firefox x.x (ignoring remaining digits)
		    this.Version = Number(RegExp.$1) // capture x.x portion and store as a number
	    }
	    if (this.IsIE || (this.IsFirefox && this.Version >= 4) || (this.IsChrome && this.Version >= 11)) {
		    // Only IE and recent Chrome/Firefox report 32/64bit in user agent
		    this.BitSniffed = true;
		    this.Is64bit = Check("win64") || Check("wow64");
	    }
	    this.WinVersion = this.IsXP? "xp" : this.IsVista? "vista" : this.IsWin7? "win7" : "";
	    this.WinBits = this.Is64bit? "64" : "32";

	    this.getShortVersionTag = function() {
		    return this.WinVersion? this.WinVersion + "-" + this.WinBits : "";
	    };
	    this.getIEDownloadURL = function() {
		    // Determine the download version to offer based on the Windows version
		    var urlPrefix = "http://download.microsoft.com/download",
			    // Offer 32-bit browser version on 64-bit OS since plugins work with it
			    versionMap = {
				    "win7-32":	"/8/6/D/86DB5DC9-5706-4A5B-BD46-FFBA6FA67D44/IE9-Windows7-x86-enu.exe",
				    "win7-64":	"/8/6/D/86DB5DC9-5706-4A5B-BD46-FFBA6FA67D44/IE9-Windows7-x64-enu.exe",
				    "vista-32":	"/8/6/D/86DB5DC9-5706-4A5B-BD46-FFBA6FA67D44/IE9-WindowsVista-x86-enu.exe",
				    "vista-64":	"/8/6/D/86DB5DC9-5706-4A5B-BD46-FFBA6FA67D44/IE9-WindowsVista-x64-enu.exe",
				    "xp-32":	"/C/C/0/CC0BD555-33DD-411E-936B-73AC6F95AE11/IE8-WindowsXP-x86-ENU.exe",
				    "xp-64":	"/7/5/4/754D6601-662D-4E39-9788-6F90D8E5C097/IE8-WindowsServer2003-x64-ENU.exe"
			    },
			    version = this.getShortVersionTag();
		    return downloadLink = urlPrefix + (versionMap[version] || versionMap["7"]);
	    };

        return getIEDownloadURL();
    };

    //sets or get the number of times the banner has been displayed
    function displayedTimesCount(value){
        var count, storage;
        if(value !== undefined){
            //update cookie or localstorage
            createCookie(displayedName, value, 14);            
        }else{
            count = readCookie(displayedName);
            if(count === "NaN") count = 0;
            return count;
        }
    }

    function createCookie(name,value,days) {
	    if (days) {
		    var date = new Date();
		    date.setTime(date.getTime()+(days*24*60*60*1000));
		    var expires = "; expires="+date.toGMTString();
	    }
	    else var expires = "";
	    document.cookie = name+"="+value+expires+"; path=/";
    }

    function readCookie(name) {
	    var nameEQ = name + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0;i < ca.length;i++) {
		    var c = ca[i];
		    while (c.charAt(0)==' ') c = c.substring(1,c.length);
		    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	    }
	    return null;
    }

    function eraseCookie(name) {
	    createCookie(name,"",-1);
    }

    //gets the number of days since the user last accessed through pin mode
    function daysSincePinAccess () {
        var cookie, daysSince = -1;
        if (browserCanPin()) {
            cookie = readCookie(trackerName);
            if(cookie === null || cookie === undefined || cookie === "NaN")
            {
                return daysSince;    
            }
            cookie = new Date(cookie);

            daysSince = Math.round(((new Date()).getTime() - cookie.getTime()) / 86400000);
            if (isNaN(daysSince)) {
                daysSince = -1;
            }
            return daysSince;         
        } else {
            return -1;
        }
    };
    
    function setFlag(){
        try {
            createCookie(trackerName, new Date().toString(), 30);
        } catch (ex) {
            return false;
        }
    }

    //updates all the links with the class ie-download with the correct download link for the user's os and architecture
    function updateDownloadLinks(){
        var download = getIE9Download();
        $('a.ie-download').attr('href',download);
    }

    //true if the website has an app version, false otherwise. Only applies for W8 and IE10 (or greater)
    function hasApp(){
        var userAgent = navigator.userAgent.toLowerCase();
        //IE10 & W8
        if (userAgent.indexOf("msie 10.0") !== -1 && userAgent.indexOf("windows nt 6.2") !== -1){
            //check for the app tags
            var app = $('meta[name="msApplication-ID"]');
            return app.length > 0;            
        }else{
            return false;    
        }
    }

    //displays the following banners depending on the configuration:
    //
    function showBannerIfNeed() {
        var displayedCount;
        try {            
            if(isPinned())
            {
                //we update the date when the site was last pinned
                setFlag();
            }else{
                displayedCount = displayedTimesCount();
                //if we have reach the limit of displayed times we no longer show it to the user
                if(displayedCount > settings.countDisplay){
                    return;  
                }
                displayedCount++;
                //we increase the number of times the banner has been displayed
                displayedTimesCount(displayedCount);
                
                //we update all the download links
                updateDownloadLinks();
                
                if(browserCanPin()){
                    if(osSupportsPin()){
                        // we are IE9+ and Win7+
                        var days = daysSincePinAccess();
                        if(days > -1){
                            if(days < settings.days){
                                //we remember the user to come through its pin
                                settings.element=$('#was-pinned');
                            }
                        }else{
                            if(hasApp()){
                                //check if it is IE10 and if it has
                                settings.element = $('#ie-app');
                            }else{
                                //we encourage the user to pin this website
                                settings.element = $('#ie-notpinned');
                            }
                        }
                    }else{
                        //we are in Vista (IE9 cannot be installed in WinXP)
                        settings.element = $('#ie9-vista');
                    }
                }else if(osSupportsPin()){
                    // we are in W7 or greater but the browser doesn't support pinning
                    settings.element = $('#not-iepin');
                }
            }        
                        
            //here we display the good banner
            if(settings.element !== null)
            {
                //we attach to the close button and hide it using an animation
                settings.element.find('.close').click(function () {
                                settings.element.slideUp('fast');
                                $(this).slideUp('fast');
                            });
                //if you want to add any fade in animation or similar, it is here
                //maybe you can also use a timeout if you don't want to show it directly
                settings.element.show();                
            }
        }
        catch (ex) {}
    }
    
    $.fn.iepinable = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.iepinable');
        }
    }
})(jQuery);
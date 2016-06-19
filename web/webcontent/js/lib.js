 var BrowserDetect = {
   init : function () {
      this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
      this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
      this.OS = this.searchString(this.dataOS) || "an unknown OS";
      }
   , searchString : function (data) {
      for (var i = 0; i < data.length; i++) {
         var dataString = data[i].string;
         var dataProp = data[i].prop;
         this.versionSearchString = data[i].versionSearch || data[i].identity;
         if (dataString) {
            if (dataString.indexOf(data[i].subString) != - 1) return data[i].identity;
            }
         else if (dataProp) return data[i].identity;
         }
      }
   , searchVersion : function (dataString) {
      var index = dataString.indexOf(this.versionSearchString);
      if (index == - 1) return;
      return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
      }
   , dataBrowser : [ {
      string : navigator.userAgent, subString : "OmniWeb", versionSearch : "OmniWeb/", identity : "OmniWeb" }
   , {
      string : navigator.vendor, subString : "Apple", identity : "Safari" }
   , {
      prop : window.opera, identity : "Opera" }
   , {
      string : navigator.vendor, subString : "iCab", identity : "iCab" }
   , {
      string : navigator.vendor, subString : "KDE", identity : "Konqueror" }
   , {
      string : navigator.userAgent, subString : "Firefox", identity : "Firefox" }
   , {
      string : navigator.vendor, subString : "Camino", identity : "Camino" }
   , {
      // for newer Netscapes (6+)
      string : navigator.userAgent, subString : "Netscape", identity : "Netscape" }
   , {
      string : navigator.userAgent, subString : "MSIE", identity : "Explorer", versionSearch : "MSIE" }
   , {
      string : navigator.userAgent, subString : "Gecko", identity : "Mozilla", versionSearch : "rv" }
   , {
      // for older Netscapes (4-)
      string : navigator.userAgent, subString : "Mozilla", identity : "Netscape", versionSearch : "Mozilla" }
   ], dataOS : [ {
      string : navigator.platform, subString : "Win", identity : "Windows" }
   , {
      string : navigator.platform, subString : "Mac", identity : "Mac" }
   , {
      string : navigator.platform, subString : "Linux", identity : "Linux" }
   ]};
BrowserDetect.init();
var isIE = false, isGecko = false, isOpera = false, isSafari = false;
function isCompliantBrowser() {
   // alert("isCompliantBrowser");
   var boolCompliant = true;
   if (BrowserDetect.OS == "Windows" && BrowserDetect.browser == "Explorer" && BrowserDetect.version > 6) {
      isIE = true;
      boolCompliant = true;
      }
   if (BrowserDetect.OS == "Windows" && BrowserDetect.browser == "Firefox" && BrowserDetect.version >= 1) {
      isGecko = true;
      boolCompliant = true;
      }
   if (BrowserDetect.OS == "Windows" && BrowserDetect.browser == "Netscape" && BrowserDetect.version >= 7) {
      isGecko = true;
      boolCompliant = true;
      }
   if (BrowserDetect.OS == "Windows" && BrowserDetect.browser == "Opera" ) {
      isOpera = true;
      boolCompliant = true;
      }
   if (BrowserDetect.OS == "Mac" && BrowserDetect.browser == "Safari" && BrowserDetect.version < 500) {
      isSafari = true;
      boolCompliant = true;
      }
   if (BrowserDetect.OS == "Mac" && BrowserDetect.browser == "Safari" && BrowserDetect.version > 500) {
      isIE = true;
      boolCompliant = true;
      }
   // alert (BrowserDetect.browser + ' ' + BrowserDetect.version + ' ' + BrowserDetect.OS);
   if(window.location.href.indexOf('espanol') !=- 1 || window.location.href.indexOf('deutsch') !=- 1 ) {
      boolCompliant = false};
   return boolCompliant;
}
function getNumDaysInMonth(year, month) {
   return 32 - new Date(year, month, 32).getDate();
};
function setDate() {
   var now = new Date();
   document.roundTripInputForm._depmonthyear.options[now.getMonth() + 1].selected = true;
   document.roundTripInputForm._depday.options[now.getDate()].selected = true;
};
function setFFFields() {

setFavOrigAndDest();
};




function setFavOrigAndDest() {
   var favPos = 5;
   var forig = "";
   var fdest = "";
   var ignore = "";
   var cookieValue = getCookie("LoginCookie");
   if(cookieValue == null) {
      cookieValue = getCookie("RememberCookie");
      if(cookieValue != null)favPos = 4;
      }
   if(cookieValue != null) {
      cookieAttrs = new Array();
      cookieAttrs = cookieValue.split("/");
      cookieAttrs.reverse();
      var attrCount = cookieAttrs.length;
      if(attrCount - 1 > favPos) {
         for(i = 1; i < favPos; i++) {
            ignore = cookieAttrs.pop();
            }
         forig = cookieAttrs.pop();
         if(attrCount - 1 > favPos)fdest = cookieAttrs.pop();
         }
      }
 alert("favorig and Dest");

   document.form.wdf_origin.value = forig;
   document.form.wdf_destination.value = fdest;
};
var pagetype = null;
if(window.location.href.indexOf("HomePage") !=- 1)pagetype = 'homepage';
function buildLoginBox() {
   // alert("buildLoginBox");
   var html = "";
   if(getCookie("LoginCookie") != null && arguments[0] == null) {
	
      html += showLoggedIn();
      }
   if((getCookie("LoginCookie") == null || arguments[0] != null) && getCookie("ErrorCookie") == null) {
      html += showLoggedOut("header", null);
      html += showLoggedOut('body', pagetype);
      }
if(getCookie("ErrorCookie") != null) {
	//alert(getCookie("ErrorCookie"));
 	html += showLoggedOut("header", null);
      html += showLoggedOut('body', pagetype);
      
      }

   
   return html;
	
};


function loginFramePostProcess() {
   // alert("loginFramePostProcess");
   var loginFrameParent = document.getElementById("loginFrameParent");
   var loginFrame = document.getElementById("loginFrame");
   var objStat = document.getElementById("objStat");
   if(isSafari == false) {
      // alert ("loginFPP - safari is false");
      // check return values
      var lc = getCookie("LoginCookie");
      //var rc = getCookie("RememberCookie");
      var ec = getCookie("ErrorCookie");
      var ulc = getCookie("UpdateLoginCookie");
      if(lc != null || ec != null || ulc != null) {
         if(ec == null) {
            // no error code returned
            if(objStat == null) {
               loginFrameParent.removeChild(loginFrame);
            }
         }
         if (ulc != null) {
            updateLogin(ulc);
         }
         if (ec != null) {
            // error code was returned, location is in objStat
            if(objStat == null) {
               // redirect to the location
               document.location.href = window.location.href;

            } else {
               // re-show the login box
               showLoginBox();
            }
		showpoput();
         } else {
            showLoginBox();
         }
      }
      if(isOpera == true) {
         if(lc == null && objStat == null) {
            showLoginBox();
            }
         }
      }
   else {
      // alert(" i am a safari browser");
      var counter = 0;
      var breakVal = 1000;
      var boolCookieExists = false;
      while(boolCookieExists == false && counter <= breakVal) {
         if(counter == breakVal) {
            document.location.href = window.location.href;
            }
         var lc = getCookie("LoginCookie");
         var rc = getCookie("RememberCookie");
         var ec = getCookie("ErrorCookie");
         var ulc = getCookie("UpdateLoginCookie");
         if(lc != null || rc != null || ec != null || ulc != null) {
            loginFrameParent.removeChild(loginFrame);
            if(ec != null) {
               loginFrame = document.createElement("iFrame");
               loginFrame.setAttribute("id", "loginFrame");
               loginFrame.setAttribute("width", "0");
               loginFrame.setAttribute("height", "0");
               loginFrame.setAttribute("style", "position:absolute; visibility:hidden");
               loginFrameParent.appendChild(loginFrame);
               buildLoginFrame();
               }
            if (ulc != null) {
               updateLogin(ulc);
               }
            boolCookieExists = true;
            showLoginBox();
            }
         counter++;
         }
      }
   };
function updateLogin(loc) {
   // parse out the redirect
   var E = "UserIDNotConvertedToMatchEmail/";
   var updateURL = loc.substring(loc.indexOf(E) + E.length);
   var newURL = updateURL + "?CMSReturnlURL=" + document.URL;
   WM_killCookie("UpdateLoginCookie", "/", ".amtrak.com");
   document.location.href = newURL;
};
function showLoginBox() {
	// alert ("inside showLoginBox");

   var loginBox = document.getElementById("LoginBox");
   loginBox.innerHTML = buildLoginBox();
};



function getUserName() {
   var namePos = 3;
   var firstname = "";
   var lastname = "";
   var ignore = "";
   var fullname = "";
   var cookieValue = getCookie("LoginCookie");
   if(cookieValue == null) {
      cookieValue = getCookie("RememberCookie");
      if(cookieValue != null)namePos = 2;
      }
   if(cookieValue != null) {
      cookieAttrs = new Array();
      cookieAttrs = cookieValue.split("/");
      cookieAttrs.reverse();
      var attrCount = cookieAttrs.length;
      if(attrCount - 1 > namePos) {
         for(i = 1; i < namePos; i++) {
            ignore = cookieAttrs.pop();
            }
         firstname = cookieAttrs.pop();
         lastname = cookieAttrs.pop();
         }
      }
   if((firstname != null && lastname != null) && (firstname != "null" && lastname != "null")) {
      fullname = firstname + " " + lastname;
      }
   return fullname;
};

function getUName() {
   var nPos = 3;
   var fname = "";
   var lname = "";
   var ignr = "";
   var funame = "";
   var ckValue = getCookie("LoginCookie");
   if(ckValue == null) {
      ckValue = getCookie("RememberCookie");
      if(ckValue != null)nPos = 2;
      }
   if(ckValue != null) {
      cookieAttrs = new Array();
      cookieAttrs = ckValue .split("/");
      cookieAttrs.reverse();
      var attrCount = cookieAttrs.length;
      if(attrCount - 1 > nPos ) {
         for(i = 1; i < nPos ; i++) {
            ignr = cookieAttrs.pop();
            }
         fname = cookieAttrs.pop();
         lname = cookieAttrs.pop();
         }
      }
   if((fname != null && lname != null) && (fname != "null" && lname != "null")) {
      funame = fname ;
      }
   return funame ;
};


function getCookie(cookieName) {
   var allcookies = document.cookie;
   var pos = allcookies.indexOf(cookieName + "=");
   var offset = 12;
   if(pos ==- 1)return null;
   if(cookieName == "RememberCookie")offset = 15;
   if(cookieName == "UpdateLoginCookie")offset = 18;
   var start = pos + offset;
   var end = allcookies.indexOf(";", start + 1);
   if(end ==- 1)end = allcookies.length;
   var value = unescape(allcookies.substring(start, end));
   var valueArray = new Array();
   valueArray = value.split("+");
   valueArray.reverse();
   var len = valueArray.length;
   var newStr = "";
   for(var x = 1; x <= len; x++) {
      subStr = valueArray.pop();
      newStr += subStr;
      if(x != len)newStr += " ";
      }
   return(newStr);
};
function checkLoginForm() {
   var form = document.reslogin;
   var err = "false";
   var errmsg = "More Information Required: The following information is needed to process your request:\n";
   if(form._name.value == "") {
      err = "true";
      errmsg += "-- E-Mail Address\n";
      }
   if(form._password.value == "") {
      err = "true";
      errmsg += "-- Password";
      }
   if(err == "true") {
      alert(errmsg);
      return false;
      }
   return true;
};


function addressValid(emailStr) {
   var emailPat = /^(.+)@(.+)$/;
   var specialChars = "\\(\\)<>@,;:\\\\\\\"\\.\\[\\]";
   var validChars = "\[^\\s" + specialChars + "\]";
   var quotedUser = "(\"[^\"]*\")";
   var ipDomainPat = /^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/;
   var atom = validChars + '+';
   var word = "(" + atom + "|" + quotedUser + ")";
   var userPat = new RegExp("^" + word + "(\\." + word + ")*$");
   var domainPat = new RegExp("^" + atom + "(\\." + atom + ")*$");
   var matchArray = emailStr.match(emailPat);
   if(matchArray == null)return false;
   var user = matchArray[1];
   var domain = matchArray[2];
   if(user.match(userPat) == null)return false;
   var IPArray = domain.match(ipDomainPat);
   if(IPArray != null) {
      for(var i = 1; i <= 4; i++) {
         if(IPArray[i] > 255) {
            return false;
            }
         }
      return true;
      }
   var domainArray = domain.match(domainPat);
   if(domainArray == null)return false;
   var atomPat = new RegExp(atom, "g");
   var domArr = domain.match(atomPat);
   var len = domArr.length;
   var domainExt = domArr[1];
   if(len < 2)return false;
   if(domArr[domArr.length - 1].length < 2 || domArr[domArr.length - 1].length > 3) {
      return checkEmailTLD(domainExt);
      }
   return true;
};
function checkEmailTLD(domainExt) {
   var isValid = false;
   var tldArr = new Array("aero", "arpa", "biz", "cat", "com", "coop", "edu", "gov", "info", "int", "jobs", "mil", "mobi", "museum", "name", "net", "org", "pro", "travel");
   for(x = 0; x < tldArr.length; x++) {
      if(domainExt.toLowerCase() == tldArr[x]) {
         isValid = true;
         break;
         }
      }
   return isValid;
};

function checkEmail(frm) {
   var obj = frm;
   if(obj.elements['Email'].value == "" || addressValid(obj.elements['Email'].value) == false) {
      obj.elements['Email'].focus();
      alert("You must specify a valid e-mail address.");
      return false;
      }
   else {
      obj.submit();
      return true;
      }
};
var WM_acceptsCookies = false;
if(document.cookie == '') {
   document.cookie = 'WM_acceptsCookies=yes';
   if(document.cookie.indexOf('WM_acceptsCookies=yes') !=- 1) {
      WM_acceptsCookies = true;
      }
   }
else {
   WM_acceptsCookies = true;
   }
function WM_setCookie(name, value, hours, path, domain, secure) {
   if(WM_acceptsCookies) {
      var not_NN2 = (navigator && navigator.appName && (navigator.appName == 'Netscape') && navigator.appVersion && (parseInt(navigator.appVersion) == 2)) ? false : true;
      if(hours && not_NN2) {
         if((typeof(hours) == 'string') && Date.parse(hours)) {
            var numHours = hours;
            }
         else if(typeof(hours) == 'number') {
            var numHours = (new Date((new Date()).getTime() + hours * 3600000)).toGMTString();
            }
         }
      document.cookie = name + '=' + escape(value) + ((numHours) ? (';expires=' + numHours) : '') + ((path) ? ';path=' + path : '') + ((domain) ? ';domain=' + domain : '') + ((secure && (secure == true)) ? '; secure':'');
      }
};
function WM_readCookie(name) {
   if(document.cookie == '')return false;
   else {
      var firstChar, lastChar;
      var theBigCookie = document.cookie;
      firstChar = theBigCookie.indexOf(name);
      var NN2Hack = firstChar + name.length;
      if((firstChar !=- 1) && (theBigCookie.charAt(NN2Hack) == '=')) {
         firstChar += name.length + 1;
         lastChar = theBigCookie.indexOf(';', firstChar);
         if(lastChar ==- 1)lastChar = theBigCookie.length;
         return unescape(theBigCookie.substring(firstChar, lastChar));
         }
      else return false;
      }
};
function WM_killCookie(name, path, domain) {
   var theValue = WM_readCookie(name);
   if(theValue)document.cookie = name + '=' + theValue + '; expires=Fri, 13-Apr-1970 00:00:00 GMT' + ((path) ? ';path=' + path : '') + ((domain) ? ';domain=' + domain : '');
};

function showpoput() {
		LoginPopout.show();
		
		};


function submitPrintFriendly() {
   var itemChecked = "false";
   if(document.forms.pfform.resdetails.checked) {
      document.forms.Params.resdetails.value = document.forms.pfform.resdetails.value;
      itemChecked = "true";
      }
   else document.forms.Params.resdetails.value = "OFF";
   if(document.forms.pfform.routeinfo.checked) {
      document.forms.Params.routeinfo.value = document.forms.pfform.routeinfo.value;
      itemChecked = "true";
      }
   else document.forms.Params.routeinfo.value = "OFF";
   if(document.forms.pfform.stationinfo.checked) {
      document.forms.Params.stationinfo.value = document.forms.pfform.stationinfo.value;
      itemChecked = "true";
      }
   else document.forms.Params.stationinfo.value = "OFF";
   if(document.forms.pfform.traininfo.checked) {
      document.forms.Params.traininfo.value = document.forms.pfform.traininfo.value;
      itemChecked = "true";
      }
   else document.forms.Params.traininfo.value = "OFF";
   if(document.forms.pfform.traveltips.checked) {
      document.forms.Params.traveltips.value = document.forms.pfform.traveltips.value;
      itemChecked = "true";
      }
   else document.forms.Params.traveltips.value = "OFF";
   if(itemChecked == "false") {
      alert("You must select at least one item to print");
      return false;
      }
   var temppagename = document.forms.Params.pagename.value;
   document.forms.Params.pagename.value = document.forms.pfform.pagename.value;
   var temptarget = document.forms.Params.target;
   document.forms.Params.target = "_new";
   document.forms.Params.submit();
   document.forms.Params.pagename.value = temppagename;
   document.forms.Params.target = temptarget;
};


function openpopup() {
	var loc = "/html/stations_A.html";
	popup = window.open(loc,'1','directories=0,dependent=1,menubar=0,top=20,left=20,width=680,height=600,scrollbars=1');
		if (window.focus) {
			popup .focus();
		}
	};

function openWin(url, w, h) {
   var height = screen.availHeight / 2;
   var width = screen.availWidth / 2;
   if(w)width = w;
   if(h)height = h;
   var options = "width=" + width + ",height=" + height + ",scrollbars=yes,resizable=yes,toolbar=no";
   popupwindow = window.open(url, 'popupwindow', options);
   popupwindow.focus();
};









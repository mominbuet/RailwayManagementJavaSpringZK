<!--
var WM_acceptsCookies=false;
if (document.cookie=='') {	
	document.cookie='WM_acceptsCookies=yes';
	if (document.cookie.indexOf('WM_acceptsCookies=yes')!=-1) {
		WM_acceptsCookies=true;
	}
} else {
	WM_acceptsCookies=true;
}

function WM_setCookie(name,value,hours,path,domain,secure) {
	if (WM_acceptsCookies) {
		var not_NN2=(navigator&&navigator.appName&&
			 (navigator.appName=='Netscape')&&
			 navigator.appVersion&&
			 (parseInt(navigator.appVersion)==2))?false:true;
		if (hours&&not_NN2) {
			if ((typeof(hours)=='string')&&Date.parse(hours)) {
				var numHours=hours;
			} else if (typeof(hours)=='number') {
				var numHours=(new Date((new Date()).getTime()+hours*3600000)).toGMTString();
			}
		}
		document.cookie=name+'='+escape(value)+((numHours)?(';expires='+numHours):'')+((path)?';path='+path:'')+((domain)?';domain='+domain:'')+((secure&&(secure==true))?'; secure':'');
	}
};

function WM_readCookie(name) {
	if (document.cookie=='') {
		return false;	
	} else {
		var firstChar,lastChar;
		var theBigCookie=document.cookie;
		firstChar=theBigCookie.indexOf(name);
		var NN2Hack=firstChar+name.length;
		if ((firstChar!=-1)&&(theBigCookie.charAt(NN2Hack)=='=')) {
			firstChar+=name.length+1;
			lastChar=theBigCookie.indexOf(';',firstChar);
			if (lastChar==-1)
				lastChar=theBigCookie.length;
			return unescape(theBigCookie.substring(firstChar,lastChar));
		} else {
			return false;
		}
	}
};

function WM_killCookie(name,path,domain) {
	var theValue=WM_readCookie(name);
	if (theValue) {
		document.cookie=name+'='+theValue+'; expires=Fri, 13-Apr-1970 00:00:00 GMT'+((path)?';path='+path:'')+((domain)?';domain='+domain:'');	
	}
}//-->

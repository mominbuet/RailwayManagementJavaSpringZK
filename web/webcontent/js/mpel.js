MpElDs={'espanol.amtrak.com':'es','deutsch.amtrak.com':'de','francais.amtrak.com':'fr','www.amtrak.com':'en','amtrak.com':'en','cmstest.amtrak.com':'en','amtrak.convertlanguage.com':'en'};
if(!new RegExp('MP_LANG='+MpElDs[location.host]).test(document.cookie)){
    MpElD='//espanol.amtrak.com';
	MpL=navigator.browserLanguage;
	if(!MpL)MpL=navigator.language;
    document.write(decodeURIComponent("%3Cscript src='")+MpElD+"/mpel.js?href="+encodeURIComponent(location.href)+"&ref="+encodeURIComponent(document.referrer)+"&lang="+MpL+"' type='text/javascript'"+decodeURIComponent("%3E%3C/script%3E"));
}
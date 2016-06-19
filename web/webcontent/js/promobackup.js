function deliverBackupContent() {
	var homePageDiv = document.getElementById('homepage_primary_promotions');
	if(homePageDiv != null && homePageDiv.innerHTML.indexOf("href") < 0) {
		getHTML('homepage_primary_promotions','/servlet/ContentServer?pagename=am/AdvCols/HomepageAds&c=AdvCols&cid=1237405736613');
		backupDelivered = true;
	}
}

function delayDelivery() {
	setTimeout("deliverBackupContent()",2000)
}

function getHTML(elementId, url) {
	var http;
	if(window.XMLHttpRequest) {
		try {
			http = new XMLHttpRequest();
		} catch(e) {
			http = false;
		}
	} else if(window.ActiveXObject) {
		try {
			http = new ActiveXObject("Msxml2.XMLHTTP");
		} catch(e) {
			try {
				http = new ActiveXObject("Microsoft.XMLHTTP");
			} catch(e) {
				http = false;
			}
		}
	}
	http.open("GET",url,true);
	http.onreadystatechange = function() {
		if (http.readyState == 4) {
			document.getElementById(elementId).innerHTML = http.responseText;
		}
	}
	http.send(null);
}

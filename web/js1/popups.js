<!-- 
function openStationList() {
    stations = window.open('/html/stations_A.html','stationListWindow','width=530,height=450,directories=no,location=no,menubar=no,scrollbars=yes,status=yes,toolbar=no,resizable=yes');    
    stations.focus();
}

function closeCalendar() {
  if ( typeof calwin != "undefined" && calwin.closed != true ){
    calwin.close();
  }
} 

function closeStationList() {
    if ( typeof stations != "undefined" && stations.closed != true ){
	    stations.close();
    }
} 

function openWindowList(listURL, windowName, windowFeatures) {
	var defaultWindowName = '';
	var defaultWindowFeatures = 'width=530,height=450,directories=no,location=no,menubar=no,scrollbars=yes,status=yes,toolbar=no,resizable=yes';
	if ((listURL != undefined) && (listURL != "undefined") && (listURL != '')) {
		if (windowName == undefined || windowName == "undefined" || windowName == '') {
			windowName = defaultWindowName;
		}
		if (windowFeatures == undefined || windowFeatures == "undefined" || windowFeatures == '') {
			windowFeatures = defaultWindowFeatures;
		}
	    win = window.open(listURL,windowName,windowFeatures);    
	    win.focus();
	}			
}

function preSubmitActions(){
 if (getDayField(2) == null && getDayField(3) == null) {
     updateDateTimeDownListsForTrainStatus();
 }
 closeCalendar();
 closeStationList();
 return checkMandatoryFields();
}

// opens serivce info window
function ServiceInformationPopup() {
   serviceInfo = window.open("?handler=com%2esita%2eats%2eamtrak%2epresentation%2ehandler%2epage%2erail%2eAmtrakServiceInformationPageHandler",
               "serviceInfoWindow",
               "height=450,width=530,left=350,top=300,directories=no,location=no,menubar=no,scrollbars=yes,status=yes,toolbar=no,resizable=yes",
               false);
   serviceInfo.focus();

}
// -->

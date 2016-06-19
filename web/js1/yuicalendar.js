
// Override the existing function in the YUI core code
//  original is contained in calendar.js, aka calendar-min.js

//AIBE-2126 Added tabIndex to iframe to remove focus when using the tab key.
// YUI 2.7.0
YAHOO.widget.CalendarGroup.prototype.configIframe = function(I, H, J) {
	var G = H[0];
	if (!this.parent) {
		if (YAHOO.util.Dom.inDocument(this.oDomContainer)) {
			if (G) {
				var K = YAHOO.util.Dom.getStyle(this.oDomContainer, "position");
				if (K == "absolute" || K == "relative") {
					if (!YAHOO.util.Dom.inDocument(this.iframe)) {
						this.iframe = document.createElement("iframe");
						this.iframe.src = "javascript:false;";
						YAHOO.util.Dom.setStyle(this.iframe, "opacity", "0");
						this.iframe.setAttribute("tabIndex", "-1"); 
						if (YAHOO.env.ua.ie && YAHOO.env.ua.ie <= 6) {
							YAHOO.util.Dom.addClass(this.iframe, "fixedsize");
						}
						this.oDomContainer.insertBefore(this.iframe,
								this.oDomContainer.firstChild);
					}
				}
			} else {
				if (this.iframe) {
					if (this.iframe.parentNode) {
						this.iframe.parentNode.removeChild(this.iframe);
					}
					this.iframe = null;
				}
			}
		}
	}
};

YAHOO.widget.Calendar.prototype.configIframe = function(I, H, J) {
	var G = H[0];
	if (!this.parent) {
		if (YAHOO.util.Dom.inDocument(this.oDomContainer)) {
			if (G) {
				var K = YAHOO.util.Dom.getStyle(this.oDomContainer, "position");
				if (K == "absolute" || K == "relative") {
					if (!YAHOO.util.Dom.inDocument(this.iframe)) {
						this.iframe = document.createElement("iframe");
						this.iframe.src = "javascript:false;";
						YAHOO.util.Dom.setStyle(this.iframe, "opacity", "0");
						this.iframe.setAttribute("tabIndex", "-1"); 
						if (YAHOO.env.ua.ie && YAHOO.env.ua.ie <= 6) {
							YAHOO.util.Dom.addClass(this.iframe, "fixedsize");
						}
						this.oDomContainer.insertBefore(this.iframe,
								this.oDomContainer.firstChild);
					}
				}
			} else {
				if (this.iframe) {
					if (this.iframe.parentNode) {
						this.iframe.parentNode.removeChild(this.iframe);
					}
					this.iframe = null;
				}
			}
		}
	}
};


//AIBE-2145 removed span element to enable focus on the close image.
//YUI 2.7.0
YAHOO.widget.CalendarGroup.prototype.createCloseButton = function() {
	var J = YAHOO.widget.CalendarGroup.CSS_2UPCLOSE;
	var L = "us/my/bn/x_d.gif";
	var K = YAHOO.util.Dom.getElementsByClassName("link-close", "a",
					this.oDomContainer)[0];	
	if (!K) {
		K = document.createElement("a");
		YAHOO.util.Event.addListener(K, "click", function(N, M) {
			M.hide();
			YAHOO.util.Event.preventDefault(N);
		}, this);
	}
	K.href = "#";
	K.className = "link-close " + J + " " + this.Style.CSS_CLOSE;
	if (YAHOO.widget.Calendar.IMG_ROOT !== null) {
		var I = YAHOO.util.Dom.getElementsByClassName(J, "img", K)[0]
				|| document.createElement("img");
		I.src = YAHOO.widget.Calendar.IMG_ROOT + L;
		I.className = J;
		K.appendChild(I);
	} else {
		K.innerHTML = "Close";
	}

	this.oDomContainer.appendChild(K);
	return K;
};

YAHOO.widget.Calendar.prototype.createCloseButton = function() {
	var J = YAHOO.widget.CalendarGroup.CSS_2UPCLOSE;
	var L = "us/my/bn/x_d.gif";
	var K = YAHOO.util.Dom.getElementsByClassName("link-close", "a",
					this.oDomContainer)[0];	
	if (!K) {
		K = document.createElement("a");
		YAHOO.util.Event.addListener(K, "click", function(N, M) {
			M.hide();
			YAHOO.util.Event.preventDefault(N);
		}, this);
	}
	K.href = "#";
	K.className = "link-close " + J + " " + this.Style.CSS_CLOSE;
	if (YAHOO.widget.Calendar.IMG_ROOT !== null) {
		var I = YAHOO.util.Dom.getElementsByClassName(J, "img", K)[0]
				|| document.createElement("img");
		I.src = YAHOO.widget.Calendar.IMG_ROOT + L;
		I.className = J;
		K.appendChild(I);
	} else {
		K.innerHTML = "Close";
	}
	this.oDomContainer.appendChild(K);
	return K;
};

/**
* Renders the calendar header.
* @method renderHeader
* @param {Array}	html	The current working HTML array
* @return {Array} The current working HTML array
*/
YAHOO.widget.Calendar.prototype.renderHeader = function(html) {
	var colSpan = 7;
	var DEPR_NAV_LEFT = "us/tr/callt.gif";
	var DEPR_NAV_RIGHT = "us/tr/calrt.gif";	
	var defCfg = YAHOO.widget.Calendar._DEFAULT_CONFIG;
	
	if (this.cfg.getProperty(defCfg.SHOW_WEEK_HEADER.key)) {
		colSpan += 1;
	}
	if (this.cfg.getProperty(defCfg.SHOW_WEEK_FOOTER.key)) {
		colSpan += 1;
	}
	html[html.length] = "<thead>";
	html[html.length] =		"<tr>";
	html[html.length] =			'<th colspan="' + colSpan + '" class="' + this.Style.CSS_HEADER_TEXT + '">';
	html[html.length] =				'<div class="' + this.Style.CSS_HEADER + '">';

	var renderLeft, renderRight = false;

	if (this.parent) {
		if (this.index === 0) {
			renderLeft = true;
		}
		if (this.index == (this.parent.cfg.getProperty("pages") -1)) {
			renderRight = true;
		}
	} else {
		renderLeft = true;
		renderRight = true;
	}

	// set renderLeft
	renderLeft = !this.isDateOOB( YAHOO.widget.DateMath.subtract( this.cfg.getProperty(defCfg.PAGEDATE.key), YAHOO.widget.DateMath.DAY, 1 ) );
	
	// set renderRight
	renderRight = !this.isDateOOB( YAHOO.widget.DateMath.add( YAHOO.widget.DateMath.findMonthEnd(this.cfg.getProperty(defCfg.PAGEDATE.key)), YAHOO.widget.DateMath.DAY, 1 ) );
	var cal = this.parent || this;
	
	if (renderLeft) {
		var leftArrow = this.cfg.getProperty(defCfg.NAV_ARROW_LEFT.key);
		// Check for deprecated customization - If someone set IMG_ROOT, but didn't set NAV_ARROW_LEFT, then set NAV_ARROW_LEFT to the old deprecated value
		if (leftArrow === null && YAHOO.widget.Calendar.IMG_ROOT !== null) {
			leftArrow = YAHOO.widget.Calendar.IMG_ROOT + DEPR_NAV_LEFT;
		}
		var leftStyle = (leftArrow === null) ? "" : ' style="background-image:url(' + leftArrow + ')"';
		html[html.length] = '<a class="' + this.Style.CSS_NAV_LEFT + '"' + leftStyle + ' href="#" >&#160;</a>';
	}
	
	html[html.length] = this.buildMonthLabel();
	
	if (renderRight) {
		var rightArrow = this.cfg.getProperty(defCfg.NAV_ARROW_RIGHT.key);
		if (rightArrow === null && YAHOO.widget.Calendar.IMG_ROOT !== null) {
			rightArrow = YAHOO.widget.Calendar.IMG_ROOT + DEPR_NAV_RIGHT;
		}
		var rightStyle = (rightArrow === null) ? "" : ' style="background-image:url(' + rightArrow + ')"';
		html[html.length] = '<a class="' + this.Style.CSS_NAV_RIGHT + '"' + rightStyle + ' href="#">&#160;</a>';
	}

	html[html.length] =	'</div>\n</th>\n</tr>';

	if (this.cfg.getProperty(defCfg.SHOW_WEEKDAYS.key)) {
		html = this.buildWeekdays(html);
	}
	
	html[html.length] = '</thead>';

	return html;
};




// Pre-selects on the calendar, the date currently visible on the page
// a global month names array
var gsMonthNames = new Array(
'January',
'February',
'March',
'April',
'May',
'June',
'July',
'August',
'September',
'October',
'November',
'December'
);

var gsMonthNamesAbbr = new Array(
'Jan',
'Feb',
'Mar',
'Apr',
'May',
'Jun',
'Jul',
'Aug',
'Sep',
'Oct',
'Nov',
'Dec'
);

// a global day names array
var gsDayNames = new Array(
'Sunday',
'Monday',
'Tuesday',
'Wednesday',
'Thursday',
'Friday',
'Saturday'
);

// the date format prototype
function formatDate(d)
{
    var day = gsDayNames[d.getDay()].substr(0, 3);
    var month = gsMonthNames[d.getMonth()].substr(0, 3);
    
    var date = d.getDate();
    if (date < 10) {
      date = "0" + date;
    }
    
    return day + ", " + month + " " + date + ", " + d.getFullYear();
}

function calShow() {
	// Grab the date so we can check if day value is greater than 20
	var dateOnPage = getValidatedDateArray(this.itdIdLink);

    if (isValidDate(dateOnPage)) {
        dateOnPageObj = new Date(dateOnPage[0], (dateOnPage[1]-1), dateOnPage[2]);
    }
    else {
        dateOnPageObj = new Date();
    } 

	var itd_cal = this;
	// if date is 20th or later
    if (dateOnPageObj.getDate() > 20) {
    	// a calendarGroup is required
    	// check what we already have
        if (itd_cal.pages == null) {
        	// we need to generate a calendarGroup
        	itd_cal = generateNewCalendar(itd_cal, dateOnPageObj);
        }
    } else {
    	// a calendar is required
    	// check what we have already
        if (itd_cal.pages != null) {
        	// we need to generate a calendar
        	itd_cal = generateNewCalendar(itd_cal, dateOnPageObj);
        }
    }

	// Select in the calendar, the date currently showing on the page.
	itd_cal.selectEvent.unsubscribe();
	itd_cal.select(dateOnPageObj);
	itd_cal.selectEvent.subscribe(handleSelect, itd_cal, true);
	
	var original_min_date = itd_cal.cfg.getProperty("mindate");
	var currentDate = new Date();

	// AIBE-2155 Train Status Unique ID MUST ALWAYS BE 10
	if (this.itdIdLink == 10 && original_min_date != null && original_min_date.getDate() != currentDate.getDate()) {
		if (currentDate.getDate() < 6) {
	
            var year = currentDate.getFullYear();
			var month = currentDate.getMonth()+1;
			var daysPerMonth=new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
			
			var isLeapYear = !(year % 4) && (year % 100) || !(year % 400) ? true : false;
			if (isLeapYear==true) {
				daysPerMonth[1] = 29;
			}

			var daysInPrevMonth;
            if (month > 1) {
                daysInPrevMonth=daysPerMonth[month-2];
            } else {
                //if month < 1 means it is JAN, prev month for JAN is DEC
                daysInPrevMonth=daysPerMonth[11];
            }
            
			var daysInPrevMonthSelectable = 5 - currentDate.getDate();
			if (dateOnPageObj.getDate() < 11) {
				currentDate = new Date(dateOnPage[0], (dateOnPage[1]-2), daysInPrevMonth - daysInPrevMonthSelectable);
			} else {
				currentDate = new Date(dateOnPage[0], (dateOnPage[1]-1), daysInPrevMonth - daysInPrevMonthSelectable);
			}

			// show the 'page' (calendar month) for the date just selected.
			itd_cal.cfg.setProperty("pagedate", currentDate);
			
		} else {
			// show the 'page' (calendar month) for the date just selected.
			itd_cal.cfg.setProperty("pagedate", currentDate);
		}
		
	} else {
		//show the 'page' (calendar month) for the date just selected.
		itd_cal.cfg.setProperty("pagedate", dateOnPageObj);
	}


    // AIBE-1479 Set the return trip button
    if (this.itdIdLink == 2) {
       setTripTypeIfReturnDateSelected(false);
    } 
    itd_cal.render();
	itd_cal.show();
}


function generateNewCalendar(itd_cal, dateOnPageObj) {
	var containerID = "calContainer"+itd_cal.itdIdLink;

	// Clear the container contents
	document.getElementById(containerID).innerHTML = "";

	// NB: this must remain above the if/else statement 
	//  as itd_cal is modified within that statement
	var itdUniqueId = itd_cal.itdIdLink;

	var original_min_date = itd_cal.cfg.getProperty("mindate");
	var original_max_date = itd_cal.cfg.getProperty("maxdate");
	// remove existing event listeners
	YAHOO.util.Event.removeListener("wdfdate"+itdUniqueId);
	YAHOO.util.Event.removeListener("calLink"+itdUniqueId);
	itd_cal.selectEvent.unsubscribe(handleSelect, itd_cal);

	var currentDate = new Date();

	//if user can select a day prior to Current day then it must be a train status calendar.
	// AIBE-2155 Train Status Unique ID MUST ALWAYS BE 10
	if (itdUniqueId == 10 && original_min_date != null && original_min_date.getDate() != currentDate.getDate()) {
		//train Status and only train status should enter here

		//if its over 23rd there we may need next month displayed
		if (currentDate.getDate() > 23) {
			
			var year = currentDate.getYear();
			var month = currentDate.getMonth()+1;
			var day = currentDate.getDate();
			var daysPerMonth=new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
			
			var isLeapYear = !(year % 4) && (year % 100) || !(year % 400) ? true : false;
			if (isLeapYear==true) {
				daysPerMonth[1] = 29;
			}
			
			var maxDaysInMonth=daysPerMonth[month-1];
			
			//days that can be selected from todays date
			var allowedSelectabledDays=day+5;
			
			//if the days that can be selected runs into next month, display 2 calendars.
			if (allowedSelectabledDays > maxDaysInMonth){
				itd_cal = new YAHOO.widget.CalendarGroup(itd_cal.id, containerID, "{PAGES:2}");
	        } else {
        		itd_cal = new YAHOO.widget.Calendar(itd_cal.id, containerID);
			}
		} else {
			if (currentDate.getDate() < 6) {
        		itd_cal = new YAHOO.widget.CalendarGroup(itd_cal.id, containerID, "{PAGES:2}");
        	} else {
        		itd_cal = new YAHOO.widget.Calendar(itd_cal.id, containerID);
        	}
		}
		
	} else {
		if (dateOnPageObj.getDate() > 20) {
		    	itd_cal = new YAHOO.widget.CalendarGroup(itd_cal.id, containerID, "{PAGES:2}");
	    } else {
	    	itd_cal = new YAHOO.widget.Calendar(itd_cal.id, containerID);
	    }
	}

	// configure the calendar (also adds event listeners)
	calConfig(itdUniqueId, itd_cal, original_min_date, original_max_date);
	
	return itd_cal;
}


/**
 * called when a date is selected through the calendar
 * type: 'select'
 * args: e.g. '2007,12,22'
 * obj:  'CalendarGroup itd_cal1'
*/
function handleSelectOld(type,args,obj) {
    var dates = args[0];
    var date = dates[0];
    var year = parseInt(date[0],10), month = parseInt(date[1],10), day = parseInt(date[2],10);
    setDate(this.itdIdLink,year,month,day);
    this.hide();
    doDateChanged(parseInt(this.itdIdLink,10), returnDaysAhead);
}
/**
 * called when a date is selected through the calendar
 * type: 'select'
 * args: e.g. '2007,12,22'
 * obj:  'CalendarGroup itd_cal1'
*/
function handleSelect(type,args,obj) {
    var dates = args[0];
    var date = dates[0];
    var year = parseInt(date[0],10), month = parseInt(date[1],10), day = parseInt(date[2],10);
    var inputFieldName = getField('wdfdate',this.itdIdLink).name;
    var dateInputFormat = inputFieldName.substring(inputFieldName.lastIndexOf(".") + 1, inputFieldName.length);
    var txtDate1 = document.getElementById("wdfdate" + this.itdIdLink);
    if (dateInputFormat == "date") { // YMD
      var date = new Date(year, (month-1), day);
	  txtDate1.value = formatDate(date);
    }
    else {
	  txtDate1.value = month + "/" + day + "/" + year;
	}
	this.hide();	
    doDateChanged(parseInt(this.itdIdLink,10), returnDaysAhead);
    
    setFocusAfterCalendar(this.itdIdLink);
}

/**
 * called when a date is selected through the calendar
 * type: 'select'
 * args: e.g. '2007,12,22'
 * obj:  'CalendarGroup itd_cal1'
*/
function handleShow(type,args,obj) {
}
function handleHide(type,args,obj) {
   setFocusAfterCalendar(this.itdIdLink);
}

function setFocusAfterCalendar(itdLink) {
    var time = "wdftime" + itdLink;
    var date = "wdfdate" + itdLink;
    if (pageName == 'amtrak/rail/usarailpass/selectpass.jsp') {
       if (date == "wdfdate1") {
         $('destinationSelect1').focus();
       }
       else if (date == "wdfdate3") {
         $('usarailnext').focus();
       }
    }
    else if (pageName == 'amtrak/rail/multiride/multiriderequirementspage.jsp') {
         $('multiridenext').focus();
    }
    else if (pageName == 'amtrak/rail/autotrain/autotrainrequirementspage.jsp') {
         if (date == 'wdfdate1') {
           $('next').focus();
         }
         else {
           $('adults').focus();
         }         
    }
    else if (pageName == 'amtrak/rail/complexrequirementspage.jsp') {
	    if ($(time) != null) {
	       $(time).focus();
	    }
    }
    else {
        if (date == 'wdfdate10') {
           $('status_train_num').focus();
        }
	    else if ($(time) != null) {
	       $(time).focus();
	    }
	}
}

document.onclick = onClickCalendar;
function onClickCalendar(evt){
// AIBE-2122 set focus on the relevant date field when the calendar is clicked on via the mouse.
if (!evt) evt = event;
  var element = Event.element(evt);
  var names = element.classNames();
  
  // only interested in Calendar mouse clicks.
  if (names.include('calLink')) {
      
	  var elementID = element.identify();
	  var len = elementID.length;
	  // need to check for status calendar. has unique id of 10
	  if(len == 9 && (elementID.substring(len - 2) == "10")) {
	      var calIndex = elementID.substring(len - 2);
	      var dateField = "wdfdate" + calIndex;
	      if ($(dateField) != null) {
	    	  $(dateField).focus();
	          return;
	      }
	  } else {
    	  // handle all other calendars 
	      var calIndex = elementID.substring(len - 1);
	      var dateField = "wdfdate" + calIndex;
		  if ($(dateField) != null) {
	    	  $(dateField).focus();
	          return;
	      }
	  }
  } else {
     return;
  }
};

//AIBE-2167 set focus on opposite arrow if current arrow no longer exists
//Added else block
//YUI 2.7.0
YAHOO.widget.Calendar.prototype.doPreviousMonthNav = function(H, G) {
	YAHOO.util.Event.preventDefault(H);
	setTimeout( function() {
		G.previousMonth();
		var I = YAHOO.util.Dom.getElementsByClassName(G.Style.CSS_NAV_LEFT, "a",
				G.oDomContainer);
		if (I && I[0]) {
			try {
				I[0].focus();
			} catch (J) {
			}
		} else {
			var II = YAHOO.util.Dom.getElementsByClassName(G.Style.CSS_NAV_RIGHT, "a",
					G.oDomContainer);
			if (II && II[0]) {
				try {
					II[0].focus();
				} catch (J) {
				}
		    }
		}
	}, 0);
};
//AIBE-2167 set focus on opposite arrow if current arrow no longer exists
//Added else block
//YUI 2.7.0
YAHOO.widget.Calendar.prototype.doNextMonthNav = function(H, G) {
	YAHOO.util.Event.preventDefault(H);
	setTimeout( function() {
		G.nextMonth();
		var I = YAHOO.util.Dom.getElementsByClassName(G.Style.CSS_NAV_RIGHT, "a",
				G.oDomContainer);
		if (I && I[0]) {
			try {
				I[0].focus();
			} catch (J) {
			}
		} else {
			var II = YAHOO.util.Dom.getElementsByClassName(G.Style.CSS_NAV_LEFT, "a",
					G.oDomContainer);
			if (II && II[0]) {
				try {
					II[0].focus();
				} catch (J) {
				}
		    }
		}
	}, 0);
};

var calContainerArray;
var calLinkArray;
var wdfDateArray;

function init() {
	// populate arrays on startup.
	calContainerArray = YAHOO.util.Dom.getElementsByClassName('calContainer');
	calLinkArray = YAHOO.util.Dom.getElementsByClassName('calLink');
	wdfDateArray = YAHOO.util.Dom.getElementsByClassName('wdfDate');

}

YAHOO.util.Event.onDOMReady(init);

// detect a tab key press and check if focus has moved off the calendar
// Close calendars if focus has changed from the calendar
YAHOO.util.Event.addListener(document, "keyup", function(e) {
    if (e.keyCode == 9) {
    	// tabkey press
    	var el = YAHOO.util.Event.getTarget(e);
    	var isWdfDate = false;
    	for (var i=0; i<calContainerArray.length; i++) {
    		var wdfElem = wdfDateArray[i];
    		if (wdfElem == el) {
    			// current element is a wdfdate element
    		    isWdfDate = true;
    		}
    	}
    	 for (var i=0; i<calContainerArray.length; i++) {
    		 if (!isWdfDate &&
    				 !YAHOO.util.Dom.isAncestor(calContainerArray[i], el)) {
    			 // current element is not a wdfdate element or calendar date.
	    		 var calStyle = calContainerArray[i].style.display;
	 		     if (calStyle == 'block') {
	 		    	 // if a calendar is open, close it.
	 		    	calContainerArray[i].style.display = 'none';
	 		     }
    		 }
    	 }
    }
});

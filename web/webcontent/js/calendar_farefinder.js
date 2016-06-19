var dayValue;
var daySelectControl = null;
var monthYearSelectControl = null;
var UNDEFINED;
var INBOUND_DATE_ID = 2; 
var ONE_WAY_RADIO = 0; 
var RETURN_RADIO = 1; 

function getDayField(ctrl_ID) {
  return document.getElementById('wdfday' + ctrl_ID);
}

function getMonthYearField(ctrl_ID) {
  return document.getElementById('wdfmonthyear' + ctrl_ID);
}

function getDaysOfWeekField(ctrl_ID) {
  if ((typeof document['form']["daysofweekselect" + ctrl_ID]) == (typeof UNDEFINED)) {
    return null;
  }

  return document['form']["daysofweekselect" + ctrl_ID];
}

function getTimeOfDayField(ctrl_ID) {
  return document['form']["wdf_timeofday" + ctrl_ID];
}

function selectDateForDayOfWeekControls(ctrl_ID, year,month,day) {
  if (day<10) {
    getDayField(ctrl_ID).value = "0" + day;
  }
  else {
    getDayField(ctrl_ID).value = day;
  }
    
  var selectedOption = getMonthYearField(ctrl_ID).selectedIndex;

  if (month<10) {
    getMonthYearField(ctrl_ID).value = year + "-0" + (month);
  }
  else {
    getMonthYearField(ctrl_ID).value = year + "-" + (month);
  }
    
  if (getMonthYearField(ctrl_ID).value == "")
    getMonthYearField(ctrl_ID).selectedIndex = selectedOption;
}

function dropdownDayChanged(uniqueID) {
  setReturnRadio(uniqueID, INBOUND_DATE_ID);

  if (null == document['form']) return;
  if (null == getDayField(uniqueID)) return;
  if (null == getMonthYearField(uniqueID)) return;
  if (null == getDaysOfWeekField(uniqueID)) return;
  if (getDaysOfWeekField(uniqueID).selectedIndex == 0) return; 
    
  var theDate = new Date(getDateStringFromControls(uniqueID));
    
  theDate.setDate(theDate.getDate()-(theDate.getDay()-(getDaysOfWeekField(uniqueID).selectedIndex-1)));

  selectDateForDayOfWeekControls(uniqueID, theDate.getYear(), (theDate.getMonth()+1), theDate.getDate());
}

function getDateStringFromControls(uniqueID) {
  var theDay = getDayField(uniqueID).selectedIndex + 1;
  var theYearMonth = getMonthYearField(uniqueID).options[getMonthYearField(uniqueID).selectedIndex].value;
    
  return (theYearMonth.substring(theYearMonth.indexOf('-')+1)) 
          + "/" 
          + theDay
          + "/" 
          + theYearMonth.substring(0,theYearMonth.indexOf('-'));
}

function dropDownTimeChanged(uniqueID) {								
  dropDownDateChanged(uniqueID, null);
}

function dropDownTimeChanged(uniqueID, pairedControl) {		
  dropDownDateChanged(uniqueID, pairedControl); 
}

function dropDownDateChanged(uniqueID) {
  dropDownDateChanged(uniqueID, null);
}

function dropDownDateChanged(uniqueID, pairedControl) {
  setReturnRadio(uniqueID, INBOUND_DATE_ID);

  if (null == document['form']) return;
  if (null == document['form']) return;
  if (null == getDayField(uniqueID)) return;
  if (null == getMonthYearField(uniqueID)) return;

  daySelectControl = getDayField(uniqueID);
    
  updateDayDropDownListWithOffsets(uniqueID);

  if (null == getDaysOfWeekField(uniqueID)) return;

  monthYearSelectControl = getMonthYearField(uniqueID);

  var buffer = getDateStringFromControls(uniqueID);
  var theDOW = (new Date(buffer).getDay() + 1);

  getDaysOfWeekField(uniqueID).selectedIndex = theDOW;
    
  updatePairedControl(uniqueID, pairedControl)
}

function updatePairedControl(out_ID, in_ID) {
  if ((null == out_ID) || (null == in_ID) 
     || (null == getDayField(out_ID)) || (null == getMonthYearField(out_ID)) 
     || (null == getDayField(in_ID))  || (null == getMonthYearField(in_ID))) 
    return;
    
  var outdateobject = new Date(getDateStringFromControls(out_ID));
  var indateobject = new Date(getDateStringFromControls(in_ID));
    
  if (outdateobject >= indateobject) {
    outdateobject.setDate(outdateobject.getDate()+7);

    selectDateForDayOfWeekControls(in_ID, outdateobject.getFullYear(), (outdateobject.getMonth()+1), outdateobject.getDate());

    dropDownDateChanged(in_ID);
  }
}

function updateDateFields(outboundDateCtrlID, inboundDateCtrlID, daysToBeAdded) {
  if (document['form']["wdf_returnradio"][ONE_WAY_RADIO].checked) {
    if (null != getDaysOfWeekField(inboundDateCtrlID)) {
      getDaysOfWeekField(inboundDateCtrlID).selectedIndex = 0;
    }

    getDayField(inboundDateCtrlID).selectedIndex = 0;
    getMonthYearField(inboundDateCtrlID).selectedIndex = 0;
    getTimeOfDayField(inboundDateCtrlID).selectedIndex = 0;
  }
  else {
    var outboundDate = new Date(getDateStringFromControls(outboundDateCtrlID));
    var inboundDate = new Date(outboundDate.getTime() + daysToBeAdded*24*60*60*1000);

    selectDateForDayOfWeekControls(inboundDateCtrlID,
                                   inboundDate.getYear(),
                                   inboundDate.getMonth()+1,
                                   inboundDate.getDay());

    dropDownDateChanged(inboundDateCtrlID);
  }
}

function setReturnRadio(ctrlID, inboundID) {
  if (document['form']["wdf_TripType"] != UNDEFINED && ctrlID == inboundID) {
    if (((null != getDaysOfWeekField(ctrlID)) 
        && (getDaysOfWeekField(ctrlID).selectedIndex != 0)) 
        || (getDayField(ctrlID).selectedIndex != 0)
        || (getMonthYearField(ctrlID).selectedIndex != 0)
        || (getTimeOfDayField(ctrlID).selectedIndex != 0)) {
      document['form']["wdf_TripType"][ONE_WAY_RADIO].checked = false;
      document['form']["wdf_TripType"][RETURN_RADIO].checked = true;
    }
    else {
      document['form']["wdf_TripType"][ONE_WAY_RADIO].checked = true;
      document['form']["wdf_TripType"][RETURN_RADIO].checked = false;
    }
  }
}

function updateDayDropDownListWithOffsets(ctrlID) {
  if (null == document['form']) return;
  if (null == getDayField(ctrlID)) return;
  if (null == getMonthYearField(ctrlID)) return;

  var selectableDaysOffsetStart = -1850;
  var selectableDaysOffsetEnd = 1850;
    
  if (selectableDaysOffsetStart != -1850 && selectableDaysOffsetEnd != 1850) {
    daySelectControl = getDayField(ctrlID);
    monthYearSelectControl = getMonthYearField(ctrlID);

    var todayDate = new Date();
    todayDate = new Date(todayDate.getFullYear(),(todayDate.getMonth()),todayDate.getDate(),0,0,0,0);
    var ONE_DAY = 86400000;
    var t = todayDate.getTime();
    var selectableDaysStartDate = t + (ONE_DAY * selectableDaysOffsetStart);
    var selectableDaysEndDate = t + (ONE_DAY * selectableDaysOffsetEnd);
    
    updateDaySelectControl(monthYearSelectControl, daySelectControl, selectableDaysStartDate, selectableDaysEndDate);
  }
}

function updateDaySelectControl(monthYearControl, dayControl, selectableDaysStartDate, selectableDaysEndDate) {
  var theYearMonth = monthYearControl.options[monthYearControl.selectedIndex].value;
  var numDaysInMonth = numDays(theYearMonth.substring(0,theYearMonth.indexOf('-')),theYearMonth.substring(theYearMonth.indexOf('-')+1)-1);
  var selectedIndex = dayControl.options.selectedIndex;
  var selValue = 0;

  if (dayValue == UNDEFINED) {
    selValue = dayControl.options[selectedIndex].value;  	      
  }
  else {
    selValue = dayValue;     	  
  }

  dayControl.options.length = 0;
  numDaysAdded=0;

  for (day=1; day<=numDaysInMonth; day++) {
    var buffer = (theYearMonth.substring(theYearMonth.indexOf('-')+1) +
                 "/" +
                 day +
                 "/" +
                 theYearMonth.substring(0,theYearMonth.indexOf('-')));

    var time = (new Date(buffer)).getTime();

    if ((time >= selectableDaysStartDate) && (time <= selectableDaysEndDate)) {
      if (day<10) {
        dayControl.options[numDaysAdded] = new Option(day,'0'+day);
      }
      else {
        dayControl.options[numDaysAdded] = new Option(day,day);
      }

      if (day == selValue) {
        dayControl.options[numDaysAdded].selected = true;
      }

      numDaysAdded++;
    }
  }
}

function updateMonthSelectControl(monthYearControl, selectableDaysStartDate, selectableDaysEndDate) {
  for (i=0; i<monthYearControl.options.length; i++) {
    var theYearMonth = monthYearControl.options[i].value;
    var numDaysInMonth = numDays(theYearMonth.substring(0,theYearMonth.indexOf('-')),theYearMonth.substring(theYearMonth.indexOf('-')+1)-1);
    var buffer = (theYearMonth.substring(theYearMonth.indexOf('-')+1) +	
                  "/" +
                  numDaysInMonth +
                  "/" +
                  theYearMonth.substring(0,theYearMonth.indexOf('-')));
    var buffer2 = (theYearMonth.substring(theYearMonth.indexOf('-')+1) +	
                   "/" +
                   "1" +
                   "/" +
                   theYearMonth.substring(0,theYearMonth.indexOf('-')));
    var time = (new Date(buffer)).getTime();
    var time2 = (new Date(buffer2)).getTime();
  
    if (time < selectableDaysStartDate || time2 > selectableDaysEndDate) {
      monthYearControl.options[i] = null;
    }
  }
}

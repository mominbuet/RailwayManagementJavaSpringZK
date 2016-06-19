<!-- 
// ----------------------------------------------
// REGULAR FARE FINDER SPECIFIC METHODS
// ----------------------------------------------
function preFareFinderSubmitActions(error, acesError) {
  setTripTypeIfReturnDateSelected(false);
  closeCalendar();
  closeStationList();
    
  if(! checkFareFinderMandatoryFields(error))
    return false;
    
  return validateForACESBooking(acesError);
  
}	

function checkFareFinderMandatoryFields(error){
    var errorMsg = "";
    var fieldList = checkFields(false);
    if (fieldList != "") { 
      errorMsg = error + "\n" + fieldList + "\n\n";
    }

    if (errorMsg != ""){
      alert(errorMsg);
      return false;
    } else {
        return true;
    }
} 
// ----------------------------------------------
// END REGULAR FARE FINDER SPECIFIC METHODS
// ----------------------------------------------

// ----------------------------------------------
// AUTO TRAIN SPECIFIC METHODS
// ----------------------------------------------
function preAutoTrainFareFinderSubmitActions(error) {
	closeCalendar(); 
	return checkAutoTrainFareFinderMandatoryFields(error);  
}	

function checkAutoTrainFareFinderMandatoryFields(error){
    var errorMsg = "";
    var fieldList = checkFields(true);
    if (fieldList != "") { 
      errorMsg = error + "\n" + fieldList+ "\n\n";
    }

    if (errorMsg!="") {
      alert(errorMsg);
      return false;
    }
    return true;
}

function autoTrainChgLocation(field) {
  if (field == "depart") {
    if (document.form.wdf_originSelect.options[1].selected == true) {
      document.form.wdf_destinationSelect.options[0].selected = false;    
      document.form.wdf_destinationSelect.options[1].selected = false;
      document.form.wdf_destinationSelect.options[2].selected = true;            
    }
    else if (document.form.wdf_originSelect.options[2].selected == true) {
      document.form.wdf_destinationSelect.options[0].selected = false;    
      document.form.wdf_destinationSelect.options[1].selected = true;
      document.form.wdf_destinationSelect.options[2].selected = false;            
    }
  }
  else if (field == "arrive"){
    if (document.form.wdf_destinationSelect.options[1].selected == true) {
      document.form.wdf_originSelect.options[0].selected = false;    
      document.form.wdf_originSelect.options[1].selected = false;
      document.form.wdf_originSelect.options[2].selected = true;            
    }
    else if (document.form.wdf_destinationSelect.options[2].selected == true) {
      document.form.wdf_originSelect.options[0].selected = false;    
      document.form.wdf_originSelect.options[1].selected = true;
      document.form.wdf_originSelect.options[2].selected = false;            
    }
  }
}

// -----------------------------------
// END AUTO TRAIN SPECIFIC METHODS
// -----------------------------------

// Set return to empty if selecting one-way trip
function blankReturnDate(isAutoTrainBookingPath){
	var retDate = document.getElementById('wdfdate2');
	retDate.value = "";	
	if(isAutoTrainBookingPath == true) {		
		showHideReturnDateSection('form_item_to_date', false);
	} else {
		showHideReturnDateSection('tickets_ret_date_time', false);
	}
}

// Default the return date if selecting return trip
function setReturnDate(isAutoTrainBookingPath){
	var depDate = $('wdfdate1'); 
	var retDate = $('wdfdate2');
	var dateOnPage = getValidatedDateArray(1);
    if (isValidDate(dateOnPage)) {
		var dateOnPageObj = new Date(dateOnPage[0], (dateOnPage[1]-1), dateOnPage[2]);
		dateOnPageObj.setDate(dateOnPageObj.getDate()+1);
    	retDate.value = formatDate(dateOnPageObj);
    }
    if(isAutoTrainBookingPath == true) {    	
		showHideReturnDateSection('form_item_to_date', true);
	} else {
		showHideReturnDateSection('tickets_ret_date_time', true);
	}
}

// Auto select the return trip type button if the return date is populated
function setTripTypeIfReturnDateSelected(isAutoTrainBookingPath){
	if(isAutoTrainBookingPath == false) {
    if(document.getElementById('wdfdate2').value != '' || document.getElementById('wdftime2').selectedIndex > 0){
    	if (document.getElementById('oneway') != null)
    		document.getElementById('oneway').checked = false;
    	if (document.getElementById('return') != null)
    		document.getElementById('return').checked = true;
    }
    else {
    	if (document.getElementById('oneway') != null)
    		document.getElementById('oneway').checked = true;
    	if (document.getElementById('return') != null)
    		document.getElementById('return').checked = false;
    }
  }
  else {
   if(document.getElementById('wdfdate2').selectedIndex > 0 || document.getElementById('wdftime2').selectedIndex > 0){
	   	if (document.getElementById('oneway') != null)
	   		document.getElementById('oneway').checked = false;
	   	if (document.getElementById('return') != null)
	   		document.getElementById('return').checked = true;
    }
    else {
    	if (document.getElementById('oneway') != null)
    		document.getElementById('oneway').checked = true;
    	if (document.getElementById('return') != null)
    		document.getElementById('return').checked = false;
    }
  }
}

// Check mandatory fields have been entered
function checkFields(isAutoTrainBookingPath){
  var fieldList="";
  
  var deprtCityVal = document.getElementById('departs').value;
  var arrivesCityVal = document.getElementById('arrives').value;
  var departDate = document.getElementById('wdfdate1').value;
  var returnDate = document.getElementById('wdfdate2').value;


  var dateText = "Date";
  if(isAutoTrainBookingPath == true) {
	dateText = "Day";
  }
  
  if (deprtCityVal == ""){
	  fieldList = " -- From\n";
  }
  if(arrivesCityVal == ""){
      fieldList = fieldList + " -- To\n";
  }
  
  
  if(departDate==""){
    fieldList = fieldList + " -- Depart " + dateText + "\n";
  }
  
  if (document.getElementById('return').checked == true){
    if( returnDate==""){
      fieldList = fieldList + " -- Return Date\n";
    }
  }  
  
  return fieldList;
}


function validateForACESBooking(acesError){
  var fieldList="";
  var errorMsg="";
  var origin = document.getElementById('departs').value;
  var destination = document.getElementById('arrives').value;
  var numberOfChildren = document.getElementById('children').value;
  var numberOfInfants = document.getElementById('infants').value;   
  
  if (origin.toUpperCase() == 'ace'.toUpperCase() || destination.toUpperCase() == 'ace'.toUpperCase() 
        || origin.toUpperCase().indexOf('(ACE)') != -1 || destination.toUpperCase().indexOf('(ACE)') != -1)  {
	    if(numberOfChildren > 0 || numberOfInfants > 0) {
	        fieldList = fieldList + " " + acesError + "\n";
	    }    
  }
  
  if (fieldList != "") {
      errorMsg = fieldList + "\n\n";
  }

  if (errorMsg != ""){
      alert(errorMsg);
      return false;
  }
}

function validateForAAABooking(aaaError){
	  
	  var errorMsg="";
	  var numberOfAdults = parseInt (document.getElementById('adults').value);
	  var numberOfChildren = parseInt(document.getElementById('children').value);
	  var numberofPassengers = numberOfAdults + numberOfChildren;
	 
	  if ( numberofPassengers > 6 )  {
		    
		  errorMsg =  aaaError + "\n";
		    }    

	  if (errorMsg != ""){
	      alert(errorMsg);
	      return false;
	  } else {
		  return true;
		  //alert(true);
	  }
	  
	}

function showHideReturnDateSection(shID, show) {    
    if(show == true) {
    	if (document.getElementById(shID)) {
    		document.getElementById(shID).style.display = 'block';
    	}
    } else {
    	if (document.getElementById(shID)) {
    		document.getElementById(shID).style.display = 'none';
    		document.getElementById('wdfdate2').value = '';
    		document.getElementById('wdftime2').selectedIndex = 0;
    	}
    }
}

function alphabetical(a, b)
{
     var P = a.toLowerCase();
     var Z = b.toLowerCase();
     
     var A = threeletterCode(P);
     var B = threeletterCode(Z);
     if (A < B){
        return -1;
     }else if (A > B){
       return  1;
     }else{
       return 0;
     }
}

function threeletterCode(a) {
   var x = a.indexOf('(');
   var y = a.indexOf(')');
   
   return a.substring(x+1, y);
}

var AmtrakAutocompleter = { };
AmtrakAutocompleter.Local = Class.create(Autocompleter.Base, {
  initialize: function(element, update, array, options) {
    this.baseInitialize(element, update, options);
    this.options.array = array;
  },

  getUpdatedChoices: function() {
    this.updateChoices(this.options.selector(this));
  },

  setOptions: function(options) {
    this.options = Object.extend({
      choices: 10,
      partialSearch: true,
      partialChars: 2,
      ignoreCase: true,
      fullSearch: false,
      selector: function(instance) {
        var ret       = []; // Beginning matches
        var partial   = []; // Inside matches
        var middle   = []; // Middle matches
        var entry     = instance.getToken();
        var count     = 0;

        for (var i = 0; i < instance.options.array.length &&
          ret.length < instance.options.choices ; i++) {

          var elem = instance.options.array[i];

          if (entry.length == 3 || entry.length == 2) {
            var test = entry;
            if (entry.length == 3) {
              test = '(' + entry.toLowerCase() + ')';
            }
            if (entry.length == 2) {
              test = '(' + entry.toLowerCase();
            }

            var foundPos = instance.options.ignoreCase ?
              elem.toLowerCase().indexOf(test.toLowerCase()) :
              elem.indexOf(test);
            if (foundPos != -1) {
              if (entry.length == 2) {
                   ret.push("<li>" + elem + "</li>");
              }
              else {
                   ret.push("<li>" + elem + "</li>");
              }
            }
          }
		            
          if (entry.length > 1) {
            var test = entry;
            test = '- ' + entry.toLowerCase();

            var foundPos = instance.options.ignoreCase ?
              elem.toLowerCase().indexOf(test.toLowerCase()) :
              elem.indexOf(test);
            if (foundPos != -1) {
                   middle.push("<li>" + elem + "</li>");
            }
          }          
		}        

		ret.sort(alphabetical);
        if (middle.length)
          ret = ret.concat(middle.slice(0, instance.options.choices - ret.length));

        for (var i = 0; i < instance.options.array.length &&
          ret.length < instance.options.choices ; i++) {

          var elem = instance.options.array[i];
          var foundPos = instance.options.ignoreCase ?
            elem.toLowerCase().indexOf(entry.toLowerCase()) :
            elem.indexOf(entry);

          while (foundPos != -1) {
            if (foundPos == 0 && elem.length != entry.length) {
              ret.push("<li>" + elem + "</li>");
              break;
            } else if (entry.length >= instance.options.partialChars &&
              instance.options.partialSearch && foundPos != -1) {
              if (instance.options.fullSearch || /\s/.test(elem.substr(foundPos-1,1))) {
                partial.push("<li>" + elem + "</li>");
                break;
              }
            }

            foundPos = instance.options.ignoreCase ?
              elem.toLowerCase().indexOf(entry.toLowerCase(), foundPos + 1) :
              elem.indexOf(entry, foundPos + 1);

          }
        }
        if (partial.length)
          ret = ret.concat(partial.slice(0, instance.options.choices - ret.length));

        if (ret.length == 0) {
          return "<ul><li>" + "No stations match your entry." + "</li></ul>";
        }

        ret = ret.uniq();
        
        return "<ul>" + ret.join('') + "</ul>";
      }
    }, options || { });
  }
});

// Sets the Status tab date to todays date.
function set_status_date(dateid) {
  $(dateid).clear();
  var date = new Date();
  var text = formatDate(date);
  $(dateid).value = text;
}

// Compares the depart date field with the current date.  
// If it is before then it resets the depart date field to today
// AIBE-1998
function compare_dates(dateid) {

    var today = new Date();
    var depart = Date.parse($(dateid).value);

    var departDate = new Date(depart);
   
    // If the depart date is before today then reset the field
	if (!(today < departDate)) {
  		var text = formatDate(today);
        $(dateid).value = text;
	}
}

function preADAFareFinderSubmitActions(error) {
	  setTripTypeIfReturnDateSelected(false);
	  closeCalendar();
	  closeStationList();
	    
	  if(! checkFareFinderMandatoryFields(error))
	    return false;
	    
	  return true;
}	

function validateForADAMICompRoundTrip(errorMsg){
	  var returnTrip = document.getElementById('return');
	  var adultCompanion = document.getElementById('AdultCompanion')
	  
	  if (returnTrip.checked &&
			  adultCompanion.selectedIndex > 0) {
	      alert(errorMsg);
	      return false;
	  }
	  return true;
}

//for redeem tab on fare finder page - start
function preRedeemSubmitActions(error) {
  var errorMsg = checkRedeemMandatoryFields(error);
  
  var pwdErrorMsg = validatePasswordSize();
  if (pwdErrorMsg != "") { 
    errorMsg = errorMsg + pwdErrorMsg + "\n\n";
  }

  if (errorMsg != ""){
    alert(errorMsg);
    return false;
  }
  return errorMsg;
}
//for redeem tab on fare finder page - end

//for child popup message - start
function showChildPopup(value, value1, divname) {
	if(value > 0 || value1 > 0)
		showHideSection(divname, true);
	else 
		showHideSection(divname, false);
	return true;
}

function showChildPopup_railPass(value, divname) {	
	if(value=='Child')
		showHideSection(divname, true);
	else
		showHideSection(divname, false);
}
//for child popup message - end
// -->
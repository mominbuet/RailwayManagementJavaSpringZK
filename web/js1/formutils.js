<!-- 
var theFormName;
if(typeof document.form != "undefined"){
  theFormName = document.form.name;
}/* else {
 theFormName = document.leftresubmitform.name;
}*/

// Checks mandatory fields
function checkMandatoryFields(error) {
	var errorMsg = "";
    var fieldList = checkFields();
    if (fieldList != "") { 
      errorMsg = error + "\n" + fieldList + "\n\n";
    }

    if (errorMsg != ""){
      alert(errorMsg);
      return false;
    }
} 

function calendarShow(id, day1, day1field, monthyear1, monthyear1field, day2, day2field, monthyear2, monthyear2field, trainStatus, sitewiseProfile){

  var totalCalendars = 2;
  if (trainStatus == true) {
  	totalCalendars = 1;
  }
  var scrollbars = "no";
  var winWidth = 175;

  if (totalCalendars > 3) {
    scrollbars = "yes";
    winWidth = 700;
  }
  else {
    winWidth = winWidth * totalCalendars;
  }
  
  var calwin = window.open("/itd/project/scripts/en/amtrak/calendar.html?&id="+id+"&day1=&day1field="+day1field+"&monthyear1=&monthyear1field="+monthyear1field+"&day2=&day2field="+day2field+"&monthyear2=&monthyear2field="+monthyear2field+"&refresh=no"+"&sitewiseProfile="+sitewiseProfile+"&trainstatus="+trainStatus,"Calendar","width="+winWidth+",height=300,resizable=yes,scrollbars="+scrollbars);
}

// UPDATE FIELD METHODS
// puts the selected field back into the input box
var fieldName;
function updateField(fieldValue1, fieldValue2, fieldValue3) 
{// Determine which for to use
    var fieldValue = fieldValue1 + ", " + fieldValue2 + " (" + fieldValue3 + ")";
    $(fieldName).setValue(fieldValue);
    // eval("document."+theFormName+"."+fieldName+".value=fieldValue");
}

// Updates the input field with the value from the select drop-down
function updateInputFieldFromSelect(field, blankRowText)
{
	var inputField = eval("document."+theFormName+".wdf_" + field);
	var selectFieldValue = eval("document."+theFormName+".wdf_" + field + "Select.options[document."+theFormName+".wdf_" + field + "Select.selectedIndex]" + ".text");
	inputField.value = selectFieldValue == blankRowText ? "" : selectFieldValue;
}

// Updates the input field with the value from the select drop-down
function updateInputFieldFromMultipleSelect(field, index) {
	var inputField = eval("document."+theFormName+".wdf_" + field + index);
	var selectFieldValue = eval("document."+theFormName+".wdf_" + field + "Select" + index + ".options[document."+theFormName+".wdf_" + field + "Select" + index + ".selectedIndex]" + ".text");
	inputField.value = selectFieldValue;
}// END FIELD UPDATE METHODS

// VALIDATION METHODS
// is the string a valid number
function IsNumber(inputVal) {
  inputStr = "" + inputVal;
  
  for (var i = 0; i < inputStr.length; i++) {
    var oneChar = inputStr.charAt(i);
    
    if (oneChar < "0" || oneChar > "9")
      return false;
  }
    
  return true;
}

// Multi-Purpose function that is used on both IBE and Admin profile page and the payment page.
function copyDeliveryAddress(errorMailingAddressNotInUSCA, errorMailingAddressWithMilitaryAddressIsPayment, errorMailingAddressWithMilitaryAddressIsNotPayment, isPaymentPage) {
  if(document.form.same_as_billing.checked == true){
    var country = (isPaymentPage == true) ? document.form.wdf_cc_country.value : document.form.wdf_billingCountry.value;
    var state = (isPaymentPage == true) ? document.form.wdf_cc_area.value : document.form.wdf_billingArea.value;
    if(country != 'US' && country != 'CA') {
      alert(errorMailingAddressNotInUSCA);
      document.form.same_as_billing.checked = false;
    } else if((country == 'US') && (state == 'AA' || state == 'AE' || state == 'AP')) {
      if(isPaymentPage == true) {    
        alert(errorMailingAddressWithMilitaryAddressIsPayment);
        document.form.same_as_billing.checked = false;
      }
      else {
        alert(errorMailingAddressWithMilitaryAddressIsNotPayment);
        document.form.same_as_billing.checked = false;
      }
    } else {
      if (isPaymentPage == true) {
        document.form.wdf_addressline1.value = document.form.wdf_cc_addressline1.value;
        document.form.wdf_addressline2.value = document.form.wdf_cc_addressline2.value;
        document.form.wdf_city.value = document.form.wdf_cc_city.value;
        document.form.wdf_area.value = document.form.wdf_cc_area.value;
        document.form.wdf_postcode.value = document.form.wdf_cc_postcode.value;
        document.form.wdf_country.value = document.form.wdf_cc_country.value;
      }
      else {
        document.form.wdf_addressline1.value = document.form.wdf_billingAddressLine1.value;
        document.form.wdf_addressline2.value = document.form.wdf_billingAddressLine2.value;
        document.form.wdf_city.value = document.form.wdf_billingCity.value;
        document.form.wdf_area.value = document.form.wdf_billingArea.value;
        document.form.wdf_postcode.value = document.form.wdf_billingPostcode.value;
        document.form.wdf_country.value = document.form.wdf_billingCountry.value;
      }
    }
  }
}

// This is used on the profile register and profile edit pages which were modified in the rewrite.
function copyDeliveryAddressRW(errorMailingAddressNotInUSCA, errorMailingAddressWithMilitaryAddressIsNotPayment) {
  // The address copy functionality is no longer used on the payment page
  if(document.profile_form.register_shipping_same_as_billing.checked == true){
    var country = document.profile_form.register_billing_country.value;
    var state = document.profile_form.register_billing_state.value;
    if(country != 'US' && country != 'CA') {
      alert(errorMailingAddressNotInUSCA);
      document.profile_form.register_shipping_same_as_billing.checked = false;
    } else if((country == 'US') && (state == 'AA' || state == 'AE' || state == 'AP')) {
      alert(errorMailingAddressWithMilitaryAddressIsNotPayment);
      document.profile_form.register_shipping_same_as_billing.checked = false;
    } else {
      document.profile_form.register_shipping_street_address.value = document.profile_form.register_billing_street_address.value;
      document.profile_form.register_shipping_street_address_continued.value = document.profile_form.register_billing_street_address_continued.value;
      document.profile_form.register_shipping_city.value = document.profile_form.register_billing_city.value;
      document.profile_form.register_shipping_state.value = document.profile_form.register_billing_state.value;
      document.profile_form.register_shipping_zip.value = document.profile_form.register_billing_zip.value;
      document.profile_form.register_shipping_country.value = document.profile_form.register_billing_country.value;
    }
  }
}

// ----------------------------------------------
// START METHODS SPECIFIC TO CELL SHADING
// ----------------------------------------------

// Flag Variables that indicate if the default radio button has changed
var defaultRadioChanged_1 = false;
var defaultRadioChanged_2 = false;
var defaultRadioChanged_3 = false;
var defaultRadioChanged_4 = false;

// Flags that the default raio button has changed
function flagDefaultRadioAsChanged(currentRadio) {
  // Will return 1,2,3 or 4 on Select Train itinerary tables
  var journeyIndex = currentRadio.name.substring("wdf_jn".length);
  
  switch(journeyIndex) {
    case "1":
      defaultRadioChanged_1 = true;
      break;
    case "2":
      defaultRadioChanged_2 = true;
      break;
    case "3":
      defaultRadioChanged_3 = true;
      break;
    case "4":
      defaultRadioChanged_4 = true;
      break;
    default:
      defaultRadioChanged_1 = true;
  }
}


// Determines if the relevant default radio button has changed
function isDefaultRadioChanged(currentRadio) {
  var journeyIndex = currentRadio.name.substring("wdf_jn".length);
  
  switch(journeyIndex) {
    case "1":
      return defaultRadioChanged_1;
    case "2":
      return defaultRadioChanged_2;
    case "3":
      return defaultRadioChanged_3;
    case "4":
      return defaultRadioChanged_4;
    default:
      return defaultRadioChanged_1;
  }
}


// Toggles cell shading when a button is clicked
function toggleCellShadingFromClick(currentRadio) {
  var shadedClass = "shadedcell";
  var currentCell = currentRadio.parentNode;
  
  // Flag that the default radio button has changed
  flagDefaultRadioAsChanged(currentRadio);
  
  // Clear cell shading
  clearAllCellShading(currentRadio, shadedClass);
  
  // Shade current cell
  currentCell.className = shadedClass + " " + currentCell.className;
}


// Toggles cell shading when a button is clicked if permitted
function toggleCellShadingFromClickIfPermitted(currentRadio, shadingPermitted) {
  // If shading is permitted call normal shading as normal
  if (shadingPermitted == true) {
	toggleCellShadingFromClick(currentRadio);
  }
  // Otherwise do nothing
}


// Clear shading from all cells in current radio group
function clearCellShading(currentRadio, shadedClass) {
  var currentCell = currentRadio.parentNode;
  var currentClass = currentCell.className;
  if (currentClass.match(shadedClass) == shadedClass) {
    currentCell.className=currentCell.className.substring(shadedClass.length + 1);
  }
}

// Clear shading from all cells in current radio group
function clearAllCellShading(currentRadio, shadedClass) {
  var radioGroup = document.getElementsByName(currentRadio.name);
  var tempCell, currentClass;
  
  for (var i = 0; i < radioGroup.length; i++) {
    tempCell = radioGroup[i].parentNode;
    currentClass = tempCell.className;
    if (currentClass.match(shadedClass) == shadedClass) {
      tempCell.className=tempCell.className.substring(shadedClass.length + 1);
    }		
  }
}

// Toggles cell shading from mouseover and mouseout events
function toggleCellShadingFromMouseEvent(currentCell) {
  var shadedClass = "shadedcell";
  
  var childNodes = currentCell.childNodes;
  var i = 0;
  while (i < childNodes.length && childNodes[i].type != "radio") {
    i++;
  }
  var currentRadio = childNodes[i];

  // Do nothing if there is no radio button in the cell  
  if (currentRadio == null) { 
    return; 
  }

  var currentClass = currentCell.className;

  // If the cell is already shaded remove the shaded class if the radio button is not checked
  if (currentClass.match(shadedClass) == shadedClass) {
      if (currentRadio.checked == false) {
        currentCell.className = currentClass.substring(shadedClass.length + 1);
      }
  } else {
    // Apply shading
    currentCell.className = shadedClass + " " + currentClass;
  }
}


// Toggles cell shading from mouseover and mouseout events if permitted
function toggleCellShadingFromMouseEventIfPermitted(currentCell, shadingPermitted) {
  // If shading is permitted call normal shading as normal
  if (shadingPermitted == true) {
    toggleCellShadingFromMouseEvent(currentCell);
  }
  // Otherwise do nothing
}

function shadeSelectedCell(radioGroupName) {
  var radioGroup = document.getElementsByName(radioGroupName);
  for(var i = 0; i < radioGroup.length; i++) {
    if(radioGroup[i].checked == true) {
      radioGroup[i].onclick();
      break;
    }
  }
}
// ----------------------------------------------
// END METHODS SPECIFIC TO CELL SHADING
// ----------------------------------------------

// -->

    function CheckMandatoryFields() {        var errorMsg ="";        var fieldList = checkSubscriptionFields();  	    if (fieldList != "") {	        errorMsg = "The following information is needed to process your request:" + "\n" + fieldList;	   	    alert(errorMsg);    		    return false;	    } else {	        return true;        }	}	     function checkSubscriptionFields(){        // function to check if the required fields are empty or null.        var fieldList = "";        var fName = eval("document.getElementById('forename').value");        var sName = eval("document.getElementById('surname').value");        var sEmail = eval("document.getElementById('emailaddress').value");        var sConfirmEmail = eval("document.getElementById('emailaddressconfirmation').value");        var sPostcode = eval("document.getElementById('postcode').value");        if (fName==""){          fieldList +=" -- First Name\n";        }        if (sName==""){          fieldList +=" -- Last Name\n";        }        if (sEmail==""){          fieldList +=" -- E-mail Address\n";        }        if (sConfirmEmail==""){          fieldList +=" -- Confirm E-mail Address\n";        }        if (sPostcode==""){          fieldList +=" -- ZIP/Postal Code\n";        }            return fieldList;    }    function clearForm(oForm) {        // function to clear the subscription fields.	      	    var elements = oForm.elements; 	    oForm.reset();	    for(i=0; i<elements.length; i++) {		    field_type = elements[i].type.toLowerCase();		    var name = elements[i].name;				    // Do not clear the hidden data.		    if (name == 'xwdf_forename' ) {		        continue;		    }		    if (name == 'xwdf_surname' ) {		        continue;		    }		    if (name == 'xwdf_emailAddress' ) {		        continue;		    }		    if (name == 'xwdf_confirmEmailAddress' ) {		        continue;		    }		    if (name == 'xwdf_postcode' ) {		        continue;		    }		    if (name == 'requestor' ) {		        continue;		    }		    switch(field_type) {			    case "text":  			    case "textarea":		        case "hidden":					    elements[i].value = ""; 				    break;			    default: 				    break;		    }	    }	}		// object to hold the original content of email_program_popout    var originalContent;          function killPopup(o) {        // o - Object to kill        Popout.toggle('email_program_popout');        // replace the body with the original.               document.getElementById('email_program_popout').innerHTML = originalContent;    }	var EmailProgram = {};	EmailProgram.finalizeOLD = function() {	    // function to process the subscription details.	    var allFieldsPopulated = CheckMandatoryFields();		if (allFieldsPopulated == true) {            var url = "/" + "itd/amtrak/EmailSubscriptionConfirmation?";  	        var params = '_subscriptionfirstname=' + $F('forename') + '&_subscriptionlastname=' + $F('surname')+ '&_subscriptionemail=' + $F('emailaddress') + '&_subscriptionconfirmemail=' + $F('emailaddressconfirmation')+ '&_subscriptionpostcode=' + $F('postcode');   	    	var myAjax = new Ajax.Updater("email_program_popout", url, {method: 'get', parameters: params});		}	}
		   	EmailProgram.initializeOLD = function() {		// deprecated ajax javascript.        // function to process the initial subscription email.        originalContent = document.getElementById('email_program_popout').innerHTML;        if ($F('email_program_address') < 1) {            errorMsg = "Please enter an email address to subscribe.";            alert(errorMsg);        } else {            var url = "/" + "itd/amtrak/EmailSubscription?";   	        var params = '_subscriptionemail=' + $F('email_program_address'); 		    var myAjax = new Ajax.Updater("email_program_popout", url, {method: 'get', parameters: params});		    Popout.toggle('email_program_popout');        }    }		EmailProgram.initialize = function() {		// Function to call the email subscription popup and pass the email address.        if ($F('email_program_address') < 1) {            errorMsg = "Please enter an email address to subscribe.";            alert(errorMsg);        } else {			var domain = document.domain;            // HTTP or HTTPS            var ibprotocol = window.location.protocol + '//';            // Amtrak IBDev Environment            var ibdevdomain = ibprotocol + 'ibdev.amtrak.com';            // Amtrak IBStage Environment            var ibstagedomain = ibprotocol + 'ibstage.amtrak.com';            // Amtrak IBTest Environment            var ibtestdomain = ibprotocol + 'ibtest.amtrak.com';            // Amtrak PROD Environment            var ibproddomain = ibprotocol + 'tickets.amtrak.com';			// Set Default to PROD            var ibdomain = ibproddomain;            // Check to see which environment is the user in            if (domain.include('cmstest.amtrak.com')) {            	ibdomain = ibtestdomain;            }            else if (domain.include('cmsstage.amtrak.com')) {            	ibdomain = ibstagedomain;            }            else if (domain.include('cmsdev.amtrak.com')) {            	ibdomain = ibdevdomain;            }            else if (domain.include('86')) {            	ibdomain = ibprotocol + domain;            }            var url = ibdomain + "/" + "itd/amtrak/EmailSubscription?_subscriptionemail" + "=" + $F('email_program_address');			   					emailprogramsubscription = window.open(url,'subscriptionWindow','directories=0,dependent=1,titlebar=no, menubar=0,status=no, top=80,left=200,width=390,height=250,scrollbars=no,resizable=no');			emailprogramsubscription.focus();        }    }
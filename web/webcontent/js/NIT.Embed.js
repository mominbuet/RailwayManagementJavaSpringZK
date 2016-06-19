/*!*************************************************************************
[NIT.Cookie.js]
 
Copyright (C) 2010 Next IT Corporation, Inc. Spokane, WA. All Rights Reserved. 
This document is confidential work and intellectual property of Next IT 
Corporation. Permission to copy, distribute or use any portion of this file 
is prohibited without the express written consent of Next IT Corporation.

*****************************************************************************/
if (!this.NIT) this.NIT = {}; // Ensure namespace exists if running as stand-alone script

NIT.Cookie = function (name, sVals, exp)
{
    var me = this;
    this.name = name;
    this.value = null;
    this.values = new Object();
    // These three are for saving cookies
    this.expires = (exp) ? exp : null; // Leave null for session cookie (or if updating cookie)
    this.path = '/';
    this.secure = false;
    this.domain = NIT.CookieUtil.getDomain();

    if (sVals != null) // Parse specified value(s)
    {
        var nvc = (typeof (sVals) == "string") ? sVals.split('&') : null; // Get the name-value collection from the cookie
        if (nvc != null && nvc.length > 0 && sVals.indexOf('=') > -1)
        {
            for (var i = 0; i < nvc.length; i++)
            {
                var nv = nvc[i].split('='); // Get the name and value of this entry
                if (nv.length > 1)
                    me.values[nv[0]] = nvc[i].substr(nv[0].length + 1); //nv[1]; // Add property to our Values (remove the name, since the content may also have '=' characters)
                else if (i == 0)
                    me.value = nv[0]; // If no equal sign and the first entry, it is the main property

            }
        }
        else // Single value cookie
            me.value = sVals;
    }

    // Methods
    this.save = function ()
    {
        var v = (me.value != null) ? me.value : '';
        for (var n in me.values)
        {
            var val = (me.values[n] != null) ? me.values[n] : '';
            v += '&' + n + '=' + val; //escape(val); // No longer escaped, now matching how .NET does it
        }
        if (v[0] == '&')
            v = v.substr(1);

        var c = this.name + '=' + v +
			((me.expires == null) ? "" : (";expires=" + me.expires.toGMTString())) +
			";path=" + this.path +
			((me.domain == null) ? "" : (";domain=" + me.domain)) +
			((me.secure) ? ";secure;" : ";");
        document.cookie = c;
    };

    this.remove = function ()
    {
        me.expires = new Date(1970, 1, 2); // "Fri, 02-Jan-1970 00:00:00 GMT" );
        me.save();
    };
};

NIT.CookieUtil = new function ()
{
    var me = this;
    this.getCookies = function () // Parses all available cookies
    {
        var all = new Object();
        if (document.cookie != "")
        {
            var cookies = document.cookie.split("; ");
            for (i = 0; i < cookies.length; i++)
            {
                var c = cookies[i];
                var idx = c.indexOf('=');
                var N = c.substr(0, idx);
                var V = '';
                if (c.length > idx + 1) // Not an empty value (just in case)
                    V = c.substring(idx + 1, c.length); //unescape( c.substring(idx+1, c.length) ); // No longer escaped, now matching how .NET does it
                all[N] = new NIT.Cookie(N, V);
            }
        }
        return all;
    };

    this.getCookie = function (name) // Selects a cookie by name
    {
        return me.getCookies()[name];
    };

    this.showCookies = function ()
    {
        var cookies = me.getCookies();
        var sCookie = '';
        for (var crumb in cookies)
        {
            sCookie += 'Name: ' + cookies[crumb].name + '\n';
            sCookie += 'Value: ' + cookies[crumb].value + '\n';
            // now show Values array for the current crumb
            for (var values in cookies[crumb].values)
            {
                sCookie += "    " + values + ": ";
                sCookie += cookies[crumb].values[values] + "\n";
            }
        }
        return sCookie;
    };

    this.getDomain = function ()
    {
        var url = document.domain;
        var end = "";

        if (url.indexOf('.') > -1)
        {
            end = url.substr(url.lastIndexOf('.'));
            url = url.substring(0, url.lastIndexOf('.'));
        }
        if (url.indexOf('.') > -1)
        {
            url = url.substr(url.lastIndexOf('.') + 1);
        }
        url = url + end;
        if (url.indexOf('.') == -1)
        {
            url = null;
        }

        if (url && (/^[0-9]+.[0-9]+$/g).test(url)) // Fix for when we're referencing by IP address
            return null;

        return url;
    };

    this.isCookiesEnabled = function ()
    {
        // set a cookie then test to see if it was set properly
        var n = "Test";
        var c = new NIT.Cookie(n, n);
        c.save(); // Save in cookie collection
        c = me.getCookie(n); // Check that we can retrieve it
        if (c) c.remove(); // Cleanup

        return (c != null && c.value == n) ? true : false;
    };
};

//////////////////////////////////////
// Event Extensions
//////////////////////////////////////
NIT.addListener = function (obj, evt, cb) // Cross-browser event attaching ex: (obj, "onload", Init)
{
    if (obj.attachEvent)
    {
        obj.attachEvent(evt, cb); //"onload", Init );
    }
    else if (obj.addEventListener)
    {
        evt = (evt.toLowerCase().indexOf("on") == 0) ? evt.substr(2) : evt;
        obj.addEventListener(evt, cb, false); //"load", Init, false );
    }
};

/*!*************************************************************************
[NIT.Embed.js]
 
Copyright (C) 2012 Next IT Corporation, Inc. Spokane, WA. All Rights Reserved. 
This document is confidential work and intellectual property of Next IT 
Corporation. Permission to copy, distribute or use any portion of this file 
is prohibited without the express written consent of Next IT Corporation.

*****************************************************************************/

NITAgent = new function ()
{
    var me = this;

    this.ProdDomain = 'askjulie.amtrak.com';

    this.agentContentAdded = false;
    this.userInitialized = false;
    this.showTimeout = null;
    this.layoutToBeShown = 'open';

    this.baseUrl;
    this.getBaseUrl = function ()
    {
        if (!me.baseUrl)
        {
            var url = document.getElementById("agentScript").getAttribute('src', -1);
            me.baseUrl = url.substr(0, url.lastIndexOf('/includes/') + 1);
        }
        return me.baseUrl;
    };

    this.isProdEnvironment = function ()
    {
        return me.getBaseUrl().indexOf(me.ProdDomain) != -1;
    };

    this.getAboutJulieUrl = function ()
    {
        return 'http://www.amtrak.com/about-julie-amtrak-virtual-travel-assistant';
    };

    this.getSearchUrl = function ()
    {
        return 'http://www.amtrak.com/servlet/ContentServer?c=Page&pagename=am%2FPage%2FAdvancedSearch&p=1237405723160&cid=1237748590271';
    };

    this.getContactUsUrl = function ()
    {
        return 'http://www.amtrak.com/contact-us';
    };

    this.getAgentHTML = function ()
    {
        var baseUrl = me.getBaseUrl();
        return '\
	<div id="aagent_container">\
		<div style="border-bottom: solid 4px #003E89; position: relative;">\
			<div id="NIT_header-left-edge"><img border="0" alt="" src="' + baseUrl + 'images/ask-julie-header-left.png" width="8" height="134"/>\</div>\
			<div id="aagent_header">\
				<img src="' + baseUrl + 'images/ask-julie-agent.png" id="aagent_head" />\
				<img src="' + baseUrl + 'images/amtrak-logo.png" id="NIT_amtrak_logo" />\
				<img id="dragImg" class="dragImg" style="position:absolute; right: 30px; top: 7px; cursor:move;"\
					width="22" height="21" src="' + baseUrl + 'images/ask-julie-window-drag.png" alt="Move Window" title="Move Window" />\
				<img id="navCloseImg" style="position:absolute; right:1px; top:7px; cursor:pointer;"\
					width="22" height="21" src="' + baseUrl + 'images/ask-julie-window-close.png" alt="Close" title="Close" \
	                onclick="NIT.UI.Embedded.changeAgentLayout(\'close\');" />\
			</div>\
			<div id="NIT_header-right-edge"><img border="0" alt="" src="' + baseUrl + 'images/ask-julie-header-right.png" width="8" height="134"/>\</div>\
		</div>\
		<div id="aagent_body">\
			<div id="chatHistory" class="aagent_chathistory"></div>\
			</div>\
            <div id="NIT_input_wrap">\
				<div id="aagent_input_header">\
					<img src="' + baseUrl + 'images/ask-julie-input-top-left.png" width="10" height="11" id="NIT_input-top-left" />\
					<img src="' + baseUrl + 'images/ask-julie-input-top-right.png" width="10" height="11" id="NIT_input-top-right" />\
					<strong style="position: relative; z-index: 2;">Ask Me a Question</strong>\
					<div id="aagent_rating">\
						<span style="float:left;padding-right:6px;">Rate Julie</span>\
						<div id="NIT_rating-wrap">\
							<ul class="star-rating">\
								<li><a class="rate" href="javascript:void(0);" onmouseover="NIT.FiveStarGrading.hover(1, this);" onmouseout="NIT.FiveStarGrading.hover(0, this);" onclick="NIT.UI.Custom.sendGrading(1, this);" title="Poor"></a></li>\
								<li><a class="rate" href="javascript:void(0);" onmouseover="NIT.FiveStarGrading.hover(2, this);" onmouseout="NIT.FiveStarGrading.hover(0, this);" onclick="NIT.UI.Custom.sendGrading(2, this);" title="Not so good"></a></li>\
								<li><a class="rate" href="javascript:void(0);" onmouseover="NIT.FiveStarGrading.hover(3, this);" onmouseout="NIT.FiveStarGrading.hover(0, this);" onclick="NIT.UI.Custom.sendGrading(3, this);" title="Okay"></a></li>\
								<li><a class="rate" href="javascript:void(0);" onmouseover="NIT.FiveStarGrading.hover(4, this);" onmouseout="NIT.FiveStarGrading.hover(0, this);" onclick="NIT.UI.Custom.sendGrading(4, this);" title="Good"></a></li>\
								<li><a class="rate" href="javascript:void(0);" onmouseover="NIT.FiveStarGrading.hover(5, this);" onmouseout="NIT.FiveStarGrading.hover(0, this);" onclick="NIT.UI.Custom.sendGrading(5, this);" title="Exceptional"></a></li>\
						</ul>\
					</div>\
				</div>\
				</div>\
				<div id="NIT_input_body" class="aagent_input">\
						<div id="NIT_input-bottom-left"><img src="' + baseUrl + 'images/ask-julie-input-bottom-left.png" width="10" height="11" /></div>\
						<div id="NIT_input-bottom-right"><img src="' + baseUrl + 'images/ask-julie-input-bottom-right.png" width="10" height="11" /></div>\
					<table width="100%" frameborder="0" cellpadding="0" cellspacing="0" id="NIT_input-table">\
						<tr>\
							<td width="100%" style="padding-right: 90px; font-size: 0px;">\
								<textarea id="inputBox" class="aa_chatinput aa_chatinputalt"></textarea>\
							</td>\
							<td width="90" style="font-size: 0px;">\
								<div style="position: absolute; bottom: 6px; right: 6px;">\
									<a href="javascript:NIT.UI.Input.ask();void(0);">\
										<img border="0" alt="Ask Now" title="Ask Now" src="' + baseUrl + 'images/ask-julie-submit-button.png" width="82" height="24"/>\
									</a>\
								</div>\
							</td>\
						</tr>\
					</table>\
				</div>\
			</div>\
			<div id="NIT_footer-wrap">\
				<div id="NIT_footer-left-edge"><img border="0" src="' + baseUrl + 'images/ask-julie-footer-left.png" width="9" height="44"/>\
			</div>\
			<div id="aagent_footer">\
	\
				<a id="soundOff" href="javascript:NIT.UI.Sound.toggleSound(false);new NIT.Action(null, NIT.ActionType.SoundToggledOff, false).send();void(0);">\
					<img src="' + baseUrl + 'images/ask-julie-sound-on.png" width="84" height="19" alt="" /></a>\
				<a id="soundOn" href="javascript:NIT.UI.Sound.toggleSound(true);new NIT.Action(null, NIT.ActionType.SoundToggledOn, true).send();void(0);" style="display: none;">\
					<img src="' + baseUrl + 'images/ask-julie-sound-off.png" width="84" height="19" alt="" /></a>\
				<div id="aagent_about">\
					' + (me.isProdEnvironment() ? '' : '<a href="javascript:NIT.UI.Custom.openTraining();void(0);">Train Me</a>&nbsp;|&nbsp;') +
	                '<a href="javascript:;" onclick="NIT.fireEvent(\'onNavigateMainWindow\',\'' + me.getAboutJulieUrl() + '\');return false;">About Julie</a>' +
                    '&nbsp;|&nbsp;<a href="javascript:;" onclick="NIT.fireEvent(\'onNavigateMainWindow\',\'' + me.getSearchUrl() + '\');return false;">Search</a>' +
                    '<span id="NIT_contactuslink">&nbsp;|&nbsp;<a href="javascript:;"\
                     onclick="NIT.fireEvent(\'onNavigateMainWindow\',\'' + me.getContactUsUrl() + '\');return false;">Contact Us</a></span>\
				</div>\
				</div>\
				<!--div id="NIT_footer-right-edge"></div-->\
				</div>\
                <span id="tts"></span>\
	</div>';
    };

    this.createAgentContainer = function ()
    {
        var div = document.getElementById('aagent_outercontainer');
        if (div)
        {
            div.style.display = 'none';
        }
        else
        {
            div = document.createElement('div');
            div.setAttribute('id', 'aagent_outercontainer');
            div.className = "ui-widget-content";
            div.style.position = 'absolute';
            div.style.display = 'none';
            document.body.appendChild(div);
        }
        div.innerHTML = me.getAgentHTML();
        document.getElementById('aagent_container').style.display = 'none';
        div.style.display = 'block';
        return true;
    };

    this.addScriptTag = function (src, id)
    {
        var parent = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.setAttribute('id', id);
        script.setAttribute('language', 'javascript');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('src', src);
        if (parent) parent.appendChild(script);
    };

    this.loadAgentStyles = function ()
    {
        var parent = document.getElementsByTagName('head')[0];
        var styles = document.createElement('link');
        styles.setAttribute('rel', 'stylesheet');
        styles.setAttribute('type', 'text/css');
        styles.setAttribute('href', me.getBaseUrl() + 'includes/EmbedStyles.css');
        if (parent) parent.appendChild(styles);
        return true;
    };

    this.loadJQueryScripts = function ()
    {
        if (typeof jQuery != 'undefined' && jQuery.fn.jquery == '1.7.2')
        {
            if (jQuery.ui)
            {
                if (typeof $NITJ == 'undefined')
                {
                    $NITJ = jQuery.noConflict(true);
                }
                return true;
            }
            else if (!document.getElementById('nit-jquery-ui'))
            {
                me.addScriptTag(me.getBaseUrl() + 'includes/JQuery/jquery-ui.min-1.8.6.js', 'nit-jquery-ui');
            }
        }
        else if (!document.getElementById('nit-jquery'))
        {
            me.addScriptTag(me.getBaseUrl() + 'includes/JQuery/jquery.min-1.7.2.js', 'nit-jquery');
        }
        return false;
    };

    this.registerAgentScript = function ()
    {
        me.addScriptTag(me.getBaseUrl() + 'includes/NIT.min.js', 'agentContentScript');
        return true;
    };

    this.loadAgentContent = function (cb)
    {
        if (me.agentContentAdded)
        {
            if (cb)
            {
                return setTimeout(cb, 100);
            }
        }
        else
        {
            var seq = [me.loadJQueryScripts,
                       me.loadAgentStyles,
                       me.createAgentContainer,
                       me.registerAgentScript];
            if (cb)
            {
                seq.push(cb);
            }
            me.agentContentAdded = true;
            return me.executeSequence(seq);
        }
    };

    this.executeSequence = function (seq)
    {
        if (seq.length > 0)
        {
            var fn = seq[0];
            if (fn())
            {
                seq.shift();
                return me.executeSequence(seq);
            }
            else
            {
                return setTimeout(function () { NITAgent.executeSequence(seq) }, 100);
            }
        }
        return null;
    };

    this.isAgentSessionActive = function ()
    {
        //TODO: Read this from session cookie
        return me.agentContentAdded;
    };

    this.showAgentUI = function ()
    {
        if (window.NIT && window.NIT.User && window.NIT.UI && window.NIT.UI.Embedded)
        {
            if (!me.userInitialized)
            {
                NIT.User.init();
                me.userInitialized = true;
            }
            NIT.UI.Embedded.changeAgentLayout(me.layoutToBeShown);
            return true;
        }
        else if (!me.showTimeout)
        {
            me.showTimeout = me.loadAgentContent(me.showAgentUI);
        }
        return false;
    };

    this.onPageLoaded = function ()
    {
        if (me.layoutToBeShown != 'contactus')
        {
            if (me.uiState.agentDisplay) //if agent was visible on previous page, load agent
            {
                me.layoutToBeShown = 'openonreload';
                me.showAgentUI();
            }
        }
    };

    this.showAgentWithGlobalWelcomeMessage = function ()
    {
        if (me.layoutToBeShown != 'contactus')
        {
            me.layoutToBeShown = 'open';
        }
        me.showAgentUI();
    };

    this.showAgentWithContextualHelpMessage = function (messageID)
    {
        me.showAgentUI();
    };

    this.showHelpMessageIfAgentVisible = function (messageID)
    {
        if (me.isAgentSessionActive())
        {
            me.showAgentWithContextualHelpMessage(messageID);
        }
    };

    this.showContactUsAgentUI = function ()
    {
        me.layoutToBeShown = 'contactus';
        me.showAgentUI();
    };

    this.uiState = new function ()
    {
        var currentState = this;
        this.agentDisplay = false;

        this.top = 135;
        this.left = 610;
        this.width = 386;
        this.height = 520;
        this.bodyHeight = 230;

        var _updateSessionCookie = function ()
        {
            var value = "DISP" + "=" + currentState.agentDisplay;

            var c = new NIT.Cookie("NIT_UiState", value);
            c.save();
        };

        var _updatePersistCookie = function ()
        {
            var value = "top" + "=" + currentState.top +
                        "&" + "lft" + "=" + currentState.left +
                        "&" + "wdth" + "=" + currentState.width +
                        "&" + "hgt" + "=" + currentState.height +
                        "&" + "bdhgt" + "=" + currentState.bodyHeight;

            //Add a year to current date
            var exp = new Date(new Date().setFullYear(new Date().getFullYear() + 1));

            var c = new NIT.Cookie("NIT_AgentProfile", value, exp);
            c.save();
        };

        this.updateAgentDisplay = function (value)
        {
            currentState.agentDisplay = value;
            _updateSessionCookie();
        }

        this.load = function ()
        {
            var profile = NIT.CookieUtil.getCookie("NIT_AgentProfile");

            if (profile && profile.values)
            {
                currentState.top = profile.values['top'] === 'undefined' ? currentState.top : parseInt(profile.values['top']);
                currentState.left = profile.values['lft'] === 'undefined' ? currentState.left : parseInt(profile.values['lft']);
                currentState.width = profile.values['wdth'] === 'undefined' ? currentState.width : parseInt(profile.values['wdth']);
                currentState.height = profile.values['hgt'] === 'undefined' ? currentState.height : parseInt(profile.values['hgt']);
                currentState.bodyHeight = profile.values['bdhgt'] === 'undefined' ? currentState.bodyHeight : parseInt(profile.values['bdhgt']);
            }

            var c = NIT.CookieUtil.getCookie("NIT_UiState");

            if (c && c.values)
            {
                currentState.agentDisplay = (c.values['DISP'] == 'true');
            }
        }

        this.updateProfile = function (top, left, width, height, bodyHeight)
        {
            currentState.top = top;
            currentState.left = left;
            currentState.width = width;
            currentState.height = height;
            currentState.bodyHeight = bodyHeight;

            _updatePersistCookie();
        }

        currentState.load();
    }

    NIT.addListener(window, "onload", me.onPageLoaded);
};

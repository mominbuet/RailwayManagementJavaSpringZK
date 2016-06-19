
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
    <meta http-equiv="content-type" content="text/html;charset=UTF-8">
        <head>
            <meta content="no" http-equiv="imagetoolbar" />
            <!-- IE8 renders as IE7 to spare ourselves another column in the compatability matrix -->
            <meta content="IE=EmulateIE7" http-equiv="X-UA-Compatible" />
            <meta name="robots" content="index,nofollow" >

                <!--multiple assets for page -->
                <meta name="description" content=' Check and download the Amtrak train schedules for all routes and destinations of your choice.  ' >
                    <!--keywords multiple assets for page -->
                    <meta name="keywords" content='amtrak train schedules, amtrak timetables, downloadable train schedules, downloadable train timetables' >

                        <link href='${pageContext.request.contextPath}/webcontent/css/base.css' rel="stylesheet" type="text/css" media="all" ></link>
                        <link href='${pageContext.request.contextPath}/webcontent/css/base_screen.css' rel="stylesheet" type="text/css" media="screen" ></link>
                        <link href='${pageContext.request.contextPath}/webcontent/css/basic_booking.css' rel="stylesheet" type="text/css" media="all" ></link>
                        <link href='${pageContext.request.contextPath}/webcontent/css/basic_booking_print.css' rel="stylesheet" type="text/css" media="print" ></link>
                        <link href='${pageContext.request.contextPath}/webcontent/css/basic_booking_screen.css' rel="stylesheet" type="text/css" media="screen" ></link>
                        <link href='${pageContext.request.contextPath}/webcontent/css/content.css' rel="stylesheet" type="text/css" media="all" ></link>
                        <link href='${pageContext.request.contextPath}/webcontent/css/content_screen.css' rel="stylesheet" type="text/css" media="screen" ></link>
                        <link href='${pageContext.request.contextPath}/webcontent/css/base_print.css' rel="stylesheet" type="text/css" media="print" ></link>
                        <link href='${pageContext.request.contextPath}/webcontent/css/content_print.css' rel="stylesheet" type="text/css" media="print" ></link>		
                        <script src='${pageContext.request.contextPath}/webcontent/js/prototype-1.6.0.3.js' type="text/javascript"></script>
                        <script src='${pageContext.request.contextPath}/webcontent/js/base.js' type="text/javascript"></script>
                        <script src='${pageContext.request.contextPath}/webcontent/js/basic_booking.js' type="text/javascript"></script>
                        <script src='${pageContext.request.contextPath}/webcontent/js/ib_front_page.js' type="text/javascript"></script>
                        <script src='${pageContext.request.contextPath}/webcontent/js/mptoggle.js' type="text/javascript"></script>
                        <script type="text/javascript">
                            <!--
                            function language_select_2(dropdown)
                            {
                                var myindex  = dropdown.selectedIndex;
                                var SelValue = dropdown.options[myindex].value;
                                var baseURL  = SelValue;
                                switchLanguage(SelValue);
    
                                return true;
                            }

                            function getCheckedValue(radioObj,q) {
                                if(!radioObj)
                                    return "";
                                var radioLength = radioObj.length;
                                if(radioLength == undefined)
                                    if(radioObj.checked)
                                        return radioObj.value;
                                else
                                    return "";
                                for(var i = 0; i < radioLength; i++) {
                                    if(radioObj[i].checked) {
                                        var temp = radioObj[i].value;
                                        var cururl = "ContentServer?c=Page&pagename=am/Layout&p=1237748590271&cid=1237748590271&q="+q;
                                        if(temp == 'results_new_search')
                                            document.location.href= "ContentServer?c=Page&pagename=am/Layout&p=1237748590271&cid=1237748590271&q=null" ;
                                        if(temp == 'results_sub_search')
                                            window.location= cururl ;				
                                        return radioObj[i].value;
                                    }
                                }
                                return "";
                            }

                            function leapTo (link)
                            {
                                var new_url=link;
                                if (  (new_url != "")  &&  (new_url != null)  )
                                    window.location=new_url;
                                else
                                    alert("\nYou must make a selection.");
                            }
   
			
                            function doZoom(size) {
                                document.getElementById('content_body').style.fontSize=size+'%';
                            }


   
                            //-->
                        </script>
                        <title> Bangladesh Railway Train Schedules, Timetables</title>
                        <script>
	
                            function openPopupList() {
                                var loc = "/servlet/ContentServer?pagename=am/AM_Snippet_C/IBLegacy&help=loginerror";
                                popups = window.open(loc,'1','directories=0,dependent=1,menubar=0,top=20,left=20,width=680,height=600,scrollbars=1');
                                if (window.focus) {
                                    stations.focus();
                                }
                            }
                            function openPopupLearnMore() {
                                var loc = "/servlet/ContentServer?pagename=am/AM_Snippet_C/IBLegacy&ibsref=SSO";
                                popups = window.open(loc,'1','directories=0,dependent=1,menubar=0,top=20,left=20,width=680,height=600,scrollbars=1');
		
                            }

                            function buildLoginFrame(){
		
                                var boolCompliant=isCompliantBrowser();
                                var obj=document.getElementById("loginFrame");
					
                                framehtml ='<form id="frameResLogin" method="post" action="/home.user">';
                                framehtml+='<div class="form_item"><input name="_name" class="text" type="text" id="_name" /></div>';
                                framehtml+='<div class="form_item"><input name="_password" class="text password" type="password" id="_password" /></div>';
                                framehtml+='</form>';
                                if (isSafari == false) {
                                    var doc=null;
                                    if(obj!=null){
                                        obj.contentDocument;
                                        if(doc==undefined||doc==null){doc=obj.contentWindow.document;}
                                        doc.open();doc.write(framehtml);doc.close();
                                    }
                                }
                            }; // end of buildLoginFrame

                            function execLogon(frm){
                                if (isCompliantBrowser()==true) {
                                    var loginFrameParent=document.getElementById("loginFrameParent");
                                    var loginFrame=document.getElementById("loginFrame");
                                    try {
                                        if (frm) {
                                            var objStat=document.getElementById("objStat");
                                            if (objStat!=null) {
                                                loginFrameParent.removeChild(objStat);
                                            }
                                        }
                                        var frameDoc=loginFrame.contentDocument;

                                        if (frameDoc==undefined||frameDoc==null) {
                                            frameDoc=loginFrame.contentWindow.document;
                                        }

                                        var frameFrm=frameDoc.forms[0];

                                        if (frm) {
                                            frameFrm._name.value=frm._name.value;
                                            frameFrm._password.value=frm._password.value;
                                        }

                                        frameFrm.submit();
                                        loginFramePostProcess();
                                        ssoBuildBox();
                                    } catch(err) {
                                        frm.submit();
                                    }

                                } else {
                                    frm.submit();
                                }
                            };

                            function showLoggedIn(){
                                var username= getUName();		
                                $('top_navigation_body').insert('<div id="login_greeting"> Hello ' + username + '! </div>');
                                var output ='<ul id="pi_actions_list_logged_in">';
                                output+='<li><a href="https://tickets.amtrak.com/itd/amtrak/Reservations">My Account</a></li>';
                                output+='<li><a href="http://tickets.amtrak.com/itd/amtrak/CMSLogOff">Log Out</a></li>';
                                output+='</ul>';
									 				
                                return output;
                            };
					 

                            function showLoggedOut(argv,pagetype){
									
                                var output;
                                var eoutput = null;
                                switch(argv) {

                                    case "header":
                                        output='<form NAME="reslogin" class="std_form" ACTION="/bd-railway_v5/home.user" id="reslogin" METHOD="post" onSubmit="return false">';
                                        break;

                                    case "body":
								
                                        if(getCookie("ErrorCookie") != null) {
								
											
                                            eoutput ="<div class='error'>";
                                            eoutput+="Problem with your Amtrak.com Login: We're sorry, your login information is not valid. For assistance, <a href='javascript:openPopupList();'>click here</a>.";
                                            eoutput+="</div>";
														
                                        }	

                                        var output='<ul id="pi_actions_list">';
                                        output+='<li><a href="javascript:LoginPopout.show()">Login</a></li>';
                                        output+='<li><a href="registration.do" target="_blank">Register</a></li>';
                                        output+='</ul>';
                                        output+='<div class="popout " id="login_popout">';
                                        output+='<div class="popout_inner" id="login_popout_inner">';
                                        output+='<a href="javascript:LoginPopout.hide()" class="close_btn button"><img src="${pageContext.request.contextPath}/webcontent/css/images/btn_closeXorange.gif" alt="Close Window" /></a>';
                                        output+='<div id="login_form_header"><h3>Log In</h3></div>';
                                        if (eoutput != null) { output+=eoutput; }
														
                                        output+='<div class="form_holder" id="login_form_holder">';
                                        output+='<div class="form_line">';
                                        output+='<div class="form_label"><label for="login_email_address">E-Mail Address</label></div>';
                                        output+='<div class="form_item"><input name="_name" class="text" type="text" id="login_email_address" /></div>';
                                        output+='</div>';
                                        output+='<div class="form_line">';
                                        output+='<div class="form_label"><label for="login_password">Password</label></div>';
                                        output+='<div class="form_item"><input name="_password" class="text password" type="password" id="login_password" /></div>';
                                        output+='</div>';
                                        output+='<div class="form_line">';
                                        output+='<div class="submit_item">';
                                        output+='<input name="login" class="image" type="image" src="${pageContext.request.contextPath}/webcontent/css/images/btn_login.gif" alt="login" onClick="if(checkLoginForm()) execLogon(document.reslogin)"/>';
                                        output+='<a href="javascript:openWin(\'https://tickets.amtrak.com/itd/amtrak/ForgottenPassword\', 420, 550);" class="forgot_pass">Forgot password?</a>';
                                        output+='</div></div>';
                                        output+='<br class="clear_both" />';
                                        output+='</div></div><hr>';
                                        output+='<div class="popout_inner"><div></div>';
                                        output+='';
                                        output+='</div>'; 
                                        output+='</div></form>';
                                        break;
                                }

                                return output;

                            }



                        </script>
                       <!-- <script type="text/javascript">

                            var _gaq = _gaq || [];
                            _gaq.push(['_setAccount', 'UA-23218774-1']);
                            _gaq.push(['_setDomainName', '.amtrak.com']);
 
                            _gaq.push(['_trackPageview']);

                            (function() {
                                var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
                                ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
                            })();

                        </script>-->


                        <!--<script type="text/javascript">
                            //script to automatically track outbound links need to set pageTraker to work with gaAddons.js
                            var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www."); 
                            document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E")); 
                        </script>
                        <script type="text/javascript"> 
                            try { 
                                var pageTracker = _gat._getTracker("UA-23218774-1"); 
                                pageTracker._trackPageview(); 
                            } catch(err) {} 
                        </script>-->

                        <script src='${pageContext.request.contextPath}/webcontent/js/gaAddons.js' type='text/javascript'></script>



                        <script LANGUAGE="JavaScript" SRC="${pageContext.request.contextPath}/webcontent/js/lib.js" TYPE="text/javascript"></script>

                        </head>
                        <body>
                            <form id="form1" runat="server">
                                <div>
                                    <script type="text/javascript">

                                        function switchLanguage(lang) {
 
                                            MP.SrcUrl=unescape('mp_js_orgin_url');MP.UrlLang='mp_js_current_lang';MP.init();
                                            MP.switchLanguage(MP.UrlLang==lang?'en':lang);
                                            return false;
                                        }
                                    </script>


                                    <div id="top_nav_wrapper" class="hp_top_wrapper">
                                        <div id="top_nav_left_cover">&nbsp;</div>
                                        <div id="top_navigation_body">
                                            <div id="amtrak_logo">

                                                <a href="index.jsp">
                                                    <!--<img src="images/logo_amtrak.gif" alt="Amtrak" />-->BD Railway
                                                </a>

                                            </div>


                                            <div id="language_select_wrapper">
                                                <img src="${pageContext.request.contextPath}/webcontent/css/images/world_map.gif" alt="" class="language_img"/>
                                                <form id="language_select_wrapper">
                                                    <select name="language_select" option="language_select" id="language_select" onChange="language_select_2(this.form.language_select)">
                                                        <option value='#'>English</option>
                                                        <option value='de'>Bangla</option>
                                                    </select>

                                                </form>
                                            </div>

                                            <div id="nav_link_wrapper">

                                                <a href="#">Contact Us</a> <span class="topnav_pipe">|</span> 	
                                                <a href="#">Help</a>

                                                <form name="top_nav_search" id="top_nav_search" action="http://www.amtrak.com/servlet/ContentServer/Page/1237748590271/1237748590271">
                                                    <input type="hidden" name="pagename" value="am/Layout"/><input type="hidden" name="c" value='Page'/><input type="hidden" name="cid" value='1237748590271'/><input name="q" class="text ie6-text"  type="text" id="top_nav_search_term" value="Search" onfocus="this.value='';" />
                                                    <input type="image" src='${pageContext.request.contextPath}/webcontent/css/images/btn_go_top.gif' id="top_nav_search_go_button" alt="Go!" />
                                                </form>


                                            </div>		

                                            <div class="clear_both">&nbsp;</div>

                                        </div>
                                    </div>
                                    <!-- End HTML for Top Navigation -->
                                    <div id="outer_wrapper">
                                        <div id="top_level_wrapper">
                                            <div id="lower_wrapper">
                                                <div id="shoulder">&nbsp;</div>
                                                <div id="top_bar">&nbsp;</div>
                                                <div id="left_column_wrapper">



                                                    <div id="persistent_info_wrapper">

                                                        <!-- Begin HTML for Fare Finder --><!-- LOGIN -->
                                                        <div id="LoginBox"></div>
                                                        <div id="loginFrameParent">
                                                            <div id="objStat"></div>
                                                            <iframe width="0" height="0" style="position:absolute; visibility:hidden;" id="loginFrame" onload="loginFramePostProcess();"></iframe>
                                                        </div>
                                                        <script LANGUAGE="JavaScript" SRC="${pageContext.request.contextPath}/webcontent/js/cookies.js" TYPE="text/javascript">ONLOAD='setFFFields();'</script>
                                                        <script language="JavaScript1.2">
                                                            <!--
                                                            var boolCompliant = false;
                                                            try{boolCompliant = isCompliantBrowser();}catch(e){};    
                                                            if( (getCookie("LoginCookie") != null || getCookie("RememberCookie") != null) && (isSafari == true || isOpera == true || isGecko == true)){
                                                                // alert("this should only show for safari and opera");
                                                                if( getCookie("ErrorCookie") == null){
                                                                    loginFramePostProcess();             
                                                                }
                                                            };
                                                            if( getCookie("ErrorCookie") != null ){
                                                                // alert("Error cookie for  safari, firefox and opera");
                                                                loginFramePostProcess();
                     
                                                            };
                                                            if( getCookie("LoginCookie") == null && getCookie("RememberCookie") == null ){
                                                                if( getCookie("ErrorCookie") == null){
                                                                    //  alert("no error cookie, showLoginBox next");
                                                                    showLoginBox();              
                                                                }
                                                                // alert ("buildLoginFrame next");
                                                                buildLoginFrame();
                                                            }
                                                            if( getCookie("ErrorCookie") != null ) WM_killCookie("ErrorCookie", "http://www.amtrak.com/", ".amtrak.com");
    
    
                                                            -->
                                                        </script>

                                                        <script type="text/javascript">
                                                            //<![CDATA[
                                                            Element.observe(window, 'load', function(){
                                                                ssoBuildBox();

                                                            }); 
                                                            //]]>
                                                        </script>





                                                        <style type="text/css">
                                                            div.autocomplete {
                                                                position:absolute;
                                                                width:auto !important;
                                                                background-color:#F4F4F4;
                                                                border:1px solid #888;
                                                                margin:0px;
                                                                padding:0px;
                                                                z-index:200 !important;
                                                            }
                                                            div.autocomplete ul {
                                                                list-style-type:none;
                                                                margin:0px;
                                                                padding:0px;
                                                                font-family: Verdana, Arial, Helvetica, sans-serif;
                                                                font-size: small;
                                                                font-style: normal;
                                                                color: #0000ff;
                                                                font-weight: bold;
                                                                overflow: auto;
                                                                white-space: nowrap;
                                                            }
                                                            div.autocomplete ul li.selected { background-color: #ffb;}
                                                            div.autocomplete ul li {
                                                                list-style-type:none;
                                                                display:block;
                                                                margin:0;
                                                                padding:1px;
                                                                height:12px;
                                                                cursor:pointer;
                                                                background-image: none;
                                                            }
                                                        </style>
                                                        <script language="JavaScript" type="text/javascript" src="${pageContext.request.contextPath}/webcontent/js/popups.js"></script>
                                                        <script language="JavaScript" type="text/javascript" src="${pageContext.request.contextPath}/webcontent/js/formutils.js"></script>
                                                        <script language="JavaScript" type="text/javascript" src="${pageContext.request.contextPath}/webcontent/js/scriptaculous.js"></script>
                                                        <script language="JavaScript" type="text/javascript" src="${pageContext.request.contextPath}/webcontent/js/effects.js"></script>
                                                        <script language="JavaScript" type="text/javascript" src="${pageContext.request.contextPath}/webcontent/js/controls.js"></script>
                                                        <script language="JavaScript" type="text/javascript" src="${pageContext.request.contextPath}/webcontent/js/basic_booking_left.js"></script>
                                                        <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/webcontent/css/calendar.css" media="screen" />
                                                        <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/webcontent/css/container.css" media="screen" />
                                                        <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/webcontent/css/amtrak-calendar.css" media="screen" />
                                                        <script language="JavaScript" type="text/javascript" src="${pageContext.request.contextPath}/webcontent/js/calendar_farefinder.js"></script>
                                                        <script language="JavaScript" type="text/javascript" src="${pageContext.request.contextPath}/webcontent/js/farefinderrequest.js"></script>
                                                        <script language="JavaScript1.2" type="text/javascript" src="${pageContext.request.contextPath}/webcontent/js/yahoo-dom-event.js"></script>
                                                        <script language="JavaScript1.2" type="text/javascript" src="${pageContext.request.contextPath}/webcontent/js/calendar-min.js"></script>
                                                        <script language="JavaScript1.2" type="text/javascript" src="${pageContext.request.contextPath}/webcontent/js/yuicalendar.js"></script>
                                                        <script language="JavaScript" type="text/javascript" src="${pageContext.request.contextPath}/webcontent/js/profile_rewrite.js"></script>
                                                        <script type="text/javascript">
                                                            <!--
                                                            var pageName='http://www.amtrak.com/servlet/ContentServer/Page/1237405732505/amtrak/cmsnavigationtab.jsp';
                                                            //-->
                                                        </script>

                                                        <!-- Begin HTML for Fare Finder -->
                                                        <div id="farefinder">
                                                            <div id="ff_tabbar">
                                                                <div class="active" id="ff_tabbar_tickets">Tickets<span onclick="compare_dates('wdfdate1');show_ff_tab('tickets');"></span></div>
                                                                <div id="ff_tabbar_status">Status<span onclick="set_status_date('wdfdate10');show_ff_tab('status');"></span></div>
                                                                <div id="ff_tabbar_schedules">Schedules<span onclick="compare_dates('wdfdate5');show_ff_tab('schedules');"></span></div>
                                                                <div id="ff_tabbar_mytrip">My Trip<span onclick="show_ff_tab('mytrip');"></span></div>
                                                            </div>
                                                            <div id="farefinder_tabbody_tickets" class="farefinder_tabbody ff_active">
                                                                <form action="http://tickets.amtrak.com/itd/amtrak" name="form" method="post"><input type="hidden" name="requestor" value="amtrak.presentation.handler.page.rail.AmtrakRailFareFinderPageHandler" />
                                                                    <h2>Tickets</h2>

                                                                    <div id="ff_tickets_tt_cities_subdiv" class="subdiv level6">
                                                                        <div id="tickets_trip_type"><p>
                                                                                <input type="hidden" name="xwdf_TripType" value="/sessionWorkflow/productWorkflow[@product='Rail']/tripRequirements/tripType" /><input value="OneWay" type="radio" onclick="javascript:blankReturnDate(false)" id="oneway" checked="checked" name="wdf_TripType" />&nbsp;<label for="oneway">One-Way</label>
                                                                                <input type="hidden" name="xwdf_TripType" value="/sessionWorkflow/productWorkflow[@product='Rail']/tripRequirements/tripType" /><input value="Return" type="radio" onclick="javascript:setReturnDate(false)" id="return" name="wdf_TripType" />&nbsp;<label for="return">Round-Trip</label>
                                                                                <a href="http://www.amtrak.com/itd/amtrak/ComplexRail">Multi-City</a> &gt;</p>
                                                                        </div>
                                                                        <div id="tickets_dep_city" class="ff_city_wrapper">
                                                                            <label for="departs">From</label>
                                                                            <input type="hidden" name="xwdf_origin" value="/sessionWorkflow/productWorkflow[@product='Rail']/travelSelection/journeySelection[1]/departLocation/search" /><input autocomplete="off" maxlength="150" type="text" id="departs" name="wdf_origin" />
                                                                            <p><span class="find_a_station"><a href="javascript:fieldName='departs'; openStationList();" title="Click for a list of stations.">Find a Station</a></span></p>
                                                                        </div>
                                                                        <div id="tickets_arr_city" class="ff_city_wrapper level3">
                                                                            <label for="arrives">To</label>
                                                                            <input type="hidden" name="xwdf_destination" value="/sessionWorkflow/productWorkflow[@product='Rail']/travelSelection/journeySelection[1]/arriveLocation/search" /><input autocomplete="off" maxlength="150" type="text" id="arrives" name="wdf_destination" />
                                                                            <p><span class="find_a_station"><a href="javascript:fieldName='arrives'; openStationList();" title="Click for a list of stations.">Find a Station</a></span></p>
                                                                        </div>
                                                                        <div id="autocomplete_availability_from" class="autocomplete level5" style="display:none"></div>
                                                                        <div id="autocomplete_availability_to" class="autocomplete level5" style="display:none"></div>
                                                                    </div>
                                                                    <div id="ff_tickets_dep_ret_date_subdiv" class="subdiv level3" style="position:static;">
                                                                        <div id="tickets_dep_date_time" class="level5">
                                                                            <div class="ff_date_wrapper">
                                                                                <label for="tickets_dep_date">Departs</label>
                                                                                <input value="Tue, Dec 27, 2011" maxlength="22" type="text" class="wdfDate" id="wdfdate1" readonly="readonly" size="22" name="/sessionWorkflow/productWorkflow[@product='Rail']/tripRequirements/journeyRequirements[1]/departDate.date" />
                                                                               
                                                                               </div>
                                                                            <div class="ff_time_wrapper"><label for="wdftime1"><b>Time</b></label><select onchange="timeChanged(1);setTripTypeIfReturnDateSelected(false)" id="wdftime1" onfocus="updateTimeState()" name="/sessionWorkflow/productWorkflow[@product='Rail']/tripRequirements/journeyRequirements[1]/departTime.hourmin"><option value="">Anytime</option><option value="07:00">Morning</option><option value="14:00">Afternoon</option><option value="19:00">Evening</option><option value="23:59">Midnight</option><option value="01:00">1 AM</option><option value="02:00">2 AM</option><option value="03:00">3 AM</option><option value="04:00">4 AM</option><option value="05:00">5 AM</option><option value="06:00">6 AM</option><option value="07:00">7 AM</option><option value="08:00">8 AM</option><option value="09:00">9 AM</option><option value="10:00">10 AM</option><option value="11:00">11 AM</option><option value="12:00">Noon</option><option value="13:00">1 PM</option><option value="14:00">2 PM</option><option value="15:00">3 PM</option><option value="16:00">4 PM</option><option value="17:00">5 PM</option><option value="18:00">6 PM</option><option value="19:00">7 PM</option><option value="20:00">8 PM</option><option value="21:00">9 PM</option><option value="22:00">10 PM</option><option value="23:00">11 PM</option></select>
                                                                            </div>
                                                                        </div>


                                                                        <div id="tickets_ret_date_time" class="hide_section level4">
                                                                            <div class="ff_date_wrapper">

                                                                                <label for="tickets_ret_date">Returns</label>
                                                                                <input maxlength="22" type="text" class="wdfDate" id="wdfdate2" readonly="readonly" size="22" name="/sessionWorkflow/productWorkflow[@product='Rail']/tripRequirements/journeyRequirements[2]/departDate.date" /></div><div class="ff_time_wrapper"><label for="wdftime2"><b>Time</b></label><select onchange="timeChanged(2);setTripTypeIfReturnDateSelected(false)" id="wdftime2" onfocus="updateTimeState()" name="/sessionWorkflow/productWorkflow[@product='Rail']/tripRequirements/journeyRequirements[2]/departTime.hourmin"><option value="">Anytime</option><option value="07:00">Morning</option><option value="14:00">Afternoon</option><option value="19:00">Evening</option><option value="23:59">Midnight</option><option value="01:00">1 AM</option><option value="02:00">2 AM</option><option value="03:00">3 AM</option><option value="04:00">4 AM</option><option value="05:00">5 AM</option><option value="06:00">6 AM</option><option value="07:00">7 AM</option><option value="08:00">8 AM</option><option value="09:00">9 AM</option><option value="10:00">10 AM</option><option value="11:00">11 AM</option><option value="12:00">Noon</option><option value="13:00">1 PM</option><option value="14:00">2 PM</option><option value="15:00">3 PM</option><option value="16:00">4 PM</option><option value="17:00">5 PM</option><option value="18:00">6 PM</option><option value="19:00">7 PM</option><option value="20:00">8 PM</option><option value="21:00">9 PM</option><option value="22:00">10 PM</option><option value="23:00">11 PM</option></select>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                    <div id="ff_tickets_passengers_subdiv" class="subdiv level1">
                                                                        <div id="tickets_passengers">
                       
                                                                            <br/>
                                                                            <div id="ff_submit_button">


                                                                                <input type="image" onclick="javascript:return preFareFinderSubmitActions('The following information is needed to process your request:', 'Problem Pricing the Itinerary: Atlantic City Express Service offers adult fares only for all passengers.  Please modify your selection to continue. \n[Error ID: 1121S]')" src="${pageContext.request.contextPath}/webcontent/css/images/btn_ff_go.gif" alt="Click to Find Tickets" border="0" name="_handler=amtrak.presentation.handler.request.rail.AmtrakRailSearchRequestHandler/_xpath=/sessionWorkflow/productWorkflow[@product='Rail']" />

                                                                            </div>
                                                                        </div>
                                                                        <br/>
                                                                        <!--
                                                                        <label for="ff_ada_link" style="line-height: 1.1;cursor: pointer;"><a href="http://www.amtrak.com/itd/amtrak/ada">Special Needs &amp; Accessibility</a></label>
                                                                        -->
                                                                    </div>

                                                                </form>
                                                            </div>
                                                            <div id="farefinder_tabbody_status" class="farefinder_tabbody">

                                                                <form:form action="check.do"  method="post">
                                                                    <input type="hidden" name="requestor" value="amtrak.presentation.handler.page.AmtrakCMSNavigationTabPageHandler" />
                                                                    <h2>Status</h2>
                                                                    <div id="ff_status_step_1" class="subdiv1">
                                                                        <h3>Check Status of a Train</h3>
                                                                        <div class="form_line_wrapper first">
                                                                            <label for="status_date">
                                                                                Date:
                                                                            </label>
                                                                            <span class="form_entry">
                                                                                <input value="Tue, Dec 27, 2011" maxlength="22" type="text" class="wdfDate" id="wdfdate10" readonly="readonly" size="22" name="" />
                                                                            </span>
                                                                        </div>
                                                                        <div class="form_line_wrapper">
                                                                            <label for="status_train_num">
                                                                                Train No.
                                                                            </label>
                                                                            <span class="form_entry">
                                                                                <input type="hidden" name="xwdf_trainNumber" value="" /><input value="optional" maxlength="8" type="text" id="status_train_num" onfocus="if (this.value=='optional') { this.value=''; updateMaxLength(); };" size="4" name="wdf_trainNumber" />
                                                                            </span>
                                                                        </div>
                                                                        <br class="clear_both" />
                                                                    </div>
                                                                    <div id="ff_status_step_2" class="subdiv">
                                                                        <div id="ff_status_footnote_submit_wrapper">
                                                                            <p>One city is required if train number is used.</p>
                                                                        </div>
                                                                        <div id="status_dep_city" class="ff_city_wrapper">
                                                                            <label for="status_from">
                                                                                From
                                                                            </label>
                                                                            <!-- itd:locationinput id="status_dep" wdfxpath="travelSelection/journeySelection[1]/departLocation" wdfhtmlname="wdf_origin" wdflimitedlocations="resource:TRAVEL_USE_LIMITED_LOCATIONS" size="25" / -->
                                                                            <input type="hidden" name="xwdf_origin" value="/sessionWorkflow/productWorkflow[@product='Rail']/travelSelection/journeySelection[1]/departLocation/search" /><input autocomplete="off" maxlength="150" type="text" id="status_from" name="wdf_origin" />
                                                                            <p><span class="find_a_station">
                                                                                    <a href="javascript:fieldName='status_from'; openStationList();" title="Click for a list of stations.">Find a Station</a>
                                                                                </span></p>
                                                                        </div>
                                                                        <div id="status_arr_city" class="ff_city_wrapper">
                                                                            <label for="status_to">
                                                                                To
                                                                            </label>
                                                                            <!-- itd:locationinput id="status_to" wdfxpath="travelSelection/journeySelection[1]/arriveLocation" wdfhtmlname="wdf_destination" wdflimitedlocations="resource:TRAVEL_USE_LIMITED_LOCATIONS" size="25" / -->
                                                                            <input type="hidden" name="xwdf_destination" value="/sessionWorkflow/productWorkflow[@product='Rail']/travelSelection/journeySelection[1]/arriveLocation/search" /><input autocomplete="off" maxlength="150" type="text" id="status_to" name="wdf_destination" />
                                                                            <p><span class="find_a_station">
                                                                                    <a href="javascript:fieldName='status_to'; openStationList();" title="Click for a list of stations.">Find a Station</a>
                                                                                </span></p>
                                                                        </div>
                                                                    </div>
                                                                    <div id="ff_status_step_3" class="subdiv">
                                                                        <div id="status_from_auto" class="autocomplete" style="display:none"></div>
                                                                        <div id="status_to_auto" class="autocomplete" style="display:none"></div>
                                                                        <div id="status_arr_or_dep_wrapper">


                                                                            <input type="hidden" name="xwdf_SortBy" value="/sessionWorkflow/productWorkflow[@product='Rail']/tripRequirements/journeyRequirements[1]/departDate/@radioSelect" /><input value="arrivalTime" type="radio" id="status_arr" checked="checked" name="wdf_SortBy" />
                                                                            <label for="status_arr">
                                                                                Scheduled Arrive
                                                                            </label>
                                                                            &nbsp;&nbsp;
                                                                            <input type="hidden" name="xwdf_SortBy" value="/sessionWorkflow/productWorkflow[@product='Rail']/tripRequirements/journeyRequirements[1]/departDate/@radioSelect" /><input value="departTime" type="radio" id="status_dep" name="wdf_SortBy" />
                                                                            <label for="status_dep">
                                                                                Scheduled Depart
                                                                            </label>

                                                                        </div>
                                                                        <div class="form_line_wrapper">
                                                                            <label for="status_time">
                                                                                Time
                                                                            </label>
                                                                            <span class="form_entry">
                                                                                <select onchange="timeChanged(10);setTripTypeIfReturnDateSelected(false)" id="wdftime10" onfocus="updateTimeState()" name="/sessionWorkflow/productWorkflow[@product='Rail']/tripRequirements/journeyRequirements[1]/departTime.hourmin"><option value="">Anytime</option><option value="07:00">Morning</option><option value="14:00">Afternoon</option><option value="19:00">Evening</option><option value="23:59">Midnight</option><option value="01:00">1 AM</option><option value="02:00">2 AM</option><option value="03:00">3 AM</option><option value="04:00">4 AM</option><option value="05:00">5 AM</option><option value="06:00">6 AM</option><option value="07:00">7 AM</option><option value="08:00">8 AM</option><option value="09:00">9 AM</option><option value="10:00">10 AM</option><option value="11:00">11 AM</option><option value="12:00">Noon</option><option value="13:00">1 PM</option><option value="14:00">2 PM</option><option value="15:00">3 PM</option><option value="16:00">4 PM</option><option value="17:00">5 PM</option><option value="18:00">6 PM</option><option value="19:00">7 PM</option><option value="20:00">8 PM</option><option value="21:00">9 PM</option><option value="22:00">10 PM</option><option value="23:00">11 PM</option></select>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div id="ff_status_submit_wrapper" class="subdiv">
                                                                        <input type="hidden" name="_handler=amtrak.presentation.handler.request.rail.AmtrakRailTrainStatusSearchRequestHandler/_xpath=/sessionWorkflow/productWorkflow[@product='Rail']" />
                                                                        <input type="image" src="${pageContext.request.contextPath}/webcontent/css/images/btn_checkStatus.gif" alt="Check Status" border="0"  />
                                                                    </div>
                                                                </form:form>

                                                            </div>
                                                            <div id="farefinder_tabbody_schedules" class="farefinder_tabbody">

                                                                <form action="checkschedule.do" onsubmit="javascript:return CheckMandatoryScheduleFields(this);" name="ff_schedules_form" method="post"><input type="hidden" name="requestor" value="amtrak.presentation.handler.page.AmtrakCMSNavigationTabPageHandler" />
                                                                    <h2>Schedules</h2>
                                                                    <div id="ff_schedules_tt_cities_subdiv" class="subdiv">
                                                                        <div id="schedules_dep_city" class="ff_city_wrapper">
                                                                            <label for="schedules_from">From</label>
                                                                            <input type="hidden" name="xwdf_origin" value="" /><input autocomplete="off" maxlength="150" type="text" id="schedules_from" name="wdf_origin" />
                                                                            <p><span class="find_a_station"><a href="javascript:fieldName='schedules_from'; openStationList();" title="Click for a list of stations.">Find a Station</a></span></p>
                                                                            <!-- itd:locationinput id="schedules_from" wdfxpath="travelSelection/journeySelection[1]/departLocation" wdfhtmlname="wdf_origin" wdflimitedlocations="resource:TRAVEL_USE_LIMITED_LOCATIONS" size="40" / -->

                                                                        </div>
                                                                        <div id="schedules_arr_city" class="ff_city_wrapper">
                                                                            <label for="schedules_to">To</label>
                                                                            <!-- itd:locationinput id="schedules_to" wdfxpath="travelSelection/journeySelection[1]/arriveLocation" wdfhtmlname="wdf_destination" wdflimitedlocations="resource:TRAVEL_USE_LIMITED_LOCATIONS" size="40" / -->
                                                                            <input type="hidden" name="xwdf_destination" value="" /><input autocomplete="off" maxlength="150" type="text" id="schedules_to" name="wdf_destination" />
                                                                            <p><span class="find_a_station"><a href="javascript:fieldName='schedules_to'; openStationList();" title="Click for a list of stations.">Find a Station</a></span></p>

                                                                        </div>
                                                                    </div>
                                                                    <div id="ff_schedules_dep_ret_date_subdiv" class="subdiv">
                                                                        <div id="schedule_from_auto" class="autocomplete" style="display:none"></div>
                                                                        <div id="schedule_to_auto" class="autocomplete" style="display:none"></div>
                                                                        <div id="schedules_dep_date_time">
                                                                            <div class="ff_date_wrapper">
                                                                                <label for="schedules_dep_date">Depart</label>
                                                                                <input value="Tue, Dec 27, 2011" maxlength="22" type="text" class="wdfDate" id="wdfdate5" readonly="readonly" size="22" name="/sessionWorkflow/productWorkflow[@product='Rail']/tripRequirements/journeyRequirements[1]/departDate.date" /></div><div class="ff_time_wrapper"><label for="wdftimenull"><b>Time</b></label><select onchange="timeChanged(5);setTripTypeIfReturnDateSelected(false)" id="wdftime5" onfocus="updateTimeState()" name="/sessionWorkflow/productWorkflow[@product='Rail']/tripRequirements/journeyRequirements[1]/departTime.hourmin"><option value="">Anytime</option><option value="07:00">Morning</option><option value="14:00">Afternoon</option><option value="19:00">Evening</option><option value="23:59">Midnight</option><option value="01:00">1 AM</option><option value="02:00">2 AM</option><option value="03:00">3 AM</option><option value="04:00">4 AM</option><option value="05:00">5 AM</option><option value="06:00">6 AM</option><option value="07:00">7 AM</option><option value="08:00">8 AM</option><option value="09:00">9 AM</option><option value="10:00">10 AM</option><option value="11:00">11 AM</option><option value="12:00">Noon</option><option value="13:00">1 PM</option><option value="14:00">2 PM</option><option value="15:00">3 PM</option><option value="16:00">4 PM</option><option value="17:00">5 PM</option><option value="18:00">6 PM</option><option value="19:00">7 PM</option><option value="20:00">8 PM</option><option value="21:00">9 PM</option><option value="22:00">10 PM</option><option value="23:00">11 PM</option></select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div id="ff_schedules_timetables_submit_wrapper" class="subdiv">
                                                                        <input type="hidden" name="_handler=amtrak.presentation.handler.request.rail.AmtrakCMSRailSchedulesSearchRequestHandler/_xpath=/sessionWorkflow/productWorkflow[@product='Rail']" />
                                                                        <input type="image" src="${pageContext.request.contextPath}/webcontent/css/images/btn_findSchedules.gif" alt="Find Schedules" border="0" name="_handler=amtrak.presentation.handler.request.rail.AmtrakCMSRailSchedulesSearchRequestHandler/_xpath=/sessionWorkflow/productWorkflow[@product='Rail']" />
                                                                    </div>
                                                                    <div id="ff_schedules_timetables_footer_wrapper">
                                                                        <p><a href="http://www.amtrak.com/servlet/Satellite/Page/1237405732505/1237405732505">Download printable timetables</a></p>
                                                                    </div>
                                                                </form>

                                                            </div>
                                                            <div id="farefinder_tabbody_mytrip" class="farefinder_tabbody">
                                                                <h2>My Trip</h2>
                                                                <div id="ff_mytrip_step_1" class="subdiv">
                                                                    <form action="http://tickets.amtrak.com/itd/amtrak" onsubmit="javascript:return CheckMandatoryMyTripFields(this)" name="mytrip_res" method="post"><input type="hidden" name="requestor" value="amtrak.presentation.handler.page.AmtrakCMSNavigationTabPageHandler" />
                                                                        <h3>Find a Reservation</h3>
                                                                        <div class="form_line_wrapper first">
                                                                            <label for="mytrip_res_num">Reservation Number</label><span class="form_entry">
                                                                                <input value="" type="text" id="mytrip_res_num" name="/sessionWorkflow/itineraryWorkflow/basket/booking/reference" />
                                                                            </span>
                                                                        </div>
                                                                        <div class="form_line_wrapper">
                                                                            <strong>and</strong>
                                                                        </div>
                                                                        <div class="form_line_wrapper">
                                                                            <label for="mytrip_res_email">E-mail Address</label><span class="form_entry">
                                                                                <input value="" type="text" id="mytrip_res_email" name="/sessionWorkflow/itineraryWorkflow/basket/booking/bookingOptions/bookingFulfilment/contact/contactEmailAddress/emailAddress" />
                                                                            </span>
                                                                        </div>
                                                                        <div class="form_line_wrapper">
                                                                            <div class="separator">-or-</div>
                                                                        </div>
                                                                        <div class="form_line_wrapper">
                                                                            <label for="mytrip_res_zip">Telephone Number</label><span class="form_entry">
                                                                                <input value="" type="text" id="mytrip_res_zip" name="/sessionWorkflow/itineraryWorkflow/basket/booking/bookingOptions/bookingFulfilment/contact/contactTelephone/number" />
                                                                            </span>
                                                                        </div>
                                                                        <div id="ff_mytrip_res_submit">
                                                                            <input type="hidden" name="_handler=com.sita.ats.amtrak.presentation.handler.request.itinerary.AmtrakLoggedOutTripDetailsRequestHandler" />
                                                                            <input type="image" class="image" src="${pageContext.request.contextPath}/webcontent/css/images/btn_find.gif" alt="Find Reservation" name="_handler=com.sita.ats.amtrak.presentation.handler.request.itinerary.AmtrakLoggedOutTripDetailsRequestHandler" />
                                                                        </div>
                                                                    </form>
                                                                </div>

                                                                <div id="ff_mytrip_step_2" class="subdiv">
                                                                    <div id="mytrip_or"><span>Or</span></div>

                                                                    <form action="https://tickets.amtrak.com/itd/amtrak" onsubmit="javascript:return CheckMandatoryLoginFields(this)" name="mytrip_acct" method="post"><input type="hidden" name="requestor" value="amtrak.presentation.handler.page.AmtrakCMSNavigationTabPageHandler" />
                                                                        <input value="mytrip" type="hidden" name="/sessionWorkflow/userWorkflow/profileAccountRequirements/@logontype" />
                                                                        <h3>Log in to your BdRailway.com Account</h3>
                                                                        <div class="form_line_wrapper">
                                                                            <label for="mytrip_acct_email">E-mail Address</label><span class="form_entry">
                                                                                <input type="hidden" name="xwdf_username" value="/sessionWorkflow/userWorkflow/profileAccountRequirements/userName" /><input autocomplete="off" maxlength="64" type="text" id="mytrip_acct_email" name="wdf_username" />
                                                                            </span>
                                                                        </div>
                                                                        <div class="form_line_wrapper">
                                                                            <label for="mytrip_acct_pwd">Password</label><span class="form_entry">
                                                                                <input type="hidden" name="xwdf_password" value="/sessionWorkflow/userWorkflow/profileAccountRequirements/password" /><input maxlength="20" type="password" id="mytrip_acct_pwd" name="wdf_password" />
                                                                            </span>
                                                                        </div>
                                                                        <div id="ff_mytrip_acct_submit">
                                                                            <a href="javascript:fieldName='wdf_RequestUserID'; openRequestUserID();" title="Click here to request your Password" class="forgot_pass">Forgot password?</a>
                                                                            <input type="hidden" name="_handler=com.sita.ats.amtrak.presentation.handler.request.profile.AmtrakProfileLogonRequestHandler/_xpath=/sessionWorkflow/userWorkflow/profileAccountRequirements" />
                                                                            <input type="image" onclick="" src="${pageContext.request.contextPath}/webcontent/css/images/btn_login.gif" alt="Log In" name="_handler=com.sita.ats.amtrak.presentation.handler.request.profile.AmtrakProfileLogonRequestHandler/_xpath=/sessionWorkflow/userWorkflow/profileAccountRequirements" />
                                                                        </div>
                                                                    </form>

                                                                </div>

                                                            </div>
                                                        </div>

                                                        <script>
                                                            var stationslist = [
                                                                'Narsingdhi, Dhaka',
                                                                'Bhairab Bazar, Dhaka',
                                                                'Ashgonj, Dhaka',
                                                                'Sherpur, Dhaka',
                                                                'Jamalpur, Dhaka',
                                                                'Wolf Point, Dhaka)',
                                                                'Narayangonj, Dhaka',
                                                                'Mymensingh, Dhaka',
                                                                'Kishorganj, Dhaka',
                                                                'Chittagong, Chittagong',
                                                                'Khulna, Khulna',
                                                                'Jessore, Khulna',
                                                                'Noakhali, Chittagong',
                                                                'feni, Chittagong',
                                                                'Komlapur, Dhaka',
                                                                'Sonapur,Noakhali',
                                                                'Begumgang,Noakhali',
                                                                'Asugang,Bhairob',
                                                                'Comilla Sadar,Commilla',
                                                                'Damaganj,Faridpur',
                                                                'Amotabad,Rajshahi',
                                                                'Bandarban,Chittagong'
                                                            ];</script>
                                                        <script type="text/javascript" language="javascript" charset="utf-8">
                                                            // <![CDATA[
                                                            new AmtrakAutocompleter.Local('departs','autocomplete_availability_from', stationslist, {
                                                                choices: 100,
                                                                paramName: "_origin",
                                                                minChars: 2,
                                                                frequency: 0.5,
                                                                partialSearch: false,
                                                                fullSearch: false
                                                            }
                                                        );
                                                            new AmtrakAutocompleter.Local('arrives','autocomplete_availability_to',stationslist, {
                                                                choices: 100,
                                                                paramName: "_destination",
                                                                minChars: 2,
                                                                frequency: 0.5,
                                                                partialSearch: false,
                                                                fullSearch: false
                                                            }
                                                        );
                                                            new AmtrakAutocompleter.Local('schedules_from','schedule_from_auto',stationslist, {
                                                                choices: 100,
                                                                paramName: "_origin",
                                                                minChars: 2,
                                                                frequency: 0.5,
                                                                partialSearch: false,
                                                                fullSearch: false
                                                            }
                                                        );
                                                            new AmtrakAutocompleter.Local('schedules_to','schedule_to_auto',stationslist, {
                                                                choices: 100,
                                                                paramName: "_destination",
                                                                minChars: 2,
                                                                frequency: 0.5,
                                                                partialSearch: false,
                                                                fullSearch: false
                                                            }
                                                        );
                                                            new AmtrakAutocompleter.Local('status_from','status_from_auto',stationslist, {
                                                                choices: 100,
                                                                paramName: "_origin",
                                                                minChars: 2,
                                                                frequency: 0.5,
                                                                partialSearch: false,
                                                                fullSearch: false
                                                            }
                                                        );
                                                            new AmtrakAutocompleter.Local('status_to','status_to_auto',stationslist, {
                                                                choices: 100,
                                                                paramName: "_destination",
                                                                minChars: 2,
                                                                frequency: 0.5,
                                                                partialSearch: false,
                                                                fullSearch: false
                                                            }
                                                        );
                                                            // ]]>
                                                        </script>


                                                        <!-- End HTML for Fare Finder -->
                                                        <script language="JavaScript" type="text/javascript">
                                                            <!--
                                                            function CheckMandatoryTrainStatusFields(statusForm) {
                                                                var errorMsg ="";
                                                                var fieldList = "";
                                                                var origin = statusForm.wdf_origin.value;
                                                                var destination = statusForm.wdf_destination.value;
                                                                var trainNumber = statusForm.wdf_trainNumber.value;
                                                                if(eval("statusForm.wdf_trainNumber.value") == "optional") {
                                                                    trainNumber = "";
                                                                }
                                                                if (trainNumber == "" && origin == "" && destination == "")
                                                                    fieldList = "Problem with Departure and Arrival Station/City: Please provide a valid departure and arrival station or city name and resubmit. \n[Error ID: 573S]" + "\n";
                                                                if (trainNumber == "" && origin != "" && destination == "")
                                                                    fieldList = fieldList + "Problem with Arrival Station/City or Train Number: Please provide a valid arrival station/city or train number and resubmit. \n[Error ID: 574S]" + "\n";
                                                                if (trainNumber == "" && origin == "" && destination != "")
                                                                    fieldList = fieldList + "Problem with Departure Station/City or Train Number: Please provide a valid departure station/city or train number and resubmit. \n[Error ID: 575S]" + "\n";
                                                                if (trainNumber != "" && origin == "" && destination == "")
                                                                    fieldList = fieldList + "Problem with Departure or Arrival Station/City: Please provide a valid departure or arrival station or city name and resubmit. \n[Error ID: 576S]" + "\n";
                                                                if ((trainNumber != "") && (!IsNumber(trainNumber)))
                                                                    fieldList = fieldList + "Problem with Train Number: Sorry, we cannot find the train number you provided. Please check for accuracy and re-enter. Or, delete the train number and provide a departure and arrival station/city. To find a specific station, please click on the \'Find a Station\' link and select a station from the list provided. \n[Error ID: 577S]" + "\n";
                                                                if (fieldList != "") {
                                                                    errorMsg = "The following information is needed to process your request:" + "\n\n" + fieldList;
                                                                }
                                                                if (errorMsg != "") {
                                                                    alert(errorMsg);
                                                                    return false;
                                                                }
                                                                return true;
                                                            }
                                                            function CheckMandatoryScheduleFields(statusForm) {
                                                                var errorMsg ="";
                                                                var fieldList = "";
                                                                var origin = statusForm.wdf_origin.value;
                                                                var destination = statusForm.wdf_destination.value;
                                                                if (origin == "" && destination == "")
                                                                    fieldList = "Problem with Departure and Arrival Station/City: Please provide a valid departure and arrival station or city name and resubmit. \n[Error ID: 573S]" + "\n";
                                                                if (origin != "" && destination == "")
                                                                    fieldList = fieldList + "Problem with Departure and Arrival Station/City: Please provide a valid departure and arrival station or city name and resubmit. \n[Error ID: 573S]" + "\n";
                                                                if (origin == "" && destination != "")
                                                                    fieldList = fieldList + "Problem with Departure and Arrival Station/City: Please provide a valid departure and arrival station or city name and resubmit. \n[Error ID: 573S]" + "\n";
                                                                if (fieldList != "") {
                                                                    errorMsg = "The following information is needed to process your request:" + "\n\n" + fieldList;
                                                                }
                                                                if (errorMsg != "") {
                                                                    alert(errorMsg);
                                                                    return false;
                                                                }
                                                                return true;
                                                            }
                                                            function CheckMandatoryMyTripFields(theForm) {
                                                                var errorMsg ="";
                                                                var fieldList = "";
                                                                if ($('mytrip_res_num').value.empty()) {
                                                                    fieldList += " -- reservation number\n";
                                                                }
                                                                if ($('mytrip_res_email').value.empty() && $('mytrip_res_zip').value.empty()) {
                                                                    fieldList += " -- email address or telephone number\n";
                                                                }
                                                                if (fieldList != "") {
                                                                    errorMsg="The following information is needed to process your request:" + "\n" + fieldList+ "\n\n";
                                                                    alert(errorMsg);
                                                                    return false;
                                                                }
                                                                return true;
                                                            }
                                                            function CheckMandatoryMyTripFields(theForm) {
                                                                var errorMsg ="";
                                                                var fieldList = "";
                                                                if ($('mytrip_res_num').value.empty()) {
                                                                    fieldList += " -- reservation number\n";
                                                                }
                                                                if ($('mytrip_res_email').value.empty() && $('mytrip_res_zip').value.empty()) {
                                                                    fieldList += " -- email address or telephone number\n";
                                                                }
                                                                if (fieldList != "") {
                                                                    errorMsg="The following information is needed to process your request:" + "\n" + fieldList+ "\n\n";
                                                                    alert(errorMsg);
                                                                    return false;
                                                                }
                                                                return true;
                                                            }
                                                            function CheckMandatoryLoginFields(theForm) {
                                                                var errorMsg ="";
                                                                var fieldList = "";
                                                                if(eval("theForm.wdf_username.value") == "") {
                                                                    fieldList += " -- username\n";
                                                                }
                                                                if(eval("theForm.wdf_password.value") == "") {
                                                                    fieldList += " -- password\n";
                                                                }
                                                                if (fieldList != "") {
                                                                    errorMsg="The following information is needed to process your request:" + "\n" + fieldList+ "\n\n";
                                                                    alert(errorMsg);
                                                                    return false;
                                                                }
                                                                return true;
                                                            }
                                                            //Aibe-2026,Mac safari issue.
                                                            function updateMaxLength()
                                                            {
                                                                trainNum = document.getElementById('status_train_num');
                                                                trainNum.setAttribute("maxLength", 4);
                                                            }
                                                            //-->
                                                        </script>




                                                        <!-- End HTML for Fare Finder -->
                                                    </div>	

                                                    <!----><!--Type1:Page-->
                                                    <!--ID1:1237405732505-->
                                                    <!-- -->
                                                    <div id="subnav_menu">



                                                        </li>


                                                        </li>


                                                        </li>


                                                        </li>


                                                        </li>


                                                        </li>


                                                    </div>


                                                    <div id="CMS_leftNav" ></div>

                                                </div>
                                                <div id="mb_column_1">


                                                    <script LANGUAGE="JavaScript">

                                                        function ShareShowOverlay(menuId) {
                                                            //alert("menuId.display:"+$(menuId).style.display);
                                                            if ($(menuId)) {
                                                                // If the menu is already open, close it
                                                                if ($(menuId).style.display == "block") {
                                                                    $(menuId).style.display = "none";
                                                                }
                                                                else {
                                                                    $(menuId).style.display = "block";
                                                                    //ShareOverlayOpenId = menuId;
                                                                }
                                                            }
				
                                                        }

                                                        function ShareHideOverlay(menuId) {
                                                            if ($(menuId)) {
                                                                $(menuId).style.display = "none";
                                                            }
                                                        }

                                                    </script>


                                                    <div id="page_tools_by_header" class="page_tools" >
                                                        <!--Email URL --><!--ThisBlobURL-->


                                                        <!--Overlay PopUp should be out of span to position the same in IE and Fierfox-->
                                                        <div id="ShareArticle"   class="ShareArticleOverlayMenu" >
                                                            <div class="ShareArticleContent" >
                                                                <div class="ShareArticleTitle"  >
                                                                    <p  class="title">
                                                                        <a href="javascript:ShareHideOverlay('ShareArticle')">
                                                                            <img src="${pageContext.request.contextPath}/webcontent/css/images/close_gray.gif" alt="" border="0" valign="top" align="right" width="9" height="9" class="closeButton"/>
                                                                        </a>
                                                                        Share this page via: 

                                                                    </p>	

                                                                </div>
                                                                <!--/css/images/email_icon.gif -->
                                                                <div class="ShareArticleItem" >
                                                                    <div class="row1">
                                                                        <a href="javascript:openWin('/servlet/ContentServer?pagename=am/EmailPopup&atype=Page&aid=1237405732505&articlepage=am/Layout',680,600)"  onclick="_gaq.push(['_trackEvent', 'Tool Buttons Menu', 'Email', 'Email Button Click',0,true]);">Email<img src='http://www.amtrak.com/servlet/BlobServer?blobcol=urldata&amp;blobtable=MungoBlobs&amp;blobkey=id&amp;blobwhere=1249221190604&amp;blobheader=image%2Fgif' alt="Email" style="margin-left:5px" /></a>
                                                                    </div>
                                                                    <div class="lineItem row2">
                                                                        <a href= "http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.amtrak.com%2Fservlet%2FContentServer%3Fpagename%3Dam%2FLayout%26c%3DPage%26cid%3D1237405732505" target="_blank"  onclick="_gaq.push(['_trackEvent', 'Tool Buttons Menu', 'Facebook', 'Facebook Button Click',0,true]);">Facebook<img src="${pageContext.request.contextPath}/webcontent/css/images/facebook_icon.gif" alt="" class="imageItem" /></a>
                                                                    </div>
                                                                    <div class="lineItem" >
                                                                        <a href="http://twitter.com/home?status=Currently%20reading http%3A%2F%2Fwww.amtrak.com%2Fservlet%2FContentServer%3Fpagename%3Dam%2FLayout%26c%3DPage%26cid%3D1237405732505" target="_blank"  onclick="_gaq.push(['_trackEvent', 'Tool Buttons Menu', 'Twitter', 'Twitter Button Click',0,true]);">Twitter<img src="${pageContext.request.contextPath}/webcontent/css/images/twitter_icon.gif" alt="" class="imageItem" /></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                    </div>

                                                    <div class="breadcrumbs">



                                                    </div>
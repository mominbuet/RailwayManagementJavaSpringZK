<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<jsp:include page="includes/header.jsp" />
<div id="button_wrapper">
    <ul id="buttons">	            
        <li><a href=''><img src='${pageContext.request.contextPath}/webcontent/css/images/btn_home-on.gif' alt='Home' /></a>     
        </li>
        <li><a href='timetables.do'><img src='${pageContext.request.contextPath}/webcontent/css/images/btn_Timetable-off.gif' alt='Timetables' /></a> 
        </li>
        <li><a href="stationsearch.do"><img src='${pageContext.request.contextPath}/webcontent/css/images/btn_Station-off.gif' alt='Stations' /></a>
            <div class="dynlist">
                <ul>
                    <li class="ie6_first_child">
                    <a href='stationsearch.do'> Find a Station</a></li>
                    <li>
                    <a href='#'> Dhaka </a></li>
                    <li> <a href='#'> Chittagong </a></li>
                    <li> <a href='#'> Rajshahi </a></li>
                    <li> <a href='#'> Sylhet  </a></li>
                    <li> <a href='#'>  Rangpur </a></li>
                    <li class="ie6_last_child">
                    <a href='#'> Khulna</a>
                    </li>
                </ul>
            </div>
        </li>

        <li>  
            <a href="http://www.amtrak.com/servlet/ContentServer/Page/1237405732511/1237405732511"><img src='${pageContext.request.contextPath}/webcontent/css/images/btn_Routes-off.gif' alt='Routes' /></a>
            <div class="dynlist">
                <ul>
                    <li class="ie6_first_child">
                        <a href='#'>    East</a></li>
                    <li><a href='#'> Midwest </a></li>
                    <li><a href='#'> Northeast</a></li>
                    <li><a href='#'> Northwest</a></li>
                    <li><a href='#'> South</a></li>
                    <li> <a href='#'>West</a>
                    </li>
                </ul>
            </div>
        </li>

        <li>

            <a href="http://www.amtrak.com/servlet/ContentServer/Page/1237405732514/1237405732514"><img src='${pageContext.request.contextPath}/webcontent/css/images/btn_Deals-off.gif' alt='Tab1' /></a>
            <div class="dynlist"><ul><li class="ie6_first_child">
                        <a href=''>
                            Entity1
                        </a></li><li>
                        <a href=''>
                            Entity2
                        </a></li><li>
                        <a href=''>
                            Entity3
                        </a></li><li>
                        <a href=''>
                            Entity4
                        </a></li><li>
                        <a href=''>
                            Entity5
                        </a></li><li>
                        <a href=''>
                            Entity6
                        </a></li><li>
                        <a href=''>
                            Entity7
                        </a></li></ul></div>

        </li>

        <li>

            <a href="http://www.amtrak.com/servlet/ContentServer/Page/1237405732517/1237405732517"><img src='${pageContext.request.contextPath}/webcontent/css/images/btn_Plan-off.gif' alt='Tab2' /></a>
            <div class="dynlist"><ul><li class="ie6_first_child">
                        <a href=''>
                            Entity1
                        </a></li><li>
                        <a href=''>
                            Entity2
                        </a></li><li>
                        <a href=''>
                            Entity3
                        </a></li><li>
                        <a href=''>
                            Entity4
                        </a></li><li>
                        <a href=''>
                            Entity5
                        </a></li><li>
                        <a href=''>
                            Entity6
                        </a></li><li>
                        <a href=''>
                            Entity7
                        </a></li>
                    <li class="ie6_last_child">
                        <a href=''>
                            Entity8
                        </a></li></ul>
            </div>

        </li>
    </ul>
</div>	  

<jsp:include page="includes/topnav.jsp"/>     
<div id="content_body">

</div>
<br class="clear_both" ></div>
<jsp:include page="includes/footer.jsp" />
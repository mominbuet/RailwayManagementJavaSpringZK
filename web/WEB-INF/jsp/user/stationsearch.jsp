<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<jsp:include page="includes/header.jsp" />
<div id="button_wrapper">
    <ul id="buttons">	            
        <li><a href='home.do'><img src='${pageContext.request.contextPath}/webcontent/css/images/btn_home-off.gif' alt='Home' /></a>     
        </li>
        <li><img src='${pageContext.request.contextPath}/webcontent/css/images/btn_Timetable-off.gif' alt='Timetables' />
        </li>
        <li><a href=""><img src='${pageContext.request.contextPath}/webcontent/css/images/btn_Station-on.gif' alt='Stations' /></a>
            <div class="dynlist">
                <ul>
                    <li class="ie6_first_child">
                    <a href='#'> Find a Station</a></li>
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
                        <a href='#'>East</a></li>
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
      <c:if test="${flag == '0'}">
        <p> 
            Here Enter An Station Name .Then Click Search Button Then we will see Our Station With 
            Information.We will also can see the langitude and lattitude of This Station.
        </p>
        <br/>
        <p>
            Please wait for loading google map.
        </p>
        <br/>
       <form action="stationsearch.do" method="post">
              Station Name: <input type="text" name="sname"><br/><br/>
              &nbsp;&nbsp;<input type="submit" value="Search">
        </form>
      </c:if>  
      <c:if test="${flag == '1'}">
          <c:forEach var="item" items="${slist}">
              Station name : ${item.base_name} <br/>
              Longitude : ${item.loc.longitude} <br/>
              Latitude : ${item.loc.latitude} <br/>
          </c:forEach>
          
      </c:if>  
   
</div>
<!--

    <div id="CMS_pageTop"></div>
    <h1 id='timetable_header' class='fir'>Amtrak Train Schedules<span></span></h1>

    <p>Printable timetables for each route are available in Adobe&reg; PDF format. Timetables are only as current as the date of the last printing. Download the free <a href="http://get.adobe.com/reader/" target="_blank">Adobe&reg; Reader&reg; plug-in</a>.</p>
    <p>

        <a href='http://www.amtrak.com/servlet/BlobServer?blobcol=urldata&amp;blobtable=MungoBlobs&amp;blobkey=id&amp;blobwhere=1249233936508&amp;blobheader=application%2Fpdf&amp;blobheadername1=Content-disposition&amp;blobheadervalue1=attachment;filename=Amtrak_System-Timetable-Fall-Winter-2012.pdf' onclick="_gaq.push(['_trackEvent', 'Amtrak.com - PDF', 'Download PDF', 'BdRailway System Timetable - Fall 2011/Winter 2012', 0, true]);" >Bangladesh System Timetable</a>

        (PDF, 18.9MB)</p>

    <div id="route_index_table" class="std_table_wrapper">

        <table class="std_table table1 route_table" width="80%" border="0">
            <tr>
                <td class="Heading">Intercity Trains (Metre Gauge & Dual Gauge)</td>
            </tr>

            <tr class="rowdeep"><td height="1" bgcolor="#325439"></td></tr>
            <tr>
                <td class="bodytext" align="center">
                    <table  width=75% border=0 cellpadding=1 cellspacing=1>
                        <tr class="rowdeep">
                            <td class="bodytext">

                                <b>

                                    Train no </b> 
                            </td>

                            <td class="bodytext">

                                <b>

                                    Name </b> 
                            </td>
                            <td class="bodytext">

                                <b>

                                    Off day </b> 
                            </td>
                            <td class="bodytext">


                                <b>

                                    From </b> 
                            </td>
                            <td class="bodytext">

                                <b>

                                    Departure </b> 
                            </td>
                            <td class="bodytext">

                                <b>


                                    To </b> 
                            </td>
                            <td class="bodytext">

                                <b>

                                    Arrival </b> 
                            </td>
                        </tr>


                    </table>
                </td>
            </tr>

            <tr><td height="10"></td></tr>





        </table>
        </table>
        <br>


    </div>
</div>	-->
<br class="clear_both" ></div>
<jsp:include page="includes/footer.jsp" />
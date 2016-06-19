<%-- 
    Document   : admin_login
    Created on : Oct 2, 2012, 12:14:20 AM
    Author     : Gunner
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>


<%@ taglib uri="http://www.zkoss.org/jsp/zul" prefix="z" %>
<jsp:include page="Include_files/header.jsp" />
<jsp:include page="Include_files/topheader.jsp" />
<script src='http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js'></script>
	<script src='http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.2/jquery-ui.min.js'></script>
	<script src='${pageContext.request.contextPath}/js/slidetounlock.js'></script>
        <div class="left">
<div id="well">
			
        <h2><strong id="slider"></strong> <span>Slide to See Login</span></h2>
			
		</div>
            

<div id="pnl">
<z:page>
 <z:window id="win" title="Admin Login" width="60%" apply="Controller.admin" closable="true" 
	action="show: slideDown;hide: slideUp">                              
            <z:grid>
                <z:columns>
                    <z:column width="30%"/>
                    <z:column />
                </z:columns>
                <z:rows>
                    <z:row align="center">
                        <z:label value="Username" tooltiptext=""/> 
                        <z:textbox id = "txtuser" width="40%" value="@bind(user.username)" constraint="no empty:Enter User Name" />
                    
                    </z:row>
                    <z:row align="center">
                        <z:label value="Password"/> 
                        <z:textbox id = "txtpass" value="@bind(user.password)" width="40%" type="password" constraint="no empty:Enter Password" />
                    </z:row>
                    <z:row align="center">
                        <z:label id="lblmsg" value=""/> 
                    </z:row>
                    <z:row align="right" spans="2">
                        <z:button id="submitButton" sclass="button" label="Submit" />
                            
                    </z:row>
                </z:rows>
            </z:grid>
 </z:window>
</z:page>
</div>
            </div>
<jsp:include page="Include_files/sidebar.jsp" />
<jsp:include page="Include_files/footer.jsp" />



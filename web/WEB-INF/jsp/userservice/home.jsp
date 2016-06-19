<%-- 
    Document   : see_passengers
    Created on : Oct 2, 2012, 10:24:26 PM
    Author     : Gunner
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<jsp:include page="Include_files/header.jsp" />
<%@ taglib uri="http://www.zkoss.org/jsp/zul" prefix="z" %>
<z:init class="org.zkoss.zkplus.databind.AnnotateDataBinderInit" />

<z:page> 
        <z:hbox spacing="1">

            <z:grid >
                <z:columns>
                    <z:column width="20%"/>
                    <z:column />

                </z:columns>
                <z:rows>
                    <z:row height="50px">
                        <z:label value="First Name"/>
                        <z:label value="${user.firstname}"/>
                    </z:row>
                     <z:row height="50px">
                        <z:label value="Last Name"/>
                        <z:label value="${user.lastname}"/>
                    </z:row>
                     <z:row height="50px">
                        <z:label value="Email"/>
                        <z:label value="${user.email}"/>
                    </z:row>
                     <z:row height="50px">
                        <z:label value="Phone"/>
                        <z:label value="${user.phone}"/>
                    </z:row>
                     <z:row height="50px">
                        <z:label value="SSN"/>
                        <z:label value="${user.ssn}"/>
                    </z:row>
                </z:rows>
            </z:grid>
            <z:panel title="Ticket Status" width="400px" id="container" >
                <z:panelchildren>
                    <z:grid mold="paging" pageSize="6">
                        <z:columns>
                            <z:column width="30%"/>
                            <z:column />

                        </z:columns>
                        <z:rows>
                      
                            <z:row height="40px">
                                <z:label value="From Station"/>
                                <z:label value="${journey.journey_id.source_id.base_name}"/>
                            </z:row>
                             <z:row height="40px">
                                <z:label value="To Station"/>
                                <z:label value="${journey.journey_id.dest_id.base_name}"/>
                            </z:row>
                             <z:row height="40px">
                                <z:label value="Buy Time"/>
                                <z:label value="${journey.buy_time}"/>
                            </z:row>
                             <z:row height="40px">
                                <z:label value="First"/>
                                <z:label value="${f1}"/>
                            </z:row>
                             <z:row height="40px">
                                <z:label value="Second"/>
                                <z:label value="${f2}"/>
                            </z:row>
                            <z:row height="40px">
                                <z:label value="Third"/>
                                <z:label value="${f3}"/>
                            </z:row>
                        </z:rows>
                    </z:grid>

                </z:panelchildren>
            </z:panel>
        </z:hbox>
    
</z:page>

     <div class="clr"></div>
    </div>
    
  </div>

  <jsp:include page="Include_files/footer.jsp" />
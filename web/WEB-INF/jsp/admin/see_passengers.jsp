<%-- 
    Document   : see_passengers
    Created on : Oct 2, 2012, 10:24:26 PM
    Author     : Gunner
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<jsp:include page="Include_files/header.jsp" />
<%--
<%@ taglib uri="http://www.zkoss.org/jsp/zul" prefix="z" %>
<z:init class="org.zkoss.zkplus.databind.AnnotateDataBinderInit" />--%>
<%--
<z:page>
    <z:window sclass="cardSys" border="none"
    apply="org.zkoss.bind.BindComposer"
    viewModel="@id('vm') @init('viewmodel.ContributorViewModel')">
        <z:style src="/style_zk.css" />
    <z:hlayout spacing="0" height="400px">
        <z:listbox sclass="employee-list" vflex="true" hflex="1"
            model="@load(vm.contributorList)" selectedItem="@bind(vm.selectedContributor)" >
            <z:auxhead>
                <z:auxheader colspan="3" class="topic">Passenger List</z:auxheader>
            </z:auxhead>
            <z:listhead sizable="true">
                <z:listheader label="Id" width="50px" align="center" />
                <z:listheader label="Ticket ID" width="50px" align="center" />
                <z:listheader label="Full Name" align="center" />
                <z:listheader label="Email" width="150px" align="center" />
                <z:listheader label="Phone No" width="90px" align="center" />
                <z:listheader label="SSN" width="70px" align="center" />
            </z:listhead>
            <z:template name="model" var="contributor">
                <z:listitem>
                    <z:listcell label="@load(contributor.getCust_id())" />
                    <z:listcell label=".." />
                    <z:listcell label="@load(contributor.getFirstname())" />
                    <z:listcell label="@load(contributor.getEmail())" />
                    <z:listcell label="@load(contributor.getPhone()))" />
                    <z:listcell label="@load(contributor.getSsn())" />
                </z:listitem>
            </z:template>
 
        </z:listbox>
    <z:window sclass="card-pre" title="Passenger Preview" hflex="1" vflex="true" border="normal">
            <z:div sclass="card">
                <z:image sclass="logo" src="/images/ZK-Logo.gif" />
                <z:vlayout sclass="title">
                    <z:label sclass="name" value="@load(vm.selectedContributor.getFirstname())" />
                    <z:hlayout sclass="dept">
                        <z:label value="Email:" />
                        <z:label value="@load(vm.selectedContributor.getEmail())" />
                        
                    </z:hlayout>
                </z:vlayout>
                <z:div sclass="number">
                    <z:label value="Tel:" />
                    <z:label value="@load(vm.selectedContributor.getPhone())" />
                </z:div>
            </z:div>
        </z:window>
    </z:hlayout>
    <z:grid>
        <z:auxhead>
            <z:auxheader colspan="5" class="topic">Edit Data</z:auxheader>
    </z:auxhead>
        <z:columns>
            <z:column label="ID" align="center" />
            <z:column label="First Name" align="center" />
            <z:column label="Last Name" align="center" />
            <z:column label="Email" align="center" />
            <z:column label="Phone No" align="center" />
        </z:columns>
        <z:rows>
            <z:row>
                <z:label value="@load(vm.selectedContributor.getCust_id())" />
                <z:textbox value="@bind(vm.selectedContributor.getFirstname())" width="95%" />
                <z:textbox value="@bind(vm.selectedContributor.getLastname())" width="95%" />
                <z:label value="@bind(vm.selectedContributor.getEmail())" width="95px" />
                <z:label value="@load(vm.selectedContributor.getPhone())" />
                
            </z:row>
        </z:rows>
    </z:grid>
    </z:window>
   </z:page>
    --%>   
    <jsp:include page="Include_files/admin_topheader.jsp" />
    <jsp:include page="../binder.zul"/>
     <div class="clr"></div>
    </div>
    
  </div>
            <jsp:include page="Include_files/footer.jsp" />
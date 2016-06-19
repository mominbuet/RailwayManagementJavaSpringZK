<%-- 
    Document   : google_map
    Created on : Oct 10, 2012, 1:44:01 AM
    Author     : Gunner
--%>

<%@page import="maphandler.HasMap"%>
<%@page import="maphandler.getStations"%>
<%@page import="orm.*"%>
<%@page import="Controller.admin_db"%>
<%@page import="java.util.*"%>
<%@page import="org.springframework.context.annotation.Import"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Mapping Trains & Routes</title>
          <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
    <style type="text/css">
      html { height: 100% }
      body { height: 100%; margin: 0; padding: 0 }
      
    </style>
 <% 

    List<route_info> points = new admin_db().get_routes();
    /*for(route_info  rt1: points)
    {
        out.print(rt1.getRoute());
    }
    */

    ArrayList<ArrayList<Integer>> point_list = new ArrayList<ArrayList<Integer>>();
    for(route_info r:points)
    { 
        String route =r.getRoute().trim();
        String[] routes = route.split(" ");
        
        ArrayList<Integer> intlst = new ArrayList<Integer>();
        for(String str : routes)
       {
            if(str!=null)
                intlst.add(Integer.parseInt(str));
            //out.print(str);
        
        }
         //out.println();
        point_list.add(intlst);
    }
    
%>
    <script type="text/javascript"
      src="http://maps.googleapis.com/maps/api/js?key=AIzaSyDIvs-BO2T_sI-z_bIFxU_10-R7bhqT27E&sensor=true">
    </script>
    <script type="text/javascript">
	var flightPath;
      function initialize() {
	  var myLatlng = new google.maps.LatLng(23.72822,90.40988);

        var mapOptions = {
          center: myLatlng,
          zoom: 7,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
            
    
        <%
        //admin_db adb= new admin_db();
        int k=0;
        HasMap has = new HasMap();
        has.init();
        //ArrayList<Integer> rt = point_list.get(1);
        for(ArrayList<Integer> rt:point_list)
        {
            out.println("var flightPlanCoordinates"+k+" = [");
            int sze=0;
            k+=1;
            //System.out.println("shad size2 "+rt.size());
            for(Integer  rt1: rt)
            {
                point_info pi =  has.getPoint(rt1);
                if(sze<rt.size()-1)
                    out.print("new google.maps.LatLng("+pi.getLatitude()+","+pi.getLongitude()+"),\n"); 
                else
                    out.print("new google.maps.LatLng("+pi.getLatitude()+","+pi.getLongitude()+")\n"); 
                //System.out.println("shad size"+sze);
                sze+=1;
            }
            out.println("];");
            if(k>300)break;
        }
        
        /*List stations =new getStations().retriveStations(); 
         for(int i=0;i<stations.size();i++) {
  base_info bi = (base_info)stations.get(i);
    //mymap.appendChild(new Gmarker(bi.getBase_name(),bi.getLoc().getLatitude(),bi.getLoc().getLongitude()));
  out.println("var marker = new google.maps.Marker({");
  
  }*/
        %>/*
    new google.maps.LatLng(23.9744217, 91.2722038),
    new google.maps.LatLng(23.9728999,91.2710991),
    new google.maps.LatLng(23.9694399, 91.2687399),
    new google.maps.LatLng(23.9671842, 91.267228),
    new google.maps.LatLng(24.8050987,88.9861851),
    new google.maps.LatLng(22.4711269,91.8004284)*/

   var lineSymbol = {
    path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
    scale: 4,
    fillOpacity: 1,
    fillColor: '#000080',
    strokeColor: '#000080'
  };

  /*flightPath = new google.maps.Polyline({
    path: */
<%
       for(int j=0;j<k;j++)
       {
           out.println("flightPath"+j+" = new google.maps.Polyline({");
 
            out.println("path:flightPlanCoordinates"+j+",");
        out.println("strokeColor: '#FF0000',");
        out.println("strokeOpacity: 1.0,");
        out.println("strokeWeight: 3,");
        //out.println("icons: [{ icon: lineSymbol,offset: '100%'}]");
        out.println(" });");
        out.println("flightPath"+j+".setMap(map);");
       }
%>
    
    
   
	
 // });

 /*
  flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 3,
	icons: [{
      icon: lineSymbol,
      offset: '100%'
    }]
  });
         */

  //flightPath.setMap(map);

var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h2 id="firstHeading" class="firstHeading">Uluru</h2>'+
    '<div id="bodyContent">'+
    '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
    'Heritage Site.</p>'+
    '<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
    'http://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p>'+
    '</div>'+
    '</div>';
var infowindow = new google.maps.InfoWindow({content: contentString});

var marker = new google.maps.Marker({position: myLatlng, map: map,title:"Uluru (Ayers Rock)"});

google.maps.event.addListener(marker, 'click', function() {infowindow.open(map,marker);});
<%
    List stations =new getStations().retriveStations();    
    for(int i=0;i<stations.size();i++) {
        base_info bi = (base_info)stations.get(i);
        out.println("var contentString"+i+" = '<div id=\"content"+i+"\">"+bi.getBase_name()+"</div>';"); 
        
        out.println("var infowindow"+i+" = new google.maps.InfoWindow({content:contentString"+i+" });");
        out.println("var marker"+i+" = new google.maps.Marker({position: new google.maps.LatLng("+bi.getLoc().getLatitude()+","+bi.getLoc().getLongitude()+"), map: map,title:\""+bi.getBase_name()+"\"});");
        out.println("google.maps.event.addListener(marker"+i+", 'click', function() {infowindow"+i+".open(map,marker"+i+");});");
    }
%> 
    /*    
var infowindow = new google.maps.InfoWindow({content: contentString});
  var marker = new google.maps.Marker({position: myLatlng, map: map,title:"Uluru (Ayers Rock)"});
    google.maps.event.addListener(marker, 'click', function() {infowindow.open(map,marker);});*/
      }
	  function animateCircle() {
    var count = 0;
    offsetId = window.setInterval(function() {
      count = (count + 1) % 200;
      <% 
     /* for(int j=0;j<k;j++)
       {
          out.println("var icons = flightPath"+j+".get('icons');icons[0].offset = (count / 2) + '%';flightPath"+j+".set('icons', icons);}, 100);");
      }*/
        %>
      var icons = flightPath0.get('icons');
      icons[0].offset = (count / 2) + '%';
      flightPath0.set('icons', icons);}, 100);
}

    </script>
    </head>
    <body onload="initialize();/*animateCircle()*/">
        <%
        /*int k=0;
    for(ArrayList<Integer> rt : point_list)
    {
        k+=1;
        for(Integer  rt1: rt)
        {
            out.print(new admin_db().get_point(rt1).getLatitude());
            out.print(" ");
        }
        out.println();
        if(k>2)break;
    }
*/
%>
<div id="map_canvas" style="width:100%; height:100%"></div>
  <%--
<c:forEach var="item" items="${routelist}">
                    ${item.route} <br/>
                 </c:forEach>
  --%>
       
  </body>
</html>

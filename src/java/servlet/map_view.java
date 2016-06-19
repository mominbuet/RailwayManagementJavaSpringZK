/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package servlet;

import Controller.admin_db;
import java.io.*;
import java.net.*;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import maphandler.HasMap;
import maphandler.getStations;
import orm.base_info;
import orm.point_info;
import orm.route_info;
/**
 *
 * @author Gunner
 */
public class map_view extends HttpServlet {

    /** 
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code> methods.
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        //final JMapViewer map = new JMapViewer();
       String route_param = request.getParameter("route");
       Integer route_idd = Integer.parseInt(route_param);
            try{
                
//                ServerSocket ssock= new ServerSocket(9009);
//                Socket sock = ssock.accept();
//                
//                DataInputStream ins = new DataInputStream(sock.getInputStream());
                
                //BufferedReader br = new BufferedReader(new DataInputStream(ssock.getInputStream()));
            //BufferedReader in = null; 
//            Socket sock= new Socket("127.0.0.1",9009);
//  PrintStream ps = new PrintStream(sock.getOutputStream());
//  ps.println(" Hi from client");
//  DataInputStream is = new DataInputStream(sock.getInputStream());
  //System.out.println(is.readLine());
            
            out.println("<html>");
            out.println("<head>");
            out.println("<meta name=\"viewport\" content=\"initial-scale=1.0, user-scalable=no\" />");
            out.println("<title>Servlet map_view</title>"); 
//            out.println(ins.readLine());
//            o
//    sock.close();
            out.println("<style type=\"text/css\">html { height: 100% }body { height: 100%; margin: 0; padding: 0 }</style>");
             //out.println(route_idd); 
                     List<route_info> points = new admin_db().get_routes(route_idd);
             out.println("size "+points.size());
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
    out.println("<script type=\"text/javascript\" src=\"http://maps.googleapis.com/maps/api/js?key=AIzaSyDIvs-BO2T_sI-z_bIFxU_10-R7bhqT27E&sensor=true\"> </script>");
    out.println("<script type=\"text/javascript\">var flightPath;function initialize() {var myLatlng = new google.maps.LatLng(23.72822,90.40988);");
    out.println("var mapOptions = {center: myLatlng, zoom: 7,mapTypeId: google.maps.MapTypeId.ROADMAP};");
    out.println("var map = new google.maps.Map(document.getElementById(\"map_canvas\"),mapOptions);");
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
    out.println("var lineSymbol = {path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,scale: 4,fillOpacity: 1,fillColor: '#000080',strokeColor: '#000080'};");
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
    out.println("var contentString = '<div id=\"content\">Dhaka Capital</div>';var infowindow = new google.maps.InfoWindow({content: contentString});");
    out.println("var marker = new google.maps.Marker({position: myLatlng, map: map,title:\"Dhaka Capital\"});");
    out.println("google.maps.event.addListener(marker, 'click', function() {infowindow.open(map,marker);});");
    List stations =new getStations().retriveStations();    
    for(int i=0;i<stations.size();i++) {
        base_info bi = (base_info)stations.get(i);
        out.println("var contentString"+i+" = '<div id=\"content"+i+"\">"+bi.getBase_name()+"</div>';"); 
        
        out.println("var infowindow"+i+" = new google.maps.InfoWindow({content:contentString"+i+" });");
        out.println("var marker"+i+" = new google.maps.Marker({position: new google.maps.LatLng("+bi.getLoc().getLatitude()+","+bi.getLoc().getLongitude()+"), map: map,title:\""+bi.getBase_name()+"\"});");
        out.println("google.maps.event.addListener(marker"+i+", 'click', function() {infowindow"+i+".open(map,marker"+i+");});");
    }
    out.println("}\nfunction animateCircle() {  var count = 0;offsetId = window.setInterval(function() {count = (count + 1) % 200;");
    out.println("var icons = flightPath14.get('icons'); icons[0].offset = (count / 2) + '%';flightPath14.set('icons', icons);}, 100);");
    out.println();
    out.println();
    out.println();
    out.println();
        
    out.println("}</script>");
    
    out.println("</head>");
            out.println("<body onload=\"initialize();animateCircle()\">");
//            int points = new Query_user().get_routes();
//            out.print(points);
//            for(int i=0;i<points.size();i++)
//            {
//                route_info rt = points.get(i);
//                out.print(rt.getRoute());
//            }
           
    out.println("<div id=\"map_canvas\" style=\"width:100%; height:100%\"></div>");
    out.println();
            //out.println("<h1>Servlet map_view at " + request.getContextPath () + "</h1>");
            out.println("</body>");
            out.println("</html>");
             
        }
            
            finally {            
            out.close();
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /** 
     * Handles the HTTP <code>GET</code> method.
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /** 
     * Handles the HTTP <code>POST</code> method.
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /** 
     * Returns a short description of the servlet.
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
}

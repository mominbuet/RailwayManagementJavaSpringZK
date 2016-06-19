/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package servlet;

import Controller.admin_db;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import orm.base_info;
import orm.route_info;

/**
 *
 * @author Gunner
 */
public class see_station extends HttpServlet {

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
        String route_param = request.getParameter("station");
        if(route_param.contains(","))
        {
            String[] arr = route_param.split(",");
        }
        /*else
            String[] arr = { route_param};*/
       //Integer station_idd = Integer.parseInt(route_param);
        try {
            /* TODO output your page here*/
            out.println("<html>");
            out.println("<head>");
            out.println("<meta name=\"viewport\" content=\"initial-scale=1.0, user-scalable=no\" />");
            out.println("<title>View Station</title>"); 
//            out.println(ins.readLine());
//            o
//    sock.close();
            out.println("<style type=\"text/css\">html { height: 100% }body { height: 100%; margin: 0; padding: 0 }</style>");
             //out.println(route_idd); 
            /*         List<route_info> points = new admin_db().get_routes(route_idd);
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
    }*/
    base_info bi = new admin_db().get_base(route_param);
    
    out.println("<script type=\"text/javascript\" src=\"http://maps.googleapis.com/maps/api/js?key=AIzaSyDIvs-BO2T_sI-z_bIFxU_10-R7bhqT27E&sensor=true\"> </script>");
    out.println("<script type=\"text/javascript\">var flightPath;function initialize() {var myLatlng = new google.maps.LatLng("+bi.getLoc().getLatitude()+","+bi.getLoc().getLongitude()+");");
    out.println("var mapOptions = {center: myLatlng, zoom: 7,mapTypeId: google.maps.MapTypeId.ROADMAP};");
    out.println("var map = new google.maps.Map(document.getElementById(\"map_canvas\"),mapOptions);");
    out.println("var contentString = '<div id=\"content\">"+bi.getBase_name()+"</div>';var infowindow = new google.maps.InfoWindow({content: contentString});");
    out.println("var marker = new google.maps.Marker({position: myLatlng, map: map,title:\""+bi.getBase_name()+"\"});");
    out.println("google.maps.event.addListener(marker, 'click', function() {infowindow.open(map,marker);});");
    out.println("}</script>");
    
    out.println("</head>");
            out.println("<body onload=\"initialize();\">");
             out.println("<div id=\"map_canvas\" style=\"width:100%; height:100%\"></div>");
            out.println("</body>");
            out.println("</html>");
             
        } finally {            
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

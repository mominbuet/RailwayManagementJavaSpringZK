/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package UserHandler;

import QueryProcess.Query_user;
import java.util.List;
import org.omg.PortableServer.REQUEST_PROCESSING_POLICY_ID;
import org.springframework.ui.Model;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class HandlingRequest {
   @RequestMapping("/timetables")
    public String forTimetable(Model map)
    {
        List tlist=new Query_user().getTimetables();
        System.out.println("size is "+tlist.size());
        map.addAttribute("timetablelist",tlist);
        return "timetables";
    }
   @RequestMapping("/home")
   public String forHome(Model map)
   {
       
       return "home";
   }
   @RequestMapping("/test")
   public String forTest(Model map)
   {
       
       return "test";
   }
   @RequestMapping("/stationsearch")
   public String forSearch(Model map)
   {
       map.addAttribute("flag",new String("0"));
       return "stationsearch";
   }
   @RequestMapping(value="/stationsearch",method= RequestMethod.POST)
   public String forSea(@RequestParam("sname") String station,Model map)
   {
       List stationlist=new Query_user().getStation(station);      
       map.addAttribute("flag",new String("1"));
       map.addAttribute("slist",stationlist);
       return "stationsearch";
   }
   @RequestMapping("/checkschedule")
   public String forSchedule(@RequestParam("wdf_origin") String source,@RequestParam("wdf_destination") String dest, Model map)
   {
       map.addAttribute("alltrain",new Query_user().activeTrain(source, dest));
       return "checkschedule";
   }
}

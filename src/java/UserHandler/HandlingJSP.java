/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package UserHandler;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import QueryProcess.*;

/**
 *
 * @author Gunner
 */
@Controller
public class HandlingJSP {
    @RequestMapping("/admin_login")
    public String UserRegistration(Model map)
    {
        //map.addAttribute("userNew",new Customer());
        return "admin_login";
    }
    @RequestMapping("/see_passengers")
    public String UserPassengers(Model map)
    {
        //map.addAttribute("userNew",new Customer());
        return "see_passengers";
    }
    @RequestMapping("/google_map")
    public String forMap(Model map)
    {
        //map.addAttribute("userNew",new Customer());
        return "google_map";
    }
    @RequestMapping("/google_map_routed")
    public String forroutedMap(Model map)
    {
        //map.addAttribute("userNew",new Customer());
        return "google_map_routed";
    }
}

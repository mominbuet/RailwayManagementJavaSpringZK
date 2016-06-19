/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package UserHandler;

import QueryProcess.serviceQuery;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import orm.Cust_info;
import orm.Journey_info;
import orm.Seat_info;
import orm.Ticket_info;

@Controller
public class serviceRequest {
    @RequestMapping("/default")
    public String userReques(Model map)
    {
        return "default";
    }
     @RequestMapping(value="/home",method= RequestMethod.POST)
    public String userRequesHome(@RequestParam("_name") String email,@RequestParam("_password") String password,Model map)
    {
        Cust_info info=new serviceQuery().getUserVerify(email, password);
        map.addAttribute("user", info);
        Ticket_info tinfo=new serviceQuery().getTicket(info.getEmail());
       
        List seatList=null;
        if(tinfo != null){
             map.addAttribute("journey", tinfo);
             seatList=new serviceQuery().getTicket(tinfo.getTicket_id());
        }
        int flag=0;
        Seat_info si=null;
        if(seatList==null){
            map.addAttribute("f"+1,0);
            map.addAttribute("f"+2,0);
            map.addAttribute("f"+3,0);
        }
        else{
            for(int i=1;i<=3;i++)
            {
                  flag=0;
                  for(int j=0;j<seatList.size();j++)
                  {
                      si=(Seat_info) seatList.get(j);
                      if(si.getTicket_class()==i)
                      {
                          map.addAttribute("f"+i,si.getSeat_no());
                          flag=1;
                          break;
                      }
                  }
                  if(flag==0)
                     map.addAttribute("f"+i,0);
            }
        }
        return "home";
    }
}

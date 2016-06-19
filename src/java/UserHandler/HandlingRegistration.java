package UserHandler;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import QueryProcess.*;

@Controller
public class HandlingRegistration {
    
    @RequestMapping("/registration")
    public String UserRegistration(Model map)
    {
        map.addAttribute("userNew",new Customer());
        return "registration";
    }
    @RequestMapping("/employee_dialog")
    public String Useremployee(Model map)
    {
        //map.addAttribute("userNew",new Customer());
        return "employee_dialog";
    }
    @RequestMapping("/modal_dialog")
    public String UserModel(Model map)
    {
        //map.addAttribute("userNew",new Customer());
        return "modal_dialog";
    }
   /* @RequestMapping(value="/registration",method= RequestMethod.POST)
    public String saveUser(Customer cust)
    {
        new Customer_q().saveCustomer(cust);
        return "registration";
    }*/
}

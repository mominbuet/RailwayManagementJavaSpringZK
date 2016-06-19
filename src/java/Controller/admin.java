/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Controller;

import javax.servlet.http.*;
import orm.admin_info;
import org.zkoss.zul.*;
import org.zkoss.zk.ui.*;
import org.zkoss.zk.ui.event.Event;
import org.zkoss.zk.ui.event.MouseEvent;
import org.zkoss.zk.ui.select.SelectorComposer;
import org.zkoss.zk.ui.select.annotation.Listen;
import org.zkoss.zk.ui.select.annotation.Wire;
/**
 *
 * @author Gunner
 */
public class admin  extends SelectorComposer {
     private static final long serialVersionUID = 1L;
    
     @Wire
    private Textbox txtuser;
      @Wire
    private Textbox txtpass;
      
    @Listen("onClick = #submitButton")
    public void showHi(Event event) {
        if(txtuser.getValue()!=null&&txtpass.getValue()!=null)
        {
            admin_info ai = new admin_db().checklogin(txtuser.getValue(), txtpass.getValue());
            if(ai.getAdmin_id()!=0)
            {
                Cookie cookie = new Cookie ("username",txtuser.getValue());
                cookie.setMaxAge(-1);
                new cookies().setCookie(cookie);
                Sessions.getCurrent().setAttribute("username",ai);
                Executions.sendRedirect("/see_passengers.nasif");
            }
            else
                Messagebox.show("Username and Password is not correct."+ai.getAdmin_name(), "Warning", Messagebox.OK, Messagebox.EXCLAMATION);
        }
        else
            Messagebox.show("Please insert the field correctly", "Warning", Messagebox.OK, Messagebox.EXCLAMATION);
    
    }
}

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Controller;
import org.zkoss.zk.ui.*;
import org.zkoss.zk.ui.event.*;
import org.zkoss.zk.ui.util.*;
import org.zkoss.zk.ui.ext.*;
import org.zkoss.zk.au.*;
import org.zkoss.zk.au.out.*;
import org.zkoss.zul.*;
import org.zkoss.lang.Strings;
import java.util.*;
/**
 *
 * @author Gunner
 */
public class composeBinder extends GenericForwardComposer{
    
    public Window profilewin;
        public void doAfterCompose(Component comp) throws Exception {
		super.doAfterCompose(comp);	
      if (comp.getId().equals("profilewin")) {
        profilewin.setTitle("Hello: "+Sessions.getCurrent().getAttribute("user").toString()+"!");
        Sessions.getCurrent().removeAttribute("user");
      }
}
}

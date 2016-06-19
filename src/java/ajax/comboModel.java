/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package ajax;

import QueryProcess.Query_user;
import org.w3c.dom.ls.LSException;
import org.zkoss.zk.ui.Sessions;
import org.zkoss.zul.AbstractListModel;
import org.zkoss.zul.event.ListDataEvent;

/**
 *
 * @author NasiF
 */
public class comboModel extends AbstractListModel {

    @Override
    public Object getElementAt(int i) {
        String s=(String)Sessions.getCurrent().getAttribute("sour");
        String d=(String)Sessions.getCurrent().getAttribute("dest");
        if(s==null)  s="";
        if(d==null) d="";
        return new Query_user().activeTrain(s, d).toArray()[i];
    }

    @Override
    public int getSize() {
        String s=(String)Sessions.getCurrent().getAttribute("sour");
        String d=(String)Sessions.getCurrent().getAttribute("dest");
        if(s==null)  s="";
        if(d==null) d="";
        return new Query_user().activeTrain(s, d).size();
    }
    public void update()
    {
        this.fireEvent(ListDataEvent.CONTENTS_CHANGED, 0,this.getSize() - 1);
    }
    
}

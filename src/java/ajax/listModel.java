/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package ajax;

import QueryProcess.Query_user;
import org.zkoss.zk.ui.Sessions;
import org.zkoss.zul.AbstractListModel;
import org.zkoss.zul.event.ListDataEvent;

/**
 *
 * @author Dr.Mahamud
 */
public class listModel extends AbstractListModel {

    @Override
    public Object getElementAt(int i) {
        String attr=(String)Sessions.getCurrent().getAttribute("sattr");
        if(attr==null) attr="";
        return new Query_user().stationList(attr).toArray()[i];
    }

    @Override
    public int getSize() {
        String attr=(String)Sessions.getCurrent().getAttribute("sattr");
        if(attr==null) attr="";
        return new Query_user().stationList(attr).size();
    }
    public void update()
    {
        this.fireEvent(ListDataEvent.CONTENTS_CHANGED, 0,this.getSize() - 1);
    }
}

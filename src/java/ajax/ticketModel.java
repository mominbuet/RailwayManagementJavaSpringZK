/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package ajax;

import QueryProcess.Query_user;
import org.zkoss.zk.ui.Sessions;
import org.zkoss.zul.AbstractListModel;
import org.zkoss.zul.event.ListDataEvent;


public class ticketModel extends AbstractListModel {

    @Override
    public Object getElementAt(int i) {
        String attr1=(String)Sessions.getCurrent().getAttribute("tname");
        String attr2=(String)Sessions.getCurrent().getAttribute("tclass");
        return new Query_user().seatList(attr1, attr2).toArray()[i];
    }

    @Override
    public int getSize() {
        String attr1=(String)Sessions.getCurrent().getAttribute("tname");
        String attr2=(String)Sessions.getCurrent().getAttribute("tclass");
        return new Query_user().seatList(attr1, attr2).size();
    }
    public void update()
    {
        this.fireEvent(ListDataEvent.CONTENTS_CHANGED, 0,this.getSize() - 1);
    }
}

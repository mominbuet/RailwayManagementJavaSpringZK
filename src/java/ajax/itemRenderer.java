/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package ajax;

import org.zkoss.zul.Listcell;
import org.zkoss.zul.Listitem;
import org.zkoss.zul.ListitemRenderer;
import orm.base_info;

/**
 *
 * @author Dr.Mahamud
 */
public class itemRenderer implements ListitemRenderer {

    @Override
    public void render(Listitem lstm, Object t, int i){
        try{
            if(t instanceof base_info)
            {
                base_info sname=(base_info) t;
                Listcell cell=null;
                cell=new Listcell();
                cell.setParent(lstm);
                cell.setLabel(sname.getBase_name());
         
            }
        }
        catch(Exception ex)
        {
        
        }
    }
    
}

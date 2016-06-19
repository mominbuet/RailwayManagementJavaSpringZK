/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package ajax;

import org.zkoss.zul.Comboitem;
import org.zkoss.zul.ComboitemRenderer;
import orm.Journey_info;

/**
 *
 * @author NasiF
 */
public class comboItemRender implements ComboitemRenderer {

    @Override
    public void render(Comboitem cmbtm, Object t, int i) throws Exception {
        if(t instanceof Journey_info)
        {
            Journey_info ob=(Journey_info) t;
            cmbtm.setLabel(ob.getTrain_id().getTrain_name());
           
        }
    }
    
}

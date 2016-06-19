/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package ajax;

import QueryProcess.seatRow;
import org.zkoss.image.AImage;
import org.zkoss.image.Image;
import org.zkoss.zul.Listcell;
import org.zkoss.zul.Listitem;
import org.zkoss.zul.ListitemRenderer;


public class ticketRenderer implements ListitemRenderer {
    public Image getImage(String id,String status)
    {
       return null;
    }
    @Override
    public void render(Listitem lstm, Object t, int i) {
       try{
           if(t instanceof seatRow)
           {
               String temp;
               seatRow row=(seatRow) t;
               Listcell cell;
               
               cell=new Listcell();
               cell.setId(Integer.toString(row.firstCol.getSeat_no()));
               cell.setLabel(row.firstCol.getSeat_no()+","+row.firstCol.getStatus());
               cell.setParent(lstm);
               
               cell=new Listcell();
               cell.setId(Integer.toString(row.secondCol.getSeat_no()));
               cell.setLabel(row.secondCol.getSeat_no()+","+row.secondCol.getStatus());
               cell.setParent(lstm);
               
               cell=new Listcell();
               cell.setId(Integer.toString(row.thirdCol.getSeat_no()));
               cell.setLabel(row.thirdCol.getSeat_no()+","+row.thirdCol.getStatus());
               cell.setParent(lstm);
               
               cell=new Listcell();
               cell.setId(Integer.toString(row.fourCol.getSeat_no()));
               cell.setLabel(row.fourCol.getSeat_no()+","+row.fourCol.getStatus());
               cell.setTooltiptext(row.fourCol.getSeat_no()+","+row.fourCol.getStatus());
               cell.setParent(lstm);
               
           }
       }
       catch(Exception e)
       {
       
       }
    }
    
}

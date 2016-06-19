/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package ViewController;

import org.zkoss.zk.ui.Component;
import org.zkoss.zk.ui.select.SelectorComposer;
import org.zkoss.zk.ui.select.annotation.Listen;
import org.zkoss.zk.ui.select.annotation.Wire;
import org.zkoss.zul.Button;
import org.zkoss.zul.Checkbox;

/**
 *
 * @author NasiF
 */
public class userReg extends SelectorComposer<Component>{
    
     @Wire
    private Button submit;   
 
    @Wire
    private Checkbox acceptTermBox;
    
     @Listen("onCheck = #acceptTermBox")
    public void changeSubmitStatus(){
        if (acceptTermBox.isChecked()){
            submit.setDisabled(false);
            submit.setImage("/images/submit.png");
        }else{
            
            submit.setDisabled(true);
            submit.setImage("");
        }
    }
}

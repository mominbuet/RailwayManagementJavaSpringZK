/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package viewmodel;

/**
 *
 * @author Gunner
 */
import java.util.ArrayList;
import java.util.List;
 import orm.*;
import org.zkoss.bind.annotation.Init;
 
import data.ContributorData;
import data.pojo.Contributor;
 
public class ContributorViewModel {
    private Cust_info selected;
    private List<String> titles = new ArrayList<String>(new ContributorData().getTitles());
    private List<Cust_info> contributors = new ArrayList<Cust_info>(new ContributorData().getContributors());
 
    @Init
    public void init() { 
        if(contributors.size()!=0)// Initialize
            selected = contributors.get(0); // Selected First One
        else
            selected = new Cust_info("saad0209@live.com", "123123", "ahmed", "ullah", 123123, "112211");
    }
 
    public List<String> getContributorTitles() {
        return titles;
    }
 
    public List<Cust_info> getContributorList() {
        return contributors;
    }
 
    public void setSelectedContributor(Cust_info selected) {
        this.selected = selected;
    }
 
    public Cust_info getSelectedContributor() {
        return selected;
    }
}
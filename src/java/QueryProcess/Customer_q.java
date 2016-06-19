/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package QueryProcess;

import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import UserHandler.*;
import org.hibernate.Session;
import orm.Cust_info;

public class Customer_q {
    private SessionFactory factory;
    private Transaction tx;
    
    public Customer_q()
    {
       
    }
    public void saveCustomer(Cust_info ob)
    {
        Session s=null;
        try{
            factory=HibernateUtil.getSessionFactory();
            s=factory.openSession();
            tx=s.beginTransaction();
            
            s.save(ob);
            
            tx.commit();
        }
        catch(Exception e)
        {
            System.out.println("saveCustomer ERROR: "+e.getMessage());
        }
        finally{
            if(s!=null)
                s.close();
        }
    }
}

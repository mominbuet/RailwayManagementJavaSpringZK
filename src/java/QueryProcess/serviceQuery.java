/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package QueryProcess;


import java.util.LinkedList;
import java.util.List;
import java.util.StringTokenizer;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import orm.*;


public class serviceQuery {
    private SessionFactory factory;
    private Transaction tx;
    public Cust_info getUser(String email)
    {
        Session s=null;
        Cust_info result=null;
        try{
            factory=HibernateUtil.getSessionFactory();
            s=factory.openSession();
            tx=s.beginTransaction();
            
            Query q=s.createQuery("From Cust_info where email like :name");
            q.setParameter("name",email);
            if(q.list().size()!=0)
                result=(Cust_info)q.list().get(0);
            tx.commit();
            
            return result;
        }
        catch(Exception e)
        {
            System.out.println("getuser by emailname ERROR: "+e.getMessage());
        }
        finally{
            if(s!=null)
                s.close();
            return result;
        }
    }
        public Ticket_info getTicket(String email)
    {
        Session s=null;
        Ticket_info result=null;
        try{
            factory=HibernateUtil.getSessionFactory();
            s=factory.openSession();
            tx=s.beginTransaction();
            
            Query q=s.createQuery("From Ticket_info where cust_id.email like :name");
            q.setParameter("name",email);
            
            if(q.list().size()!=0)
                result=(Ticket_info)q.list().get(0);
            tx.commit();
            
            return result;
        }
        catch(Exception e)
        {
            System.out.println("getuser by emailname ERROR: "+e.getMessage());
        }
        finally{
            if(s!=null)
                s.close();
            return result;
        }
    }
    public List getTicket(int ticketid)
    {
        Session s=null;
        List result=null;
        try{
            factory=HibernateUtil.getSessionFactory();
            s=factory.openSession();
            tx=s.beginTransaction();
            
            Query q=s.createQuery("From Seat_info where t.ticket_id = :id");
            q.setParameter("id",ticketid);
            result=q.list();
            
            tx.commit();
            
            return result;
        }
        catch(Exception e)
        {
            System.out.println("getuser by emailname ERROR: "+e.getMessage());
        }
        finally{
            if(s!=null)
                s.close();
            return result;
        }
    }
        public Cust_info getUserVerify(String email,String password)
    {
        Session s=null;
        Cust_info result=null;
        try{
            factory=HibernateUtil.getSessionFactory();
            s=factory.openSession();
            tx=s.beginTransaction();
            
            Query q=s.createQuery("From Cust_info where email like :name and password like :pass");
            q.setParameter("name",email);
            q.setParameter("pass",password);
            
            if(q.list().size()!=0)
                result=(Cust_info)q.list().get(0);
            tx.commit();
            
            return result;
        }
        catch(Exception e)
        {
            System.out.println("getuser by emailname ERROR: "+e.getMessage());
        }
        finally{
            if(s!=null)
                s.close();
            return result;
        }
    }
}

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package maphandler;
import QueryProcess.HibernateUtil;
import QueryProcess.Query_user;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.StringTokenizer;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import orm.*;


public class HasMap {
    private SessionFactory factory;
    private Transaction tx;
    private Map map_point=new HashMap<Integer,point_info>();
    
    public HasMap()
    {

    }
    public void init()
    {
        List alldata=all_info();
        point_info point;
        
        for(int i=0;i<alldata.size();i++)
        {   
            point=(point_info) alldata.get(i);
            if(!map_point.containsKey(new Integer(point.getPoint_id())))
            {
                map_point.put(new Integer(point.getPoint_id()),point);
            }
        }
    }
    public point_info getPoint(Integer id)
    {
        if(map_point.containsKey(id))
        {
            return (point_info) map_point.get(id);
        }
        else
            return null;
    }
    public List all_info()
    {
        Session s=null;
        List result=null;
        try{
            factory=HibernateUtil.getSessionFactory();
            s=factory.openSession();
            tx=s.beginTransaction();

            Query q=s.createQuery("From point_info");
            result=q.list();
            System.out.println(result.size()+" size");
            tx.commit();

            return result;
        }
        catch(Exception e)
        {
            System.out.println("getStationList ERROR: "+e.getMessage());
        }
        finally{
            if(s!=null)
                s.close();
            return result;
        }
    }

}

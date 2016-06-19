
package QueryProcess;

import java.util.LinkedList;
import java.util.List;
import java.util.StringTokenizer;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import orm.*;

public class Query_user {
    private SessionFactory factory;
    private Transaction tx;
    public List getTimetables()
    {
        Session s=null;
        List result=null;
        try{
            factory=HibernateUtil.getSessionFactory();
            s=factory.openSession();
            tx=s.beginTransaction();
            
            result=s.createQuery("From Journey_info order by start_time").list();
            
            tx.commit();
            
            return result;
        }
        catch(Exception e)
        {
            System.out.println("getTimeTables ERROR: "+e.getMessage());
        }
        finally{
            if(s!=null)
                s.close();
            return result;
        }
    }
    public List stationList(String sname)
    {
        Session s=null;
        List result=null;
        try{
            factory=HibernateUtil.getSessionFactory();
            s=factory.openSession();
            tx=s.beginTransaction();
            
            Query q=s.createQuery("From base_info where base_name like :name and type like :param order by base_name");
            q.setParameter("name",sname+ "%");
            q.setParameter("param","station");
            q.setMaxResults(5);
            result=q.list();
            
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
    public List activeTrain(String sr,String ds)
    {
        Session s=null;
        List result=null;
        try{
            factory=HibernateUtil.getSessionFactory();
            s=factory.openSession();
            tx=s.beginTransaction();
            
            Query q=s.createQuery("From Journey_info where source_id.base_name like :name1 and dest_id.base_name like :name2 ");
            q.setParameter("name1",sr);
            q.setParameter("name2",ds);
            q.setMaxResults(5);
            result=q.list();
            
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
       public List seatList(String trainanme,String c)
    {
        Session s=null;
        List result=null;
      
            factory=HibernateUtil.getSessionFactory();
            s=factory.openSession();
            tx=s.beginTransaction();
            
            Query q=s.createQuery("From Seat_info ");
          //  q.setParameter("name",trainanme);
            //q.setParameter("cname",Integer.parseInt(c));
            result=q.list();
            List seatData=new LinkedList();
            String tseat = null;
            for(int i=0;i<result.size();i++)
            {
                Seat_info info=(Seat_info) result.get(i);
                tseat=info.getSeat_no()+" ";
            }
           StringTokenizer token=new StringTokenizer(tseat);
            List cseat=new LinkedList();
            while(token.hasMoreTokens())
            {
                cseat.add(new String(token.nextToken()));
            }
            result=new LinkedList();
            for(int i=0;i<20;i++)
            {
                String sno=""+i;
                seatRow row = new seatRow();
                if(cseat.contains(sno))
                    row.firstCol=new Seat(i,"Booked");
                else
                    row.firstCol=new Seat(i,"Empty");
                ++i;
                sno=""+i;
                if(cseat.contains(sno))
                    row.secondCol=new Seat(i,"Booked");
                else
                    row.secondCol=new Seat(i,"Empty");
                ++i;
                sno=""+i;
                if(cseat.contains(sno))
                    row.thirdCol=new Seat(i,"Booked");
                else
                    row.thirdCol=new Seat(i,"Empty");
                ++i;
                sno=""+i;
               if(cseat.contains(sno))
                    row.fourCol=new Seat(i,"Booked");
                else
                    row.fourCol=new Seat(i,"Empty");
               result.add(row);
            }
            tx.commit();
            return result;
        }
       public List getStation(String station)
       {
            Session s=null;
            List result=null;
            try{
                factory=HibernateUtil.getSessionFactory();
                s=factory.openSession();
                tx=s.beginTransaction();

                Query q=s.createQuery("From base_info where base_name like :name order by base_name");
                q.setParameter("name","%"+station+"%");
                q.setMaxResults(10);
                result=q.list();

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
    public List allactiveTrain(String sr,String ds)
    {
        Session s=null;
        List result=null;
        try{
            factory=HibernateUtil.getSessionFactory();
            s=factory.openSession();
            tx=s.beginTransaction();
            
            Query q=s.createQuery("From Journey_info where source_id.base_name like :name1 and dest_id.base_name like :name2 ");
            q.setParameter("name1",sr);
            q.setParameter("name2",ds);
            result=q.list();
            
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

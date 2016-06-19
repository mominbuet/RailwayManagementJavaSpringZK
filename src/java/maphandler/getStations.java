/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package maphandler;
import orm.*;
import QueryProcess.*;
import java.util.*;

import org.hibernate.*;
/**
 *
 * @author Gunner
 */
public class getStations {
    public List retriveStations()
    {
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction transaction = null;
        List stations = null;
        try {
            transaction = session.beginTransaction();
            stations = session.createQuery("from base_info").list(); 
            transaction.commit();            
        } catch (HibernateException e) {
            transaction.rollback();
            e.printStackTrace();
        } finally {
            session.close();
            return  stations;
        }
    }
    public List retriveStations(Session session)
    {
        
        Transaction transaction = null;
        try {
            transaction = session.beginTransaction();
            List stations = session.createQuery("from base_info").list();
//            for (Iterator iterator = stations.iterator(); iterator.hasNext();)
//            {
//                base_info station = (base_info) iterator.next();
//                System.out.println(station.getBase_name()+"\n");
//            }         
            transaction.commit();
            //stations.get(0).
            //Cust_info station = (Cust_info) stations.get(0);
            return  stations;
        } catch (HibernateException e) {
            transaction.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }
        return null;
    }
    public List<point_info> retrivePoints(int pid)
    {
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction transaction = null;
        try {
            transaction = session.beginTransaction();
            Query query = session.createQuery("from point_info where point_id = :pid");
            query.setParameter("pid", pid); 
            List<point_info> points = query.list();
            
//            for (Iterator iterator = employee.iterator(); iterator.hasNext();)
//            {
//                base_info stations = (base_info) iterator.next();
//                System.out.println(employee1.getEmpno()+"  "+employee1.getEname()+"  "+ employee1.getJob()+"   "+employee1.getSal()+"   "+employee1.getDeptno());
//            }         
            transaction.commit();
            return  points;
        } catch (HibernateException e) {
            transaction.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }
        return null;
    }
    public List getTrain(String station)
    {
        Session session=HibernateUtil.getSessionFactory().openSession();
        Transaction tx=session.beginTransaction();
        List result = null;
        try{
            
            Query query=session.createQuery("From Journey_info where source_id.base_name=:station and source_id.type='station'");
            query.setParameter("station",station);
            result=query.list();
            for(int i=0;i<result.size();i++)
            {
                Journey_info j=(Journey_info) result.get(i);
                System.out.println(j.getJourney_id()+"  "+j.getTrain_id().getTrain_name());
            }
            tx.commit();
        }
        catch(Exception e)
        {
             System.out.println(e.getMessage());
        }
        finally{
            session.close();
            return result;
        }
    }
    public List getTrain(String sStation,String dStation)
    {
        Session session=HibernateUtil.getSessionFactory().openSession();
        Transaction tx=session.beginTransaction();
        List result=null;
        try{
            
            Query query=session.createQuery("From Journey_info where source_id.base_name=:sStation and dest_id.base_name=:dStation and source_id.type='station'");
            query.setParameter("sStation",sStation);
            query.setParameter("dStation",dStation);
            result=query.list();
            tx.commit();
        }
        catch(Exception e)
        {
             System.out.println(e.getMessage());
        }
        finally{
            session.close();
            return result;
        }
    }
}

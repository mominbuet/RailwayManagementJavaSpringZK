/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Controller;
import orm.*;
import QueryProcess.*;
import java.util.*;

import org.hibernate.*;
/**
 *
 * @author Gunner
 */
public class admin_db {
    public admin_info  checklogin(String username,String password)
    {
        admin_info res =new admin_info();
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction transaction = null;
        try {
            transaction = session.beginTransaction();
            Query qry = session.createQuery("from admin_info where admin_name = '"+username+"' and password = '"+password+"'");
            List rlist = qry.list();
            if(rlist.size()>0)
            {
                
                admin_info ai= (admin_info)rlist.get(0);
                res=ai;
                
                //stations.get(0).
                //Cust_info station = (Cust_info) stations.get(0);
                //return  res;
            }
            transaction.commit();
        } catch (HibernateException e) {
            transaction.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }
        return res;
    }
    public base_info get_base(String basename)
    {
        base_info res =new base_info();
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction transaction = null;
        try {
            transaction = session.beginTransaction();
            Query qry = session.createQuery("from base_info where base_name=:name");
            qry.setParameter("name", basename);
            List rlist = qry.list();
            
            if(rlist.size()>0)
                res=(base_info)rlist.get(0);
            transaction.commit();
        } catch (HibernateException e) {
            transaction.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }
        return res;
    }
    public point_info get_point(Integer point_id)
    {
        point_info res =new point_info();
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction transaction = null;
        try {
            transaction = session.beginTransaction();
            Query qry = session.createQuery("from point_info where point_id="+point_id);
            List rlist = qry.list();
            
            if(rlist.size()>0)
                res=(point_info)rlist.get(0);
            transaction.commit();
        } catch (HibernateException e) {
            transaction.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }
        return res;
    }
    public List<route_info> get_routes()
    {
        List<route_info> res =new ArrayList<route_info>();
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction transaction = null;
        try {
            transaction = session.beginTransaction();
            Query qry = session.createQuery("from route_info");
            List rlist = qry.list();
            
           for (int i =0;i<rlist.size();i++)
            {
                
                    route_info ciu = (route_info) rlist.get(i);
                    res.add(ciu);
               
            }
            transaction.commit();
        } catch (HibernateException e) {
            transaction.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }
        return res;
    }
    public List<route_info> get_routes(int id)
    {
        List<route_info> res =new ArrayList<route_info>();
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction transaction = null;
        try {
            transaction = session.beginTransaction();
            Query qry = session.createQuery("from route_info where route_id="+id);
            List rlist = qry.list();
            
           for (int i =0;i<rlist.size();i++)
            {
                
                    route_info ciu = (route_info) rlist.get(i);
                    res.add(ciu);
               
            }
            transaction.commit();
        } catch (HibernateException e) {
            transaction.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }
        return res;
    }
    public List<base_info> get_base_from_point(point_info id)
    {
        List<base_info> res =new ArrayList<base_info>();
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction transaction = null;
        try {
            transaction = session.beginTransaction();
            Query qry = session.createQuery("from base_info where loc=:name");
            qry.setParameter("name", id);
            List rlist = qry.list();
            
           for (int i =0;i<rlist.size();i++)
            {
                
                    base_info ciu = (base_info) rlist.get(i);
                    res.add(ciu);
               
            }
            transaction.commit();
        } catch (HibernateException e) {
            transaction.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }
        return res;
    }
    public List<Cust_info>  get_passengers()
    {
        List<Cust_info> res =new ArrayList<Cust_info>();
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction transaction = null;
        try {
            transaction = session.beginTransaction();
            Query qry = session.createQuery("from Cust_info");
            List rlist = qry.list();
            
            for (int i =0;i<rlist.size();i++)
            {
                Cust_info ciu = (Cust_info) rlist.get(i);
                res.add(ciu);
            }
                
                //stations.get(0).
                //Cust_info station = (Cust_info) stations.get(0);
                //return  res;
            
            transaction.commit();
        } catch (HibernateException e) {
            transaction.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }
        return res;
    }
}

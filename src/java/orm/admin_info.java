/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package orm;
import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Calendar;
/**
 *
 * @author Gunner
 */
@Entity
@Table(name="admin_info")
public class admin_info implements Serializable {
    @Id
    @Column(name="admin_id")
    @SequenceGenerator(allocationSize=1, initialValue=1, sequenceName="admin_info_admin_id_seq", name="admin_info_admin_id_seq")
    @GeneratedValue(generator="admin_info_admin_id_seq", strategy=GenerationType.SEQUENCE)
    private int admin_id;
    
    @Column(name="last_accessed_time")
    private Timestamp last_accessed_time=new Timestamp(Calendar.getInstance().getTimeInMillis());
    
    @Column(name="admin_name",unique=true )
    private String admin_name;
    
    @Column(name="password")
    private String password;
    
    
    @Column(name="last_accessed_ip")
    private String last_accessed_ip;
    
    
    @Column(name="station",nullable=true)
    private int station;
    
    
    @Column(name="priviledge")
    private String priviledge;

    public admin_info() {
    }

    public admin_info(int admin_id, String admin_name, String password, String last_accessed_ip, int station, String priviledge) {
        this.admin_id = admin_id;
        this.admin_name = admin_name;
        this.password = password;
        this.last_accessed_ip = last_accessed_ip;
        this.station = station;
        this.priviledge = priviledge;
    }

    public int getAdmin_id() {
        return admin_id;
    }

    public void setAdmin_id(int admin_id) {
        this.admin_id = admin_id;
    }

    public String getAdmin_name() {
        return admin_name;
    }

    public void setAdmin_name(String admin_name) {
        this.admin_name = admin_name;
    }

    public String getLast_accessed_ip() {
        return last_accessed_ip;
    }

    public void setLast_accessed_ip(String last_accessed_ip) {
        this.last_accessed_ip = last_accessed_ip;
    }

    public Timestamp getLast_accessed_time() {
        return last_accessed_time;
    }

    public void setLast_accessed_time(Timestamp last_accessed_time) {
        this.last_accessed_time = last_accessed_time;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPriviledge() {
        return priviledge;
    }

    public void setPriviledge(String priviledge) {
        this.priviledge = priviledge;
    }

    public int getStation() {
        return station;
    }

    public void setStation(int station) {
        this.station = station;
    }
    
    
}

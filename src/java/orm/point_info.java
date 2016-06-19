/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package orm;

import javax.persistence.*;

@Entity
@Table(name="point_info")
public class point_info {

    @Id
    @Column(name="point_id")    
    private int point_id;
    
    @Column(name="longitude")
    private float longitude;
    
    @Column(name="latitude")
    private float latitude;

    public point_info() {
    }

    public point_info(float longitude, float latitude) {
        this.longitude = longitude;
        this.latitude = latitude;
    }
    
 
    public float getLatitude() {
        return latitude;
    }

    public void setLatitude(float latitude) {
        this.latitude = latitude;
    }

    public float getLongitude() {
        return longitude;
    }

    public void setLongitude(float longitude) {
        this.longitude = longitude;
    }

    public int getPoint_id() {
        return point_id;
    }

    public void setPoint_id(int point_id) {
        this.point_id = point_id;
    }
    
}

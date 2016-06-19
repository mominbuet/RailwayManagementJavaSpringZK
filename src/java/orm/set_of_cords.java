/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package orm;

import javax.persistence.*;
/**
 *
 * @author Gunner
 */
@Entity
@Table(name="set_of_cords")
public class set_of_cords {
    @Id
    @Column(name="set_id")
    
    private int id;
    
    @Column(name="point_id")
    private point_info point_id;

    public set_of_cords() {
    }

    public set_of_cords( point_info point_id) {
        
        this.point_id = point_id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public point_info getPoint_id() {
        return point_id;
    }

    public void setPoint_id(point_info point_id) {
        this.point_id = point_id;
    }
    
}

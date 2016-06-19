/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package orm;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="route_info")
public class route_info {
    @Id
    @Column(name="route_id")
    private int route_id;
    
    @OneToOne(cascade= CascadeType.ALL)
    @JoinColumn(name="start_cord")
    private point_info start_cord;

    @OneToOne(cascade= CascadeType.ALL)
    @JoinColumn(name="end_cord")
    private point_info end_cord;
    
    @Column(name="route")
    private String route;

    public route_info() {
    }

    public route_info(point_info start_cord,point_info end_cord, String route) {
    
        this.start_cord = start_cord;
        this.end_cord = end_cord;
        this.route = route;
    }

    public point_info getEnd_cord() {
        return end_cord;
    }

    public void setEnd_cord(point_info end_cord) {
        this.end_cord = end_cord;
    }

    public String getRoute() {
        return route;
    }

    public void setRoute(String route) {
        this.route = route;
    }

    public int getRoute_id() {
        return route_id;
    }

    public void setRoute_id(int route_id) {
        this.route_id = route_id;
    }

    public point_info getStart_cord() {
        return start_cord;
    }

    public void setStart_cord(point_info start_cord) {
        this.start_cord = start_cord;
    }
    
}

package orm;

import javax.persistence.*;

@Entity
@Table(name="base_info")
public class base_info {

    @Id
    @Column(name="base_id")
    private int base_id;
    
    @Column(name="base_name")
    private String base_name;
    
    @Column(name="status")
    private boolean bool;
    
    @Column(name="type")
    private String type;
    
    @OneToOne(cascade= CascadeType.ALL)
    @JoinColumn(name="loc")
    private point_info loc;

    public base_info() {
    }

    public base_info(String base_name, boolean bool, String type, point_info loc) {
        this.base_name = base_name;
        this.bool = bool;
        this.type = type;
        this.loc = loc;
    }

    public int getBase_id() {
        return base_id;
    }

    public void setBase_id(int base_id) {
        this.base_id = base_id;
    }

    public String getBase_name() {
        return base_name;
    }

    public void setBase_name(String base_name) {
        this.base_name = base_name;
    }

    public boolean isBool() {
        return bool;
    }

    public void setBool(boolean bool) {
        this.bool = bool;
    }

    public point_info getLoc() {
        return loc;
    }

    public void setLoc(point_info loc) {
        this.loc = loc;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}

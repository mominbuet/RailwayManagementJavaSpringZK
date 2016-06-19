/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package orm;

import javax.persistence.*;

@Entity
@Table(name="train_info")
public class Train_info {
      @Id
      @Column(name="train_id")
      @SequenceGenerator(allocationSize=1, initialValue=1, sequenceName="train_info_train_id_seq", name="train_info_train_id_seq")
      @GeneratedValue(generator="train_info_train_id_seq", strategy=GenerationType.SEQUENCE)
      private int train_id;
      
      @Column(name="train_name")
      private String train_name;
      
      @Column(name="compartments")
      private String compartments;
      
      @Column(name="stations")
      private int stations;
      
      @OneToOne(cascade= CascadeType.ALL)
      @JoinColumn(name="uproute_id")
      private route_info uproute_id;
      
      @OneToOne(cascade= CascadeType.ALL)
      @JoinColumn(name="downroute_id")
      private route_info downroute_id;
      
      @Column(name="source")
      private int source;
      @Column(name="destination")
      private int destination;

      @Column(name="uproutestations")
      private String uproutestations;
      @Column(name="downroutestations")
      private String downroutestations;
      
    public int getDestination() {
        return destination;
    }

    public void setDestination(int destination) {
        this.destination = destination;
    }

    public int getSource() {
        return source;
    }

    public void setSource(int source) {
        this.source = source;
    }
      
    public Train_info() {
    }

    public Train_info(String train_name, String compartments, int stations) {
        this.train_name = train_name;
        this.compartments = compartments;
        this.stations = stations;
    }

    public String getDownroutestations() {
        return downroutestations;
    }

    public void setDownroutestations(String downroutestations) {
        this.downroutestations = downroutestations;
    }

    public String getUproutestations() {
        return uproutestations;
    }

    public void setUproutestations(String uproutestations) {
        this.uproutestations = uproutestations;
    }

    public Train_info(String train_name, String compartments, int stations, route_info uproute_id, route_info downroute_id, int source, int destination, String uproutestations, String downroutestations) {
        this.train_name = train_name;
        this.compartments = compartments;
        this.stations = stations;
        this.uproute_id = uproute_id;
        this.downroute_id = downroute_id;
        this.source = source;
        this.destination = destination;
        this.uproutestations = uproutestations;
        this.downroutestations = downroutestations;
    }

    
    
    public String getCompartments() {
        return compartments;
    }

    public void setCompartments(String compartments) {
        this.compartments = compartments;
    }

    public route_info getDownroute_id() {
        return downroute_id;
    }

    public void setDownroute_id(route_info downroute_id) {
        this.downroute_id = downroute_id;
    }

    public int getStations() {
        return stations;
    }

    public void setStations(int stations) {
        this.stations = stations;
    }

    public int getTrain_id() {
        return train_id;
    }

    public void setTrain_id(int train_id) {
        this.train_id = train_id;
    }

    public String getTrain_name() {
        return train_name;
    }

    public void setTrain_name(String train_name) {
        this.train_name = train_name;
    }

    public route_info getUproute_id() {
        return uproute_id;
    }

    public void setUproute_id(route_info uproute_id) {
        this.uproute_id = uproute_id;
    }
      
      
}

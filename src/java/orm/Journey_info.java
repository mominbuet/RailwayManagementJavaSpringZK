/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package orm;

import java.sql.Time;
import javax.persistence.*;

@Entity
@Table(name="journey_info")
public class Journey_info {
    @Id
    @Column(name="journey_id")
    @SequenceGenerator(allocationSize=1, initialValue=1, sequenceName="journey_info_journey_id_seq", name="journey_info_journey_id_seq")
    @GeneratedValue(generator="journey_info_journey_id_seq", strategy=GenerationType.SEQUENCE)
    private int journey_id;
    
    @OneToOne(cascade= CascadeType.ALL)
    @JoinColumn(name="source_id")
    private base_info source_id;
    
    @OneToOne(cascade= CascadeType.ALL)
    @JoinColumn(name="dest_id")
    private base_info dest_id;
    
    @Column(name="start_time")
    private Time start_time;
    
    @OneToOne(cascade= CascadeType.ALL)
    @JoinColumn(name="train_id")
    private Train_info train_id;

    public Journey_info() {
    }

    public Journey_info(base_info source_id, base_info dest_id, Time start_time) {
        this.source_id = source_id;
        this.dest_id = dest_id;
        this.start_time = start_time;
    }

    public base_info getDest_id() {
        return dest_id;
    }

    public void setDest_id(base_info dest_id) {
        this.dest_id = dest_id;
    }

    public int getJourney_id() {
        return journey_id;
    }

    public void setJourney_id(int journey_id) {
        this.journey_id = journey_id;
    }

    public base_info getSource_id() {
        return source_id;
    }

    public void setSource_id(base_info source_id) {
        this.source_id = source_id;
    }

    public Time getStart_time() {
        return start_time;
    }

    public void setStart_time(Time start_time) {
        this.start_time = start_time;
    }

    public Train_info getTrain_id() {
        return train_id;
    }

    public void setTrain_id(Train_info train_id) {
        this.train_id = train_id;
    }
}

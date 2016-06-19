/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package orm;

import javax.persistence.*;

@Entity
@Table(name="seat_info")
public class Seat_info {
    @Id
    @Column(name="seat_id")
    @SequenceGenerator(allocationSize=1, initialValue=1, sequenceName="seat_info_seat_id_seq", name="seat_info_seat_id_seq")
    @GeneratedValue(generator="seat_info_seat_id_seq", strategy=GenerationType.SEQUENCE)
 
    private int seat_id;
    
    @ManyToOne
    @JoinColumn(name="ticket_id")
    private Ticket_info t;
    
    @Column(name="ticket_class")
    private int ticket_class;
    
    @Column(name="seat_no")
    private String seat_no;
    
    @Column(name="train_name")
    private String train_name;

    public Seat_info() {
    }

    public Seat_info(int ticket_class, String seat_no) {
        this.ticket_class = ticket_class;
        this.seat_no = seat_no;
    }

    public int getSeat_id() {
        return seat_id;
    }

    public void setSeat_id(int seat_id) {
        this.seat_id = seat_id;
    }

    public String getSeat_no() {
        return seat_no;
    }

    public void setSeat_no(String seat_no) {
        this.seat_no = seat_no;
    }

    public Ticket_info getT() {
        return t;
    }

    public void setT(Ticket_info t) {
        this.t = t;
    }

    public int getTicket_class() {
        return ticket_class;
    }

    public void setTicket_class(int ticket_class) {
        this.ticket_class = ticket_class;
    }

    public String getTrain_name() {
        return train_name;
    }

    public void setTrain_name(String train_name) {
        this.train_name = train_name;
    }

}

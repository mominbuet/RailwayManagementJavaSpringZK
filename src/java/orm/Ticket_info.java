/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package orm;

import java.sql.Timestamp;
import java.util.Calendar;
import java.util.List;
import javax.persistence.*;

@Entity
@Table(name="ticket_info")
public class Ticket_info {
    @Id
    @Column(name="ticket_id")
    @SequenceGenerator(allocationSize=1, initialValue=1, sequenceName="ticket_info_ticket_id_seq", name="ticket_info_ticket_id_seq")
    @GeneratedValue(generator="ticket_info_ticket_id_seq", strategy=GenerationType.SEQUENCE)
 
    private int ticket_id;
    
    @OneToOne
    @JoinColumn(name="journey_id")
    private Journey_info journey_id;
    
    @OneToOne
    @JoinColumn(name="cust_id")
    private Cust_info cust_id;
    
    @Column(name="buy_time")
    private Timestamp buy_time=new Timestamp(Calendar.getInstance().getTimeInMillis());
    
    @Column(name="no_of_sits")
    private int no_of_sits;
    
    @OneToMany(mappedBy="t")
    private List<Seat_info> seatList;

    public Ticket_info() {
    }

    public Ticket_info(Journey_info journey_id, Cust_info cust_id, int no_of_sits) {
        this.journey_id = journey_id;
        this.cust_id = cust_id;
        this.no_of_sits = no_of_sits;
    }

    public Timestamp getBuy_time() {
        return buy_time;
    }

    public void setBuy_time(Timestamp buy_time) {
        this.buy_time = buy_time;
    }

    public Cust_info getCust_id() {
        return cust_id;
    }

    public void setCust_id(Cust_info cust_id) {
        this.cust_id = cust_id;
    }

    public Journey_info getJourney_id() {
        return journey_id;
    }

    public void setJourney_id(Journey_info journey_id) {
        this.journey_id = journey_id;
    }

    public int getNo_of_sits() {
        return no_of_sits;
    }

    public void setNo_of_sits(int no_of_sits) {
        this.no_of_sits = no_of_sits;
    }

    public List<Seat_info> getSeatList() {
        return seatList;
    }

    public void setSeatList(List<Seat_info> seatList) {
        this.seatList = seatList;
    }

    public int getTicket_id() {
        return ticket_id;
    }

    public void setTicket_id(int ticket_id) {
        this.ticket_id = ticket_id;
    }
    
}

package QueryProcess;

public class Seat {
    int seat_no;
    String status;
    public Seat(int sn,String st)
    {
       this.seat_no=sn;
       this.status=st;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getSeat_no() {
        return seat_no;
    }

    public void setSeat_no(int seat_no) {
        this.seat_no = seat_no;
    }
    
}
package UserHandler;

import javax.persistence.*;

@Entity
@Table(name="cust_info1")
public class Customer {
    @Id
    @Column(name="cust_id")
    private int cust_id;
    
    @Column(name="firstname")
    private String firstname;
    
    @Column(name="lastname")
    private String lastname;
    
    @Column(name="ssn")
    private int ssn;
    
    @Column(name="phone")
    private String phone;
    
    @Column(name="email")
    private String email;
    
    @Column(name="password")
    private String password;

    public Customer() {
    }

    public Customer(String firstname, String lastname, int ssn, String phone, String email, String password) {
    
        this.firstname = firstname;
        this.lastname = lastname;
        this.ssn = ssn;
        this.phone = phone;
        this.email = email;
        this.password = password;
    }

    public int getCust_id() {
        return cust_id;
    }

    public void setCust_id(int cust_id) {
        this.cust_id = cust_id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public int getSsn() {
        return ssn;
    }

    public void setSsn(int ssn) {
        this.ssn = ssn;        
    }

}

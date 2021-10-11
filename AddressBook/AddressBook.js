console.log("Welcome to the Address Book JavaScript Program");

class Contact
{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNo;
    email;

    constructor(...params)
    {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNo = params[6];
        this.email = params[7];
    }
  
}
let contact1= new Contact("Megha", "Angadi", "Vidyagiri", "Bagalkot", "Karnataka",587103,9944776688,"megha@gmail.com");
console.log(contact1);


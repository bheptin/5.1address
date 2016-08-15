

///Setting up the constructor of "Contact"
function Contact(name, phone, address) {
 this.name = name;
 this.phone = phone;
 this.address = address;
 this.added = new Date();
  }
///ContactList is the broader definition for Contact, filtering everything by "name" on return
///"this" refers to ContactList for all
function ContactList(){
  this.Contacts = [];
  this.find = function (name) {
    return this.Contacts.filter(Contact => Contact.name.contains(name));
  };
  //use this to call people by their id
  this.get = function(id) {
    return this.Contacts.filter(Contact => Contact.id === id);
  }
  //adds id
  this.add = function(Contact){
    //Contact.id = generateUniqueId(this.Contacts);
    var arrayOfContactId = this.Contacts.map(Contact => Contact.id);
    Contact.id = Math.max(...arrayOfContactId) + 1;///math.max refers to the largest id, then add 1.
    this.Contacts.push(Contact);
  }
  ///to remove an id if remove is invoked. 
  this.remove = function(id) {
    var indexToRemove = this.Contacts.map(Contact => Contact.id);
    this.Contacts.splice(indexToRemove, 1);
  }


}

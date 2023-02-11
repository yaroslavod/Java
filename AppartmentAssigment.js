
function getDetails(appartment_object) {
    let result = "The appartment on " + appartment_object.city_address +
        ", " + appartment_object.street_address + ", " + "costs " + appartment_object.price_of_rent + ", " +
        appartment_object.list_of_rooms.length + " rooms in total";
    return result;
}

const appartment1 = {
    city_address: "Charlie",
    street_address: "Male",
    price_of_rent: 2,
    list_of_rooms: ["fish", "meat", "mouse"]
    // getDetails: function(){
    //     let result = "The appartment on " + this.city_address + 
    //     ", " + this.street_address + ", " + "costs " + this.price_of_rent + ", " + 
    //     this.list_of_rooms.length + " rooms in total";
    //     return result;
    // }
}

const appartment2 = {
    city_address: "Toronto",
    street_address: "Female",
    price_of_rent: 3,
    list_of_rooms: ["fish", "meat", "mouse", "water"]

}
console.log(getDetails(appartment1));
console.log(getDetails(appartment2));
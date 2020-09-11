var person = {
    name: {
        firstName: "Rachana",
        lastName: "Gaire",
    },

    age: 25,
    address: "Butwal",

    fullName: function () {
        return this.name.firstName + " " + this.name.lastName;
    }


}
document.getElementById('fullName').innerHTML = person.fullName().toUpperCase();

document.getElementById('age').innerHTML = person['age'];
document.getElementById('address').innerHTML = person.address;


console.log(person.name.firstName);

person.country = "Nepal";
console.log(person.country);


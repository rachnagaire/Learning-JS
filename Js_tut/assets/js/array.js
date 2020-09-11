var cars = [
    'Toyota', 'Ford', 'Suzuki'
];
console.log(cars[0]);
var cars1 = new Array("Saab", "volvo", "BMW");
cars1[2] = "Ford";
console.log(cars1);
var carContainer = document.getElementById('car-types');
for (var i = 0; i < cars.length; i++) {

    var li = '<li class="list-item">' + cars[i] + '</li>';
    carContainer.insertAdjacentHTML('beforeend', li);


}
for (var i = 0; i < cars1.length; i++) {
    var li = '<li class="list-item">' + cars1[i] + '</li>';
    carContainer.insertAdjacentHTML('beforeend', li);
}
var carsNew = ["Toyota", "Ford", "Suzuki"];

var toyota = {
    name: "Hilux",
    color: "Matt Gray",
    engineType: "Diesel",
}
var ford = {
    name: "classic",
    color: "white",
    engineType: 'Petrol'
}
var suzuki = {
    name: "Brezza",
    color: "yellow",
    engineType: "Diesel"
}
carsNew[0] = toyota;
carsNew[1] = ford;
carsNew[2] = suzuki;
var carType = document.getElementById('diesel-engine');
var dieselEngine = carsNew.filter(d => d.engineType === "Diesel");
var carCollection = '';
for (var i = 0; i < dieselEngine.length; i++) {
    carCollection += '<li class="">' + dieselEngine[i].name + '</li>';
}
console.log(carCollection);
carType.insertAdjacentHTML('beforeend', carCollection)






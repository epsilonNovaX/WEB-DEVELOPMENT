
const cars=["BMW","Toyota","GWM"];
let text=cars;
console.log(cars);

cars[0]="Honda";
text=cars;
console.log(cars);

strinText=cars.toString();
console.log(strinText);

jsonTxt=JSON.stringify(cars);
console.log(jsonTxt);
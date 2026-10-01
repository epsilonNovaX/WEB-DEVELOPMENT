const product={
    name:"shirt",
    rating:{
        count:87,
        stars:4.7
    },
    'delivery_time':"2 Days",
    fun: ()=>{ console.log("Inside function ")}
}

console.log(product);
console.log(product.name);
console.log(product["delivery_time"]);
console.log(product.rating.stars);
console.log(product.rating.count);
product.color="Black";
console.log(product);
console.log(product.color);
console.log(product.fun)
console.log(product.fun())
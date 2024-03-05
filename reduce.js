const myNums=[1,2,3];
// const myTotal=myNums.reduce(function(acc,currVal){
//     console.log(`acc ${acc} and currVal ${currVal}`);
//     return acc+currVal;
// },0)
//reduce format
//arr.reduce(()=>(),0)//0 initial value
// const myTotal=myNums.reduce((acc,currVal)=>(acc+currVal),0);//acc ka initial value 0 hai
// console.log(myTotal);
//array of objects
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const totalPrice=shoppingCart.reduce((acc,item)=>acc+item.price,0);
console.log(totalPrice);
function addition (a: number, b:number) {
    return a+b;
}
let addWay2= function addition (a:number, b: number) {
    return a+b;
}


let addWay3= (a: number, b: number) => 
{ return a+b; }

let addWay4= (a: number, b: number) => a+b; 


console.log('Addition of 2, 3 is : ', addition(2,3))
console.log('Addition of 2, 3 is : ', addWay2(2,3))
console.log('Addition of 2, 3 is : ', addWay3(2,3))
console.log('Addition of 2, 3 is : ', addWay4(2,3))
class Example1{
    constructor(public empCode?: number, public empName?: string){}
}

class Example2{
    constructor(public empCode: number=1, public empName: string='Avneesh'){}//Default values for all 
}

let employee1= new Example1()
console.log(employee1)

let employee2= new Example2()// No values passed
console.log(employee2)

let employee3= new Example2(2)// only 1st param passed
console.log(employee3)

let employee4= new Example2(undefined,'Patna')// only 2nd param passed
console.log(employee4)

/*
O/P
Example1 { empCode: undefined, empName: undefined }
Example2 { empCode: 1, empName: 'Avneesh' }
Example2 { empCode: 2, empName: 'Avneesh' }
Example2 { empCode: 1, empName: 'Patna' }
*/
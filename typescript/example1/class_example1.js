var Example1 = /** @class */ (function () {
    function Example1(empCode, empName) {
        this.empCode = empCode;
        this.empName = empName;
    }
    return Example1;
}());
var Example2 = /** @class */ (function () {
    function Example2(empCode, empName) {
        if (empCode === void 0) { empCode = 1; }
        if (empName === void 0) { empName = 'Avneesh'; }
        this.empCode = empCode;
        this.empName = empName;
    } //Default values for all 
    return Example2;
}());
var employee1 = new Example1();
console.log(employee1);
var employee2 = new Example2(); // No values passed
console.log(employee2);
var employee3 = new Example2(2); // only 1st param passed
console.log(employee3);
var employee4 = new Example2(undefined, 'Patna'); // only 2nd param passed
console.log(employee4);

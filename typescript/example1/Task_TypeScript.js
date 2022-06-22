console.log("script1 starts here...");
var employees = [
    {
        empcode: "E001",
        fname: "Sujit",
        lname: "Kapoor",
        salary: "Rs.19000",
        expirience: "2 years"
    },
    {
        empcode: "E002",
        fname: "Dinesh",
        lname: "Chaohan",
        salary: "Rs.5000",
        expirience: "2.5 years"
    },
    {
        empcode: "E020",
        fname: "Vishal",
        lname: "Arjuna",
        salary: "Rs.9000",
        expirience: "1 years"
    },
    {
        empcode: "E018",
        fname: "Tushar",
        lname: "Shah",
        salary: "Rs.11000",
        expirience: "2 years"
    },
    {
        empcode: "E003",
        fname: "Nitin",
        lname: "Kulkarni",
        salary: "Rs.23000",
        expirience: "8 years"
    },
    {
        empcode: "E015",
        fname: "Yogesh",
        lname: "Joshi",
        salary: "Rs.14000",
        expirience: "5 years"
    },
    {
        empcode: "E017",
        fname: "Kapil",
        lname: "Patel",
        salary: "Rs.11000",
        expirience: "1 years"
    },
];
// let empcodeToNumberConvertor = (txt: string): number => +txt.substring(1);
var empcodeToNumberConvertor = function (txt) {
    return Number(txt.substring(1));
};
var greaterThan15lessThan20_1 = function (a) { return a >= 15 && a <= 20; };
// Q1. define a function which returns employees from associative array whose id ends between 15 and 20
var var2 = employees.filter(function (item) {
    return greaterThan15lessThan20_1(empcodeToNumberConvertor(item.empcode));
});
var var3 = employees.filter(function (item) {
    return empcodeToNumberConvertor(item.empcode) >= 15 &&
        empcodeToNumberConvertor(item.empcode) <= 20;
});
console.log("Filtered employees var 2: " + JSON.stringify(var2));
console.log("Filtered employees var 3: " + JSON.stringify(var3));
// Q2. define a function which returns employees from associative array whose salary is bewtween 11000 and 17000
var filterEmployeesBtwSalaryM_N = function (employeesList, m, n) {
    if (employeesList === void 0) { employeesList = employees; }
    return employeesList.filter(function (item) {
        var sal = Number(item.salary.substring(3));
        return sal > m && sal < n;
    });
};
console.log("Employees filtered based on salary: " +
    JSON.stringify(filterEmployeesBtwSalaryM_N(employees, 11000, 17000)));
// Q3. define a function whose expirience is either 1 year or greater than or equals 2.5 year
var function3 = function (employeesList, expr1, expr2) {
    if (employeesList === void 0) { employeesList = employees; }
    return employeesList.filter(function (item) {
        var exp = Number(item.expirience.replace(" years", ""));
        return exp > expr1 && exp < expr2;
    });
};
console.log("Employees filtered based on experiece: " +
    JSON.stringify(function3(employees, 1, 2.5)));
// Q4. check associative array with employee detail passed to function exist in employees records or not?
var function4 = function (employeesList, record) {
    return employeesList.some(function (obj) { return obj.empcode === record.empcode; });
};
console.log("Employee exist or not in employee list: " +
    function4(employees, {
        empcode: "E015",
        fname: "Yogesh",
        lname: "Joshi",
        salary: "Rs.14000",
        expirience: "5 years"
    }));
console.log("Employee exist or not in employee list: " +
    function4(employees, {
        empcode: "E215",
        fname: "Yogesh",
        lname: "Joshi",
        salary: "Rs.14000",
        expirience: "15 years"
    }));
// Q5. define a function to show employees in ascending order. Order by employee code
var ans5 = employees.sort(function (a, b) { return Number(a.empcode.substring(1)) - Number(b.empcode.substring(1)); });
console.log('Sorted employes based on empcode: => ' + JSON.stringify(ans5));

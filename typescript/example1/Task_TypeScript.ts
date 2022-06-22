console.log("script1 starts here...");

let employees = [
  {
    empcode: "E001",
    fname: "Sujit",
    lname: "Kapoor",
    salary: "Rs.19000",
    expirience: "2 years",
  },
  {
    empcode: "E002",
    fname: "Dinesh",
    lname: "Chaohan",
    salary: "Rs.5000",
    expirience: "2.5 years",
  },
  {
    empcode: "E020",
    fname: "Vishal",
    lname: "Arjuna",
    salary: "Rs.9000",
    expirience: "1 years",
  },
  {
    empcode: "E018",
    fname: "Tushar",
    lname: "Shah",
    salary: "Rs.11000",
    expirience: "2 years",
  },
  {
    empcode: "E003",
    fname: "Nitin",
    lname: "Kulkarni",
    salary: "Rs.23000",
    expirience: "8 years",
  },
  {
    empcode: "E015",
    fname: "Yogesh",
    lname: "Joshi",
    salary: "Rs.14000",
    expirience: "5 years",
  },
  {
    empcode: "E017",
    fname: "Kapil",
    lname: "Patel",
    salary: "Rs.11000",
    expirience: "1 years",
  },
];

// let empcodeToNumberConvertor = (txt: string): number => +txt.substring(1);
let empcodeToNumberConvertor = (txt: string): number =>
  Number(txt.substring(1));

let greaterThan15lessThan20_1 = (a: number): boolean => a >= 15 && a <= 20;

// Q1. define a function which returns employees from associative array whose id ends between 15 and 20
let var2 = employees.filter((item) =>
  greaterThan15lessThan20_1(empcodeToNumberConvertor(item.empcode))
);
let var3 = employees.filter(
  (item) =>
    empcodeToNumberConvertor(item.empcode) >= 15 &&
    empcodeToNumberConvertor(item.empcode) <= 20
);
console.log("Filtered employees var 2: " + JSON.stringify(var2));
console.log("Filtered employees var 3: " + JSON.stringify(var3));

// Q2. define a function which returns employees from associative array whose salary is bewtween 11000 and 17000
let filterEmployeesBtwSalaryM_N = (
  employeesList: any = employees,
  m: number,
  n: number
) => {
  return employeesList.filter((item) => {
    const sal = Number(item.salary.substring(3));
    return sal > m && sal < n;
  });
};

console.log(
  "Employees filtered based on salary: " +
    JSON.stringify(filterEmployeesBtwSalaryM_N(employees, 11000, 17000))
);

// Q3. define a function whose expirience is either 1 year or greater than or equals 2.5 year
let function3 = (
  employeesList: any = employees,
  expr1: number,
  expr2: number
) => {
  return employeesList.filter((item) => {
    const exp = Number(item.expirience.replace(" years", ""));
    return exp > expr1 && exp < expr2;
  });
};

console.log(
  "Employees filtered based on experiece: " +
    JSON.stringify(function3(employees, 1, 2.5))
);

// Q4. check associative array with employee detail passed to function exist in employees records or not?
let function4 = (employeesList: any[], record: any) =>
  employeesList.some((obj) => obj.empcode === record.empcode);

console.log(
  "Employee exist or not in employee list: " +
    function4(employees, {
      empcode: "E015",
      fname: "Yogesh",
      lname: "Joshi",
      salary: "Rs.14000",
      expirience: "5 years",
    })
);
console.log(
  "Employee exist or not in employee list: " +
    function4(employees, {
      empcode: "E215",
      fname: "Yogesh",
      lname: "Joshi",
      salary: "Rs.14000",
      expirience: "15 years",
    })
);


// Q5. define a function to show employees in ascending order. Order by employee code
let ans5= employees.sort((a,b)=> Number(a.empcode.substring(1)) -  Number(b.empcode.substring(1)))
console.log('Sorted employes based on empcode: => '+ JSON.stringify(ans5))
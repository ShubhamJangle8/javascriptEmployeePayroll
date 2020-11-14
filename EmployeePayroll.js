console.log("Welcome to Employee Payroll Javascript")

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2
const PART_TIME_HOURS = 4
const FULL_TIME_HOURS = 8
const WAGE_PER_HOUR = 20
let emp_check = Math.floor(Math.random() * 10) % 3;
let emp_hrs = 0;
switch(emp_check){
  case IS_PART_TIME:
    emp_hrs = PART_TIME_HOURS;
    break;
  case IS_FULL_TIME:
    emp_hrs = FULL_TIME_HOURS;
    break;
  default:
    emp_hrs = 0
    break;
}
let daily_wage = emp_hrs * WAGE_PER_HOUR;
console.log(daily_wage);
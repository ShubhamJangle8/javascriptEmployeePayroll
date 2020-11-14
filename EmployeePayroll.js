console.log("Welcome to Employee Payroll Javascript")

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2
const PART_TIME_HOURS = 4
const FULL_TIME_HOURS = 8
const WAGE_PER_HOUR = 20

function getWorkingHours(emp_check){
  switch(emp_check){
    case IS_PART_TIME:
      return PART_TIME_HOURS;
    case IS_FULL_TIME:
      return FULL_TIME_HOURS;
    default:
      return 0
  }
}
let emp_check = Math.floor(Math.random() * 10) % 3;
let emp_hrs = getWorkingHours(emp_check);
let daily_wage = emp_hrs * WAGE_PER_HOUR;
console.log("Employee Wage is " + daily_wage);
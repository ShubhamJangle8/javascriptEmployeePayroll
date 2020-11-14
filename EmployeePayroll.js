console.log("Welcome to Employee Payroll Javascript")

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2
const PART_TIME_HOURS = 4
const FULL_TIME_HOURS = 8
const WAGE_PER_HOUR = 20
const NO_OF_DAYS = 2
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
let daily_hrs = 0
let total_hrs = 0
let daily_wage = 0
let total_wage = 0
let working_days = 0
let wages = new Array()

function calcDailyWage(daily_hrs){
  return daily_hrs * WAGE_PER_HOUR
}
while(total_hrs <= 160 && working_days < 20){
  working_days++;
  let emp_check = Math.floor(Math.random() * 10) % 3;
  daily_hrs = getWorkingHours(emp_check);
  total_hrs += daily_hrs
  daily_wage = calcDailyWage()
  wages.push(daily_wage)
}
total_wage = calcDailyWage(total_hrs)
console.log("Employee Wage for " + working_days +" working days with " + total_hrs + " hours is " + total_wage);
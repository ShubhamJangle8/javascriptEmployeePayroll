console.log("Welcome to Employee Payroll Javascript")

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2
const WAGE_PER_HOUR = 20
const MAX_HRS_IN_MONTH = 160
const NO_OF_DAYS = 20
function getWorkingHours(empCheck){
  switch(empCheck){
    case IS_PART_TIME:
      return 4;
    case IS_FULL_TIME:
      return 8;
    default:
      return 0
  }
}
let totalHrs = 0
let totalWorkDays = 0
let empempHrsAndWageArray = new Array();

function calcDailyWage(empHrs){
  return empHrs * WAGE_PER_HOUR
}

while(totalHrs <= MAX_HRS_IN_MONTH && totalWorkDays < NO_OF_DAYS){
  totalWorkDays++;
  let empCheck = Math.floor(Math.random() * 10) % 3;
  let empHrs = getWorkingHours(empCheck);
  totalHrs += empHrs
  empempHrsAndWageArray.push(
  {
    dayNum: totalWorkDays,
    dailyHours: empHrs,
    dailyWage: calcDailyWage(empHrs),
    toString() {
      return '\nDay' + this.dayNum + ' => Working Hours is ' + this.dailyHours + ' And Wage Earned = ' + this.dailyWage
    },
  })
}
console.log(empempHrsAndWageArray);

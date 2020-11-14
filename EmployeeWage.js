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
let totalWage = 0
let WorkingDays = 0
let empWageArray = new Array()
let empWageMap = new Map()

function calcDailyWage(dailyHrs){
  return dailyHrs * WAGE_PER_HOUR
}

while(totalHrs <= MAX_HRS_IN_MONTH && WorkingDays < NO_OF_DAYS){
  WorkingDays++;
  let empCheck = Math.floor(Math.random() * 10) % 3;
  let dailyHrs = getWorkingHours(empCheck);
  totalHrs += dailyHrs
  dailyWage = calcDailyWage(dailyHrs)
  empWageArray.push(calcDailyWage(dailyHrs))
  empWageMap.set(WorkingDays, calcDailyWage(dailyHrs))
}
console.log(empWageMap);

function totalWages(totalWage, dailyWage){
  return totalWage + dailyWage
}
console.log("Emp Wage for Total Hours: " + Array.from(empWageMap.values()).reduce(totalWages, 0));


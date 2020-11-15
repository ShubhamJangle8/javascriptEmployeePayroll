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
let WorkingDays = 0
let empWageArray = new Array()
let empHrsMap = new Map()
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
  empHrsMap.set(WorkingDays, dailyHrs)
  empWageMap.set(WorkingDays, calcDailyWage(dailyHrs))
}
console.log(empWageMap);

function totalHours(totalHrs, dailyHrs){
  return totalHrs + dailyHrs
}

const totalWage = (total, value) => {return total + value;}
console.log("Employee Worked for " + Array.from(empHrsMap.values()).reduce(totalHours, 0))
console.log("Emp Wage for Total Hours: " + Array.from(empWageMap.values()).filter(dailyWage => dailyWage > 0).reduce(totalWage, 0));

let fullWorkingArray = new Array()
let partWorkingArray = new Array()
let notWorkingArray = new Array()

empHrsMap.forEach((value, key) => 
  {
    if(value == 8) 
      fullWorkingArray.push(key);
    else if(value == 4)
      partWorkingArray.push(key);
    else
      notWorkingArray.push(key);
  }
)
console.log("Full Time Working Days : " + fullWorkingArray)
console.log("Part time Working Days : " + partWorkingArray)
console.log("Zero Time Working Days : " + notWorkingArray)

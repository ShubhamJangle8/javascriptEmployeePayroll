console.log("Welcome to Employee Payroll Javascript")

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2
const PART_TIME_HOURS = 4
const FULL_TIME_HOURS = 8
const WAGE_PER_HOUR = 20
const NO_OF_DAYS = 2
function getWorkingHours(empCheck){
  switch(empCheck){
    case IS_PART_TIME:
      return PART_TIME_HOURS;
    case IS_FULL_TIME:
      return FULL_TIME_HOURS;
    default:
      return 0
  }
}
let empCheck = 0
let dailyHrs = 0
let totalHrs = 0
let dailyWage = 0
let totalWage = 0
let WorkingDays = 0
let wages = new Array()

function calcDailyWage(dailyHrs){
  return dailyHrs * WAGE_PER_HOUR
}

while(totalHrs <= 160 && WorkingDays < 20){
  WorkingDays++;
  empCheck = Math.floor(Math.random() * 10) % 3;
  dailyHrs = getWorkingHours(empCheck);
  totalHrs += dailyHrs
  dailyWage = calcDailyWage(dailyHrs)
  wages.push(dailyWage)
}

//UC7A
function sumForEach(dailyWage){
  totalWage += dailyWage;
}
wages.forEach(sumForEach);
console.log("For Each, Employee Wage for " + WorkingDays +" working days with " + totalHrs + " hours is " + totalWage);

function SumByReduce(totalWage, dailyWage){
  return totalWage + dailyWage
}
wages.reduce(SumByReduce, 0)
console.log("Reduce, Employee Wage for " + WorkingDays +" working days with " + totalHrs + " hours is " + totalWage);

//UC7B
let dailyCentr = 0
function mapDayWithWage(dailyWage){
  dailyCentr++;
  return dailyCentr + "=" + dailyWage;
}
let mapDayWithWageArray = wages.map(mapDayWithWage)
console.log("Day with wage array : ")
console.log(mapDayWithWageArray)

//UC7C
function fullTimeWage(dailyWage){
  return dailyWage.includes("160")
}
let fullTimeArray = mapDayWithWageArray.filter(fullTimeWage);
console.log("Employees taking full time wages")
console.log(fullTimeArray)

//UC7D
function fullTimeWage(dailyWage){
  return dailyWage.includes("160")
}
let firstFullTime = mapDayWithWageArray.find(fullTimeWage)
console.log("First full time Employee")
console.log(firstFullTime)

//UC7E
function checkEachFullTime(dailyWage){
  return dailyWage.includes("160")
}
console.log("Whether all Employees work full time : ");
console.log(mapDayWithWageArray.every(checkEachFullTime))

//UC7F
function checkAnyPartTime(dailyWage){
  return dailyWage.includes("80")
}
console.log("Whether any Part time Employees Present : ")
console.log(mapDayWithWageArray.some(checkAnyPartTime))

//UC7G
function calculateWorkingDays(dailyWage){
  return dailyWage.includes("80") || dailyWage.includes("160")
}
console.log("No Of days Employee Worked are ")
let workingArray = mapDayWithWageArray.filter(calculateWorkingDays)
console.log(workingArray.length)
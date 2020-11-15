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
let totalWage = 0
let empHrsAndWageArray = new Array();

function calcDailyWage(empHrs){
  return empHrs * WAGE_PER_HOUR
}

while(totalHrs <= MAX_HRS_IN_MONTH && totalWorkDays < NO_OF_DAYS){
  totalWorkDays++;
  let empCheck = Math.floor(Math.random() * 10) % 3;
  let empHrs = getWorkingHours(empCheck);
  empHrsAndWageArray.push(
  {
    dayNum: totalWorkDays,
    dailyHours: empHrs,
    dailyWage: calcDailyWage(empHrs),
    toString() {
      return '\nDay' + this.dayNum + ' => Working Hours is ' + this.dailyHours + ' And Wage Earned = ' + this.dailyWage
    },
  })
}
console.log("" + empHrsAndWageArray)

//11A
const calcTotalWages = (totalWage, dailyHrsAndWage) => totalWage = totalWage + dailyHrsAndWage.dailyWage
let totalWages = empHrsAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0).reduce(calcTotalWages, 0) 
console.log("Total Wages using object is " + totalWages)
console.log("Total Hours employee worked is "+ empHrsAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours > 0)
                                            .reduce((totalHrs, dailyHrsAndWage) => totalHrs += dailyHrsAndWage.dailyHours, 0))

//11B
console.log()
process.stdout.write("Employee details of full time ")
empHrsAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
                  .forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()))

//11C
console.log()
let partTimeArray = empHrsAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
                  .map(dailyHrsAndWage => dailyHrsAndWage.toString())
console.log("Part Time Working Strings " + partTimeArray)

//11D
console.log()
let notWorkingArray = empHrsAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0).map(dailyHrsAndWage => dailyHrsAndWage.dayNum)
console.log("Non Working Day Nums : " + notWorkingArray)

function profitMonitor(todayProfit, lastProfit) {
  if (todayProfit < lastProfit) {
    console.log(`Profit turun sebanyak ${lastProfit - todayProfit} point`)
  } else if (todayProfit > lastProfit) {
    console.log(`Profit naik sebanyak ${todayProfit - lastProfit} point`)
  } else {
    console.log("Profit stabil")
  }
}

console.log(profitMonitor(100, 50));
console.log(profitMonitor(50, 100));
console.log(profitMonitor(100, 100));
console.log(profitMonitor(200, 100))
console.log(profitMonitor(100,150))

module.exports = profitMonitor;
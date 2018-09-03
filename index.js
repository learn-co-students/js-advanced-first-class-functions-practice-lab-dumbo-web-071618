// Code your solution in this file!
drivers = [
  { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
  { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
  { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
  { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
  { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
];

function logDriverNames(drivers) {
  drivers.forEach(driver => console.log(driver.name))
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers) {
  let copy = drivers.slice()
  return copy.sort((a,b)=> a.revenue - b.revenue)
}

function driversByName(drivers) {
  let copy = drivers.slice()
  return copy.sort((a,b)=> a.name.localeCompare(b.name))
}

function totalRevenue(drivers) {
  return drivers.reduce((total, driver)=> total + driver.revenue, 0)
}

function averageRevenue(drivers) {
  return drivers.reduce((total, driver) => total + (
    driver.revenue/drivers.length
  ), 0)
}

//questions:
//didn't need explpict return in first 2 functions, but neeed it in 3rd & 4th function - why?

// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(driver => console.log(driver.name))
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function(driver){
    if (driver.hometown === hometown) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers) {
  let copy = drivers.slice()
  return copy.sort(function(a, b) {
    return a.revenue - b.revenue
  })
}

function driversByName(drivers) {
  let copy = drivers.slice()
  return copy.sort((a, b) => a.name.localeCompare(b.name))
}

function totalRevenue(drivers) {
  return drivers.reduce((total, driver)=> total + driver.revenue, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length
}

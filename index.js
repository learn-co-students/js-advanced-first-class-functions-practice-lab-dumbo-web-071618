const drivers = [
  { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
  { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
  { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
  { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
  { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
]

const logDriverNames = (drivers) => {
  drivers.forEach(driver => console.log(driver.name))
}

const logDriversByHometown = (drivers,location) => {
  const newDrivers = drivers.filter(driver => driver.hometown === location)
  newDrivers.forEach(driver => console.log(driver.name))
}

const driversByRevenue = (drivers) => {
  const sortedDrivers = [...drivers]
  return sortedDrivers.sort(function(driver1,driver2){
    return driver1.revenue - driver2.revenue
  })
}

const driversByName = (drivers) => {
  const sortedDrivers = [...drivers]
  return sortedDrivers.sort(function(driver1,driver2){
    return driver1.name.localeCompare(driver2.name)
  })
}

const totalRevenue = (drivers) => {

  let total = 0
  const reduceRevenues = (total, driver, i, drivers) => {
    return total + driver.revenue
  }

  return drivers.reduce(reduceRevenues, total)
}

const averageRevenue = (drivers) => {
  let total = 0
  let count = 0

  const reduceAverages = (total, driver, i, drivers) => {
    count++
    if (i === drivers.length - 1) {
      return ((total + driver.revenue) / count)
    } else {
      return total + driver.revenue}
  }
  return drivers.reduce(reduceAverages,total)
}

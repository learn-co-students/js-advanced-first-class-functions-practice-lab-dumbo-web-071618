// Code your solution in this file!
const logDriverNames = drivers => {
  drivers.forEach(driver => console.log(driver.name))
}

const logDriversByHometown = (drivers, loc) => {
  drivers.forEach(driver => {
    if (driver.hometown === loc) {
      console.log(driver.name)
    }
  })
}

const driversByRevenue = drivers => {
  return [...drivers].sort((a, b) => a.revenue - b.revenue)
}

const driversByName = drivers => (
  [...drivers].sort((a, b) => a.name.localeCompare(b.name))
)

const totalRevenue = drivers => (
  [...drivers].reduce((sum, driver) => sum + driver.revenue, 0)
)

const averageRevenue = drivers => (
  totalRevenue(drivers) / drivers.length
)

const logDriverNames = (drivers) => {
    for (driver of drivers) {
        console.log(driver.name)
    }
}

const logDriversByHometown = (drivers, hometown) => {
    for (driver of drivers) {
        if (driver.hometown === hometown) console.log(driver.name)
    }
}

const driversByRevenue = (drivers) => {
    let newDrivers = [...drivers]
    return newDrivers.sort((a, b) => a.revenue - b.revenue)
}

const driversByName = (drivers) => {
    newDrivers = [...drivers]
    return newDrivers.sort((a, b) => a.name.localeCompare(b.name))
}

const totalRevenue = (drivers) => drivers.reduce((acc, el) => acc + el.revenue, 0)

const averageRevenue = (drivers) => totalRevenue(drivers) / drivers.length
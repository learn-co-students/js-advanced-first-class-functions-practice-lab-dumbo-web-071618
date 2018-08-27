function logDriverNames(arr)    {
    arr.forEach(driver => console.log(driver.name))
}

function logDriversByHometown(arr, hometown) {
    arr.filter(driver => driver.hometown === hometown).forEach(driver => console.log(driver.name))
}

function driversByRevenue(arr) {
    let new_arr = [...arr]
    return new_arr.sort(function (a, b) {return a.revenue - b.revenue})
}

function driversByName(arr)    {
    new_arr = [...arr]
    return new_arr.sort(function (a, b) {return a.name.localeCompare(b.name)})
}

function totalRevenue(arr) {
    return arr.map((obj) => obj.revenue).reduce(function (accumulator, currentValue) {
        return accumulator + currentValue
        })
}

function averageRevenue(arr)   {
    return totalRevenue(arr) / arr.length
}
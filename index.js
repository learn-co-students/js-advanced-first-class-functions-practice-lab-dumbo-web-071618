// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(function(element){console.log(element.name)} )
}

function logDriversByHometown(drivers,hometown){
  drivers.filter(n=> n.hometown === hometown).forEach(function(element){console.log(element.name)} )
}

function driversByRevenue(drivers){
  let copy = drivers.slice();
  return copy.sort((a, b) => (a.revenue > b.revenue ? 1 : -1));
}

function driversByName(drivers){
  let copy = drivers.slice();
  return copy.sort((a, b) => (a.name > b.name ? 1 : -1));
}

function totalRevenue(drivers){
  return drivers.reduce((total, driver) => total + driver.revenue, 0)
}

function averageRevenue(drivers){
  const sum = drivers.reduce((total, driver) => total + driver.revenue, 0)
  return sum/drivers.length
}

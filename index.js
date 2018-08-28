// Code your solution in this file!
// Receives an array of driver objects and logs the name attribute of each
// driver to the console.
const logDriverNames = function(drivers) {
  // forEach Solution
  // drivers.forEach(function (driver) {
  //   console.log(driver.name);
  // });

  // For . . . Of Solution
  for (const driver of drivers) {
    console.log(driver.name);
  }
};
// Receives an array of driver objects as the first argument and a location as
// the second argument.
const logDriversByHometown = function(drivers, location) {
  // The function logs to the console the name attribute of each driver whose
  // hometown matches the string passed in as the 'location' argument.
  for (const driver of drivers) {
    if (driver.hometown == location) {
      console.log(driver.name);
    }
  }
};
// Receives an array of driver objects
const driversByRevenue = function(drivers) {
  const sorted = drivers.slice();
  // returns a new array of driver objects sorted by their revenue attribute
  // from lowest to highest.
  return sorted.sort(function(a, b) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    if (a.revenue < b.revenue) return -1;
    if (a.revenue > b.revenue) return 1;
    return 0;
  });
};
// Receives an array of driver objects
const driversByName = function(drivers) {
  const sorted = drivers.slice();
  // returns a new array of driver objects sorted by their name attribute from
  // A to Z.
  return sorted.sort(function(a, b) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
    return a.name.localeCompare(b.name);
  });
};
// Receives an array of driver objects and returns the sum of the revenue
// earned by each driver.
const totalRevenue = function(drivers) {
  return drivers.reduce(function(agg, driver) {
    return agg + driver.revenue;
  }, 0);
};
//  Receives an array of driver objects and returns the average revenue earned
// by each driver.
const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length;
};

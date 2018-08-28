// Code your solution in this file!


function logDriverNames(array){

  return array.forEach(function(element){


      console.log (element.name)

  })


}


function logDriversByHometown(array,location){

    array.forEach(function(element){

      if (element.hometown === location) {

        console.log(element.name)

      }


  })
}

function driversByRevenue(array){


  return array.slice().sort(function(a, b){

    return a.revenue - b.revenue

  })
}

function driversByName(array){

  return array.slice().sort(function(a, b){

      return a.name.localeCompare(b.name)

  })


}

function totalRevenue(array){

  return array.reduce(function(accumulator, currentValue){
      return accumulator + currentValue.revenue}, 0)
}

function averageRevenue(array){

  let totalRevenue = array.reduce(function(accumulator, currentValue){
      return accumulator + currentValue.revenue}, 0)

  return totalRevenue/array.length
} 

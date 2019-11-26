// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast

var fruits = [
    {
      name: 'apple',
      color: 'red',
      priceperKg: 100
    },
    {
        name:'orange',
        color:'yellow',
        priceperKg:70
    },
    {
        name:'pomogranate',
        color:'darkRed',
        priceperKg:100
    } 
];
 
function myfun(name)
{ var myarr = [];
  var myobj=  fruits.filter(f => f.name == name).forEach(f=>{
      myarr.push(f.color);
      myarr.push(f.priceperKg);
  });
console.log(myarr);
}
myfun('apple');
// Write your code here


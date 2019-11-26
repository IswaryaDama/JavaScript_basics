/* Write a Program to Flatten a given n-dimensional array */
//var myarray = [1, [2, 3], [[4, 5], [6, 7]], [[[8, 9], 10]]];
const flatten = (arr) => {
	// Write your code here
	if(!(Array.isArray(arr))){
		return null;
	}
	var d=Infinity;
	return Array.isArray(arr)?d>0?arr.reduce((acc,val) => acc.concat(Array.isArray(val)?flatten(val,d-1):val),[]):arr.slice():null; 
 //var myarray = [].concat(...arr);
 
};
//flatten(myarray)
//console.log("flatten ayyay is : " + myarray );
/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;

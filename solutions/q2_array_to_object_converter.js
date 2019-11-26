/* Write a Program to convert an array of objects to an object
	based on a given key */

const test = [{ id: 1, name: 'Ankit', role: 'Developer'},
{ id: 2, name: 'Pankhuri', role: 'Lead'},
{ id: 3, name: 'Anubha', role: 'QA'}];

const convert = (Arrobj,key) => {
	// Write your code here
	if(!(Array.isArray(Arrobj))){
		return null;
	}
	var obj = {

	};
	Arrobj.forEach(ele =>{
		obj[ele[key]] = ele;
      
	});
	return obj;
	//console.log(obj);
};
//convert(test,'name');
/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

module.exports = convert;

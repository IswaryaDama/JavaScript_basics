/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (num) => {
    // Write your code here
    var output="";
    for(let i=0;i<num;i++){
        var str="";
        for(let j=0;j<num-i;j++){
            str = str + ' ';
        }
        for(let k=1;k<=(1*i+1);k++){
            str = str + '*' +' ';
        }
        output = output + str + " \n";
        
       //console.log(str);
    }
    return output; 
};
//buildPyramid(5);
/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;

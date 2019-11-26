// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.

var students = [
    {
        name:'ish',
        sub1:'Grmmer',
        sub2:'Accounts',
        score1:75,
        score2:85
    },
    {
        name:'Narra',
        sub1:'Grmmer',
        sub2:'Accounts',
        score1:75,
        score2:80
    },
    {
        name:'Venkat',
        sub1:'Grmmer',
        sub2:'Accounts',
        score1:95,
        score2:80
    },
    {
        name:'Akhila',
        sub1:'Grmmer',
        sub2:'Accounts',
        score1:75,
        score2:85
    },
    {
        name:'Anwesh',
        sub1:'Grmmer',
        sub2:'Accounts',
        score1:85,
        score2:85
    },
    {
        name:'Amit',
        sub1:'Grmmer',
        sub2:'Physics',
        score1:85,
        score2:85
    },
    {
        name:'Rajsree',
        sub1:'Grmmer',
        sub2:'Physics'
    },
    {
        name:'Gopal',
        sub1:'Grmmer',
        sub2:'Physics',
        score1:75,
        score2:85
    },
    {
        name:'Bikram',
        sub1:'Grmmer',
        sub2:'Physics',
        score1:90,
        score2:85
    },
    {
        name:'Arun',
        sub1:'Grmmer',
        sub2:'Accounts',
        score1:75,
        score2:85
    },
];
var resultcard = {

};
students.forEach(element => {
    resultcard[element.name] = ((element.score1+element.score2)/200)*100;
});
console.log(resultcard);
// Write your code here

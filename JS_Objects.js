// //Print all the students and their cohort

// let students = [
//     {name: 'Remy', cohort: 'Jan'},
//     {name: 'Genevieve', cohort: 'March'},
//     {name: 'Chuck', cohort: 'Jan'},
//     {name: 'Osmund', cohort: 'June'},
//     {name: 'Nikki', cohort: 'June'},
//     {name: 'Boris', cohort: 'June'} ];

//     for (let cohort in students) {
//         console.log("Name:" + " " + students[cohort].name + ", " + "Cohort:" + " " + students[cohort].cohort); 
//     }
    
    

//Challenge 2

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]};

    console.log("Employees","\n");
    var index = 0;
    var res2 = users['employees'];
    var res3 = users['managers'];
    for (let res2 in users['employees'])
    {
        index++;
        console.log(index + " " + "-" + " " + users['employees'][res2].first_name + "," + " " + users['employees'][res2].last_name + " " + "-" + " " + (users['employees'][res2].first_name.length + users['employees'][res2].last_name.length) ); 
    } 
    console.log("\n");
    console.log("Managers","\n");
    let idx = 0;
    for (let res3 in users['managers'])
    {
        idx++;
        console.log(idx + " " + "-" + " " + users['managers'][res3].first_name + "," + " " + users['managers'][res3].last_name + " " + "-" + " " + (users['managers'][res3].first_name.length + users['managers'][res3].last_name.length) ); 
    } 

 
  


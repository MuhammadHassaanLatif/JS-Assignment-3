let cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Sheikhupura", "Kashmir"]

// clear output button 
function clearOutput (){
    document.getElementById("output").innerHTML = " "
}

// simple alert 
function simpleAlert(){
    alert("This is a simple alert!!!")
    document.getElementById("output").innerHTML = "This is a simple alert!!!"
}

// print my name 
function printName (){
    let userName = prompt("Please enter your name")
    document.getElementById("output").innerHTML = userName ;
}

// print all cities 
function printAllCities(){
    document.getElementById("output").innerHTML = " "
    for (let i=0; i<cities.length; i++){
        document.getElementById("output").innerHTML += i+1 +") " + cities[i] + "<br />"
    }
}

// add city in list 
function addCity(){
    document.getElementById("output").innerHTML = " "
    let newCity = prompt("Please enter city name you want to add")
    cities.push(newCity)

    for (let i=0; i<cities.length; i++){
        document.getElementById("output").innerHTML += i+1 +")" + cities[i] + "<br />"
    }
}

// generate table 
function generateTable(){
    tableNumber = +prompt("Please enter table number that use want to generate")
    document.getElementById("output").innerHTML = `<h3>Table of ${tableNumber}<h3/> <hr />`
    for(let i=1; i<11; i++){
        let table = tableNumber + " * " + i + " = " + tableNumber*i + "<br />"
        document.getElementById("output").innerHTML += table ;
    }
}
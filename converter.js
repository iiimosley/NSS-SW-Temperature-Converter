// target input field for user temp
// target radio buttons to determine which conversion function
// send converted temperature to div#convertedTemp
// target button.convert to start function
// target button.clear to clear input field.
// target enter key in input field w/ event handler to also start conversion (button.covert function)
// If temp > 90F/32C, div.convertedTemp color: red
// If else temp < 32F/0C, div.convertedTemp color: blue
// Else, div.convertedTemp color: green 

//output from DOM
let initTemp = document.getElementById("numInput");
//input to DOM
let newTemp = document.getElementById("newTemp");

//convert button
let button = document.getElementById("convert");
button.addEventListener("click", determineConverter);
//convert -> press enter (global to div#converter)
document.getElementById("converter").addEventListener("keydown", keyPress);
//clear button + general clear click
let clear = document.getElementById("clear");
clear.addEventListener("click", clearConverter);
//auto clear (clears div#converter when deleting text from #numInput)
// initTemp.addEventListener("keypress", autoClear)


function toCelcius(temp) {
    let convertedTemp = ((temp - 32)/1.8).toFixed(1);
    if (convertedTemp > 32){
        newTemp.style.color = '#ff0000';
    } else if (convertedTemp < 0) {
        newTemp.style.color = '#7EC0EE';
    } else {
        newTemp.style.color = '#2a9173';
    };
    printTemp(convertedTemp);
};

function toFahrenheit(temp) {
    let convertedTemp = (temp*1.8+32).toFixed(1);
    if (convertedTemp > 90){
        newTemp.style.color = '#ff0000';
    } else if (convertedTemp < 32) {
        newTemp.style.color = '#7EC0EE';
    } else {
        newTemp.style.color = '#2a9173';
    };
    printTemp(convertedTemp);
};

//output new temp to div
function printTemp (value) {
    newTemp.innerHTML += value;
};

function determineConverter() {
    if (newTemp.innerHTML === "") {
        if (document.getElementById("celcius").checked) {
            toCelcius(+initTemp.value);
        } else if (document.getElementById("farhenheit").checked){
            toFahrenheit(+initTemp.value);
        }
    }
};


function clearConverter() {
    initTemp.value = "";
    newTemp.innerHTML = "";
};

function keyPress () {
    if (event.code === "Enter") {
        determineConverter();
    }
};

// function autoClear() {
//     console.log(initTemp.value);
//     if (initTemp.value == "") {
//         newTemp.innerHTML = "";
//     } else {
//         clearConverter();
//     }
// };
    

    
    

    


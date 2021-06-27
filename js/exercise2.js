//EXERCISE 1

// INPUT
const salary = 100_000;

//PROCESS
function calculateMoney() {
    var numberWork = document.getElementById("textJs").value;
    var numberWorktotal = numberWork * salary;

// OUTPUT
    console.log("Salary amount:", numberWorktotal);

    var divDemo = document.getElementById("demo");
    divDemo.innerHTML = "";
    var pTitle = document.createElement("p");
    pTitle.innerHTML = "Salary amount:";
    var pSalary = document.createElement("p");
    pSalary.innerHTML = "$" + numberWorktotal;
    divDemo.appendChild(pTitle);
    divDemo.appendChild(pSalary); 
}



//EXERCISE 2

//INPUT:
// Input any 5 number in this blank

//PROCESS:
function calculateNumber() {
    var numberFirst = parseInt(document.getElementById("numberFirst").value);
    var numberSecond = parseInt(document.getElementById("numberSecond").value);
    var numberThird = parseInt(document.getElementById("numberThird").value);
    var numberFourth = parseInt(document.getElementById("numberFourth").value);
    var numberFifth = parseInt(document.getElementById("numberFifth").value);
    var numberAverage = ((numberFirst + numberSecond + numberThird + numberFourth + numberFifth) / 5);

//OUTPUT:
    console.log("The average number:", numberAverage);

    var divDemo2 = document.getElementById("demo2");
    divDemo2.innerHTML = "";
    var pTitle2 = document.createElement("p");
    pTitle2.innerHTML = "The average number:";
    var pAverage = document.createElement("p");
    pAverage.innerHTML =  numberAverage;
    divDemo2.appendChild(pTitle2);
    divDemo2.appendChild(pAverage); 
}



//EXERCISE 3

// INPUT:
const usd_rate = 23_500;


//PROCESS:
function exchangeMoney() {
    var exchangeUsd = document.getElementById("exchangeUsd").value*usd_rate;

//OUTPUT:
    console.log("Exchange Money:", exchangeUsd);
    var divDemo3 = document.getElementById("demo3");
    divDemo3.innerHTML = "";
    var pTitle3 = document.createElement("p");
    pTitle3.innerHTML = "Total amount of VND:";
    var pNumber = document.createElement("p");
    pNumber.innerHTML =  exchangeUsd;
    divDemo3.appendChild(pTitle3);
    divDemo3.appendChild(pNumber); 
}


//EXERCISE 4

// INPUT:
// Width and height of rectangle

//PROCESS:
function calculateRectangle() {
    var widthRectangle = parseInt(document.getElementById("widthRectangle").value);
    var heightRectangle = parseInt(document.getElementById("heightRectangle").value);
    var numberArea = (widthRectangle * heightRectangle);
    var numberPerimeter = (widthRectangle + heightRectangle)*2;

// OUTPUT:
    console.log("Area of Rectangle:", numberArea);
    console.log("Perimeter of Rectangle:",numberPerimeter);

    var spanDemo4 = document.getElementById("demo4");
    var spanDemo5 = document.getElementById("demo5");
    var divResult = document.getElementById("result");

    spanDemo4.innerHTML = numberArea;
    spanDemo5.innerHTML = numberPerimeter;
    divResult.classList.remove("hide");
}


//EXERCISE 5

//INPUT:
// Input 2 number in the blank

//PROCESS
function calculateSum() {
    var numberSum = parseInt(document.getElementById("add_number").value);
    var unit = numberSum % 10;
    var dozens = Math.floor(numberSum / 10);
    var numberSum = unit + dozens;
// OUTPUT:    
    console.log("Result", numberSum);
    var divDemo6 = document.getElementById("demo6");
    divDemo6.innerHTML = "";
    var pTitle6 = document.createElement("p");
    pTitle6.innerHTML = "Total of sum:";
    var pSum = document.createElement("p");
    pSum.innerHTML =  numberSum;
    divDemo6.appendChild(pTitle6);
    divDemo6.appendChild(pSum);

}
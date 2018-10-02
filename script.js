var a = 5;
var b = 10;

var myName = "Yanika";
var mySname = "Khamkliang";
var myEmail = "ykhamkliang@gmail.com";
var myDOB = "01/08/97";

//task1
function addNums(numA, numB) {
    return numA + numB;
}

//task2
function checkNums(num1,num2) {
    if (num2 > num1) {
        return false;
    } else if (num2 < num1) {
        return true;
    } else if (num2 == num1) {
        return "Values are equal";
    }
}

//task3
function words(w1,w2,w3,w4) {
    var myArray = [w1, w2, w3, w4];
    return myArray;
}

//task4
function timeConvert(n) {
    var num = n;
    var hours = (num/60);
    var mhour = Math.floor(hours);
    var minutes = num%60;
    return num + " minutes = " + mhour + " hour(s) and " + minutes + " minute(s).";
}

//task5
function circle(r) {
    this.r = r;
    var area = Math.PI * this.r * this.r;
    var perimeter = 2*Math.PI*this.r;

    return "Radius = " + r + " Area = " + area + " the perimeter of this circle is " + perimeter;
}

//task6
function mileToKm(distance, unit) {
    if ( unit == "miles") {
        return distance + " mile(s) = " + distance*1.60934 + " Kilometre(s)";
    } else if (unit =="km" || unit == "kilometre") {
        return distance + " km(s) = " + distance*0.621371 + " mile(s)";
    }
}

//task7
function BMI(w,h) {
    var bmi = w/(h^2);

    return "Your weight is: " + w + " your height is: " + h + " Boday mas index is: " + bmi;

}

//task8
function date(date) {
    var d= new Date(date);
    return ("Date: " + d.getDay + " of " + d.getMonth);
}

//task9
function palindromee (word) {
    
}

//task10,11,12
function calculater (n1, operator, n2) {
    if (operator == "+") {
        return n1 + n2;
    } else if (operator == "-") {
        return n1-n2;

    } else if (operator == "*") {
        return n1*n2;
    } else if (operator == "/") {
        return n1/n2;
    }

}


function subtract(numA, numB) {
    return Number(numA) - Number(numB);
}
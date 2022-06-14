
// Question no# 01 from String Assignment
var a = prompt("Enter your First name ");
var b = prompt("Enter your Second name ");
var fullName = (a  + b);
document.write("Asalam-o-Alaikum " + fullName, "<br>");


// Question no# 02 from String Assignment
var mob = prompt("Enter your favorite mobile phone with model");
document.write("Your favorite phone is:" + mob, "<br>");
document.write("Length of String:" + mob.length, "<br>");

// Question no# 03 from String Assignment
var text = "Pakistani";
for (i = 1; i < text.length; i++){
    if (text.charAt(i) === "n"){
        document.write("String:" + text, "<br>");
        document.write("index of 'n': " + i, "<br>");
    }
}


// Question no# 04 from String Assignment
var world = "Hello World";
var lastWorld = world.lastIndexOf("l");
document.write("String: " + world, "<br>")
document.write("Last index of 'l': " + lastWorld, "<br>");



// Question no# 05 from String Assignment
var index = "Pakistani";
var index2 = index.charAt(3);
document.write("String:" + index, "<br>")
document.write("Character at index 3:" + index2, "<br>");



// Question no# 06 from String Assignment
var firstName = "Hadi ";
var lastName = "Raza";
var fullName = firstName + lastName;
document.write(fullName + " FullName using string concat() method.", "<br>");



// Question no# 07 from String Assignment
var city = "Hyderabad";
var city2 = city.replace("Hyderabad", "Islamabad");
document.write("City: " + city, "<br>");
document.write("After replacement: " + city2, "<br>");



// Question no# 08 from String Assignment
var message = "Ali and Sami are best friends. They play cricket and football together.";
var message2 = message.replace(/and/g, "&");
document.write("Message: " + message, "<br>");
document.write("After replacement: " + message2, "<br>");




// // Question no# 09 from String Assignment
// var no1 = "123";
// var no2 = parseInt(no1);
// document.write(no1.value(), "<br>");
// document.write(no1.type(), "<br>");
// document.write(no2.value(), "<br>");
// document.write(no2.type(), "<br>");



// // Question no# 10 from String Assignment
// var url = prompt("Enter eb url. e.g: www.google.com");
// var url2 = "";
// document.write(url2);



// Question no# 11 from String Assignment
var fruit = prompt("Enter your favorite Fruit name");
document.write("User input: " + fruit, "<br>");
var fruit2 = fruit.toUpperCase();
document.write("UpperCase: " + fruit2, "<br>");



// Question no# 12 from String Assignment
var dryFruit = prompt("Enter your favorite DryFruit name in UpperCase format");
document.write("User input: " + dryFruit, "<br>");
var dryFruit2 = dryFruit.toLowerCase();
document.write("LowerCase: " + dryFruit2, "<br>");




// Question no# 13 fnrom String Assignment
var inix = prompt("Write any Number");
var inix2 = parseInt(inix);
alert(inix2);



// Question no# 14 fnrom String Assignment
var number = 35.36;
var number2 = number.toString();
document.write("Number: " + number, "<br>");
document.write("Result: " + number2 * 100, "<br>");



// Question no# 15 fnrom String Assignment
var x = "4";
var y = "4";
var z = x + y;
document.write("x is " + x, "<br>");
document.write("y is " + y, "<br>");
document.write("x + y is " + z, "<br>");



// Question no# 16 fnrom String Assignment
var d = "9";
var e = "9";
var f = parseInt(d) - parseInt(e);
document.write("d is " + d, "<br>");
document.write("e is " + e, "<br>");
document.write("d - e is " + f, "<br>");





// Question no# 17 fnrom String Assignment





// Question no# 18 fnrom String Assignment
var array = ["cake", "apple pie", "cookie", "chips", "patties"];
var order = prompt("Welcome to Shaheen Bakery. What do you want to order sir/ma'am?");
if (order === array[0]){
    document.write(order + " is available at index " + 0, "<br>")
}

else if (order === array[1]){
    document.write(order + " is available at index " + 1, "<br>")
}
else if (order === array[2]){
    document.write(order + " is available at index " + 2, "<br>")
}
else if (order === array[3]){
    document.write(order + " is available at index " + 3, "<br>")
}
else if (order === array[4]){
    document.write(order + " is available at index " + 4, "<br>")
}
else {
    alert("This is not available yet");
}



// Question no# 19 fnrom String Assignment
var car = prompt("Enter your car name");
var car2 = prompt("Enter your 2nd car name");
if (car.length > car2.length){
    document.write(car + " is greater than " + car2, "<br>")
}
else {
    document.write(car2 + " is greater than " + car, "<br>")
}



// Question no# 20 fnrom String Assignment






// Question no# 21 fnrom String Assignment
var university = "Federal Urdu University";
for (i = 0; i < university.length; i++){
    document.write(university[i], "<br>")
}


// Question no# 22 fnrom String Assignment
var country = prompt("Enter your country name, I will show you last character of your input");
var country2 = country.length - 1;
document.write("Your country's last character is " + country[country2], "<br>");




// Question no# 23 fnrom String Assignment





// Question no# 24 fnrom String Assignment




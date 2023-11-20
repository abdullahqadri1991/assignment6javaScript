// Question # 1
document.write("<h1>Question # 1</h1>")

document.write(" Result" + "<br>")
document.write ("The value of ++a is: 10 " + "<br> <br> " )
document.write ("--------------------------"  + "<br>")

var a = 10
document.write ("The value of ++a is: " + ++a + "<br>")
document.write ("Now the value of a is: " + a + "<br> <br>")

document.write ("The value of a++ is: " + a++ + "<br>")
document.write ("Now the value of a is: " + a + "<br> <br>")

document.write ("The value of --a is: " + --a +   "<br>")
document.write ("Now the value of a is: " + a + "<br> <br>")


document.write ("The value of --a is: " + a-- +   "<br>")
document.write ("Now the value of a is: " + a + "<br> <br>")


// Question # 2
document.write("<h1>Question # 2</h1>")


document.write ("var a = 2, b = 1;  " + '<br>')
document.write ("var result = --a - --b + ++b + b--;" + '<br> <br>')

document.write ("--a;" + " 1"  + '<br>')
document.write ("--a - --b;" + " 1"  + '<br>')
document.write ("--a - --b + ++b;" + " 2"  + '<br>')
document.write ("--a - --b + ++b + b--;" + " 3"  + '<br> <br> ')


document.write ("a is 1"  + '<br>')
document.write ("b is 0"  + '<br>') 
document.write ("result is 3" )


// Question # 3
document.write("<h1>Question # 3</h1>")
var yourName = prompt ("Enter Your name")
alert ("welcome "+  yourName)
document.write("welcome "+  yourName)


// Question # 5
document.write("<h1>Question # 5 Multipliction Table</h1>")


var tableNum =prompt("Enter Your table Number")
document.write("Table of "+" " + tableNum +  "<br>")

document.write(tableNum + "x" + 1 + "=" + tableNum*1 + "<br>")
document.write(tableNum + "x" + 2 + "=" + tableNum*2+ "<br>")
document.write(tableNum + "x" + 3 + "=" + tableNum*3+ "<br>")
document.write(tableNum + "x" + 4 + "=" + tableNum*4+ "<br>")
document.write(tableNum + "x" + 5 + "=" + tableNum*5+ "<br>")
document.write(tableNum + "x" + 6 + "=" + tableNum*6+ "<br>")
document.write(tableNum + "x" + 7 + "=" + tableNum*7+ "<br>")
document.write(tableNum + "x" + 8 + "=" + tableNum*8+ "<br>")
document.write(tableNum + "x" + 9 + "=" + tableNum*9+ "<br>")
document.write(tableNum+ "x" + 10 + "=" + tableNum*10+ "<br>")


// Question # 6
document.write("<h1>Question # 6</h1>")

document.write("<h3>Subject Total Marks Obtaind Marks perrentage</h3>")
var subject_1 =  prompt("Enter Your 1st Subject Name")
var subject_2 =  prompt("Enter Your 2nd Subject Name")
var subject_3 =  prompt("Enter Your 3rd Subject Name")
var totalMarks = 100
var obtainedMarks_1 = +prompt( " Enter Subject_1 Obtained Marks")
var obtainedMarks_2 = +prompt( " Enter Subject_2 Obtained Marks")
var obtainedMarks_3 = +prompt( " Enter Subject_3 Obtained Marks")
var totalObt = obtainedMarks_1 + obtainedMarks_2 +obtainedMarks_3
document.write(   subject_1 + "  " + totalMarks + "   " +  obtainedMarks_1  + " " + obtainedMarks_1 * totalMarks / 100 + "%" + "<br>")
document.write(  subject_2 + "  " + totalMarks + "  " +  obtainedMarks_2  +  " " +  obtainedMarks_2 * totalMarks  / 100 + "%" + "<br>")
document.write(  subject_3 + "  " + totalMarks + "  " +  obtainedMarks_3  +  " " +  obtainedMarks_3 * totalMarks  / 100  + "%" + "<br>")
document.write(  ( " "  + "          " + totalMarks*3 + " ")  , ( "" + totalObt + "  " ) , ( " " + totalObt * 100 ) / 300 + " % "   )
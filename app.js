// CHAPTER 38-42
// III
// var mark1 = parseInt(prompt("Mark 1"))
// var mark2 = parseInt(prompt("Mark 2"))
// var mark3 = parseInt(prompt("Mark 3"))

// console.log(mark1 , mark2 ,mark3)

// function average(){
//     var Addmark = mark1 + mark2 + mark3
//     var avg = Addmark/3
//     document.write("Average: " + avg + "</br>")
// }
// function Percentage(){
//     var totalmarks = 300
//     var obtmarks = mark1+mark2+mark3
//     var per = obtmarks / totalmarks*100
//     var fixper = per.toFixed(2)
//     document.write("Percentage: " + fixper)
// }
// function MainFunction(){
//     average()
//     Percentage()
// }
// MainFunction()
document.write("<br/><br/>")
// VI
function removeVowels() {
    var str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    var replaceVowels = str.replace(/[aeiou]/g, "")
    document.write("<strong>Actual Sentence</strong>: " + str + "<br />")
    document.write("<strong>After removing vowels</strong>: " + replaceVowels)
}
removeVowels()
document.write("<br/><br/>")

// VIII
// function toMeters(){
//     var inKms = parseInt(prompt("Enter distance in kilometer?"))
//     meter = 1000;
//     toMeter = inKms * meter
//     document.write("The distance in Meters: " + toMeter)
// }
// toMeters()
// document.write("<br/>")

// function toFeet(){
//     var inFoot = parseInt(prompt("Enter distance in Foot?"))

//     foot = 3280.84
//     toFoot = foot * inFoot 

//     document.write("The distance in Foots is : " + toFoot.toFixed(2))

// }
// toFeet()
// document.write("<br/>")

// function toInches(){
//     var inInches = parseInt(prompt("Enter distance in Inches?"))
//     Inches = 39370.1
//     InInches = inInches * Inches 

//     document.write("The distance in Inches is : " + InInches.toFixed(2))

// }
// toInches()
// document.write("<br/>")

// function toCentimeters(){
//     var inCentimeter = parseInt(prompt("Enter distance in Centimeter?"))
//     Centimeters = 100000
//     toCentimeter = inCentimeter * Centimeters

//     document.write("The distance in Inches is : " + toCentimeter.toFixed(2))
// }
// toCentimeters()
document.write("<br/><br/>")

// function overTime(){
//     var overTimeRate = 12
//     var hoursWorked = prompt("How many hours did employee worked?") 

//     if(hoursWorked > 40){
//         alert("Employee worked overtime")
//         var overTime = hoursWorked - 40
//         document.write( "Hours of over time: <strong>"+ overTime + "</strong><br />")
//         document.write("Amount payable for overtime: <strong>Rs/= " + overTime*overTimeRate + "</strong>")
//     }
//     else{
//         alert("No overtime")
//     }
// }
// overTime()
// document.write("<br/><br/>")
document.write("<br/><br/>")

// X
// function Cash(){
//     var amount = parseInt(prompt("Enter amount"))
//     console.log("Amount " + amount)

//     document.write("You will get  <strong>" + Math.floor(amount/100 )+ "</strong> 100 Rupees note <br />")
//     document.write("You will get  <strong>" + Math.floor(amount % 100/ 50 )+ "</strong> 50 Rupees note <br />" )
//     document.write("You will get <strong>" +  (((amount % 100) % 50) / 10 )+ "</strong> 10 Rupees note <br />")

// }
// Cash()

// II
// function leapYear(){
//     var year = prompt("Find out leap year")
//     if(year%4 ==0){
//         document.write("<strong>"+year+"</strong>" + " is a leap year")
//     }
//     else{
//         document.write("<strong>"+year+"</strong>" + " isn't a leap year")
//     }
// }
// leapYear()
document.write("<hr />")

// CHAPTER 43-48
// I
function doAlert() {
    alert("Hello I am a lert box")
}

// II
function Greet() {
    alert("Thank you for purchasing a phone frm us")
}
// III
function delStdRecord(e){
    var td = document.getElementById("td")
    // td.parentNode.remove()

    var tRow = document.getElementById("table").getElementsByTagName("tr");
    for(var i = 0; i < tRow.length; i++){
        if(tRow[i].id == "tr"){
            //do something
            td.parentNode.remove()
        }
    }
}
// V
var Increment = 0

function Inc() {
    Increment++
    document.getElementById("counter").innerHTML = Increment
}
var Decrement = Increment

function Dec() {
    Increment--
    document.getElementById("counter").innerHTML = Increment
}

// IV
function swapImg(id, src) {
    var image = document.getElementById(id)
    image.src = src
}
// CHAPTER 49-52
function getVal(e) {
    let fname = document.getElementById("fname")
    let inputVal = fname.value
    alert("First Name: " + inputVal)

    let lname = document.getElementById("lname")
    let lastNameValue = lname.value
    alert("Last Name: " + lastNameValue)

    let email = document.getElementById("email")
    let emailValue = email.value
    alert("Email: " + emailValue)

    let pass = document.getElementById("pass")
    let passValue = pass.value
    alert("Password: " + passValue)

    let date = document.getElementById("date")
    let dateValue = date.value
    alert("Date of Birth: " + dateValue)

    fname.value = ""
    lname.value = ""
    email.value = ""
    pass.value = ""
    date.value = ""
}
// II
function expandPara() {
    let para = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    document.getElementById("expandParagraph").innerHTML = para
}

// III
function getStudentDetails() {
    var table = document.getElementById("table")

    var std_name = document.getElementById("std_name")
    var std_nameVal = std_name.value

    var roll_no = document.getElementById("roll_no")
    var roll_noVal = roll_no.value

    var trAuto = document.createElement("tr")

    // creating elements
    var tdOne = document.createElement("td")
    var tdTwo = document.createElement("td")

    // delete btn
    var delBtnTd = document.createElement("td")
    var delBtn = document.createElement("button")

    // setting attributes
    tdOne.setAttribute("class", "table-data")
    tdTwo.setAttribute("class", "table-data")
    // del button attribute
    delBtn.setAttribute("class" , "btn btn-danger ")
    delBtn.setAttribute("onclick" , "Del(this)")
    // edit button attribute

    // text in elements 
    var tdOneText = document.createTextNode(std_nameVal)
    var tdTwoText = document.createTextNode(roll_noVal)
    var delBtnText = document.createTextNode("DELETE")

    
    // appending text in elements
    tdOne.appendChild(tdOneText)
    tdTwo.appendChild(tdTwoText)
    delBtn.appendChild(delBtnText)

    // appending text and elements in table
    table.appendChild(trAuto)
    trAuto.appendChild(tdOne)
    trAuto.appendChild(tdTwo)
    trAuto.appendChild(delBtn)

    std_name.value = ""
    roll_no.value = ""
}
function Del(e){
    e.parentNode.remove()
}
document.write("<hr />")

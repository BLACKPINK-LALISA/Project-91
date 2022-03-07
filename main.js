document.getElementById("playerquestion").innerHTML = "Question Turn - " + player1name ;
document.getElementById("playeranswer").innerHTML =  "Answer Turn - " + player2name;

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    answer= parseInt(number1) * parseInt(number2);
    question="<h4>" + number1 + "X" + number2 + "</h4>";
    input = "<br> Answer : <input type = 'text' id='input_check_box'>";
    check="<br><br><button class='btn btn info' onclick='check()'>Check</button>";
    row = question + input + check ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
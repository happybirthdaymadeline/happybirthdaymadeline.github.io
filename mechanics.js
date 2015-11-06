function redirect(url) {
	window.location = url;
}

function submitAnswer() {
    var answer = document.forms["form"]["answer"].value;
    
    if(answer.toLowerCase().search("kiss") > -1) {
        window.alert("Correct<3 Your letter for the challenge is: N.");
        redirect("http://happybirthdaymadeline.github.io");
    }
    else {
        window.alert("Sorry boo :* Try again?");
    }
}

function trueSubmit() {
    window.alert("Oh good(: Here's your letter: Z");
}
function falseSubmit() {
    window.alert("Oh :/ Well here's your letter. Q >:)");
}

function submitChoiceAnswer() {
    if(document.getElementById("a4").checked == true) {
        window.alert("Oh good you know(; And the percentage grows every birthday<3 Even more than infinity!\nHere's your letter: W");
    }
    else {
        window.alert("Nope! Higher than that!");
    }
}

function toggle(elem) {
    var choice1 = document.getElementById("a1");
    var choice2 = document.getElementById("a2");
    var choice3 = document.getElementById("a3");
    var choice4 = document.getElementById("a4");
    
    if(elem.id == "a1") {
        choice2.checked = false;
        choice3.checked = false;
        choice4.checked = false;
    }
    else if(elem.id == "a2") {
        choice1.checked = false;
        choice3.checked = false;
        choice4.checked = false;
    }
    else if(elem.id == "a3") {
        choice1.checked = false;
        choice2.checked = false;
        choice4.checked = false;
    }
    else {
        choice1.checked = false;
        choice2.checked = false;
        choice3.checked = false;
    }
}

function submitQAnswer() {
    
    var flavor = document.getElementById("starbucksPref").value;
    
    window.alert("Well text me right now and I'll buy you a " + flavor + " right now.\nHere's your letter(: R");
    
}

function passwordGuess() {
    var guess = document.getElementById("guess").value
    
    if(guess.toLowerCase() == "madi") {
        window.location="letter.txt";
    }
    else {
        window.alert("Nope! Did you decrypt it?");
    }
}
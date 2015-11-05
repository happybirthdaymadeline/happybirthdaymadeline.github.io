function redirect(url) {
	window.location = url;
}

function submitAnswer() {
    var answer = document.forms["form"]["answer"].value;
    
    if(answer.toLowerCase().search("kiss") > -1) {
        window.alert("Correct<3 Your letter for the challenge is: N.");
        redirect("http://happybirthdaymadeline.github.io");
    }
}

function trueSubmit() {
    window.alert("Oh good(: Here's your letter: Z");
}
function falseSubmit() {
    window.alert("Oh :/ Well here's your letter. Q >:)");
}
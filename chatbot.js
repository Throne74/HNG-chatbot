var questions = [
    'What\'s your name?',
    'Where are you from?',
    'How old are you?',
    'What project are you working on?',
    'Who created me?',
    'I believe I was created for HNGi7 Internship project?',
    'All right! It was nice talking to you :)'
];

var num = 0;
var output = document.querySelector("#result");
output.innerHTML = questions[0];
var inputBox =document.querySelector("#ans");

function showResponse() {
    var input = inputBox.value;
    if(inputBox.value == "") {

    }else {
        if(num == 0) {
            output.innerHTML = `Hello ${input}, nice meeting you`;
            inputBox.value = "";
            inputBox.setAttribute("placeholder", "Wait for 2 secs")
            ++num;
            setTimeout(changeQuestion, 2000);
        } else if(num == 1) {
           output.innerHTML = `${input} is an awesome place to live`;
           inputBox.value = "";
           inputBox.setAttribute("placeholder", "Wait for 2 secs")
            ++num;
            setTimeout(changeQuestion, 2000);
        } else if(num == 2){
            output.innerHTML = `It means you were born in ${2020 - input} `;
            inputBox.value = "";
            inputBox.setAttribute("placeholder", "Wait for 2 secs")
            ++num;
            setTimeout(changeQuestion, 2000);
        } else if(num == 3) {
            output.innerHTML = `Wow!, ${input} is interesting and educating.`;
            inputBox.value = "";
            inputBox.setAttribute("placeholder", "Wait for 2 secs")
            ++num;
            setTimeout(changeQuestion, 2000);
        } else if(num == 4) {
            output.innerHTML = `${input} is really a very good developer`;
            inputBox.value = "";
            inputBox.setAttribute("placeholder", "Wait for 2 secs")
            ++num;
            setTimeout(changeQuestion, 2000);
        } else if(num == 5) {
            output.innerHTML = `I am proud to be Bisoye's hngi7 internship project`;
            inputBox.value = "";
            inputBox.setAttribute("placeholder", "Wait for 2 secs")
            ++num;
            setTimeout(changeQuestion, 2000);
        }
    }
}

function changeQuestion() {
    inputBox.setAttribute("placeholder", "Enter your response")
    output.innerHTML = questions[num];
    if(num == 6) {
        inputBox.style.display == "none";
    }
}

$(document).on('keypress', function(e) {
    if(e.which == 13) {
        showResponse();
    }
})
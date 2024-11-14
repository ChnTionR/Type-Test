let letters = 'abcdefghijklmnopqrdtuvwxyz';
let wordSize;
let wordNum;

let wordbox = document.getElementById('wordbox');
let wordboxText = '';
let userTextBox = document.getElementById("userInput");

function addWord(len){
    for(let i = 0; i < len; i++){
        wordboxText += letters[Math.floor(Math.random() * letters.length)];
    }
}



function writeWordBox(){
    wordNum = Math.ceil(Math.random()*11);

    for(let j = 1; j < wordNum; j++){
        wordSize = Math.ceil(Math.random()*10);
        addWord(wordSize);

        wordboxText += ' ';
    }
}

function initWordBox(){
    wordboxText = "";
    while(wordbox.firstChild){
        wordbox.removeChild(wordbox.firstChild);
    }
    userTextBox.textContent = "";
    writeWordBox();

    let placeHolderSpan = document.createElement("placeHolder");
    placeHolderSpan.textContent = wordboxText;
    placeHolderSpan.className = "notTyped";
    wordbox.appendChild(placeHolderSpan);
}

initWordBox();

document.addEventListener("keydown", function(event) {
    if(/^[a-zA-Z\s]$/.test(event.key)) {
        userTextBox.textContent += event.key;
        wordbox.innerHTML = "";
        for(let i = 0; i < wordboxText.length-1; i++){

            let letterSpan = document.createElement("letterSpan");
            letterSpan.textContent = wordboxText[i];

            if(userTextBox.textContent.length - 1 >= i){
                if(userTextBox.textContent[i] == wordboxText[i]){
                    letterSpan.className = "right";
                }else{
                    letterSpan.className = "wrong";
                }
            }else if(userTextBox.textContent.length == i){
                letterSpan.className = "current";
            }else{
                letterSpan.className = "notTyped";
            }
            wordbox.appendChild(letterSpan);
        }
        if(!(wordbox.querySelector(".notTyped") || wordbox.querySelector(".current"))){
            initWordBox();
        }
    }
});


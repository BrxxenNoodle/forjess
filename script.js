var noButtonClickCount = 0;
var noButtonClickCount = 0;
var yesButton = document.querySelector('.yes');
var yesTexts = ["CLICK MEE :3", "CLICK ME PLEASE", "stop clicking NOOO", "GRR CLCIK ME", "CLICK MEEEE :("]; // Array of random texts for the "Yes" button

function HandleYes() {
    var container = document.querySelector('.container');
    container.innerHTML = ''; // Remove all contents of the container

    // Create and append an image element
    var image = document.createElement('img');
    image.src = 'cat.gif'; 
    container.appendChild(image);


     // Create and append a text element
     var text = document.createElement('p');
     text.textContent = 'YIPPEEEE 🥰🥰🥰🥰🥰😍😍😍😻😻💘💘💝💝💞💞💓💓';
     container.appendChild(text);
}



function HandleNo(button) {
    noButtonClickCount++;
    
    var texts = ["WHAAAAT?", "NOOOO", "you cant say no >:(", "NUH UHHH", "NUHHHUH", "say yes or i nuke you", "WAAAAAAAAAAAH"];
    var randomText = texts[Math.floor(Math.random() * texts.length)];
    button.textContent = randomText;

    if (button.classList.contains('no')) {
        var yesButton = document.querySelector('.yes');
        var currentSize = parseInt(window.getComputedStyle(yesButton).fontSize);
        var newSize = currentSize * 1.15;
        yesButton.style.fontSize = newSize + "px";

        if (button.classList.contains('no') && noButtonClickCount >= 5) {
            var randomYesText = yesTexts[Math.floor(Math.random() * yesTexts.length)]; // Select random text for the "Yes" button
            yesButton.textContent = randomYesText; // Change the text of the "Yes" button to random text
        }
    }
}


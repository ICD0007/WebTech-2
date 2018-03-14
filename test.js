
//Change main nav bars on hover
var buttons = document.querySelectorAll(".navbar-nav a");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onmouseover = function() {
        this.style.backgroundColor = "white";
        this.style.color = "black";
    };

    buttons[i].onmouseout = function() {
        this.style.backgroundColor = "#383E4C";
        this.style.color = "white";

    };
}

//Display data in submit formb
document.getElementById("submit").onclick = function(event)
{
    event.preventDefault();

    if (document.getElementById("name").value.trim() == "") {
        alert("Name missing!");
    } else if (document.getElementById("mail").value.trim() == "") {
        alert("Mail missing!");
    } else if (document.getElementById("subject").value.trim() == "") {
        alert("Subject missing!");
    } else if (document.getElementById("comment").value.trim() == "") {
        alert("Comment missing!");
    } else {
        alert( 
            "Name: " + document.getElementById('name').value 
                + "\n Mail: " + document.getElementById('mail').value 
                + "\n Subject: " + document.getElementById('subject').value
                + "\n Comment: " + document.getElementById('comment').value
        );
    }
}

// Change Button Green
document.getElementById('btnMenu').onclick = function(){
    this.style.backgroundColor = "black";
    this.textContent = "Button Black";
}

//Direct to my Github
document.getElementById('btnGit').onclick = function(){
    window.open("https://github.com/mkmarkson");
}




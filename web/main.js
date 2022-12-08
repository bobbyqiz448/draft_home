let toggleState = false;


//var for selecting the btn state
let toggle = document.querySelector("#toggle-btn");

//vars to store and altetnate login and signup card
let loginCard = document.querySelector("#login-card");
let signupCard = document.querySelector("#signup-card");
let loginLink = document.querySelector("#login-link");
let signupLink = document.querySelector("#signup-link");
signupLink.addEventListener("click",()=>{
    loginCard.style.visibility = "hidden";
    signupCard.style.visibility = "visible";
});

loginLink.addEventListener("click", ()=>{
    signupCard.style.visibility = "hidden";
    loginCard.style.visibility = "visible";
});



//password verification
let btnClick = document.querySelector("#signup-submitbtn");


btnClick.addEventListener("click", (e)=>{
    e.preventDefault;
    let password = document.getElementById("password").value;
    let repassword = document.querySelector("#repassword").value;

    if (password==repassword) {
        let result = window.confirm("Continue with Signup?");
        
                if (result) {
                    window.alert("Signup successful!");
                } else {
                    window.alert("Signup was aborted!");
                }

    } else {
        window.alert("Mismatch in passwords!")
    }
});






//func to be called when toggle btn is pressed
let toggleBtn = function(){

let sideNav = document.querySelector("#side-nav");
let sideNavL = document.querySelector("#side-nav ul li span")
let sideNavLAnchors = document.querySelectorAll("#side-nav ul li a");
let sideNavUl = document.querySelector("#side-nav ul");

if (toggleState===false) {
    sideNav.style.width = "200px";
    sideNav.style.color = "#aaa";
    sideNav.style.opacity = 1;


    

    setTimeout(()=>{
        sideNavL.style.visibility = "visible";
        sideNavLAnchors.forEach(i => {
            i.style.visibility = "visible";
            i.style.background = "#111";
            
        });
    },500)
    toggleState = true;
} else {
    sideNav.style.width = "50px";
    sideNav.style.opacity = 1;
    sideNavL.style.visibility = "hidden";
    sideNavUl.style.visibility = "hidden";
    sideNavLAnchors.forEach(i => {
        i.style.visibility = "hidden";
        i.style.background = "#111";
        
        
});
toggleState = false;
}
}


//toggle.addEventListener("dblclick", toggleBtn);
toggle.addEventListener("click", toggleBtn);

let encoded = encodeURI("file:///C:/Users/B-Raf%20%20(Bobby)/Desktop/index.html");
console.log(encoded);
//let toggleBttn = document.querySelector("#resize");
//toggleBttn.onClick = window.close(200,200);
let decoded = decodeURI(encoded);
console.log(decoded);


var qrcode = new QRCode(document.getElementById("qrcode"), {
	width : 100,
	height : 100
});

function makeCode () {		
	var elText = document.getElementById("text");
	
	if (!elText.value) {
		alert("Input a text");
		elText.focus();
		return;
	}
	
	qrcode.makeCode(elText.value);
}
//call the make QR code function
makeCode();



$("#text").
	on("blur", function () {
		makeCode();
	}).
	on("keydown", function (e) {
		if (e.keyCode == 13) {
			makeCode();
		}
	});

    //changing the current year in the footer copyright dynamically
    setInterval(() => {
            let currentYear = document.getElementById("currentYear");
            let thisYear = new Date().getUTCFullYear();
            currentYear.innerText = thisYear.toString();
            currentYear.style.color = "red";
    }, 1000);
    
    console.log(navigator.userAgentData);
    
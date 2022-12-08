// scroll arrow
var myVar;

function mySt(){
    myVar = setInterval(function(){
        let colo = document.getElementById("arrow_symbol");
            if (colo.style.color == "blue") {
                colo.style.color = "red";
                colo.style.fontSize = "2.5em";
            } else if (colo.style.color == "red") {
                colo.style.color = "green"; 
                colo.style.fontSize = "2em";
            }
            else{
                colo.style.color = "blue";
                colo.style.fontSize = "1.5em";
            }
        
    },500);
}

mySt();

// side nav
let navState= false;
let nav=document.getElementById("side_nav");
nav.addEventListener("click",()=>{

    if (navState==false) {
        nav.style.width="20vw";
        navState=true;
    } else if (navState==true) {
        nav.style.width="40px";
        navState=false
    }
});

// hide pointer on scroll
document.addEventListener("scroll",()=>{
    document.getElementById("arrow_symbol").style.visibility = "hidden";
});







document.addEventListener("click",()=>{
    let images = document.querySelectorAll(".images");

    // let newNode= document.createAttribute("src","./images/istockphoto-1308246727-170667a.jpg");

    images.forEach((image,index)=>{

        //create containing image div
        // let image_div = document.createElement('div');

        let counter = 0;
        
        setInterval(() => {

            if (counter>5) {
                counter=0;
            } 

            counter+=1;



            // let image_div_class = document.createAttribute("src");
            // image_div_class.value = "./images/img"+counter+".jpg";
            // image.setAttributeNode(image_div_class);
            image.setAttribute("src","./images/img"+counter+".jpg");


        }, 3000);

        

       
        // console.log(index);
    });


});
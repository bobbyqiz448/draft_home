document.addEventListener("load", ()=>{
    let main_nav = document.getElementById("main-nav");
    let side_nav = document.getElementById("side-nav");
    let main_section = document.getElementById("main-section");
    let footer_section = document.getElementById("footer-section");
    let x;
    
    main_section.style.color = "white";
   
    //alert(x);

    if (main_section == "white") {
        main_section.style.color = "red";
        main_section.style.background = "darkolivegreen";
    } else {
        alert("ok");
        main_section.style.color = "red";
        main_section.style.background = "darkolivegreen";
    }
    alert("ghaii");
}, false);



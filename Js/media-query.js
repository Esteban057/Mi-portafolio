let mainNav = document.getElementById("mainNav");
let menuBar = document.getElementById("menuBar");
let mainMenu = document.getElementById("mainMenu");

menuBar.addEventListener("click", function(){
    /* alert("Buenas tardes") */;
    if (mainMenu.classList.contains("main-menu")){
        mainMenu.classList.remove("main-menu");
    mainMenu.classList.add("main-menu-block");
    }
    else {
        mainMenu.classList.add("main-menu")
        mainMenu.classList.remove("main-menu-block")
    }
    mainNav.classList.remove("main-nav");
    mainNav.classList.add("main-nav-2");
    /* mainMenu.classList.remove("main-menu");
    mainMenu.classList.add("main-menu-block"); */
})
/* alert("LOL") */
function Do_start(e){
    e.style.opacity = "0";
    setTimeout(function(){e.style.display = "none";}, 1000)
    document.getElementById("html").style.backgroundImage = "none";

    rgb = ["green", "red", "blue"];
    document.addEventListener("click", function(){
        current = document.getElementById("html").style.background;
        if (current === "red"){
            current = "green";
        } else if (current === "green") {
            current = "blue";
        } else if (current === "blue") {
            current = "red";
        } else {
            current = "red";
        }
        current = document.getElementById("html").style.background = current;
    })

}
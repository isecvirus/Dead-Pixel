function start(){
    document.body.style.display = "none";

    rgb = ["white", "green", "red", "blue"];
    let curr_ind = 0;
    document.addEventListener("click", function(){
        document.getElementById("html").style.background = rgb[curr_ind];
        curr_ind += 1;

        if (curr_ind === rgb.length) {
            curr_ind = 0;
        }
    });
}
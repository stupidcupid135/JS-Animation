const box = document.getElementById("box");
let id = null;
let pos = 0;
clearInterval(id);
let moving = false;
box.innerHTML = "click me!";


box.onclick = moveBox;

function moveBox() {
    moving = !moving;
    if (moving) {
        id = setInterval(frame, 5);
        box.innerHTML = "";
        box.style.backgroundColor = "green";
    } else {
        clearInterval(id);
        box.style.backgroundColor = "red";
    }
}
function frame() {
    if (pos == 350) {
        pos = 0;
        clearInterval(id);
        moving = false;
        box.style.backgroundColor = "red";
        box.innerHTML = "Done!";
    } else if (moving) {
        pos++;
        box.style.top = pos + 'px';
        box.style.left = pos + 'px';
        box.style.width = 200 + pos + 'px';
    }
}

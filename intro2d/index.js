function main() {
    var canvas = document.getElementById("canvas");
    if (!canvas) {
        console.log("failed to get canvas");
        return false;
    }
    var ctx = canvas.getContext("2d");
    ctx.fillStyle='rgba(0,0,255,1.0)';

    ctx.fillRect(120,10,150,150);
}

document.addEventListener('DOMContentLoaded',()=> main(),false);
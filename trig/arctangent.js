window.onload = function () {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        arrowX = width / 2,
        arrowY = height / 2,
        angle = 0;

    render();
    function render() {
        context.clearRect(0, 0, width, height);
        context.save();
        context.translate(arrowX, arrowY);
        context.rotate(angle);
        context.beginPath();
        context.moveTo(20, 0);
        context.lineTo(-20, 0);
        context.moveTo(20, 0);
        context.lineTo(10, -10);
        context.moveTo(20, 0);
        context.lineTo(10, 10);
        context.stroke();

        context.restore();
        requestAnimationFrame(render);
    }

    document.body.addEventListener('mousemove', (evt) => {
        angle = Math.atan2(evt.clientY - arrowY, evt.clientX - arrowX);
    })
    document.body.addEventListener('keypress', (evt) => {
        switch (evt.keyCode) {
            case 87:
            console.log('trig');
                arrowX += Math.cos(angle) * 5;
                arrowY += Math.sin(angle) *5;
                break;
            default:
                break;
        }
    })
}


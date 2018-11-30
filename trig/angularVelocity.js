window.onload = function () {
    const canvas = document.getElementById("canvas"),
        context = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    var centerY = height * 0.5,
        centerX = width * 0.5,
        radius = 200,
        angularVelocity = 0.00,
        time = 0,
        velocity = 0.00,
        angle = 0;

    render();

    function render() {
        var y = centerY + Math.sin(angle) * radius;
        var x = centerX + Math.cos(angle) * radius;
        context.clearRect(0, 0, width, height);
        context.beginPath();
        context.arc(x, y, 25, 0, Math.PI * 2, false);
        context.fill();

        time += 0.01;
        angle = angularVelocity * time;
        angularVelocity += velocity;
        requestAnimationFrame(render);
    }

    document.addEventListener('keypress', (evt) => {
        if (evt.keyCode === 119) {
            velocity += 0.01;
        } else if (evt.keyCode === 115) {
            velocity -= 0.01;
        }
    }, false)

}


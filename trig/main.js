window.onload = function () {
    const canvas = document.getElementById("canvas"),
        context = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    var centerY = height * 0.5,
        centerX = width * 0.5,
        offset = height * 0.3,
        speed = 0.01,
        angle = 0;

    render();

    function render() {
        var y = centerY + Math.sin(angle) * offset;
        var x = centerX + Math.cos(angle) * offset;
        context.clearRect(0, 0, width, height);
        context.beginPath();
        context.arc(x, y, 25, 0, Math.PI * 2, false);
        context.fill();

        angle += speed;

        requestAnimationFrame(render);
    }
}
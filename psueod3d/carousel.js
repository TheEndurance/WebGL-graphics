window.onload = function () {
    const canvas = document.getElementById("canvas"),
        context = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    let fl = 300;
    let alphabet = ' eip maerc'.toLocaleUpperCase().split('');
    let shapes = [];
    let centerZ = 1000;
    let centerY = 650;
    let radius = 1000;
    for (let i = 0; i < 10; i++) {
        let shape = {
            angle: Math.PI * 2 / 10 * i,
            letter: alphabet[i]
        };
        shape.y = centerY + Math.sin(shape.angle) * radius;
        shape.x = 0;
        shape.z = centerZ + Math.sin(shape.angle) * radius;
        shapes.push(shape)
    }
    context.translate(width / 2, height / 2);

    render();
    function render() {
        context.clearRect(-width / 2, -height / 2, width, height);
        for (let i = 0; i < shapes.length; i++) {
            let perspective = fl / (fl + shapes[i].z);
            context.save();
            context.scale(perspective, perspective);
            context.translate(shapes[i].x, shapes[i].y);
            context.font="90px Georgia";
            context.fillText(shapes[i].letter,0,0);
            context.restore();
            shapes[i].angle += Math.PI/200;
            shapes[i].x = Math.cos(shapes[i].angle) * radius;
            shapes[i].y = centerY + Math.sin(shapes[i].angle) * radius;
            shapes[i].z = centerZ + Math.sin(shapes[i].angle) * radius;
        }
        requestAnimationFrame(render);
    }
}
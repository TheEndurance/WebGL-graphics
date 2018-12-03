window.onload = function () {
    const canvas = document.getElementById("canvas"),
        context = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    let fl = 300;
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.toLocaleUpperCase().split('');
    let shapes = [];
    for (let i = 0; i < 25; i++) {
        shapes.push({
            x: (Math.round(Math.random()) * 2 - 1) * Math.random() * 550,
            y: (Math.round(Math.random()) * 2 - 1) * Math.random() * 350,
            z: Math.random() * 900,
            letter: alphabet[i]
        })
    }
    context.translate(width / 2, height / 2);

    render();
    function render() {
        context.clearRect(-width / 2, -height / 2, width, height);
        for (let i = 0; i < shapes.length; i++) {
            let perspective = fl / (fl + shapes[i].z);
            context.save();
            context.translate(shapes[i].x * perspective, shapes[i].y * perspective);
            context.scale(perspective, perspective);
            context.font="90px Georgia";
            context.fillText(shapes[i].letter,0,0);
            context.restore();
            shapes[i].z -= 5;
            if (shapes[i].z < -200) {
                shapes[i].z = 1000;
            }
        }
        requestAnimationFrame(render);
    }
    document.body.addEventListener("keypress", (evt) => {
        for (let i = 0; i < shapes.length; i++) {
            switch (evt.keyCode) {
                case 65:
                    shapes[i].y += 25;
                    break;
                case 66:
                    shapes[i].y -= 25;
                    break;
            }
        }
    })
}
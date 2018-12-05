window.onload = function () {
    const canvas = document.getElementById("canvas"),
        context = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;
    let fl = 300,
        nodes = [],
        edges = [],
        centerZ = -200,
        centerX = 0;
    nodes.push({ x: -100 + centerX, y: -100, z: 100 + centerZ });
    nodes.push({ x: -100 + centerX, y: -100, z: 300 + centerZ });
    nodes.push({ x: -100 + centerX, y: 100, z: 100 + centerZ });
    nodes.push({ x: -100 + centerX, y: 100, z: 300 + centerZ });
    nodes.push({ x: 100 + centerX, y: -100, z: 100 + centerZ });
    nodes.push({ x: 100 + centerX, y: -100, z: 300 + centerZ });
    nodes.push({ x: 100 + centerX, y: 100, z: 100 + centerZ });
    nodes.push({ x: 100 + centerX, y: 100, z: 300 + centerZ });
    edges.push([0, 1]);
    edges.push([1, 3]);
    edges.push([3, 2]);
    edges.push([2, 0]);
    edges.push([4, 5]);
    edges.push([5, 7]);
    edges.push([7, 6]);
    edges.push([6, 4]);
    edges.push([0, 4]);
    edges.push([1, 5]);
    edges.push([2, 6]);
    edges.push([3, 7]);

    context.translate(width / 2, height / 2);

    render();

    function render() {
        context.clearRect(-width / 2, -height / 2, width, height);
        for (let i = 0; i < nodes.length; i++) {
            //rotateZAxis(nodes[i], 0.01);
            // rotateYAxis(nodes[i], 0.01);
            // rotateXAxis(nodes[i], 0.01);
            project(nodes[i]);
            context.beginPath();
            context.arc(nodes[i].sx, nodes[i].sy, 1, 0, Math.PI * 2);
            context.fill();
        }
        drawLines();
        requestAnimationFrame(render);
    }


    function drawLines() {
        context.beginPath();
        for (let i = 0; i < edges.length; i++) {
            context.moveTo(nodes[edges[i][0]].sx, nodes[edges[i][0]].sy);
            context.lineTo(nodes[edges[i][1]].sx, nodes[edges[i][1]].sy);
        }
        context.stroke();
    }
    function project(node) {
        let scale = fl / (fl + node.z);
        node.sx = node.x * scale;
        node.sy = node.y * scale;
    }
    function rotateZAxis(node, angle) {
        let tempX = node.x * Math.cos(angle) - node.y * Math.sin(angle);
        node.y = node.y * Math.cos(angle) + node.x * Math.sin(angle);
        node.x = tempX;
    }
    function rotateYAxis(node, angle) {
        let tempX = node.x * Math.cos(angle) - node.z * Math.sin(angle);
        node.z = node.z * Math.cos(angle) + node.x * Math.sin(angle);
        node.x = tempX;
    }
    function rotateXAxis(node, angle) {
        let tempZ = node.z * Math.cos(angle) - node.y * Math.sin(angle);
        node.y = node.y * Math.cos(angle) + node.z * Math.sin(angle);
        node.z = tempZ;
    }
}
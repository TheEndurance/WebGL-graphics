var VSHADER_SOURCE = 
`
void main() {
    gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
    gl_PointSize = 10.0;
}`;

var FSHADER_SOURCE = 
`
void main(){
    gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
}
`;


function main() {
    var canvas = document.getElementById("canvas");

    var gl = getWebGLContext(canvas);
    if (!gl) {
        console.log("failed to get canvas");
        return;
    }

    if(!initShaders(gl,VSHADER_SOURCE,FSHADER_SOURCE)){
        console.log("failed to initialize shaders");
        return;
    }
    
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.POINTS, 0, 1);
}

document.addEventListener('DOMContentLoaded',()=> main(),false);
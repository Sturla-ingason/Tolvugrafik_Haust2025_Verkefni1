
window.onload = function init(){

    //Náum í canvas element úr html og setjum það sem var canvas
    var canvas = document.getElementById("gl-canvas");


    // Setjum upp webGL og setjum canvas sem strigan okkar.
    gl = WebGLUtils.setupWebGL( canvas );

    gl.viewport(0,0,canvas.width, canvas.height);
    gl.clearColor( 0.5, 1.0, 1.0, 1.0 );

    //  Load shaders and initialize attribute buffers
    var program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram(program);



    //Player buffer

    bufferID_Player = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferID_Player);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(player), gl.DYNAMIC_DRAW);

    
    //End zone buffers
    bufferID_topEndZone = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferID_topEndZone);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(topEndZone), gl.STATIC_DRAW);
    
    bufferID_bottomEndZone = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferID_bottomEndZone);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(bottomEndZone), gl.STATIC_DRAW);


    //Road buffers
    bufferID_road1 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferID_road1);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(road1), gl.STATIC_DRAW);

    bufferID_road2 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferID_road2);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(road2), gl.STATIC_DRAW);

    bufferID_road3 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferID_road3);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(road3), gl.STATIC_DRAW);


    //Car buffers
    bufferID_car1 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferID_car1);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(car1), gl.DYNAMIC_DRAW);

    bufferID_car2 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferID_car2);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(car2), gl.DYNAMIC_DRAW);

    bufferID_car3 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferID_car3);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(car3), gl.DYNAMIC_DRAW);



    locPosition = gl.getAttribLocation( program, "vPosition" );
    gl.enableVertexAttribArray( locPosition );

    //! ÞETTA ER FUCKING UNIFORM BREYTA!!!!
    uShiftLocY = gl.getUniformLocation(program, "shiftY");
    uShiftLocX = gl.getUniformLocation(program, "shiftX");
    uThetaLoc = gl.getUniformLocation(program, "theta");

    //Finds where rColor is located in the shaders
    locColor = gl.getUniformLocation(program, "rColor");


    //TODO Event handlerar

    document.addEventListener("keydown", function(e){
        switch(e.key){
            case 'w' :
                shiftAmountY += 0.1;
                theta = 0.0;
                render();
                break;
            case 's' :
                shiftAmountY -= 0.1;
                theta = Math.PI;
                render();                    
                break;
            case'a' :
                shiftAmountX -= 0.1;
                render();
                break;
            case 'd' :
                shiftAmountX += 0.1;
                render()
                break;
            }
        });


    //Köllum á render fallið til að teikna á strigan.
    render();
}


function carMove(){

    if(carShift < 3){
        carShift += 0.1;
        console.log(carShift);
    }

}


// Búm til render fall til að teikna á strigan
function render(){
    gl.clear(gl.COLOR_BUFFER_BIT);

    //Draw EndZones
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferID_topEndZone);
    gl.vertexAttribPointer(locPosition, 2, gl.FLOAT, false, 0, 0);
    gl.uniform4fv(locColor, flatten(red));
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    gl.bindBuffer(gl.ARRAY_BUFFER, bufferID_bottomEndZone);
    gl.vertexAttribPointer(locPosition, 2, gl.FLOAT, false, 0, 0);
    gl.uniform4fv(locColor, flatten(red));
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);


    //TODO Draw Roads
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferID_road1);
    gl.vertexAttribPointer(locPosition, 2, gl.FLOAT, false, 0, 0);
    gl.uniform4fv(locColor, flatten(purple));
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    gl.bindBuffer(gl.ARRAY_BUFFER, bufferID_road2);
    gl.vertexAttribPointer(locPosition, 2, gl.FLOAT, false, 0, 0);
    gl.uniform4fv(locColor, flatten(blue));
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    gl.bindBuffer(gl.ARRAY_BUFFER, bufferID_road3);
    gl.vertexAttribPointer(locPosition, 2, gl.FLOAT, false, 0, 0);
    gl.uniform4fv(locColor, flatten(purple));
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);


    //TODO Rendera bíla

    gl.bindBuffer(gl.ARRAY_BUFFER, bufferID_car1);
    gl.vertexAttribPointer(locPosition, 2, gl.FLOAT, false, 0, 0);
    gl.uniform4fv(locColor, flatten(red));
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    //draw player
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferID_Player);
    gl.vertexAttribPointer( locPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.uniform4fv(locColor, flatten(green));

    gl.uniform1f(uShiftLocY, shiftAmountY);
    gl.uniform1f(uShiftLocX, shiftAmountX);
    gl.uniform1f(uThetaLoc, theta);

    gl.drawArrays( gl.TRIANGLE_STRIP, 0, 3 );

    gl.uniform1f(uShiftLocY, 0.0);
    gl.uniform1f(uShiftLocX, 0.0);



}
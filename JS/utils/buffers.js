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
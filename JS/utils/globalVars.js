var gl;
var locPosition;
var locColor;

var uShiftLocY;
var shiftAmountY = 0.0;
var shiftAmountX = 0.0;
var carShift = 0.0;

var uThetaLoc;
var theta = 0.0;

//Buffers
var bufferID_Player;

var bufferID_topEndZone;
var bufferID_bottomEndZone;

var bufferID_road1;
var bufferID_road2;
var bufferID_road3;

var bufferID_car1;
var bufferID_car2;
var bufferID_car3;

var yellow = vec4(1.0,1.0,0.0,1.0);
var cyan = vec4(0.0,1.0,1.0,1.0);
var purple = vec4(1.0,0.0,1.0,1.0);
var red = vec4(1.0, 0.0, 0.0, 1.0);
var green = vec4(0.0, 1.0, 0.0, 1.0);
var blue = vec4(0.0, 0.0, 1.0, 1.0);
// ALL elements required to the frogger game

//Player
var player = [
    vec2(0.05, -0.9),
    vec2(-0.05, -0.9),
    vec2(0.0, -0.8)
];


// End zones to score points in
var topEndZone = [
    vec2(1.0, 0.6),
    vec2(1.0, 1.0),
    vec2(-1.0, 0.6),
    vec2(-1.0, 1.0),
];

var bottomEndZone = [
    vec2(-1.0 , -1.0),
    vec2(-1.0 , -0.6),
    vec2(1.0, -1.0),
    vec2(1.0, -0.6)
];


//TODO Búa til göturnar fyrir bílana, eiga að vera 3 götur.
var road1 = [
    vec2(-1.0, -0.6),
    vec2(-1.0, -0.2),
    vec2(1.0, -0.6),
    vec2(1.0, -0.2)
];

var road2 = [
    vec2(-1.0, -0.2),
    vec2(-1.0, 0.2),
    vec2(1.0, -0.2),
    vec2(1.0 , 0.2)
];

var road3 = [
    vec2(-1.0, 0.2),
    vec2(-1.0, 0.6),
    vec2(1.0, 0.2),
    vec2(1.0, 0.6)
];


    //TODO Punktar fyrir bílanna

var car1 = [
    vec2(-1.0, -0.5),
    vec2(-1.0, -0.3),
    vec2(-0.5, -0.5),
    vec2(-0.5, -0.3)
];

var car2 = [
    vec2(),
    vec2(),
    vec2(),
    vec2()
];

var car3 = [
    vec2(),
    vec2(),
    vec2(),
    vec2()
]
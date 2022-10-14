// VolumeUsing objects and classes
function cylinder(radius,height) {
    this.cylHeight=height;
    this.cylRadius=radius;
}
cylinder.prototype.Volume = function(){
    var rad = this.cylRadius / 2;
    return this.cylHeight * Math.PI * rad * rad;
};
var cyl = new cylinder(7,4);
//volume of cylinder with 4 decimal
console.log('volume of Cylinder= ',cyl.Volume().toFixed(4));


// sphere

const pi = 3.14159;//value of pi

//function to calculate Volume of sphere
function volume(r) {
    let vol = ((4)/(3))* pi* r * r* r;
    return vol;
}
let radius = 12;
let vol;
vol= volume(radius).toFixed(4);

console.log("Volume of Sphere:"+ vol);







function cone(radius,height) {
    this.coneHeight=height;
    this.coneRadius=radius;
}
cone.prototype.Volume = function(){
    var rad = this.coneRadius;
    return this.coneHeight/3 * Math.PI * rad * rad;
};
var cone = new cone(12,25);
//volume of cylinder with 4 decimal
console.log('volume of Cone= ',cone.Volume().toFixed(4));

//const coneVolume = pi*(radius * radius)*(height/3);


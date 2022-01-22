var test = "test";
var Ball = function ({
    // List of variables only the object can see (private variables).
    var velocity = [0, 0];
var position = [0, 0];
var element = $('#ball');
var paused = false;
// Method that moves the ball based on its velocity. This method is only used
// internally and will not be made accessible outside of the object.
function move(t) {
}
// Update the state of the ball, which for now just checks  
// if the play is paused and moves the ball if it is not.  
// This function will be provided as a method on the object.
function update(t) {
    // First the motion of the ball is handled
    if (!paused) {
        move(t);
    }
}
// Pause the ball motion.
function pause() {
    paused = true;
}
// Start the ball motion.
function start() {
    paused = false;
}
// Now explicitly set what consumers of the Ball object can use.
// Right now this will just be the ability to update the state of the ball,
// and start and stop the motion of the ball.
return {
    update: update,
    pause: pause,
    start: start
}
var lastUpdate = 0;
var ball = Ball();
function update(time) {
    var t = time - lastUpdate;
    lastUpdate = time;
    ball.update(t);
    requestAnimationFrame(update);
}
requestAnimationFrame(update);
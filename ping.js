var test = "test";
var Ball = function () {
    // List of variables only the object can see (private variables).
    var velocity = [-2, -2];
    var position = [50, 50];
    var element = $('#ball');//получить html  по  ид
    var paused = false;
    // Method that moves the ball based on its velocity. This method is only used
    // internally and will not be made accessible outside of the object.
    function move(t) {
        // If the ball hit the top or bottom, reverse the vertical speed.
        if (position[1] <= 0 || position[1] >= innerHeight) {
            velocity[1] = -velocity[1];
        }
        // If the ball hit the left or right sides, reverse the horizontal speed.
        if (position[0] <= 0 || position[0] >= innerWidth) {
            velocity[0] = -velocity[0];
        }
        position[0] += velocity[0] * t;
        position[1] += velocity[1] * t;
        element.css('left', (position[0] - 32) + 'px');
        element.css('top', (position[1] - 32) + 'px');
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
}
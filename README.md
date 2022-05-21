# Animated Square Box

To execute the animated square box, at first create a object of SquareBox class, then call the run() method.

    let box = new SquareBox();
    box.setHeight("100px"); // You may set any height, such as 90px 
    box.setBgColor("blue"); // set any background color of box
    box.setSpeed(10, 1);   // set moving speed, per 1 secound, it will move 10 px distance
    box.run();  // to execute the box, call run() method.
    
    
## How does animated work?

The initial position of box is 50px from top alone left. After start moving, at first , It moves 10px right & 10px down at a time per second.
There are four cases to change the moving direction of the box
- When the box hits on the bottom edge, then it moves 10px up from bottom edge per second 
- When the box hits on the right edge, then it moves 10px left from right edge per second.
- When the box hits on the top edge, then it moves 10px down from top edge per second 
- When the box hits on the left edge, then it moves 10px right from left edge per second.

Live demo :
https://frontend-engineer-link-staff-by-jogash-ray.jogashray.repl.co/
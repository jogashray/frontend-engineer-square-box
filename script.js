/*
* Define the Square Box class
* The propeties or functions which name start with _ (underscore), considered as private 
* Author: Jogash Ray  # jogashbrur.ete@gmail.com
*/

class SquareBox{
  
  _box ; // Defines the Square box
  _bgcolor = "blue" ; // Initial background color of box
  _height = "100px";  // Define the init dimension of square box
  _top = 50 ; // Initial top position of the box
  _left = 0 ; // Initial left position
  _verticalSpeed = 10; // Vertical speed, how move along vertical in pixel
  _horizontalSpeed = 10 ; //Horizontal speed, how move along horizontal in pixel
  _timeInterval = 1 ; //Initial time interval in Second
  
  /*
  * Set background color of the box
  * @param string color
  * @return void
  */
  setBgColor(color){
    this._bgcolor = color ; 
  }
  
  /*
  * Set the height of the box
  * @param string height. Ex: "100px"
  * @return void
  */
  setHeight(height){
    this._height = height;
  }
  
  /*
  * Set the moving speed of box with time interval
  * @param int (pixel), time (Second)
  * @return void
  */
  setSpeed(pixel, time){
    this._verticalSpeed = pixel ;
    this._horizontalSpeed = pixel;
    this._timeInterval = time
  }
  /*
  * Create the box
  * @return void
  */
  _createBox(){
    // If box is already created, return
    if(this._box != undefined){
      return 
    }
    this._box = document.createElement("div"); // Create a new Div element
    this._setProperties(); // set the properties of created element/box
    document.body.appendChild(this._box); // Append the element into body
  }

  /*
  * Set the properties of the box
  * @return void
  */
  _setProperties(){
    // If the box is undefined, return
    if(this._box == undefined){
      return 
    }
    this._box.style.height = this._height ;
    this._box.style.width = this._height ;
    this._box.style.position = "relative";
    this._box.style.top = this._top + "px" ;
    this._box.style.backgroundColor = this._bgcolor ;
  }

  /*
  * Start the moving with specific time interval
  * @return void
  */
  _startMove(){
    setInterval(function(){
      this._counterInterval();
    }.bind(this), this._timeInterval * 1000);
  }
  
  /*
  * Called with time interval 
  * @return void
  */
  _counterInterval(){
    this._top =  this._top + this._verticalSpeed ;
    this._left = this._left + this._horizontalSpeed ;
    this._changeDirection()
    this._changePosition();
  }
  
  /*
  * Get the height of box
  *  @return int
  */
  _getHeight(){
    return Number( this._height.replace('px', '')) ;
  }

  /*
  * Get the possible max top position of window
  *  @return int
  */
  _maxTopPosition(top){
    let _max = window.innerHeight - this._getHeight();
    if( Number(top) > _max){
      return _max ;
    }
    return top;
  }

  /*
  * Get the possible max top position of window
  *  @return int
  */
  _maxLeftPosition(left){
    let _max = window.innerWidth - this._getHeight();
    if( Number(left) > _max){
      return _max ;
    }
    return left;
  }
  /*
  * Change position of the box
  * @param 
  * @return void
  */
  _changePosition(){
    this._box.style.top = this._maxTopPosition( this._top)+ "px" ;
    this._box.style.left = this._maxLeftPosition(this._left) + "px";
  }
  
  /*
  * Change the moving direction of box
  * @return void
  */
  _changeDirection(){
 
    // change the vertical direction
    if((this._top  > (window.innerHeight-this._getHeight()) ) && this._verticalSpeed > 0){
      //this._top = window.innerHeight ;
      this._verticalSpeed = - this._verticalSpeed;
      console.log("Change direction"+ this._top);
    }

    if((this._top + this._verticalSpeed) <= 0){
      this._top = 0;
      this._verticalSpeed = - this._verticalSpeed ;
    }
    
    // change the horizontal direction
    if((this._left  > (window.innerWidth-this._getHeight())) && this._horizontalSpeed > 0){
      this._horizontalSpeed = - this._horizontalSpeed;
    }
    if((this._left + this._horizontalSpeed) <= 0){
      this._left = 0;
      this._horizontalSpeed = - this._horizontalSpeed ;
    }
  }

  /* 
  * Entry point of the class
  * @return void
  */
  run(){
    this._createBox();
    this._startMove();
  }
}

// Create a object of SquareBox class 
let box = new SquareBox();
box.setHeight("100px");
box.setBgColor("blue");
box.setSpeed(10, 1);
box.run();

/**
There are various public setter methods to change the property of object.
run() // to run/animate the box, it must be called.
setHeight("110px"); // set the height of square box (Optional)
setBgColor("red"); // set background color of box  (Optional)
setSpeed(15, 1); // set the moving speed of box, that means, per second it moves 15px distance. (Optional)
**/
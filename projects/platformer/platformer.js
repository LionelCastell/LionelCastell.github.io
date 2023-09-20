$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
   //Step1//
   //roof//
   createPlatform(0,0,1400,20);
   //
   createPlatform (1,630,200,11);
   //starting Platform//
   createPlatform (250,550,150,300);
  //first platform//
   createPlatform (600,500,200,11);
   //secondplatform//
   createPlatform (1200,600,100,280);
   //third platform//
   createPlatform (600,250,250,5);
  //fourth platform//
  createPlatform (500,650,250,20);
   //fith platform//
  createPlatform (960,700,200,20);
  //top starter platform//
  createPlatform (1,450,200,11);
  //sixth platform//
  createPlatform (230,350,200,11);
  //seventh platform//
  createPlatform (850,600,200,11);
  createPlatform (1300,690,200,11);
  //side walls below//
  createPlatform (0,1,10,900);
  createPlatform (1390,1,10,900);
    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)

//createCollectable('diamond',675,450);
//createCollectable('grace',20,700);
//createCollectable('database',300,200);
//createCollectable('steve',800,200);
//createCollectable('database',1330,500,1);/]
//new collectable below''
createCollectable("dragonballs",675,450);
createCollectable("dragonballs",20,700);
createCollectable("dragonballs",300,200);
createCollectable("dragonballs",800,200);
createCollectable("dragonballs",1330,500,1);



    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

createCannon("right",250,1600,10,10);
createCannon("bottom",400,1700,10,10);
createCannon("top",1400,1800,10,10);
createCannon("right",535,1600,10,10);

    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
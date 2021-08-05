noseX="";
noseY="";
GameStatus="";

function startGame()
{
	     GameStatus = "start";
	     document.getElementById("status").innerHTML = "Game is loading";	
}

function changeGameStatud()
{
	if( GameStatus == "start" && noseX !=""&& gameConfig.status==="start")
	{
		world_start.play
	}

}

function game()
{

	console.log(" noseX = "  +  noseX + " noseY = "  +  noseY ) ;
	    instializeInDraw();
		moveEnvironment(mario);
		drawSprites();
}

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
    canvas.parent('canvas');

	instializeInSetup(mario);

	video = createCaputure(VIDEO);
	video.size( 800 , 400 );
	video.parent('game_console');

	poseNet = ml5.poseNet(video , modelLoaded );
    poseNet.on('pose', gotPoses);
}

function draw() {
	game()
}

function gotPoses()
{
    if( results.length > 0 )
    {
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.x;
        console.log(" noseX = "  +  noseX + " noseY = "  +  noseY ) ;
    }
}





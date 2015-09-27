//sekarang tinggal copas2 buat stage 2 - 9
//ingat buat tambahin counter buat monster sama keep track darah dan pot player

//put an if statement on every entrance state scene to check whether the player's health 
//is greater to 0, if not game over!!
//go to a game over scene!



window.onload = init;

var gCanvas;
var g2d;

var width = 1000;
var height = 640;
var charName = '';

var title = "Welcome To Albert's World!";

var myVar;
var startingline = 70;
var nextline = 30;
var nextlinebattle = 20;

var playerhpdisplay1 = 24;
var playerhpdisplay2 = 24;
var playermanadis = 44;
var playermanadis2 = 44;
var playermanadis = 64;
var healthpotdis = 64;
var healthpotdis2 = 64;
var manapotdis = 84;
var manapotdis2 = 84;

//counter variable for stage
var stagenumber = 7;


//song counter
var songctr = 0;
var temp = 0;

//to coordination to clear mid section text during fight

var clearX = 280;
var clearY = 150;
var clearW = 400;
var clearH = 200;


//variable for gaining experience


var enemyName = ["Spider" , "Skeleton" , "Zombie" , "Warrior" , "Sniper" , "Vampire", "Goliath", "Titan" , "Shadow" , "Albert"];
var playerMonster = ["blank",	"Snixling" , "Charzo" , "Jargsaw"];
var userpetsname =  '';
var enemyctr = 0;

//enemy variables
var enemyHealth = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 26000];
var enemyDamage = [25,35,45,55,85,100,120,130,150,200];
var counter = 0;

var enemeycurhealth;

//player variable
var health = [0,20000,10000,7000];
var mana = [0,180,240,300];
var damage = [0,300, 400,500];
var special = [0,1500,3000,5000];
var healthpot = [0,3,5,10];
var manapot = [0,7,5,3];

//usage of potion
var healthpotpwr = 110;
var manapotpwr = 40;

//possible health 27 attrib
var healthinc = 100;
var manainc = 30;
var healthpotinc = 1;
var manapotinc = 1;
var damageinc = 20;


//player choice status
var healthCh;
var manaCh;
var damageCh;
var specialCh; 
var healthpotCh; 
var manapotCh;

var currenthealth;
var currentmana;
var currhealthpot;
var currmanapot ;

var attributepts = 0;
var gameState =0;

function init(){
	gCanvas= document.getElementById("gameCanvas");
	gCanvas.width = width;
	gCanvas.height = height;

	g2d = gCanvas.getContext("2d");
	g2d.imageSmoothingEnabled = false;
	g2d.webkitImageSmoothingEnabled = false;
	g2d.mozImageSmoothingEnabled = false;

	draw();

/*
	myVar = setTimeout("draw.welcomMsg()",2000);
	myVar = setTimeout("draw.welcomeMsg2()",4000);

	*/

}


function draw(){

	function playsong(nameofsong){
		myAudio2 = new Audio(nameofsong); 
		myAudio2.addEventListener('ended', function() {
   		this.currentTime = 0;
    	this.play();
		}, false);
		myAudio2.play();

	}

	function playonce(soundeffect){
		var audio = new Audio(soundeffect);
		audio.play();
	}

	if(gameState == 0)
	{ 

		g2d.font = "44px Courier New BOLD";
		g2d.fillStyle = "#FFFFFF";
		g2d.fillText(title,(width/2) - (g2d.measureText(title).width /2), 60);

		var picture = new Image;
		picture.onload = function(){
			g2d.drawImage(picture, (width / 2) - (picture.width /2 ) , 130);

		};

		picture.src = "albert.png";

		g2d.font = "40px Courier New";
		g2d.fillStyle = "#CCCCCC";
		g2d.fillText("1. Play Game",(width/2) - (g2d.measureText("1. Play Game").width /2), 460);

		g2d.font = "40px Courier New";
		g2d.fillStyle = "#CCCCCC";
		g2d.fillText("2. Exit Game",(width/2) - (g2d.measureText("2. Exit Game").width /2), 500);

		//songBG('perfectcrime.mp3');
		myAudio = new Audio('discocent.wav'); 
		myAudio.addEventListener('ended', function() {
   		this.currentTime = 0;
    	this.play();
		}, false);
		myAudio.play();

		//need to add a picture on the middle of the page

		var audio = new Audio('audio_file.mp3');
		audio.play();
	
	}

	

		if(gameState == 1)
	{


		g2d.font = "41px Courier New";
		g2d.fillStyle = "#CCCCCC";
		g2d.fillText("THANKS FOR PLAYING!",(width/2) - (g2d.measureText("THANKS FOR PLAYING!").width /2), 60);

		var picture = new Image;
		picture.onload = function(){
			g2d.drawImage(picture, (width / 2) - (picture.width /2 ) , 130);

		};
		picture.src = "albert.png";

		g2d.font = "24px Courier New";
		g2d.fillStyle = "#CCCCCC";
		g2d.fillText("Created  by Albert Gouw",(width/2) - (g2d.measureText("Created  by Albert Gouw").width /2), 360);

		g2d.font = "24px Courier New";
		g2d.fillStyle = "#CCCCCC";
		g2d.fillText("Click refresh browser to play again!",(width/2) - (g2d.measureText("Click refresh browser to play again!").width /2), 400);

		g2d.font = "24px Courier New";
		g2d.fillStyle = "#CCCCCC";
		g2d.fillText("Close window to Exit game!",(width/2) - (g2d.measureText("Close window to Exit game!").width /2), 440);


	}

	

	if(gameState == 2)
	{  
		myAudio.pause();


		g2d.font = "44px Courier New BOLD";
		g2d.fillStyle = "#FFFFFF";
		g2d.fillText("Please Enter Your Name :",(width/2) - (g2d.measureText("Please Enter Your Name :").width /2), 60);

		myAudio = new Audio('riseofspirit.mp3'); 
		myAudio.addEventListener('ended', function() {
   		this.currentTime = 0;
    	this.play();
		}, false);
		myAudio.play();
	}


	if(gameState == 3)
	{
		var Sline = startingline;
		var Nline = nextline;
		
		g2d.font = "24px Courier New";
		g2d.fillStyle = "#CCCCCC";

		myVar=setTimeout(function(){
			g2d.fillText("Welcome to Albert's world! Beware " + charName + "!!", 100, Sline += Nline)
		},500)
		
		myVar=setTimeout(function(){
			g2d.fillText("You have been trapped in this world for eternity!", 100, Sline += Nline)
		},2500)
		myVar=setTimeout(function(){
			g2d.fillText("Albert's Voice : HAHAHA... You can never escape..", 100, Sline += Nline)
		},4500)
		myVar=setTimeout(function(){
			g2d.fillText("Forever..", 100, Sline += Nline)
		},6500)
		myVar=setTimeout(function(){
			g2d.fillText("FOREVER!!!!.....", 100, Sline += Nline)
		},8000)
		myVar=setTimeout(function(){
			g2d.fillText(".", 100, Sline += Nline)
		},9500)
		myVar=setTimeout(function(){
			g2d.fillText(".", 110, Sline )
		},10500)
		myVar=setTimeout(function(){
			g2d.fillText(".", 120, Sline )
		},11500)
		myVar=setTimeout(function(){
			g2d.fillText("Game Commencing............", 100, Sline += Nline)
		},13000)

		myVar=setTimeout(function(){enterState(4)},15000)

	}


	if(gameState == 4)
	{
		var Sline = startingline;
		var Nline = nextline;
		g2d.font = "24px Courier New";
		g2d.fillStyle = "#CCCCCC";

		myVar=setTimeout(function(){
			g2d.fillText("In this game you will choose one out of three monster. ", 100, Sline += Nline)
		},500)

		/*myVar=setTimeout(function(){
			g2d.fillText("three monster.", 100, Sline += Nline)
		},500)*/


		myVar=setTimeout(function(){
			g2d.fillText("Please choose on of these monster, remember ", 100, Sline += Nline)
		},2500)

		myVar=setTimeout(function(){
			g2d.fillText("these monsters have different attribute.", 100, Sline += Nline)
		},2500)

		myVar=setTimeout(function(){
			g2d.fillText("Please choose a monster :", 100, Sline += Nline)
		},4500)

		myVar=setTimeout(function(){
			g2d.fillText("   1.Snixling", 100, Sline += Nline)
			g2d.fillText("   2.Charzo", 100, Sline += Nline)
			g2d.fillText("   3.Jargsaw", 100, Sline += Nline)
		},4500)



	}


	if(gameState == 5)
	{
		var Sline = startingline;
		var Nline = nextline;
		g2d.font = "24px Courier New";
		g2d.fillStyle = "#CCCCCC";

		g2d.fillText("You have chosen " + userpetsname + "!" , 100, Sline += Nline)
		myVar=setTimeout(function(){
			g2d.fillText("There will be 9 level on this game.", 100, Sline += Nline)
		},1000)
		myVar=setTimeout(function(){
			g2d.fillText("Each level you passed, the enemy will be stronger.", 100, Sline += Nline)
		},3000)
		myVar=setTimeout(function(){
			g2d.fillText("You will meet the Creator on level 10!", 100, Sline += Nline)
		},5000)
		myVar=setTimeout(function(){
			g2d.fillText("Prepare for Battle!", 100, Sline += Nline)
		},7000)
		myVar=setTimeout(function(){
			g2d.fillText("Entering the Battlefield Dimension...", 100, Sline += Nline)
		},9000)



		myVar=setTimeout(function(){myAudio.pause();},11000)
		myVar=setTimeout(function(){enterState(6)},11000)
		
	}


	
	if(gameState == 6)
	{  
		var Sline = startingline;
		var Nline = nextline;
	
		var position = 20;
		var postY = 20;
		var cmdline = 460;

		

		currenthealth =healthCh ;
		currentmana = manaCh;
		currhealthpot = healthpotCh;
		currmanapot = manapotCh;
		enemycurhealth = enemyHealth[enemyctr];

		
		if(songctr == 0)
		{
			playsong('theLastEncounter.wav');
			songctr++;
		}
		

		if(currenthealth > 0)
		{

			g2d.font = "18px Courier New";
			g2d.fillStyle = "#CCCCCC";

			g2d.fillText(userpetsname, position, position);
			g2d.fillText("Health     : " + currenthealth, position , postY += position);
			g2d.fillText("Mana       : " + currentmana, position , postY += position );
			g2d.fillText("Health pot : " + currhealthpot, position, postY  += position);
			g2d.fillText("Mana pot   : " + currmanapot, position , postY += position );
			
			g2d.fillText(enemyName[enemyctr] , 740, 24);
			g2d.fillText("lvl    : " + (enemyctr + 1) , 740, 44);
			g2d.fillText("Health : " + enemycurhealth, 740, 64);

			commanMov();
		}
		else
		{
			enterState(999);
		}



		//need to add a picture on the middle of the page
	
	}

	if(gameState == 7)
	{  


		var Sline = startingline;
		var Nline = nextline;
	
		var position = 20;
		var postY = 20;
		var cmdline = 460;
		
		currenthealth =healthCh ;
		currentmana = manaCh;
		currhealthpot = healthpotCh;
		currmanapot = manapotCh;
		enemycurhealth = enemyHealth[enemyctr];
		

		if(currenthealth > 0)
		{


			g2d.font = "18px Courier New";
			g2d.fillStyle = "#CCCCCC";

			g2d.fillText(userpetsname, position, position);
			g2d.fillText("Health     : " + currenthealth, position , postY += position);
			g2d.fillText("Mana       : " + currentmana, position , postY += position );
			g2d.fillText("Health pot : " + currhealthpot, position, postY  += position);
			g2d.fillText("Mana pot   : " + currmanapot, position , postY += position );
			
			g2d.fillText(enemyName[enemyctr] , 740, 24);
			g2d.fillText("lvl    : " + (enemyctr + 1) , 740, 44);
			g2d.fillText("Health : " + enemycurhealth, 740, 64);

			commanMov();
		}
		else
		{
			enterState(999);
		}


		//need to add a picture on the middle of the page
	
	}
		if(gameState == 8)
	{  
		

		var Sline = startingline;
		var Nline = nextline;
	
		var position = 20;
		var postY = 20;
		var cmdline = 460;
		


		currenthealth =healthCh ;
		currentmana = manaCh;
		currhealthpot = healthpotCh;
		currmanapot = manapotCh;
		enemycurhealth = enemyHealth[enemyctr];
		

	
		if(currenthealth > 0)
		{


			g2d.font = "18px Courier New";
			g2d.fillStyle = "#CCCCCC";

			g2d.fillText(userpetsname, position, position);
			g2d.fillText("Health     : " + currenthealth, position , postY += position);
			g2d.fillText("Mana       : " + currentmana, position , postY += position );
			g2d.fillText("Health pot : " + currhealthpot, position, postY  += position);
			g2d.fillText("Mana pot   : " + currmanapot, position , postY += position );
			
			g2d.fillText(enemyName[enemyctr] , 740, 24);
			g2d.fillText("lvl    : " + (enemyctr + 1) , 740, 44);
			g2d.fillText("Health : " + enemycurhealth, 740, 64);

			commanMov();
		}
		else
		{
			enterState(999);
		}

		//need to add a picture on the middle of the page
	
	}


	if(gameState == 99)
	{

				var Sline = startingline;
				var Nline = nextline;
	
				var position = 20;
				var postY = 20;
				var cmdline = 460;		


				g2d.font = "18px Courier New";
				g2d.fillStyle = "#CCCCCC";
			
				g2d.fillText("You have Successfully defeat the enemy! ", 100, Sline += Nline)
				myVar=setTimeout(function(){
				g2d.fillText("Your have receive 3 attribute points!.", 100, Sline += Nline)
				},0)
				myVar=setTimeout(function(){
					g2d.fillText("Everytime you defeat an enemy you will be provided.", 100, Sline += Nline)
				},0)
				myVar=setTimeout(function(){
					g2d.fillText("with 3 attribute points", 100, Sline += Nline)
				},0)
				myVar=setTimeout(function(){
					g2d.fillText("I will use my points to upgrade", 100, Sline += Nline)
				},0)
				myVar=setTimeout(function(){
					g2d.fillText("1. Health + " + healthinc, 130, Sline += Nline)
				},0)
				myVar=setTimeout(function(){
					g2d.fillText("2. Mana + " + manainc , 130, Sline += Nline)
				},0)
				myVar=setTimeout(function(){
					g2d.fillText("3. Health potion + " + healthpotinc , 130, Sline += Nline)
				},0)
				myVar=setTimeout(function(){
					g2d.fillText("4. Mana potion + " + manapotinc , 130, Sline += Nline)
				},0)
				myVar=setTimeout(function(){
					g2d.fillText("5. Damage + " + damageinc , 130, Sline += Nline)
				},0)
				myVar=setTimeout(function(){
					g2d.fillText("", 130, Sline += Nline)
				},0)
				myVar=setTimeout(function(){
					g2d.fillText("You have " + attributepts + " points left.", 130, Sline += Nline)
				},0)

			/*	if(attributepts == 0)
				{
					myVar=setTimeout(function(){enterState(6)},1000)
				}*/

	}
	if(gameState == 100)
	{



		
		//sepecify the name before "albert" on the array

		if(enemyName[enemyctr] == "Spider")
		{
			enterState(101);
		}
		else{
			enemyctr++;
			var Sline = startingline;
			var Nline = nextline;
			g2d.font = "44px Courier New";
			g2d.fillStyle = "#CCCCCC";
			g2d.fillText("Prepare for your next Battle!! ", 100, Sline += Nline)
				
			myVar=setTimeout(function(){
			enterState(stagenumber)},1500)
		}

	}
	if(gameState == 101)
	{


	
			var Sline = startingline;
			var Nline = nextline;
			g2d.font = "20px Courier New";
			g2d.fillStyle = "#CCCCCC";
			
			myAudio2.pause();

			playsong('enteringboss.ogg')

			myVar=setTimeout(function(){
			g2d.fillText("You have finally come to an end!", 100, Sline += Nline)},1500)
			
			myVar=setTimeout(function(){
			g2d.fillText("You exit the battlefiled dimension..", 100, Sline += Nline)},3500)
			
			myVar=setTimeout(function(){
			g2d.fillText(".", 100, Sline += Nline)},4500)
			
			myVar=setTimeout(function(){
			g2d.fillText(".", 120, Sline)},5500)
			
			myVar=setTimeout(function(){
			g2d.fillText(".", 140, Sline)},6500)
			

			myVar=setTimeout(function(){
			g2d.fillText(".", 160, Sline)},7500)
			

			myVar=setTimeout(function(){
			g2d.fillText(".", 180, Sline)},8500)

			myVar=setTimeout(function(){
			g2d.fillText("Your monster has pretty beaten up but your journey", 100, Sline += Nline)},10500)

			myVar=setTimeout(function(){
			g2d.fillText("is not over!", 100, Sline += Nline)},12500)

			myVar=setTimeout(function(){
			g2d.fillText("There is a blue door shining in the corridor", 100, Sline += Nline)},14500)


			myVar=setTimeout(function(){
			g2d.fillText("You walk to the door and Suddenly....", 100, Sline += Nline)},16500)
			
	
			myVar=setTimeout(function(){
			enterState(102)},18500)
	}
	if(gameState == 102)
	{
		var Sline = startingline;
		var Nline = nextline;
		g2d.font = "20px Courier New";
		g2d.fillStyle = "#CCCCCC";
			

		myVar=setTimeout(function(){
		g2d.fillText("Albert :", 100, Sline += Nline)},500)

		myVar=setTimeout(function(){
		g2d.fillText("HOW DARE YOU ENTER MY KINGDOM!", 100, Sline += Nline)},2500)

		myVar=setTimeout(function(){
		g2d.fillText("Nobody has ever come this far,", 100, Sline += Nline)},4500)

		myVar=setTimeout(function(){
		g2d.fillText("but now your journey ends HERE!", 100, Sline += Nline)},6500)

		myVar=setTimeout(function(){
		g2d.fillText("Your Soul is mine!", 100, Sline += Nline)},8500)

		myVar=setTimeout(function(){
		g2d.fillText("HAHAHAHAHA.....!!", 100, Sline += Nline)},10500)

		myVar=setTimeout(function(){
		g2d.fillText("Press enter to continue....", 100, Sline += Nline)},11500)


		
	}

	if(gameState == 103)
	{
		var Sline = startingline;
		var Nline = nextline;
	
		var position = 20;
		var postY = 20;
		var cmdline = 460;
		
		
		g2d.font = "18px Courier New";
		g2d.fillStyle = "#CCCCCC";
			

		myAudio2.pause();


		if (temp == 0)
		{

			boss = new Audio('boss.mp3'); 
			boss.addEventListener('ended', function() {
	   		this.currentTime = 0;
	    	this.play();
			}, false);
			boss.play();
			temp++;
		}



		currenthealth =healthCh ;
		currentmana = manaCh;
		currhealthpot = healthpotCh;
		currmanapot = manapotCh;
		enemycurhealth = enemyHealth[9];
		

		
		if(currenthealth > 0)
		{


			g2d.font = "18px Courier New";
			g2d.fillStyle = "#CCCCCC";

			g2d.fillText(userpetsname, position, position);
			g2d.fillText("Health     : " + currenthealth, position , postY += position);
			g2d.fillText("Mana       : " + currentmana, position , postY += position );
			g2d.fillText("Health pot : " + currhealthpot, position, postY  += position);
			g2d.fillText("Mana pot   : " + currmanapot, position , postY += position );
			
			g2d.fillText(enemyName[9] , 740, 24);
			g2d.fillText("lvl    : ???"  , 740, 44);
			g2d.fillText("Health : ???" , 740, 64);

			commanMov();
		}
		else
		{
			enterState(999);
		}
		
	}

	if(gameState == 104)
	{
		
		var Sline = startingline;
		var Nline = nextline;
	

		
		g2d.font = "24px Courier New";
		g2d.fillStyle = "#CCCCCC";




		myVar=setTimeout(function(){
		g2d.fillText("Albert :", 100, Sline += Nline)},500)

		myVar=setTimeout(function(){
		g2d.fillText("No.....!!!!!!", 100, Sline += Nline)},1000)

		myVar=setTimeout(function(){
		g2d.fillText("I can't believe you beat me charName!" , 100, Sline += Nline)},3000)

		myVar=setTimeout(function(){
		g2d.fillText("As a reward, I will give you grant you exit from this world..", 100, Sline += Nline)},5000)

		myVar=setTimeout(function(){
		g2d.fillText("Go inside this portal..", 100, Sline += Nline)},7000)

		myVar=setTimeout(function(){
		g2d.fillText("             *****", 100, Sline += Nline)},9000)
		myVar=setTimeout(function(){
		g2d.fillText("          **       **", 100, Sline += Nline)},9000)
		myVar=setTimeout(function(){
		g2d.fillText("          ***      **", 100, Sline += Nline)},9000)
		myVar=setTimeout(function(){
		g2d.fillText("             *****", 100, Sline += Nline)},9000)

		myVar=setTimeout(function(){
		g2d.fillText("Press enter to continue....", 100, Sline += Nline)},10000)

			

	}

	if(gameState == 105)
	{
		

		var Sline = startingline;
		var Nline = nextline;

		var endgame = new Audio('win.mp3');
		endgame.play();
		
		g2d.font = "24px Courier New";
		g2d.fillStyle = "#CCCCCC";

		myVar=setTimeout(function(){
		g2d.fillText( charName + " , You have finally succeed defeating Albert, Congratulations!", 100, Sline += Nline)},1000)


		myVar=setTimeout(function(){
		g2d.fillText( "If you like this game please invite your friends to play this game too!", 100, Sline += Nline)},3000)

		myVar=setTimeout(function(){
		g2d.fillText( "Hopefully you will meet the creator of this game in real life charName" +  ".", 100, Sline += Nline)},5000)


		myVar=setTimeout(function(){
		g2d.fillText("Press enter to continue....", 100, Sline += Nline)},6000)


	}


	if(gameState == 106)
	{
		

		var Sline = startingline;
		var Nline = 20 + nextline;

		g2d.font = "28px Courier New";
		g2d.fillStyle = "#CCCCCC";

		myVar=setTimeout(function(){
		g2d.fillText( " Created by : Albert Gouw", 100, Sline += Nline)},1000)


		myVar=setTimeout(function(){
		g2d.fillText( "Music source : http://opengameart.org/", 100, Sline += Nline)},1000)

		myVar=setTimeout(function(){
		g2d.fillText( "Writen by : Albert Gouw", 100, Sline += Nline)},1000)


		myVar=setTimeout(function(){
		g2d.fillText("THANKS FOR PLAYING!", 100, Sline += Nline)},6000)


		myVar=setTimeout(function(){
		endgame.pause()},7900)

		myVar=setTimeout(function(){
		gameState(1)},8000)

	}

	if(gameState == 999)
	{

		var gameover = new Audio('gameover.ogg');
		gameover.play();

		boss.pause();

		g2d.font = "32px Courier New";
		g2d.fillStyle = "#FF0000";
		g2d.fillText("Game Over!!",(width/2) - (g2d.measureText("Game Over!!").width /2), 60);


		g2d.font = "24px Courier New";
		g2d.fillStyle = "#FF0000";
		g2d.fillText("You are trapped in Albert's world forever!",(width/2) - (g2d.measureText("You are trapped in Albert's world forever!").width /2), 120);


		myVar=setTimeout(function(){
		g2d.fillText("Press enter to continue....", (width/2) - (g2d.measureText("Press enter to continue....").width /2), 180)},3000)

	}



	var input = new CanvasInput({
	canvas: gCanvas,
	x: 3,
	y:  610,
	width: 980,
	backgroundColor: "#000000",
	borderWidth: 0,
	//innerShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
	selectionColor: "#FFFFFF",
	fontColor: "#FFFFFF",
	placeHolder: 'Enter command here...',
	onsubmit: function(){ 
		var choice = input._value;
		if(gameState == 0)
		{
			if(choice == "1"){
				enterState(2);
			}
			else if(choice == "2")
			{	
				enterState(1);
			}
		}
		else if(gameState == 1){
			if (choice == "reset"){
				enterState(0);
			}

		}
		else if (gameState == 2)
		{
			if(choice != ''){
				charName = choice;
				enterState(3);
			}
		}
		else if (gameState == 4)
		{
			if(choice == "1" ||choice == "2" || choice == "3"){
				userpetsname = playerMonster[parseInt(choice)];
						healthCh = health[parseInt(choice)];
			manaCh = mana[parseInt(choice)];
			damageCh = damage[parseInt(choice)];
			specialCh = special[parseInt(choice)]; 
			healthpotCh = healthpot[parseInt(choice)]; 
			manapotCh = manapot[parseInt(choice)];

				enterState(5);
			}

		}
		else if(gameState == 102)
		{
			if(choice == '')
			{
				
				enterState(103);
			}

		}
		else if(gameState == 104)
		{
			if(choice == '')
			{
				
				enterState(105);
			}

		}
		else if(gameState == 105)
		{
			if(choice == '')
			{
				
				enterState(106);
			}

		}
		else if(gameState == 103)
		{
			

			//coordination of text during battle
			var posisitonattackx = 300;
			var posisitonattacky = 350;


			
				if(choice == "1")
				{
					g2d.fillText(userpetsname + " attack with " +  damageCh + " damage!", posisitonattackx , posisitonattacky);
					g2d.fillText("Albert attack with " + enemyDamage[9] + " damage!", posisitonattackx , posisitonattacky += nextlinebattle);
					
					myVar=setTimeout(function(){
					g2d.clearRect(clearX,clearY, clearW,clearH)},1500)

					healthCh -= enemyDamage[9];
					enemyHealth[9] -= damageCh;	

					if(enemyHealth[9] > 1)
					{
						myVar=setTimeout(function(){
						enterState(103)},1500)	
					}
					else
					{
						attributepts += 3;
						myVar=setTimeout(function(){
						enterState(104)},1500)
					}
				}
				else if(choice == "2")
				{
					if(manaCh > 79)
					{
						g2d.fillText(userpetsname + " uses special damage and dealt " + specialCh + " damage!", posisitonattackx , posisitonattacky);
						g2d.fillText(enemyName[9] + " retaliate with " + enemyDamage[9] + " damage!", posisitonattackx , posisitonattacky += nextlinebattle);
						
						myVar=setTimeout(function(){
						g2d.clearRect(clearX,clearY, clearW,clearH)},1500)

						healthCh -= enemyDamage[9];
						enemyHealth[9] -= specialCh;
						manaCh -= 80;	

						if(enemyHealth[9] > 1)
						{
							myVar=setTimeout(function(){
								enterState(103)},1500)	
							}
						else
						{
							attributepts += 3;
							myVar=setTimeout(function(){
							enterState(104)},1500)
						}
					}
					else
					{
						g2d.fillText("You have insuficient mana", posisitonattackx , posisitonattacky);
						myVar=setTimeout(function(){
						enterState(103)},1500)

					}

				}
				else if(choice == "3")
				{
					if(healthpotCh > 0)
					{
						g2d.fillText(userpetsname + " uses health pot!", posisitonattackx , posisitonattacky);
						healthpotCh--;
						healthCh+=healthpotpwr;
						g2d.fillText("You have " + healthpotCh + " health pot left", posisitonattackx , posisitonattacky += nextlinebattle);
						myVar=setTimeout(function(){
						g2d.clearRect(clearX,clearY, clearW,clearH)},1500)

						myVar=setTimeout(function(){
						enterState(103)},1500)	
					}
					else{
						g2d.fillText("You don't have any more health pot", posisitonattackx , posisitonattacky);
						myVar=setTimeout(function(){
						g2d.clearRect(clearX,clearY, clearW,clearH)},1500)
						myVar=setTimeout(function(){
						enterState(103)},1500)
					}

				}
				else if(choice == "4")
				{
					if(manapotCh > 0)
					{
						g2d.fillText(userpetsname + " uses mana pot!", posisitonattackx , posisitonattacky);
						manapotCh--;
						manaCh += manapotpwr;
						g2d.fillText("You have " + manapotCh + " mana pot left", posisitonattackx , posisitonattacky += nextlinebattle);
						myVar=setTimeout(function(){
						g2d.clearRect(clearX,clearY, clearW,clearH)},1500)

						myVar=setTimeout(function(){
						enterState(103)},1500)		
					}
					else{
						g2d.fillText("You don't have any more mana pot", posisitonattackx , posisitonattacky);
						myVar=setTimeout(function(){
						g2d.clearRect(clearX,clearY, clearW,clearH)},1500)
						myVar=setTimeout(function(){
						enterState(103)},1500)
					}


				}
				else if(choice == "5")
				{
					var asking = prompt("Are you sure you want to Surrender? \"y \"  or \"n\" ");
					if (asking == "y") {
	    				enterState(999);
					}
					else if(asking == "n"){
						enterState(103);
					}

				}
		

		}
		else if(gameState == 6)
		{
			//coordination of text during battle
			var posisitonattack = 300;

			
				if(choice == "1")
				{
					g2d.fillText(userpetsname + " attack with " +  damageCh + " damage!", 300 , posisitonattack);
					g2d.fillText(enemyName[enemyctr] + " attack with " + enemyDamage[enemyctr] + " damage!", 300 , posisitonattack += nextlinebattle);
					myVar=setTimeout(function(){
					g2d.clearRect(clearX,clearY, clearW,clearH)},1500)

					healthCh -= enemyDamage[enemyctr];
					enemyHealth[enemyctr] -= damageCh;	

					if(enemyHealth[enemyctr] > 1)
					{
						myVar=setTimeout(function(){
						enterState(6)},1500)	
					}
					else
					{
						attributepts += 3;
						myVar=setTimeout(function(){
						enterState(99)},1500)
					}
				}
				else if(choice == "2")
				{
					if(manaCh > 79)
					{
						g2d.fillText(userpetsname + " uses special damage and dealt " + specialCh + " damage!", 300 , posisitonattack);
						g2d.fillText(enemyName[enemyctr] + " retaliate with " + enemyDamage[enemyctr] + " damage!", 300 , posisitonattack += nextlinebattle);
						
						myVar=setTimeout(function(){
						g2d.clearRect(clearX,clearY, clearW,clearH)},1500)

						healthCh -= enemyDamage[enemyctr];
						enemyHealth[enemyctr] -= specialCh;
						manaCh -= 80;	

						if(enemyHealth[enemyctr] > 1)
						{
							myVar=setTimeout(function(){
								enterState(6)},1500)	
							}
						else
						{
							attributepts += 3;
							myVar=setTimeout(function(){
							enterState(99)},1500)
						}
					}
					else
					{
						g2d.fillText("You have insuficient mana", 300 , posisitonattack);
						myVar=setTimeout(function(){
						enterState(6)},1500)

					}

				}
				else if(choice == "3")
				{
					if(healthpotCh > 0)
					{
						g2d.fillText(userpetsname + " uses health pot!", 300 , posisitonattack);
						healthpotCh--;
						healthCh+=healthpotpwr;
						g2d.fillText("You have " + healthpotCh + " health pot left", 300 , posisitonattack += nextlinebattle);
						myVar=setTimeout(function(){
						g2d.clearRect(clearX,clearY, clearW,clearH)},1500)

						myVar=setTimeout(function(){
						enterState(6)},1500)	
					}
					else{
						g2d.fillText("You don't have any more health pot", 300 , posisitonattack);
						myVar=setTimeout(function(){
						g2d.clearRect(clearX,clearY, clearW,clearH)},1500)
						myVar=setTimeout(function(){
						enterState(6)},1500)
					}

				}
				else if(choice == "4")
				{
					if(manapotCh > 0)
					{
						g2d.fillText(userpetsname + " uses mana pot!", 300 , posisitonattack);
						manapotCh--;
						manaCh += manapotpwr;
						g2d.fillText("You have " + manapotCh + " health pot left", 300 , posisitonattack += nextlinebattle);
						myVar=setTimeout(function(){
						g2d.clearRect(clearX,clearY, clearW,clearH)},1500)

						myVar=setTimeout(function(){
						enterState(6)},1500)	
					}
					else{
						g2d.fillText("You don't have any more mana pot", 300 , posisitonattack);
						myVar=setTimeout(function(){
						g2d.clearRect(clearX,clearY, clearW,clearH)},1500)
						myVar=setTimeout(function(){
						enterState(6)},1500)
					}


				}
				else if(choice == "5")
				{
					var asking = prompt("Are you sure you want to Surrender? \"y \"  or \"n\" ");
					if (asking == "y") {
	    				enterState(999);
					}
					else if(asking == "n"){
						enterState(6);
					}

				}
		

		}
		else if(gameState == stagenumber)
		{
			

			//coordination of text during battle
			var posisitonattackx = 300;
			var posisitonattacky = 350;


			
				if(choice == "1")
				{
					g2d.fillText(userpetsname + " attack with " +  damageCh + " damage!", posisitonattackx , posisitonattacky);
					g2d.fillText(enemyName[enemyctr] + " attack with " + enemyDamage[enemyctr] + " damage!", posisitonattackx , posisitonattacky += nextlinebattle);
					myVar=setTimeout(function(){
					g2d.clearRect(clearX,clearY, clearW,clearH)},1500)

					healthCh -= enemyDamage[enemyctr];
					enemyHealth[enemyctr] -= damageCh;	

					if(enemyHealth[enemyctr] > 1)
					{
						myVar=setTimeout(function(){
						enterState(stagenumber)},1500)	
					}
					else
					{
						attributepts += 3;
						myVar=setTimeout(function(){
						enterState(99)},1500)
					}
				}
				else if(choice == "2")
				{
					if(manaCh > 79)
					{
						g2d.fillText(userpetsname + " uses special damage and dealt " + specialCh + " damage!", posisitonattackx , posisitonattacky);
						g2d.fillText(enemyName[enemyctr] + " retaliate with " + enemyDamage[enemyctr] + " damage!", posisitonattackx , posisitonattacky += nextlinebattle);
						
						myVar=setTimeout(function(){
						g2d.clearRect(clearX,clearY, clearW,clearH)},1500)

						healthCh -= enemyDamage[enemyctr];
						enemyHealth[enemyctr] -= specialCh;
						manaCh -= 80;	

						if(enemyHealth[enemyctr] > 1)
						{
							myVar=setTimeout(function(){
								enterState(stagenumber)},1500)	
							}
						else
						{
							attributepts += 3;
							myVar=setTimeout(function(){
							enterState(99)},1500)
						}
					}
					else
					{
						g2d.fillText("You have insuficient mana", posisitonattackx , posisitonattacky);
						myVar=setTimeout(function(){
						enterState(stagenumber)},1500)

					}

				}
				else if(choice == "3")
				{
					if(healthpotCh > 0)
					{
						g2d.fillText(userpetsname + " uses health pot!", posisitonattackx , posisitonattacky);
						healthpotCh--;
						healthCh+=healthpotpwr;
						g2d.fillText("You have " + healthpotCh + " health pot left", posisitonattackx , posisitonattacky += nextlinebattle);
						myVar=setTimeout(function(){
						g2d.clearRect(clearX,clearY, clearW,clearH)},1500)

						myVar=setTimeout(function(){
						enterState(stagenumber)},1500)	
					}
					else{
						g2d.fillText("You don't have any more health pot", posisitonattackx , posisitonattacky);
						myVar=setTimeout(function(){
						g2d.clearRect(clearX,clearY, clearW,clearH)},1500)
						myVar=setTimeout(function(){
						enterState(stagenumber)},1500)
					}

				}
				else if(choice == "4")
				{
					if(manapotCh > 0)
					{
						g2d.fillText(userpetsname + " uses mana pot!", posisitonattackx , posisitonattacky);
						manapotCh--;
						manaCh += manapotpwr;
						g2d.fillText("You have " + manapotCh + " mana pot left", posisitonattackx , posisitonattacky += nextlinebattle);
						myVar=setTimeout(function(){
						g2d.clearRect(clearX,clearY, clearW,clearH)},1500)

						myVar=setTimeout(function(){
						enterState(stagenumber)},1500)	
					}
					else{
						g2d.fillText("You don't have any more mana pot", posisitonattackx , posisitonattacky);
						myVar=setTimeout(function(){
						g2d.clearRect(clearX,clearY, clearW,clearH)},1500)
						myVar=setTimeout(function(){
						enterState(stagenumber)},1500)
					}


				}
				else if(choice == "5")
				{
					var asking = prompt("Are you sure you want to Surrender? \"y \"  or \"n\" ");
					if (asking == "y") {
	    				enterState(999);
					}
					else if(asking == "n"){
						enterState(stagenumber);
					}

				}
		

		}
		else if(gameState == 999)
		{
			if (choice == '')
			{
				gameover.pause();
				enterState(1);
			}
		}
		else if(gameState == 99)
		{
			
			if(attributepts >0)
			{
				if(choice == "1")
				{
					healthCh += healthinc;
					attributepts--;
					enterState(99);
					playonce('levelup.wav');
				}
				else if(choice == "2")
				{	
					manaCh += manainc;
					attributepts--;
					enterState(99);
					playonce('levelup.wav');
				}
				else if(choice == "3")
				{
					healthpotCh += healthpotinc;
					attributepts--;
					enterState(99);
					playonce('levelup.wav');
				}
				else if(choice == "4")
				{
					manapotCh += manapotinc;
					attributepts--;
					enterState(99);
					playonce('levelup.wav');
				}
				else if(choice == "5")
				{
					damageCh += damageinc;
					attributepts--;
					enterState(99);
					playonce('levelup.wav');
				}
			
			}
			else{
				enterState(100);
			}	
		
	
		}
	


	}

	});
	input.focus();

	function commanMov(){
		g2d.fillText("----------------------------------------------------------------------------------------", 24, cmdline);
		g2d.fillText("Command :", 24, cmdline += position);
		g2d.fillText("1. Attack ", 24, cmdline += position);
		g2d.fillText("2. Special Attack ", 24, cmdline += position);
		g2d.fillText("3. Use health potion ", 24, cmdline += position);
		g2d.fillText("4. Use mana potion ", 24, cmdline += position);
		g2d.fillText("5. Surrender! ", 24, cmdline += position);
	}

	function songBG(name){
		myAudio = new Audio(name); 
		myAudio.addEventListener('ended', function() {
   		this.currentTime = 0;
    	this.play();
		}, false);
		myAudio.play();
	}



} //closing bracket for draw



function enterState(state){
	gameState = state;
	clearCanvas(g2d, gCanvas);
	draw(); 
}

function clearCanvas(context, canvas)
{
	context.clearRect(0, 0, canvas.width , canvas.height);
	var w = canvas.width;
	canvas.width = 1;
	canvas.width = w;
}

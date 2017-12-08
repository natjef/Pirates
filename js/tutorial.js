var playership;
var tutorialProgress = 0;
var tutorialText = ["Welcome to PlaceholderTitle!",
    "In this game, you are a pirate captain, seeking fame and fortune on the high seas!",
    "To move forward, press the \"W\" key.",
    "Great job!",
    "To turn to the right or left, press \"A\" and \"D\"",
    "Good going!",
    "To slow down, press \"S\". \nSide note: not sure if ships can slow down???"
    ];
var wpressed = false;
var apressed = false;
var spressed = false;
var dpressed = false; // relateable

var tutState = {

    create: function () {
        // draw water on entire board
        for (var i = 0; i < 30; i++) {
            for (var j = 0; j < 60; j++) {
                game.add.sprite(128 * i, 128 * j, 'water');
            }
        }

        // draw the player (in the pirate ship) on the center of the screen
        playership = game.add.sprite(game.world.centerX, game.world.centerY, 'playerShip1'); // add player to board at center
        playership.anchor.setTo(.5, .5); // draw the sprite with origin point set to .5, .5 or the center of the screen.
        playership.scale.y *= -1; // flips the image vertically (the standard image originally points downward.

        // add text to the game
        tutorialMessage = game.add.text(game.world.width/2, game.world.height/4, "error.", // draw the tutorial text
            fontSmall);
        tutorialMessage.anchor.setTo(.5, .5); // origin point

        continueButton = game.add.button(10, 5*(game.world.height/6), 'button1', continueTutorial, this); //play button
        game.add.text(35, 5*(game.world.height/6), 'Continue.', fontMed); // button text

        skipButton = game.add.button(10, 4 * (game.world.height/6), 'button1', skipTutorial, this);
        game.add.text(35, 4 * (game.world.height / 6), 'Skip.', fontMed);

    },

        update: function () {
            tutorialMessage.text = tutorialText[tutorialProgress];

            /*
            TAKE INPUT

            ALL OF THE MOVEMENT MECHANICS AND LOGIC ARE ***PLACEHOLDERS***.

            TODO: REDO ALL OF THIS STUFF!
             */
            
            cursors = game.input.keyboard.createCursorKeys(); //define up left right down

            if (cursors.W.isDown) {
                wpressed = true;
            }
        }
};

function continueTutorial() { // on "OK" button clicked
    switch (tutorialProgress) {
        default: // if the tutorial message is just text with no control explanations, just continue to the next step when user clicks the button.
            tutorialProgress++;
            break;
        // case 2: // if the tutorial message wants the user to hit a specific button or key, wait until they press it before continuting.
    }
}

function skipTutorial() {
    tutorialProgress = tutorialText.length - 1;
}

function resetPressedFlags() {
    wpressed = false;
    apressed = false;
    spressed = false;
    dpressed = false;
}
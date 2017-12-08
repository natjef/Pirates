var playerBoat;
var tutorialProgress = 0;
var tutorialText = ["Welcome to PlaceholderTitle!",
    "In this game, you are a pirate captain, seeking fame and fortune on the high seas!",
    "I will add more tutorial text later!"];

var tutState = {

    create: function () {
        // draw water on entire board
        for (var i = 0; i < 30; i++) {
            for (var j = 0; j < 30; j++) {
                game.add.sprite(128 * i, 128 * j, 'water');
            }
        }

        // draw the player (in the pirate ship) on the center of the screen
        playerBoat = game.add.sprite(game.world.centerX, game.world.centerY, 'playerShip1'); // add player to board at center
        playerBoat.anchor.setTo(.5, .5); // draw the sprite with origin point set to .5, .5 or the center of the screen.
        playerBoat.scale.y *= -1; // not sure what this does.

        // add text to the game
        tutorialMessage = game.add.text(game.world.width/2, game.world.height/4, "error.", // draw the tutorial text
            { font: 'Della Respira', fontSize: '16px', fill: '#800000'});
        tutorialMessage.anchor.setTo(.5, .5); // origin point

        continueButton = game.add.button(10, 5*(game.world.height/6), 'button1', continueTutorial, this); //play button
        game.add.text(35, 5*(game.world.height/6), 'Continue.', fontSmall); // button text

    },

        update: function () {
            tutorialMessage.text = tutorialText[tutorialProgress];
        }
};

function continueTutorial() { // on "OK" button clicked
    switch (tutorialProgress) {
        default: // if the tutorial message is just text with no control explanations, just continue to the next step when user clicks the button.
            tutorialProgress++;
            break;
        case 2: // if the tutorial message wants the user to hit a specific button or key, wait until they press it before continuting.
    }
}


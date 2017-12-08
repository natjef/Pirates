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
        tutorialMessage = game.add.text(game.world.width/4, game.world.height/2, states[state],
            { font: 'Della Respira', fontSize: '32px', fill: '#800000' });

    },

        update: function () {
            switch (tutorialProgress) {
                case 0:
                    tutorialMessage.text = tutorialText[0]
            }
        },

        continueTutorial: function () {

        }
};


var playerBoat;

var tutState = {

    create: function () {
        for (var i = 0; i < 30; i++) {
            for (var j = 0; j < 30; j++) {
                game.add.sprite(128 * i, 128 * j, 'water');
            }
        }

        playerBoat = game.add.sprite(game.world.centerX, game.world.centerY, 'playerShip1');
        playerBoat.anchor.setTo(.5, .5);
        playerBoat.scale.y *= -1;
    },

        update: function () {
        }
};


//loading screen, boots and loads assets
var loadingText;
var loadingState = {

    preload: function(){
        game.physics.startSystem(p2); //boot physics

        //load images
        game.load.image('playerShip1', 'resources/images/PNG/Ships/ship/ship (2).png');
        game.load.image('playerShip2', 'resources/images/PNG/Tiles/tile_73.png');
    },

    create: function(){
        loadingText = game.add.text(game.world.width/4, game.world.height/2, 'Loading...',
            { font: '', fontSize: '64px', fill: '#800000' });

        var loadingTimer = game.time.create(false);
        loadingTimer.add(5000, function(){game.state.start('menu');}, this);
        loadingTimer.start();

    }
};
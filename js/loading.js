//displays loading screen, boots and loads assets
var loadingText;
var loadingTimer;
var state = 0;
var states = ["Loading", "Loading.", "Loading..", "Loading..."];

var loadingState = {

    preload: function(){
        game.physics.startSystem(p2); //boot physics

        //load image
        game.load.image('playerShip1', 'resources/images/PNG/Ships/ship_2.png');
        game.load.image('water', 'resources/images/PNG/Tiles/tile_73.png');
        game.load.image('menuImage', 'resources/images/PNG/statics/menuImage.png');
        game.load.image('button1', 'resources/images/ui/PNG/red_button02.png');

        //load sounds
        game.load.audio('theme', 'resources/sounds/theme.wav');
    },

    create: function(){
        loadingText = game.add.text(game.world.width/4, game.world.height/2, states[state],
            { font: 'Della Respira', fontSize: '64px', fill: '#800000' });

        loadingTimer = game.time.create(false);
        loadingTimer.add(1500, function(){game.state.start('menu');}, this);
        loadingTimer.start();

        game.time.events.loop(350, stateChange, this); //loading screen loop, calls statechange
    }
};

function stateChange(){ //changes the state of the loading screen text.
    switch(state){
        case 0:
            loadingText.text = states[1];
            break;
        case 1:
            loadingText.text = states[2];
            break;
        case 2:
            loadingText.text = states[3];
            break;
        case 3:
            loadingText.text = states[0];
            state = -1;
            break;
    }
    state+= 1;
}


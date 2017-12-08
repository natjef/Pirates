var theme;
var welcome;
var background;
var playButton;
var configureButton;


var menuState = {
    create:function(){
        theme = game.add.audio('theme'); //adds theme
        theme.addMarker('chorus', 36.5, 243, 1, true); //adds the chorus of the theme as a marker
         //plays the marker

        game.sound.setDecodedCallback(theme, startMusic, this); //Event for audio decoding

        background = game.add.sprite(0, 0, 'menuImage'); //scales and draws bg
        background.scale.setTo(.8, .8);

        playButton = game.add.button(10, 5*(game.world.height/6), 'button1', startGame, this); //play button
        game.add.text(75, 5*(game.world.height/6), 'Play!', fontMed);

        welcome = game.add.text(game.world.width/14, game.world.height/69, 'Welcome to the high seas!', fontLarge);
    },

    update:function(){

    }
};

function startGame(){ //On PLAY clicked
    game.state.start('tutorial');
    theme.destroy();
}

function startMusic(){ //plays menu theme
    theme.fadeIn(3000, true, 'chorus');
}

var theme;
var welcome;
var background;
var playButton;
var configureButton;
var fontLarge = { font: 'Della Respira', fontSize: '48px', fill: '#800000' };
var fontSmall = { font: 'Della Respira', fontSize: '32px', fill: '#800000' };

var menuState = {
    create:function(){
        theme = game.add.audio('theme'); //adds theme
        theme.addMarker('chorus', 36, 243, 1, true); //adds the chorus of the theme as a marker
        theme.play('chorus'); //plays the marker

        background = game.add.sprite(0, 0, 'menuImage'); //scales and draws bg
        background.scale.setTo(.8, .8);

        playButton = game.add.button(10, 5*(game.world.height/6), 'button1', startGame, this); //play button
        game.add.text(75, 5*(game.world.height/6), 'Play!', fontSmall);

        welcome = game.add.text(game.world.width/14, game.world.height/69, 'Welcome to the high seas!', fontLarge);
    },

    update:function(){

    }
};

function startGame(){ //
    game.state.start('sail');
    theme.destroy();
}

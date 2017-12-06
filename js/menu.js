var theme;
var welcome;
var background;
var playButton;
var configureButton;

var menuState = {
    create:function(){
        theme = game.add.audio('theme'); //adds theme
        theme.addMarker('chorus', 36, 243, 1, true); //adds the chorus of the theme as a marker
        theme.play('chorus'); //plays the marker

        background = game.add.sprite(0, 0, 'menuImage');
        background.scale.setTo(.8, .8);

        playButton = game.add.button(10, game.world.height/5, 'button1', startMenu, this);

        welcome = game.add.text(game.world.width/14, game.world.height/69, 'Welcome to the high seas!',
            { font: 'Della Respira', fontSize: '48px', fill: '#800000' });
    },

    update:function(){

    }
};

function startMenu(){
    game.state.start('sail');
}

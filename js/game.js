//game logic file

var game = new Phaser.Game(640, 480, Phaser.AUTO, '');

game.state.add('load', loadingState);
game.state.add('menu', menuState);


game.state.start('load');
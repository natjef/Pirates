//game logic file

var game = new Phaser.Game(640, 480, Phaser.AUTO, 'game');

game.state.add('load', loadingState);
game.state.add('menu', menuState);
game.state.add('sailing', sailingState);

game.state.start('load');
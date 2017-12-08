
var game = new Phaser.Game(windowWidth, windowHeight, Phaser.AUTO, 'game');

game.state.add('load', loadingState);
game.state.add('menu', menuState);
game.state.add('tutorial', tutState);


game.state.start('load');


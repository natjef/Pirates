var sailingState = {
  
    create: function(){
        loadingText = game.add.sprite(game.world.centerX, game.world.centerY,'playerShip1');
        for (var i = 0; i < 30; i++) {
            for (var j = 0; j < 30; j++) {
                game.add.image('water', 128 * i, 128 * j)
            }
        }
        
    update: function() {
    }
};

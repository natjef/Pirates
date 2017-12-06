var sailingState = {

    create: function(){
        loadingText = game.add.image(ship1);
        for (var i = 0; i < 300; i++) {
            
        }

        game.time.events.loop(350, stateChange, this); //loading screen loop, calls statechange
    }
};
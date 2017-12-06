var theme;



var menuState = {
    create:function(){
        theme = game.add.audio('theme'); //adds theme
        theme.addMarker('chorus', 36, 243, 1, true); //adds the chorus of the theme as a marker
        theme.play('chorus'); //plays this marker
    },

    update:function(){

    }


}

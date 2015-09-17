var Game = {
    Models: {},
    View: {}
};

Game.init = function() {
	Game.Models.getCards().forEach(function(val, index){
		val.render();
	});
}

function init() {
	Game.init();
}
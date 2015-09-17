var Game = {
    Models: {},
    View: {}
};

var classTypeCss = ["type0", "type1"];

Game.Models.Card = function(props) {
    var self = this;
    self.id = props.id || -1;
    self.name = props.name || "";
    self.number = props.number || -1;
    self.title = props.title || "";
    self.description = props.description || "";
    self.example = props.example || "";
    self.instantiateds = props.instantiateds || [];
    self.modulates = props.modulates || [];
    self.type = props.type || 0;

    self.renderHighlight = function(id) {
		var card = Game.Models.findCard(id);
		return '<li class="instantiated ' + classTypeCss[card.type] + '">' + card.title + '</li>'
	}

    self.renderInstatiateds = function(){
    	var html = '';

    	self.instantiateds.forEach(function(val, index){
    		html += self.renderHighlight(val);
    	});

    	return html;
    }

    self.renderModulates = function(){
    	var html = '';

    	self.modulates.forEach(function(val, index){
    		html += self.renderHighlight(val);
    	});

    	return html;
    }

    self.render = function() {
    	var html = '<div class="container card ' + classTypeCss[self.type] + '">' +
    	
    	'<div class="row row-eq-height">'+
    		'<div class="col-xs-1 text-center number ' + classTypeCss[self.type] + '">'+
    			self.number +
    		'</div>' +
    		'<div class="col-xs-10">'+
    			'<h1 class="row text-center title">'+
    				self.title +
    			'</h1>' +
    			'<h2 class="row text-center description">'+
    				self.description +
    			'</h2>' +
    		'</div>' +
    		'<div class="col-xs-1 number ' + classTypeCss[self.type] + '">'+
    		'</div>' +
    	'</div>' +
    	
    	'<div class="row text-justify example">' + 
    		'<div class="col-xs-1 legends">'+
    		'</div>' +
    		'<div class="col-xs-10 text-justify example">'+
    			self.example +
    		'</div>' +
    	'</div>' + 
    		'<div class="row instantietedContainer">' + 
    			'<span>Instantiated By</span>' + 
    			'<ul class="instantiateds">' + 
    				self.renderInstatiateds() + 
    			'</ul>'+
    		'</div>' + 
    		'<div class="row modulateContaier">' + 
    			'<span>Modulates By</span>' + 
    			'<ul class="modulates">' + 
    				self.renderModulates() + 
    			'</ul>'+
    		'</div>' + 
    		'' + 
    	'</div>';

    	$("#container").append(html);
    }
};

Game.Models.getCards = function() {
	return data.cards.map(function(card){
		return new Game.Models.Card(card);
	});
}

Game.Models.findCard = function(id) {
	return data.cards.filter(function(card){
		return card.id == id;
	}).map(function(card){
		return new Game.Models.Card(card);
	})[0];
}

Game.init = function() {
	Game.Models.getCards().forEach(function(val, index){
		val.render();
	});
}

function init() {
	Game.init();
}
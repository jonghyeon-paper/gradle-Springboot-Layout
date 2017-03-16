(function(){
}());

var LayoutTemplate = function(divId) {
	
	var setContent = function() {
		
	};
	
	// variable
	var $setterButton = $('<button>').attr({type: 'button', id: 'setterButton'})
	                                 .html('SETTER');
	
	var $saveButton = $('<button>').attr({type: 'button', id: 'saveButton'})
	                               .css({display : 'none'})
	                               .html('SAVE');
	
	var $left = $('<div>').css({float: 'left', width: '100%', height: '100%'})
	                      .append($setterButton)
	                      .append($saveButton);
	
	$left.find('#setterButton').on('click', function() {
		$setterButton.hide();
		$saveButton.show();
		$right.show();
		$left.css({width: '80%'});
		
		$layout.show();
	}).end().find('#saveButton').on('click', function(){
		$setterButton.show();
		$saveButton.hide();
		$right.hide();
		$left.css({width: '100%'});
		
		$layout.hide();
		$content.hide();
	});
	
	var $layout = $('<div>').css({display: 'none'})
	                        .append($('<a>').attr({href: '#', onclick: 'return false;'}).css({display: 'inline-block', width: '100px', height: '20px', border: 'solid 1px black'}).html('레이아웃'))
	                        .append($('<a>').attr({href: '#', onclick: 'return false;', id: 'contentButton'}).css({display: 'inline-block', width: '100px', height: '20px', 'background-color': 'gray'}).html('컨텐츠'));
	
	var $leftButton = $('<button>').attr({type: 'button'})
	                               .html(' << ')
	                               .on('click', setContent);
	
	var $content = $('<div>').css({display: 'none'})
	                         .append($('<a>').attr({href: '#', onclick: 'return false;', id: 'layoutButton'}).css({display: 'inline-block', width: '100px', height: '20px', 'background-color': 'gray'}).html('레이아웃'))
	                         .append($('<a>').attr({href: '#', onclick: 'return false;'}).css({display: 'inline-block', width: '100px', height: '20px', border: 'solid 1px black'}).html('컨텐츠'))
	                         .append('<br>')
	                         .append($leftButton);
	
	var $right = $('<div>').css({float: 'left', width: '20%', height: '100%', disalay: 'none'})
	                       .append($layout)
	                       .append($content);
	
	$right.find('#contentButton').on('click', function(){
		$layout.hide();
		$content.show();
	}).end().find('#layoutButton').on('click', function(){
		$layout.show();
		$content.hide();
	});
	
	// function
	var drawSetArea = function() {
		var $ul = $('<ul>');
		for (var i = 0; i < contentArray.length; i++) {
			$ul.append($('<li>').html(contentArray[i].title));
		}
		
		$ul.find('li').on('click', function() {
			if ($(this).attr('id') === 'on') {
				$(this).removeAttr('id')
				       .css({'background-color' : ''});
			} else {
				$ul.find('li').removeAttr('id')
				              .css({'background-color' : ''});
				$(this).attr('id', 'on')
				       .css({'background-color' : 'yellow'});
			}
		});
		
		$ul.appendTo($content);
		
		$('#' + targetId).append($left)
		                 .append($right);
	}
	
	// process
	var targetId = null;
	var layoutArray = [];
	var contentArray = [];
	
	if (targetId) {
		targetId = divId;
		//alert(true);
	} else {
		//alert(false);
	}
	
	this.setTargetId = function(divId) {
		targetId = divId;
	};
	
	this.setLayoutArray = function(data) {
		layoutArray = data;
	};
	
	this.setContentArray = function(data) {
		contentArray = data;
	};
	
	this.showData = function() {
		//alert(this.targetId);
	};
	
	this.draw = function() {
		drawSetArea();
	};
	
	return this;
};
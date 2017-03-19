$(function(){
	var layoutData = [{
		domId: 'layoutStyle1',
		dom: $('#layoutStyle1').clone()
	}, {
		domId: 'layoutStyle2',
		dom: $('#layoutStyle2').clone()
	}];
	var contentData = [{
		title: 'naver',
		data: {url: 'https://naver.com', callFunction: 'n'}
	},
	{
		title: 'daum',
		data: {url: 'http://daum.net', callFunction: '2'}
	},
	{
		title: 'google',
		data: {url: 'https://google.com', callFunction: 'w'}
	},
	{
		title: 'ncsoft',
		data: {url: 'http://ncsoft.com/', callFunction: '#'}
	}];
	var customAfterSave = function(data) {
		var layoutInfo = data.layout;
		
		var $layoutDom = null;
		for (var index in layoutData) {
			var item = layoutData[index];
			if (item.domId === layoutInfo.styleId) {
				$layoutDom = item.dom.clone();
				break;
			}
		}
		
		var sectionArray = layoutInfo.section;
		for (var sIndex in sectionArray) {
			var sectionItem = sectionArray[sIndex];
			
			var $section = $layoutDom.find('#' + sectionItem.sectionId)
			
			var contentArray = sectionItem.contentList;
			for (var cIndex in contentArray) {
				var contentItem = contentArray[cIndex];
				var $div = $('<div>').append($('<div>').html(contentItem.title))
				                     .append($('<iframe></iframe>').attr({src : contentItem.data.url}))
				                     .appendTo($section);
			}
		}
		
		$layoutDom.appendTo($('#' + data.targetId + ' > #realArea')).show();
	};
	
	var temp = new LayoutTemplate();
	temp.setTargetId('baseArea');
	temp.setLayoutArray(layoutData);
	temp.setContentArray(contentData);
	temp.setAfterSave(customAfterSave);
	temp.draw();
});
function getAllCookies() {
	var result = '';
	var cookies = document.cookie.split(';');
	for (var i = 0; i < cookies.length; i++) {
		result += cookies[i] + '<br>';
	}
	return result;
}

function getCookie(name) {
	var result = '';
	var cookies = document.cookie.split(';');
	for (var i = 0; i < cookies.length; i++) {
		if (cookies[i].indexOf(name) > -1) {
			return cookies[i].replace(name + '=', '');
		}
	}
	return result;
}

var setCookie = function(name, value, expiredays) {
	var todayDate = new Date();
	if (expiredays == null) {
		expiredays = 30;
	}
	todayDate.setDate(todayDate.getDate() + expiredays);
	document.cookie = name + '=' + value + '; path=/; expires=' + todayDate.toGMTString() + ';';
}

var reloadCookieInfos = function() {
	document.getElementById('cookieInfos').innerHTML = getAllCookies();
};

var setContentCookie = function() {
	var cookies = '';
	var elems = document.querySelectorAll('input[type=checkbox]');
	for (var i = 0; i < elems.length; i++) {
		var elem = elems[i];
		if (elem.checked === true) {
			cookies += elem.value + ',';
		}
	}
	setCookie('contentsCookie', cookies.substring(0, cookies.length - 1), 1);
	reloadCookieInfos();
};
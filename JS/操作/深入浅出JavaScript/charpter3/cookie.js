function writeCookie(name, value, days) {
	if (days){
		var date = new Date();
		date.setTime(date.getTime() + (days*24*60*60*1000));
		expires = "; expires" +date.toGMTString();
	}
	document.cookie = name + "=" + value + expires + "; path=/" ;
}	

function readCookie(name) {
	var searchName = name + "=" ;
	var cookies = document.cookie.split(";");
	for (var i=0; i<cookies.length; i++){
		var c = cookies[i];
		// charAt[0]:从某个字符串取得具体的字符。
		// substring() :提取字符串中介于start（包括）和stop（不包括）之间的字符。注意：数组下标从0开始
		while (c.charAt[0] == ""){
			c = c.substring(1,c.length);
		 }//去除字符串前面的空格
		// indexOf() 方法返回某个指定的字符串值在字符串中首次出现的位置。
		if (c.indexOf(searchName) == 0){
			return c.substring(searchName.length, c.length);
		}// 返回name的value 的值
	}
	return null;
}

function eraseCookie(name){
	writeCookie(name, "", -1);
}
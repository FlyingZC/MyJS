//== EFWKAjax.js
/**
 * 获取应用名称
 * /MyJS/js-demo/D03COM-demo.html则返回/MyJS
 */
var publicPath = function() {
	//     /MyJS/js-demo/D03COM-demo.html
	var path = document.location.pathname;
	var arraypath = path.split("/");
	var mapath = "/";
	if(arraypath[1] == undefined) {
		arraypath[1] = "";
		mapath = "";
	}
	return mapath + arraypath[1];
};

addressIP = {
	"testAdress": publicPath() + "/",
	//   http://127.0.0.1:8020/MyJS
	"addressJSON": document.location.protocol + "//" + document.location.host + publicPath()
};

//PageAction.js
/**
 * 绑定页面回车事件(可绑定多个函数)
 * @param {function} action
 */
enterActionRegister = function(action) {
	if ($.isFunction(action)) {
		$("body").bind('keypress', function(event) {
			if (event.keyCode == "13") {
				action();
			}
		});
	} else {
		log.error("注册行为必须是一个function对象");
	}
	$('body input:first').focus();
};
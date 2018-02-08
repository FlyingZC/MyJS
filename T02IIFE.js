//3.立即执行函数 Immediately-invoked function expression
//立即执行 作用:隔离作用域
//不会暴露私有成员
//匿名函数自执行
console.log("--T02IIFE,从第一行开始打断点看执行流程--");
var module3 = (function() {//注意!这是个函数.将这个函数赋值给module3这个变量.最终由于return{m1:m1,m2:m2}会发现module3对象中包含m1和m2这两个函数  
	//函数里为;分号   对象里为,逗号
	var count = 0;
	console.log('module3里,内部函数外');
	var m1 = function() {//相当于内部函数
		console.log("--module3-m1函数count--" + this.count);
	};
	var m2 = function() {
		console.log("--module3--m2函数--");
	};
	//该函数返回一个对象,里面包含外部可以访问的内部函数.闭包.其实module3就是这个return的对象
	//!!!总之,无论此处返回什么,都返回了内部函数的引用.这是闭包的特点
	return {
		m1: m1,
		m2: m2
	}
})();
//当走到这一行时,以上立即执行函数已经自己执行了一次.可见控制台输出第9行的内容.但是匿名函数里的内部函数,如m1未执行
//外部访问不到私有域
console.log(module3.count); //undefined
//myThink:立即执行函数 会在代码走到立即函数时 执行一次,所以不需要module3()这样执行.而是直接module3
module3.m1();

//四.放大模式 相当于子类继承父类了
console.log("--T02IIFE--放大模式--");
//若一个模块很大,需要分成几个部分.  或者一个模块需要继承自另一个模块
//为parentMod添加一个新方法m3(),返回新parentMod
var module4 = (function(parentMod) {
	parentMod.m3 = function() {//为module3添加新方法m3
		console.log("--module4--m3函数--");
	};
	return parentMod;//返回的对象被module4引用接收
})(module3); //实参需要传入module3
module4.m3(); //
module3.m3(); //同样可以访问的到

//五.宽大模式
//解决 方法模式 中 可能parentMod还未加载的情况

var module5 = (function(parentMod) {
	parentMod.m5 = function() {
		console.log("--module5--m5函数--");
	};
	return parentMod;
})(window.module3 || {}); //即 参数可以是空对象
module5.m5();

//六.输入全局变量
//独立性 是 模块的重要特点,模块内部最好不与程序的其他部分直接交互.
//而是通过显示的传入其他模块参数,从而在模块内部调用全局变量

var module6 = (function($) {

})(jQuery); //传入jQuery参数
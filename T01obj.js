//二.对象写法
//2.1 new Object({传入内部参数}).
var module1=new Object({
	count:0,
	m1:function(){
		console.log("--m1函数count--"+this.count);
	},
	m2:function(){
		console.log("--m2--");
	}
});
//缺点是可以直接修改对象内部属性
module1.count=1;
module1.m1();

//2.2字面量方式的 对象
var module2={
	count:0,
	m1:function(){
		console.log("--module2-m1函数count--"+this.count);
	},
	m2:function(){
		console.log("--m2--");
	}
}
//缺点是 也可以直接修改对象内部属性
module2.count=1;
module2.m1();


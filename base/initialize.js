var App = (function () {

	var app = function (options) {

		var options = options || {},
			//初始化函数
			init = options.initialize || this.initialize;
		init.call(this, options);
	};
	/**
	*	构造函数
	**/
	app.prototype.initialize = function (options) {
		this.utils = {};
		this.app = {
			Caller : {
				module : {},
				instance : {}
			}
		};
	}
	/**
	*	app启动
	*	@param <String> module 选择启动的module
	**/
	app.prototype.start = function (name) {
		this.app[name].instance['model'] = new this.app[name].module[name + 'Model']();
		this.app[name].instance['controller'] = new this.app[name].module[name + 'Controller']();
		this.app[name].instance['view'] = new this.app[name].module[name + 'View']();
		this.app[name].instance['view'].start();
	}
	/**
	*	app停止
	**/
	app.prototype.stop = function (name) {
		this.app[name].instance['view'].stop();
	}
	return app;
})();
var S = new App();
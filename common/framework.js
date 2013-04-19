/**
*   framework
**/
var Framework = (function () {
        var _extend = function (creator) {
          //调用创造器生成实例对象的属性
           var props = creator.call(this);
           var constructor = this;
           var data = {}
           //构造器
           var initialize = function () {
                for (var p in props) {
                    this[p] = props[p];
                }
                //视图层
                if (initialize.prototype instanceof framework.View) {

                    this.$el = $(this.el);
                    _.each(this.events, _.bind(function (item, key) {
                        if(!this[key]) {
                          throw new Error('handle not found');
                          return true;
                        }
                        if (item[0] === 'hold') Touch.hold(this.el, item[1], _.bind(this[key],this));
                        else Touch.delegate(this.el, item[1], item[0],_.bind(this[key],this))
                    },this));
                }
                //模型层
                else if (initialize.prototype instanceof framework.Model) {
                    this.request = function(api, param) {
                      var args = Array.prototype.slice.call(arguments,0);
                      bridge[args.shift()].call(this, args);
                    };
                }
                //控制器层
                else if (initialize.prototype instanceof framework.Controller) {
                }
                props.initialize && props.initialize.call(this);
           }
           initialize.prototype = new constructor;
           return initialize;
        }
        //框架架构
        var framework = function () {};
        framework.extend = _extend;
        framework.Model = function () {}
        framework.Controller = function () {}
        framework.View = function () {}
        //继承
        framework.View.extend = framework.Model.extend = framework.Controller.extend = _extend;
        return framework;
})();
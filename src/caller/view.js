/**
*
**/
S.app.Caller.module.CallerView = Framework.View.extend(function () {

	return {
		el : '#container',
		events : {
			'inputNumber' : ['start', '.kb-key-num'],
			'onDelete' : ['start',"#delete"],
			'onCall' : ['start',"#callKey"],
			'hideKeyboard' : ['start', "#contactLog"],
		},
		CONFIG : {
			NUMBER_SIZE_LENGTH : 12,
			MAX_NUMBER_LENGH : 28,
			NORMAL_FONT_SIZE : 45,
			SMALL_FONT_SIZE : 20
		},
		initialize : function () {
			console.log('initialize');
			_.bindAll(this);
			this.controller = S.app.Caller.instance.controller;
			
			console.log(this);
		},
		start : function () {
			this.showKeyBoard();
		},
		//显示键盘页面
		showKeyBoard: function () {
			console.log(window.screen.height + '     ' + window.screen.width);
			document.onclick = function (e) {
				console.log('className : ' + e.target.className);
				console.log('id : ' + e.target.id);
				console.log('html : ' + e.target.innerHTML);
				console.log('data-value : ' + $(e.target).attr('data-value'));
			}
			this.$el.html($("#keyboardTempl").html());
			$(document.body).on('touchstart', function (e) {
				e.preventDefault();
			})
			var selSkin = 'sogou';
			var keySkin = skins[selSkin]["key"],
				keyboardSkin = skinbackground['keyboardBackground'][skins[selSkin]["keyboardBackground"]],
				globalBackground = skinbackground['globalBackground'][skins[selSkin]["globalBackground"]];
			
			$(".kb-key").css(keySkin);
			$("body").css(globalBackground);
			$(".kb-bg").css(keyboardSkin);
			console.log(skins[selSkin]['input']);
			$(".kb-input").css(skins[selSkin]['input']);//输入框样式
			$('#keyboard').height($('#keyboard').height());
			var scale = window.screen.width / document.body.clientWidth;

			Touch.on(document,'start', function (e) {
				console.log('touchstart');
				console.log('width :' + document.body.clientWidth);
				console.log('in webview : x :' +e.touches[0].pageX*scale + ' Y:' + e.touches[0].pageY*scale);
				window.targets = window.targets || [];
				if ($(e.target).attr('data-down') ==="true") {
					$(e.target).addClass('on');
					window.targets.push(e.target);
				}
			});
			Touch.on(document,'end', function (e) {
				_.each(window.targets, function(item) {
					$(item).removeClass('on');
				})
			});
			window.onTouch =  function (x, y) {
				console.log('webview  : ' + x + '  ' + y);
			}
		},
		//键盘的弹出动画
		hideKeyboard : function () {
			
			if ($('#keyboard').attr('data-anim') === 'show'){
				$('#keyboard').addClass('kb-h');
				$('#keyboard').attr('data-anim','hide');
			} 
			else {
				$('#keyboard').removeClass('kb-h');
				$('#keyboard').attr('data-anim','show');
			};
		},
		//拨号输入事件处理
		inputNumber : function (e, isHolded) {
			console.log('on input : ' + (new Date().getTime()))
			var numerLine =  $('#numberLine'),
				value = numerLine.attr('data-value'),
				inputValue = $(e.target).attr('data-value');
			value = value ? value : '';

			if (isHolded && inputValue === '0') inputValue = $(e.target).attr('data-other');
			var nValue = value + inputValue;
			if (nValue.length > this.CONFIG.MAX_NUMBER_LENGH) return; 

			this.setNumberValue(nValue);
		},
		onDelete : function (e, isHolded) {
			console.log('on delete handled');
			var numerLine =  $('#numberLine');
			var value = numerLine.attr('data-value');
			console.log((typeof numerLine) + '   value : ' + value);
			if (!value || value.length <= 0) return;
			var newValue;
			if (isHolded) newValue = '';
			else newValue = value.slice(0, value.length-1);
			this.setNumberValue(newValue);
		},
		onCall : function (e) {
			var numerLine =  $('#numberLine');
			this.controller.onCall(numerLine.attr('data-value'));
		},
		/**
		*
		**/
		setNumberValue :function (value) {
			var numerLine =  $('#numberLine');
			numerLine.attr('data-value', value);
			numerLine.html(value);
			// 达到一定的长度后续缩小字体
			if (value.length > this.CONFIG.NUMBER_SIZE_LENGTH) {
				var size = this.CONFIG.NORMAL_FONT_SIZE - (value.length - this.CONFIG.NUMBER_SIZE_LENGTH )*2;
					size = size <= this.CONFIG.SMALL_FONT_SIZE ? this.CONFIG.SMALL_FONT_SIZE : size;
				numerLine.css('fontSize', size + 'px');
			}
			// 长度足够短的时候还原资源
			else if (value.length <= this.CONFIG.NUMBER_SIZE_LENGTH){
				numerLine.css('fontSize', this.CONFIG.NORMAL_FONT_SIZE + 'px');
			}
		},
		stop : function () {
			
		}
	};
});
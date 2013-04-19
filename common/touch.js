var Touch = (function () { 
	var touchable = document.ontouchstart === undefined ? false : true;
	function fixType(type) {
		var eType;
		switch(type) {

			case 'touchstart' :;
			case 'start' :;
			case 'mousedown' :;
			case 'down' : eType = touchable ? 'touchstart' : 'mousedown';
			break;
			case 'touchmove' :;
			case 'mousemove' :; 
			case 'move' : eType = touchable ? 'touchmove' : 'mousemove';
			break;
			case 'touchend' :; 
			case 'end' :;
			case 'mouseup' :;
			case 'up' :  eType = touchable ? 'touchend' : 'mouseup';
			break;
			case 'click' :;
			case 'onclick' : eType = 'click';
			break;
			default : eType = type;
		}
		return eType;
	}

	function getOffset (e,type) {
		if (e.offsetParent === null) return e[type];
		else return e[type] + getOffset(e.offsetParent,type);
	}
	function getCross (e) {
		var height = e.offsetHeight,
			width = e.offsetWidth,
			offsetLeft = getOffset(e,'offsetLeft'),
			offsetTop = getOffset(e,'offsetTop');
		return {
			left : offsetLeft,
			right : offsetLeft + width,
			top : offsetTop,
			botom : offsetTop + height
		}

	}
	// var target;
	var handlers =  {
		"getCross" : function (e) {
			var height = e.offsetHeight,
				width = e.offsetWidth,
				offsetLeft = getOffset(e,'offsetLeft'),
				offsetTop = getOffset(e,'offsetTop');
			return {
				left : offsetLeft,
				right : offsetLeft + width,
				top : offsetTop,
				bottom : offsetTop + height
			}

		},
		"isMoveOut" : function (x,y,cross) {
			console.log('is move ' + (typeof cross));
			console.log('is move ' + JSON.stringify(cross));
			console.log(cross['left'] + '  right : ' + cross['right'] + '  top : ' + cross['top'] + '  bottom:' + cross['bottom']);
			console.log('x :' + x +'  y:' + y);
			console.log(' x<r:' + (x <= cross['right']) + ' x>l:'+ (x >= cross['left']) +' y<b:'+ (y <= cross['bottom']) + "  y>t:"+( y >= cross['top']));
			if ( x <= cross['right'] && x >= cross['left'] && y <= cross['bottom'] && y >= cross['top']) return false;
			else return true;
		},
		"touchable" : touchable,
		on : function(elem, type, handle) {
			type = fixType(type);
			$(elem).on(type, handle);
		},
		off : function (elem, type, handle) {
			type = fixType(type);
			$(elem).off(type, handle);
		},
		delegate : function (elem, selector, type, handle) {
			type = fixType(type);
			$(elem).on(type, selector , handle);
		},
		undelegate : function (elem, selector, type, handle) {
			type = fixType(type);
			$(elem).off(type, selector , handle);
		},
		click : function (elem, selector, handle) {
			var target;
	        this.delegate(elem, selector, "start", function(e){
	            target = e.target;
	            
	            if ($(target).attr('data-down') === 'true') {
	            	$(target).addClass("on");
	            }
	        });
	        this.delegate(document, 'body', "end", function(e){
	        	if (target) {
	        		if (target === e.target) {
	        			handle(e);
	        		}
	        		$(target).removeClass("on");
	        		target = null;
	        	}
	        	
	        });
	        this.on(document, 'body', "move", function (e) {
	        	
	        	if(target && e.target !== target) {
	        		console.log('document cancel');
	        		$(target).removeClass("on");
	        		target = null;
	        	}
	        });
		},
		hold : function (elem, selector, handle) {
			var target;
			var timeout, isHandled = false, cross;
	        this.delegate(elem, selector, "start", function(e){
	            target = e.target;
	            // cross = Touch.getCross(e.target)

	            isHandled = false;
	            console.log('start');
	            if ($(target).attr('data-down') === 'true') {
	            	$(target).addClass("on");
	            }
	            timeout = setTimeout(function () {
	            	console.log('timeout to handle');
	            	handle(e, true);
	            	isHandled = true;
	            }, 1000);
	        });
	        this.delegate(document, 'body', "end", function(e){
	        	console.log('up~~~~~');
	        	console.log('in up  judge :'  + (target === null) + '    ' + (target === undefined))
	        	if ((target !== null) && (target !== undefined)) {
	        		console.log('~~~');
	      //   		if (!this.touchable) {
	      //   			if (target === e.target && isHandled === false) {
							// handle(e);
		     //    			clearTimeout(timeout);
	      //   			}
	      //   		}
	      //   		else 
	       		// console.log('is move ' + (typeof cross));
					// console.log('is move ' + JSON.stringify(cross));
					_.each(e, function (item, key) {
						console.log('key : ' + key);
					})
					_.each(e.touches, function (item,key) {
						console.log('key : ' + key);
					})
	      			// console.log('is out : ' + Touch.isMoveOut(e.touches[0].pageX,e.touches[0].pageY,cross));
	      			// console.log('isHandled : ' + isHandled);
	      			if ((e.touches.length === 0 || Touch.isMoveOut(e.touches[0].pageX,e.touches[0].pageY,cross)) && isHandled === false) {
	        			clearTimeout(timeout);
	        			console.log('begin to hanle');
	        			handle(e);
	        			console.log('after hanle');
	        			
	        		}
	        		console.log('up remove on');
	        		$(target).removeClass("on");
	        		target = null;
	        	}
	        });
	        this.delegate(document, 'body', "move", function(e) {
	        	event.preventDefault();
	        	// if (!this.touchable) {
	        	// 	if (target === e.target) {
	        	// 		$(target).removeClass("on");
		        // 		clearTimeout(timeout);
		        // 		target = null;
		        // 		return;
	        	// 	}
	        	// }
	        	// else 
	        	if(Touch.isMoveOut(e.touches[0].pageX,e.touches[0].pageY,cross)) {
	        		console.log('document cancel');
	        		$(target).removeClass("on");
	        		clearTimeout(timeout);
	        		target = null;
	        	}
	        });
		}
	}
	return handlers;
	
}());
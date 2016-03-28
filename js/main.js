(function($) {



	//normal
	function fibonacci(n) {
		if (1 == n || 2 == n) return 1;
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
	//斐波那契加入缓存高性能做法
	function fibonacci(n) {
		var memo = [0, 1];
		var fib = function(n) {
			var result = memo[n];
			if (typeof result !== 'number') {
				result = fib(n - 1) + fib(n - 2);
				memo[n] = result;
			}
			return result;
		}
		return fib(n);
	}

	//每瓶啤酒2元，2个空酒瓶或4个瓶盖可换1瓶啤酒。10元最多可喝多少瓶啤酒？
	function getBot(n) {
		var memCache = {};
		memCache["00"] = memCache["01"] = memCache["02"] = memCache["03"] = memCache["10"] = memCache["11"] = memCache["12"] = memCache["13"] = 0;
		memCache["20"] = memCache["04"] = 1;

		var getNewBot = function(x, y) {
			if (x < 2 && y < 4) return 0;
			var newBot = Math.floor(x / 2) + Math.floor(y / 4);
			var leftBot = x % 2;
			var leftGai = y % 4;
			console.log('换瓶:' + newBot + '余瓶:' + leftBot + "余盖：" + leftGai);
			//
			var result = memCache[x + '' + y];
			if (typeof result !== 'number') {
				result = newBot + getNewBot(leftBot + newBot, leftGai + newBot);
				memCache[x + '' + y] = result;
			}
			return result;
		};
		return n + getNewBot(n, n);
	};






})(jQuery);
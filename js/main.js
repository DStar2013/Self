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
				result = fib(n-1) + fib(n-2)；
				memo[n] = result;
			}
			return result;
		}
		return fib(n);
	}


})(jQuery);
(function(win) {
	function testLocal(testKey) {
		try {
			localStorage.setItem(testKey, testKey);
			localStorage.removeItem(testKey);
			return true;
		} catch (e) {
			return false;
		}
	}
	win.localSupport = testLocal('test-key');
    win.localWrite = function(key, val) {
        try {
            localStorage.setItem(key, val);
        } catch (e) {
            if (e == QUOTA_EXCEEDED_ERR) {
                return false;
            }
        }
    }
})(window);

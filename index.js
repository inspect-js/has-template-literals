'use strict';

var hasInterpoliterals = (function () {
	try {
		// eslint-disable-next-line no-new-func, no-template-curly-in-string
		return Function('c', 'return `a ${"b"} ${c}`')('c') === 'a b c';
	} catch (e) {
		return false;
	}
}());

module.exports = function hasTemplateLiterals() {
	return hasInterpoliterals;
};

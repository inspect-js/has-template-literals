'use strict';

var test = require('tape');

var hasTemplateLiterals = require('../');

test('export', function (t) {
	t.equal(typeof hasTemplateLiterals, 'function', 'export is a function');
	t.end();
});

test('template literal support', function (t) {
	var yes = hasTemplateLiterals();
	t.equal(typeof yes, 'boolean', 'export returns a boolean');

	var makeTemplateLiteral = function () { Function('`a template literal`'); }; // eslint-disable-line no-new-func

	t.test('no template literal support', { skip: yes }, function (st) {
		st.equal(yes, false, 'returns false');
		st['throws'](makeTemplateLiteral, 'throws on template literal syntax');
		st.end();
	});

	t.test('has template literal support', { skip: !yes }, function (st) {
		st.equal(yes, true, 'returns true');
		st.doesNotThrow(makeTemplateLiteral, 'does not throw on template literal syntax');
		st.end();
	});
});

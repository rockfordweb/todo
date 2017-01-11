define([
	'require',
	'intern!object',
	'intern/chai!assert'
], function (
	require,
	registerSuite,
	assert
) {
	var react = 'http://localhost:9009/react';

	registerSuite({
		name: 'todo',

		'check contents': function () {
			// Functional tests should return a command chain based on the remote object
			return this.remote
				// Initialize the find timeout (the default is driver-specific, and may be 0)
				.setFindTimeout(5000)
				// Use require.toUrl to get a relative URL to a resource
				.get(react)
				.findByCssSelector('header.panel-heading h1')
				.getVisibleText()
				.then(function (text) {
					assert.strictEqual(text, 'TODO Application');
				});
		},

		'add todo item': function () {
			var numItems;
			return this.remote
				.setFindTimeout(5000)
				.get(react)
				.findAllByCssSelector('li')
					.then(function (listItems) {
						numItems = listItems.length;
					})
					.end()
				.findByCssSelector('input[name="new-todo"]')
					.click()
					.type('todo test')
					.pressKeys('\uE006')
					.end()
				.setFindTimeout(3000)
				.findAllByCssSelector('li')
					.then(function (listItems) {
						assert.strictEqual(numItems + 1, listItems.length);
					});
		}
	});
});

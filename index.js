
module.exports = {
	rules: {
		"no-allow-inline-style": {
			create: function (context) {
				return {
					JSXOpeningElement(node) {
						var attributes = node.attributes
							.filter(function (attr) {
								return attr.name.name == 'style'
							})
						if (attributes.length > 0)
							context.report(node, 'Inline styling is not allowed');
					}
				}
			}
		},
	}
};

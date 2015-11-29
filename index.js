exports.default = function get(obj) {
	if (!obj) return obj;

	var props = [];
	for (var i = 1; i < arguments.length; i++) {
		Array.prototype.push.apply(props, resolvePath(arguments[i]));
	}

	for (i = 0; i < props.length; i++) {
		obj = obj[props[i]];
		if (!obj) return obj;
	}

	return obj;
}

module.exports = exports.default;

function resolvePath(path) {
	var props = [];

	if (typeof path === 'string') props = path.split('.');

	if (typeof path === 'number') props = [path];

	if (Array.isArray(path)) {
		for (var i = 0; i < path.length; i++) {
			Array.prototype.push.apply(props, resolvePath(path[i]));
		}
	}

	return props;
}
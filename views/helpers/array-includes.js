export default function(array, value, options) {
	if (array instanceof Array && array.includes(value)) {
		return options.fn(this);
	}
	return options.inverse(this);
}

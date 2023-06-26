const sortGenre = (res, req, next) => {
	const obj = JSON.parse(JSON.stringify(res.body))

	Array.from(obj).forEach((value, key) => {
		if (value == 'on') {
			obj.genre = key
		}
	})
	res.body = JSON.stringify(obj)
	next()
};

module.exports = sortGenre
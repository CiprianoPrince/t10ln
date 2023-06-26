const { v4 } = require('uuid')

const addID = (res, req, next) => {
  const obj = JSON.parse(JSON.stringify(res.body))
  obj.id = v4();
  res.body = JSON.stringify(obj)
  next()
}

module.exports = addID

var orm = require('../config/orm.js');

var buger = {
  all: function (cb) {
    orm.all('bugers', function (res) {
      cb(res);
    });
  },
  // cols and vals are arrays
  create: function (cols, vals, cb) {
    orm.create('burgers', cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update('burgers', objColVals, condition, function (res) {
      cb(res);
    });
  }

};

module.exports = burger;
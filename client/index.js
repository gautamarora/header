var core = require('@gautamarora/core');
var self = require('./self');

module.exports.init = once(function() {
  core.init();
  self.init();
})();
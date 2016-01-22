var core = require('@gautamarora/core');
var $ = core.$;

module.exports.init = function() {
  if(!window.components.header) return false;
  console.log('header self init');
  $(function() {
    core.globalBus.on('photo-count', function(data) {
      if(data.count === 0) {
        $('.header .sidebar .photos-link .badge').text('');
      } else {
        $('.header .sidebar .photos-link .badge').text(data.count);
      }
    });
  });
  
  return 'header';
};
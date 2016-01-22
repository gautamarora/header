//making this singleton and init once
var singleton = require('1t');
var once = require('once');

var core = require('@gautamarora/core');
var self = require('./self');

var HEADER = '_header_';

// #ifndef
singleton(HEADER, module, function () {
// #define

var sidebar;

module.exports.init = once(function(app, express, options) {
  console.log('header app init');
  core.init(app);
  sidebar = options && options.sidebar ? options.sidebar : [];
  self.init(app);
});

module.exports.setInitialState = function(state) {
  if(state.sidebar) {
    sidebar.push(state.sidebar);
  }
};

module.exports.processData = function(microapp, req, res, cb) {
  res.data.header = {};
  res.data.header.topbar = {};
  res.data.header.sidebar = sidebar;
  res.data.header.topbar.title = 'My Blog';
  res.data.header.sidebar.forEach(function(element) {
    if(element.microapp === microapp) {
      element.active = true;
    } else {
      element.active = false;
    }
  });
  cb(null, 'header', req, res);
};

});

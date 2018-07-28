'use strict';

module.exports = function (data, options) {
  var MdIt = require('markdown-it');
  var cfg = this.config.markdown;
  var opt = (cfg) ? cfg : 'default';
  var parser = (opt === 'default' || opt === 'commonmark' || opt === 'zero') ?
    new MdIt(opt) :
    new MdIt(opt.render);

  parser.use(require('@iktakahiro/markdown-it-katex'))
        .use(require('markdown-it-checkbox'))
        .use(require('markdown-it-footnote'))
        .use(require('markdown-it-emoji'))
        .use(require('markdown-it-toc-and-anchor'));
  
//   if (opt.plugins) {
//     parser = opt.plugins.reduce(function (parser, pugs) {
//       if (pugs instanceof Object && pugs.name) {
//         return parser.use(require(pugs.name), pugs.options);
//       } else {
//         return parser.use(require(pugs));
//       }
//     }, parser);
//   }

//   if (opt.anchors) {
//     parser = parser.use(require('./anchors'), opt.anchors);
//   }

  return parser.render(data.text);
};

/* jshint node: true */
'use strict';
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');

const reselect = new Funnel('node_modules/reselect/dist', {
  destDir: 'reselect',
  files: ['reselect.js']
});

module.exports = {
  name: 'ember-redux-reselect',

  included(app) {
    this._super.included.apply(this, arguments);

    // see: https://github.com/ember-cli/ember-cli/issues/3718
    while (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    this.app = app;

    const vendor = this.treePaths.vendor;
    // requires ember-cli 2.9+
    // https://github.com/ember-cli/ember-cli/pull/5976
    app.import(vendor + '/reselect/reselect.js');
    app.import(vendor + '/shims/reselect.js');

    return app;
  },

  treeForVendor(vendorTree) {
    const trees = [
      reselect
    ];

    if (vendorTree) {
      trees.push(vendorTree);
    }

    return mergeTrees(trees);
  }
};

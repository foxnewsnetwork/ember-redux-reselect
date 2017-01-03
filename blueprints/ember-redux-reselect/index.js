/*jshint node:true*/
module.exports = {
  description: 'Installation blueprint for ember-redux-reselect',

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addPackagesToProject([
      {name: 'reselect', target: '^2.5.4'}
    ]);
  }
};

(function() {
  function vendorModule() {
    'use strict';

    return self['Reselect'];
  }

  define('reselect', [], vendorModule);
})();

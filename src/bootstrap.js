window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.Popper = require('popper.js').default;
    window.jQuery = require('jquery');
    require('bootstrap/dist/css/bootstrap.min.css');
    require('bootstrap/dist/js/bootstrap.min.js');
    require('@/assets/scss/style.scss');
// eslint-disable-next-line no-empty
} catch (e) {}

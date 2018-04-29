(function () {
'use strict';

(function () {
  var api = wp.customize;

  api.bind('ready', function () {
    wp.customize('design-skin', function (setting) {
      setting.bind(function (value) {
        api.panel.each(function (panel) {
          panel.container.remove();
          api.panel.remove(panel.id);
        });

        api.section.each(function (section) {
          if ('design-skin' === section.id) {
            return true;
          }

          section.container.remove();
          api.section.remove(section.id);
        });
      });
    });
  });
})(jQuery);

}());

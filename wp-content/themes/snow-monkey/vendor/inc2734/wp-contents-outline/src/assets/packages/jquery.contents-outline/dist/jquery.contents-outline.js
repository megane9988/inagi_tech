(function (jquery) {
'use strict';

jquery = jquery && jquery.hasOwnProperty('default') ? jquery['default'] : jquery;

/**
 * Name: jquery.contents-outline
 * Author: Takashi Kitajima (inc2734)
 * Author URI: https://2inc.org
 * License: MIT
 *
 * @param { headings, moveToBefore1stHeading }
 */

'use strict';

(function ($) {
  $.fn.contentsOutline = function (params) {
    var params = $.extend({
      headings: $('h2, h3, h4, h5, h6'),
      moveToBefore1stHeading: true
    }, params);

    return this.each(function (i, e) {
      var wrapper = $(e);
      var co = wrapper.find('.contents-outline');

      var outlines = $('<ol />');

      (function () {
        params.headings.each(function (i, e) {
          if (!$(e).attr('id')) {
            $(e).attr('id', 'co-index-' + i);
          }
          outlines = _createTree(outlines, $(e));
        });

        if (!outlines.html()) {
          wrapper.remove();
        }

        if (true === params.moveToBefore1stHeading) {
          params.headings.first().before(wrapper);
        }

        wrapper.attr('aria-hidden', 'false');
        co.append(outlines);
      })();

      /**
       * Create tree
       *
       * @param   {dom}  parent  The children wrapper element
       * @param   {dom}  heading  Heading
       * @param   {Number} hierarchical  Hierarchical
       * @return  {dom}  The tree
       */
      function _createTree(parent, heading) {
        var hierarchical = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;

        var nest = parseInt(heading.prop('tagName').replace('H', '') - hierarchical);

        if (0 > nest) {
          return parent;
        }

        if (0 === nest) {
          parent.append(_createItem(heading));
        } else {
          var children = _createSubTree(parent, heading, hierarchical);

          if (1 > parent.children('li').length) {
            parent.append($('<li />').append(children));
          } else {
            parent.children('li:last-child').append(children);
          }
        }

        return parent;
      }

      /**
       * Create child item
       *
       * @param {dom}  heading  Heading
       * @return {dom}  Child item
       */
      function _createItem(heading) {
        return $('<li />').append($('<a />').text(heading.text()).attr('href', '#' + heading.attr('id')));
      }

      /**
       * Create subtree
       *
       * @param   {dom}  parent  The children wrapper element
       * @param   {dom}  heading  Heading
       * @param   {Number} hierarchical  Hierarchical
       * @return  {dom}  The tree
       */
      function _createSubTree(parent, heading, hierarchical) {
        var _parent = void 0;
        if (1 > parent.children('li:last-child').children('ol').length) {
          _parent = $('<ol />');
        } else {
          _parent = parent.children('li:last-child').children('ol');
        }
        return _createTree(_parent, heading, hierarchical + 1);
      }
    });
  };
})(jQuery);

}(jQuery));

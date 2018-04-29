(function ($) {
'use strict';

$ = $ && $.hasOwnProperty('default') ? $['default'] : $;

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var slick = createCommonjsModule(function (module, exports) {
    /*
         _ _      _       _
     ___| (_) ___| | __  (_)___
    / __| | |/ __| |/ /  | / __|
    \__ \ | | (__|   < _ | \__ \
    |___/_|_|\___|_|\_(_)/ |___/
                       |__/
    
     Version: 1.8.1
      Author: Ken Wheeler
     Website: http://kenwheeler.github.io
        Docs: http://kenwheeler.github.io/slick
        Repo: http://github.com/kenwheeler/slick
      Issues: http://github.com/kenwheeler/slick/issues
    
     */
    /* global window, document, define, jQuery, setInterval, clearInterval */
    (function (factory) {
        'use strict';

        if (typeof undefined === 'function' && undefined.amd) {
            undefined(['jquery'], factory);
        } else {
            module.exports = factory($);
        }
    })(function ($$$1) {
        'use strict';

        var Slick = window.Slick || {};

        Slick = function () {

            var instanceUid = 0;

            function Slick(element, settings) {

                var _ = this,
                    dataSettings;

                _.defaults = {
                    accessibility: true,
                    adaptiveHeight: false,
                    appendArrows: $$$1(element),
                    appendDots: $$$1(element),
                    arrows: true,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: false,
                    autoplaySpeed: 3000,
                    centerMode: false,
                    centerPadding: '50px',
                    cssEase: 'ease',
                    customPaging: function customPaging(slider, i) {
                        return $$$1('<button type="button" />').text(i + 1);
                    },
                    dots: false,
                    dotsClass: 'slick-dots',
                    draggable: true,
                    easing: 'linear',
                    edgeFriction: 0.35,
                    fade: false,
                    focusOnSelect: false,
                    focusOnChange: false,
                    infinite: true,
                    initialSlide: 0,
                    lazyLoad: 'ondemand',
                    mobileFirst: false,
                    pauseOnHover: true,
                    pauseOnFocus: true,
                    pauseOnDotsHover: false,
                    respondTo: 'window',
                    responsive: null,
                    rows: 1,
                    rtl: false,
                    slide: '',
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: true,
                    swipeToSlide: false,
                    touchMove: true,
                    touchThreshold: 5,
                    useCSS: true,
                    useTransform: true,
                    variableWidth: false,
                    vertical: false,
                    verticalSwiping: false,
                    waitForAnimate: true,
                    zIndex: 1000
                };

                _.initials = {
                    animating: false,
                    dragging: false,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: false,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: false,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: false,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: false,
                    unslicked: false
                };

                $$$1.extend(_, _.initials);

                _.activeBreakpoint = null;
                _.animType = null;
                _.animProp = null;
                _.breakpoints = [];
                _.breakpointSettings = [];
                _.cssTransitions = false;
                _.focussed = false;
                _.interrupted = false;
                _.hidden = 'hidden';
                _.paused = true;
                _.positionProp = null;
                _.respondTo = null;
                _.rowCount = 1;
                _.shouldClick = true;
                _.$slider = $$$1(element);
                _.$slidesCache = null;
                _.transformType = null;
                _.transitionType = null;
                _.visibilityChange = 'visibilitychange';
                _.windowWidth = 0;
                _.windowTimer = null;

                dataSettings = $$$1(element).data('slick') || {};

                _.options = $$$1.extend({}, _.defaults, settings, dataSettings);

                _.currentSlide = _.options.initialSlide;

                _.originalSettings = _.options;

                if (typeof document.mozHidden !== 'undefined') {
                    _.hidden = 'mozHidden';
                    _.visibilityChange = 'mozvisibilitychange';
                } else if (typeof document.webkitHidden !== 'undefined') {
                    _.hidden = 'webkitHidden';
                    _.visibilityChange = 'webkitvisibilitychange';
                }

                _.autoPlay = $$$1.proxy(_.autoPlay, _);
                _.autoPlayClear = $$$1.proxy(_.autoPlayClear, _);
                _.autoPlayIterator = $$$1.proxy(_.autoPlayIterator, _);
                _.changeSlide = $$$1.proxy(_.changeSlide, _);
                _.clickHandler = $$$1.proxy(_.clickHandler, _);
                _.selectHandler = $$$1.proxy(_.selectHandler, _);
                _.setPosition = $$$1.proxy(_.setPosition, _);
                _.swipeHandler = $$$1.proxy(_.swipeHandler, _);
                _.dragHandler = $$$1.proxy(_.dragHandler, _);
                _.keyHandler = $$$1.proxy(_.keyHandler, _);

                _.instanceUid = instanceUid++;

                // A simple way to check for HTML strings
                // Strict HTML recognition (must start with <)
                // Extracted from jQuery v1.11 source
                _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;

                _.registerBreakpoints();
                _.init(true);
            }

            return Slick;
        }();

        Slick.prototype.activateADA = function () {
            var _ = this;

            _.$slideTrack.find('.slick-active').attr({
                'aria-hidden': 'false'
            }).find('a, input, button, select').attr({
                'tabindex': '0'
            });
        };

        Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {

            var _ = this;

            if (typeof index === 'boolean') {
                addBefore = index;
                index = null;
            } else if (index < 0 || index >= _.slideCount) {
                return false;
            }

            _.unload();

            if (typeof index === 'number') {
                if (index === 0 && _.$slides.length === 0) {
                    $$$1(markup).appendTo(_.$slideTrack);
                } else if (addBefore) {
                    $$$1(markup).insertBefore(_.$slides.eq(index));
                } else {
                    $$$1(markup).insertAfter(_.$slides.eq(index));
                }
            } else {
                if (addBefore === true) {
                    $$$1(markup).prependTo(_.$slideTrack);
                } else {
                    $$$1(markup).appendTo(_.$slideTrack);
                }
            }

            _.$slides = _.$slideTrack.children(this.options.slide);

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.append(_.$slides);

            _.$slides.each(function (index, element) {
                $$$1(element).attr('data-slick-index', index);
            });

            _.$slidesCache = _.$slides;

            _.reinit();
        };

        Slick.prototype.animateHeight = function () {
            var _ = this;
            if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
                var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
                _.$list.animate({
                    height: targetHeight
                }, _.options.speed);
            }
        };

        Slick.prototype.animateSlide = function (targetLeft, callback) {

            var animProps = {},
                _ = this;

            _.animateHeight();

            if (_.options.rtl === true && _.options.vertical === false) {
                targetLeft = -targetLeft;
            }
            if (_.transformsEnabled === false) {
                if (_.options.vertical === false) {
                    _.$slideTrack.animate({
                        left: targetLeft
                    }, _.options.speed, _.options.easing, callback);
                } else {
                    _.$slideTrack.animate({
                        top: targetLeft
                    }, _.options.speed, _.options.easing, callback);
                }
            } else {

                if (_.cssTransitions === false) {
                    if (_.options.rtl === true) {
                        _.currentLeft = -_.currentLeft;
                    }
                    $$$1({
                        animStart: _.currentLeft
                    }).animate({
                        animStart: targetLeft
                    }, {
                        duration: _.options.speed,
                        easing: _.options.easing,
                        step: function step(now) {
                            now = Math.ceil(now);
                            if (_.options.vertical === false) {
                                animProps[_.animType] = 'translate(' + now + 'px, 0px)';
                                _.$slideTrack.css(animProps);
                            } else {
                                animProps[_.animType] = 'translate(0px,' + now + 'px)';
                                _.$slideTrack.css(animProps);
                            }
                        },
                        complete: function complete() {
                            if (callback) {
                                callback.call();
                            }
                        }
                    });
                } else {

                    _.applyTransition();
                    targetLeft = Math.ceil(targetLeft);

                    if (_.options.vertical === false) {
                        animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                    } else {
                        animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                    }
                    _.$slideTrack.css(animProps);

                    if (callback) {
                        setTimeout(function () {

                            _.disableTransition();

                            callback.call();
                        }, _.options.speed);
                    }
                }
            }
        };

        Slick.prototype.getNavTarget = function () {

            var _ = this,
                asNavFor = _.options.asNavFor;

            if (asNavFor && asNavFor !== null) {
                asNavFor = $$$1(asNavFor).not(_.$slider);
            }

            return asNavFor;
        };

        Slick.prototype.asNavFor = function (index) {

            var _ = this,
                asNavFor = _.getNavTarget();

            if (asNavFor !== null && (typeof asNavFor === 'undefined' ? 'undefined' : _typeof(asNavFor)) === 'object') {
                asNavFor.each(function () {
                    var target = $$$1(this).slick('getSlick');
                    if (!target.unslicked) {
                        target.slideHandler(index, true);
                    }
                });
            }
        };

        Slick.prototype.applyTransition = function (slide) {

            var _ = this,
                transition = {};

            if (_.options.fade === false) {
                transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
            } else {
                transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
            }

            if (_.options.fade === false) {
                _.$slideTrack.css(transition);
            } else {
                _.$slides.eq(slide).css(transition);
            }
        };

        Slick.prototype.autoPlay = function () {

            var _ = this;

            _.autoPlayClear();

            if (_.slideCount > _.options.slidesToShow) {
                _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
            }
        };

        Slick.prototype.autoPlayClear = function () {

            var _ = this;

            if (_.autoPlayTimer) {
                clearInterval(_.autoPlayTimer);
            }
        };

        Slick.prototype.autoPlayIterator = function () {

            var _ = this,
                slideTo = _.currentSlide + _.options.slidesToScroll;

            if (!_.paused && !_.interrupted && !_.focussed) {

                if (_.options.infinite === false) {

                    if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
                        _.direction = 0;
                    } else if (_.direction === 0) {

                        slideTo = _.currentSlide - _.options.slidesToScroll;

                        if (_.currentSlide - 1 === 0) {
                            _.direction = 1;
                        }
                    }
                }

                _.slideHandler(slideTo);
            }
        };

        Slick.prototype.buildArrows = function () {

            var _ = this;

            if (_.options.arrows === true) {

                _.$prevArrow = $$$1(_.options.prevArrow).addClass('slick-arrow');
                _.$nextArrow = $$$1(_.options.nextArrow).addClass('slick-arrow');

                if (_.slideCount > _.options.slidesToShow) {

                    _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                    _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                    if (_.htmlExpr.test(_.options.prevArrow)) {
                        _.$prevArrow.prependTo(_.options.appendArrows);
                    }

                    if (_.htmlExpr.test(_.options.nextArrow)) {
                        _.$nextArrow.appendTo(_.options.appendArrows);
                    }

                    if (_.options.infinite !== true) {
                        _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                    }
                } else {

                    _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });
                }
            }
        };

        Slick.prototype.buildDots = function () {

            var _ = this,
                i,
                dot;

            if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

                _.$slider.addClass('slick-dotted');

                dot = $$$1('<ul />').addClass(_.options.dotsClass);

                for (i = 0; i <= _.getDotCount(); i += 1) {
                    dot.append($$$1('<li />').append(_.options.customPaging.call(this, _, i)));
                }

                _.$dots = dot.appendTo(_.options.appendDots);

                _.$dots.find('li').first().addClass('slick-active');
            }
        };

        Slick.prototype.buildOut = function () {

            var _ = this;

            _.$slides = _.$slider.children(_.options.slide + ':not(.slick-cloned)').addClass('slick-slide');

            _.slideCount = _.$slides.length;

            _.$slides.each(function (index, element) {
                $$$1(element).attr('data-slick-index', index).data('originalStyling', $$$1(element).attr('style') || '');
            });

            _.$slider.addClass('slick-slider');

            _.$slideTrack = _.slideCount === 0 ? $$$1('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();

            _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent();
            _.$slideTrack.css('opacity', 0);

            if (_.options.centerMode === true || _.options.swipeToSlide === true) {
                _.options.slidesToScroll = 1;
            }

            $$$1('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

            _.setupInfinite();

            _.buildArrows();

            _.buildDots();

            _.updateDots();

            _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

            if (_.options.draggable === true) {
                _.$list.addClass('draggable');
            }
        };

        Slick.prototype.buildRows = function () {

            var _ = this,
                a,
                b,
                c,
                newSlides,
                numOfSlides,
                originalSlides,
                slidesPerSection;

            newSlides = document.createDocumentFragment();
            originalSlides = _.$slider.children();

            if (_.options.rows > 0) {

                slidesPerSection = _.options.slidesPerRow * _.options.rows;
                numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);

                for (a = 0; a < numOfSlides; a++) {
                    var slide = document.createElement('div');
                    for (b = 0; b < _.options.rows; b++) {
                        var row = document.createElement('div');
                        for (c = 0; c < _.options.slidesPerRow; c++) {
                            var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);
                            if (originalSlides.get(target)) {
                                row.appendChild(originalSlides.get(target));
                            }
                        }
                        slide.appendChild(row);
                    }
                    newSlides.appendChild(slide);
                }

                _.$slider.empty().append(newSlides);
                _.$slider.children().children().children().css({
                    'width': 100 / _.options.slidesPerRow + '%',
                    'display': 'inline-block'
                });
            }
        };

        Slick.prototype.checkResponsive = function (initial, forceUpdate) {

            var _ = this,
                breakpoint,
                targetBreakpoint,
                respondToWidth,
                triggerBreakpoint = false;
            var sliderWidth = _.$slider.width();
            var windowWidth = window.innerWidth || $$$1(window).width();

            if (_.respondTo === 'window') {
                respondToWidth = windowWidth;
            } else if (_.respondTo === 'slider') {
                respondToWidth = sliderWidth;
            } else if (_.respondTo === 'min') {
                respondToWidth = Math.min(windowWidth, sliderWidth);
            }

            if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {

                targetBreakpoint = null;

                for (breakpoint in _.breakpoints) {
                    if (_.breakpoints.hasOwnProperty(breakpoint)) {
                        if (_.originalSettings.mobileFirst === false) {
                            if (respondToWidth < _.breakpoints[breakpoint]) {
                                targetBreakpoint = _.breakpoints[breakpoint];
                            }
                        } else {
                            if (respondToWidth > _.breakpoints[breakpoint]) {
                                targetBreakpoint = _.breakpoints[breakpoint];
                            }
                        }
                    }
                }

                if (targetBreakpoint !== null) {
                    if (_.activeBreakpoint !== null) {
                        if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                            _.activeBreakpoint = targetBreakpoint;
                            if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                                _.unslick(targetBreakpoint);
                            } else {
                                _.options = $$$1.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                                if (initial === true) {
                                    _.currentSlide = _.options.initialSlide;
                                }
                                _.refresh(initial);
                            }
                            triggerBreakpoint = targetBreakpoint;
                        }
                    } else {
                        _.activeBreakpoint = targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $$$1.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    if (_.activeBreakpoint !== null) {
                        _.activeBreakpoint = null;
                        _.options = _.originalSettings;
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                        triggerBreakpoint = targetBreakpoint;
                    }
                }

                // only trigger breakpoints during an actual break. not on initialize.
                if (!initial && triggerBreakpoint !== false) {
                    _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
                }
            }
        };

        Slick.prototype.changeSlide = function (event, dontAnimate) {

            var _ = this,
                $target = $$$1(event.currentTarget),
                indexOffset,
                slideOffset,
                unevenOffset;

            // If target is a link, prevent default action.
            if ($target.is('a')) {
                event.preventDefault();
            }

            // If target is not the <li> element (ie: a child), find the <li>.
            if (!$target.is('li')) {
                $target = $target.closest('li');
            }

            unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
            indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

            switch (event.data.message) {

                case 'previous':
                    slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                    if (_.slideCount > _.options.slidesToShow) {
                        _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                    }
                    break;

                case 'next':
                    slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                    if (_.slideCount > _.options.slidesToShow) {
                        _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                    }
                    break;

                case 'index':
                    var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;

                    _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                    $target.children().trigger('focus');
                    break;

                default:
                    return;
            }
        };

        Slick.prototype.checkNavigable = function (index) {

            var _ = this,
                navigables,
                prevNavigable;

            navigables = _.getNavigableIndexes();
            prevNavigable = 0;
            if (index > navigables[navigables.length - 1]) {
                index = navigables[navigables.length - 1];
            } else {
                for (var n in navigables) {
                    if (index < navigables[n]) {
                        index = prevNavigable;
                        break;
                    }
                    prevNavigable = navigables[n];
                }
            }

            return index;
        };

        Slick.prototype.cleanUpEvents = function () {

            var _ = this;

            if (_.options.dots && _.$dots !== null) {

                $$$1('li', _.$dots).off('click.slick', _.changeSlide).off('mouseenter.slick', $$$1.proxy(_.interrupt, _, true)).off('mouseleave.slick', $$$1.proxy(_.interrupt, _, false));

                if (_.options.accessibility === true) {
                    _.$dots.off('keydown.slick', _.keyHandler);
                }
            }

            _.$slider.off('focus.slick blur.slick');

            if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
                _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
                _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

                if (_.options.accessibility === true) {
                    _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                    _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
                }
            }

            _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
            _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
            _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
            _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

            _.$list.off('click.slick', _.clickHandler);

            $$$1(document).off(_.visibilityChange, _.visibility);

            _.cleanUpSlideEvents();

            if (_.options.accessibility === true) {
                _.$list.off('keydown.slick', _.keyHandler);
            }

            if (_.options.focusOnSelect === true) {
                $$$1(_.$slideTrack).children().off('click.slick', _.selectHandler);
            }

            $$$1(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

            $$$1(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

            $$$1('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

            $$$1(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
        };

        Slick.prototype.cleanUpSlideEvents = function () {

            var _ = this;

            _.$list.off('mouseenter.slick', $$$1.proxy(_.interrupt, _, true));
            _.$list.off('mouseleave.slick', $$$1.proxy(_.interrupt, _, false));
        };

        Slick.prototype.cleanUpRows = function () {

            var _ = this,
                originalSlides;

            if (_.options.rows > 0) {
                originalSlides = _.$slides.children().children();
                originalSlides.removeAttr('style');
                _.$slider.empty().append(originalSlides);
            }
        };

        Slick.prototype.clickHandler = function (event) {

            var _ = this;

            if (_.shouldClick === false) {
                event.stopImmediatePropagation();
                event.stopPropagation();
                event.preventDefault();
            }
        };

        Slick.prototype.destroy = function (refresh) {

            var _ = this;

            _.autoPlayClear();

            _.touchObject = {};

            _.cleanUpEvents();

            $$$1('.slick-cloned', _.$slider).detach();

            if (_.$dots) {
                _.$dots.remove();
            }

            if (_.$prevArrow && _.$prevArrow.length) {

                _.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.remove();
                }
            }

            if (_.$nextArrow && _.$nextArrow.length) {

                _.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.remove();
                }
            }

            if (_.$slides) {

                _.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function () {
                    $$$1(this).attr('style', $$$1(this).data('originalStyling'));
                });

                _.$slideTrack.children(this.options.slide).detach();

                _.$slideTrack.detach();

                _.$list.detach();

                _.$slider.append(_.$slides);
            }

            _.cleanUpRows();

            _.$slider.removeClass('slick-slider');
            _.$slider.removeClass('slick-initialized');
            _.$slider.removeClass('slick-dotted');

            _.unslicked = true;

            if (!refresh) {
                _.$slider.trigger('destroy', [_]);
            }
        };

        Slick.prototype.disableTransition = function (slide) {

            var _ = this,
                transition = {};

            transition[_.transitionType] = '';

            if (_.options.fade === false) {
                _.$slideTrack.css(transition);
            } else {
                _.$slides.eq(slide).css(transition);
            }
        };

        Slick.prototype.fadeSlide = function (slideIndex, callback) {

            var _ = this;

            if (_.cssTransitions === false) {

                _.$slides.eq(slideIndex).css({
                    zIndex: _.options.zIndex
                });

                _.$slides.eq(slideIndex).animate({
                    opacity: 1
                }, _.options.speed, _.options.easing, callback);
            } else {

                _.applyTransition(slideIndex);

                _.$slides.eq(slideIndex).css({
                    opacity: 1,
                    zIndex: _.options.zIndex
                });

                if (callback) {
                    setTimeout(function () {

                        _.disableTransition(slideIndex);

                        callback.call();
                    }, _.options.speed);
                }
            }
        };

        Slick.prototype.fadeSlideOut = function (slideIndex) {

            var _ = this;

            if (_.cssTransitions === false) {

                _.$slides.eq(slideIndex).animate({
                    opacity: 0,
                    zIndex: _.options.zIndex - 2
                }, _.options.speed, _.options.easing);
            } else {

                _.applyTransition(slideIndex);

                _.$slides.eq(slideIndex).css({
                    opacity: 0,
                    zIndex: _.options.zIndex - 2
                });
            }
        };

        Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {

            var _ = this;

            if (filter !== null) {

                _.$slidesCache = _.$slides;

                _.unload();

                _.$slideTrack.children(this.options.slide).detach();

                _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

                _.reinit();
            }
        };

        Slick.prototype.focusHandler = function () {

            var _ = this;

            _.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*', function (event) {

                event.stopImmediatePropagation();
                var $sf = $$$1(this);

                setTimeout(function () {

                    if (_.options.pauseOnFocus) {
                        _.focussed = $sf.is(':focus');
                        _.autoPlay();
                    }
                }, 0);
            });
        };

        Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {

            var _ = this;
            return _.currentSlide;
        };

        Slick.prototype.getDotCount = function () {

            var _ = this;

            var breakPoint = 0;
            var counter = 0;
            var pagerQty = 0;

            if (_.options.infinite === true) {
                if (_.slideCount <= _.options.slidesToShow) {
                    ++pagerQty;
                } else {
                    while (breakPoint < _.slideCount) {
                        ++pagerQty;
                        breakPoint = counter + _.options.slidesToScroll;
                        counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                    }
                }
            } else if (_.options.centerMode === true) {
                pagerQty = _.slideCount;
            } else if (!_.options.asNavFor) {
                pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }

            return pagerQty - 1;
        };

        Slick.prototype.getLeft = function (slideIndex) {

            var _ = this,
                targetLeft,
                verticalHeight,
                verticalOffset = 0,
                targetSlide,
                coef;

            _.slideOffset = 0;
            verticalHeight = _.$slides.first().outerHeight(true);

            if (_.options.infinite === true) {
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
                    coef = -1;

                    if (_.options.vertical === true && _.options.centerMode === true) {
                        if (_.options.slidesToShow === 2) {
                            coef = -1.5;
                        } else if (_.options.slidesToShow === 1) {
                            coef = -2;
                        }
                    }
                    verticalOffset = verticalHeight * _.options.slidesToShow * coef;
                }
                if (_.slideCount % _.options.slidesToScroll !== 0) {
                    if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                        if (slideIndex > _.slideCount) {
                            _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;
                            verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1;
                        } else {
                            _.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1;
                            verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1;
                        }
                    }
                }
            } else {
                if (slideIndex + _.options.slidesToShow > _.slideCount) {
                    _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
                    verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
                }
            }

            if (_.slideCount <= _.options.slidesToShow) {
                _.slideOffset = 0;
                verticalOffset = 0;
            }

            if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
                _.slideOffset = _.slideWidth * Math.floor(_.options.slidesToShow) / 2 - _.slideWidth * _.slideCount / 2;
            } else if (_.options.centerMode === true && _.options.infinite === true) {
                _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
            } else if (_.options.centerMode === true) {
                _.slideOffset = 0;
                _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
            }

            if (_.options.vertical === false) {
                targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
            } else {
                targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
            }

            if (_.options.variableWidth === true) {

                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft = 0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                if (_.options.centerMode === true) {
                    if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                    } else {
                        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                    }

                    if (_.options.rtl === true) {
                        if (targetSlide[0]) {
                            targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                        } else {
                            targetLeft = 0;
                        }
                    } else {
                        targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                    }

                    targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
                }
            }

            return targetLeft;
        };

        Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {

            var _ = this;

            return _.options[option];
        };

        Slick.prototype.getNavigableIndexes = function () {

            var _ = this,
                breakPoint = 0,
                counter = 0,
                indexes = [],
                max;

            if (_.options.infinite === false) {
                max = _.slideCount;
            } else {
                breakPoint = _.options.slidesToScroll * -1;
                counter = _.options.slidesToScroll * -1;
                max = _.slideCount * 2;
            }

            while (breakPoint < max) {
                indexes.push(breakPoint);
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }

            return indexes;
        };

        Slick.prototype.getSlick = function () {

            return this;
        };

        Slick.prototype.getSlideCount = function () {

            var _ = this,
                slidesTraversed,
                swipedSlide,
                centerOffset;

            centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

            if (_.options.swipeToSlide === true) {
                _.$slideTrack.find('.slick-slide').each(function (index, slide) {
                    if (slide.offsetLeft - centerOffset + $$$1(slide).outerWidth() / 2 > _.swipeLeft * -1) {
                        swipedSlide = slide;
                        return false;
                    }
                });

                slidesTraversed = Math.abs($$$1(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

                return slidesTraversed;
            } else {
                return _.options.slidesToScroll;
            }
        };

        Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {

            var _ = this;

            _.changeSlide({
                data: {
                    message: 'index',
                    index: parseInt(slide)
                }
            }, dontAnimate);
        };

        Slick.prototype.init = function (creation) {

            var _ = this;

            if (!$$$1(_.$slider).hasClass('slick-initialized')) {

                $$$1(_.$slider).addClass('slick-initialized');

                _.buildRows();
                _.buildOut();
                _.setProps();
                _.startLoad();
                _.loadSlider();
                _.initializeEvents();
                _.updateArrows();
                _.updateDots();
                _.checkResponsive(true);
                _.focusHandler();
            }

            if (creation) {
                _.$slider.trigger('init', [_]);
            }

            if (_.options.accessibility === true) {
                _.initADA();
            }

            if (_.options.autoplay) {

                _.paused = false;
                _.autoPlay();
            }
        };

        Slick.prototype.initADA = function () {
            var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function (val) {
                return val >= 0 && val < _.slideCount;
            });

            _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
                'aria-hidden': 'true',
                'tabindex': '-1'
            }).find('a, input, button, select').attr({
                'tabindex': '-1'
            });

            if (_.$dots !== null) {
                _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
                    var slideControlIndex = tabControlIndexes.indexOf(i);

                    $$$1(this).attr({
                        'role': 'tabpanel',
                        'id': 'slick-slide' + _.instanceUid + i,
                        'tabindex': -1
                    });

                    if (slideControlIndex !== -1) {
                        var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex;
                        if ($$$1('#' + ariaButtonControl).length) {
                            $$$1(this).attr({
                                'aria-describedby': ariaButtonControl
                            });
                        }
                    }
                });

                _.$dots.attr('role', 'tablist').find('li').each(function (i) {
                    var mappedSlideIndex = tabControlIndexes[i];

                    $$$1(this).attr({
                        'role': 'presentation'
                    });

                    $$$1(this).find('button').first().attr({
                        'role': 'tab',
                        'id': 'slick-slide-control' + _.instanceUid + i,
                        'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                        'aria-label': i + 1 + ' of ' + numDotGroups,
                        'aria-selected': null,
                        'tabindex': '-1'
                    });
                }).eq(_.currentSlide).find('button').attr({
                    'aria-selected': 'true',
                    'tabindex': '0'
                }).end();
            }

            for (var i = _.currentSlide, max = i + _.options.slidesToShow; i < max; i++) {
                if (_.options.focusOnChange) {
                    _.$slides.eq(i).attr({ 'tabindex': '0' });
                } else {
                    _.$slides.eq(i).removeAttr('tabindex');
                }
            }

            _.activateADA();
        };

        Slick.prototype.initArrowEvents = function () {

            var _ = this;

            if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
                _.$prevArrow.off('click.slick').on('click.slick', {
                    message: 'previous'
                }, _.changeSlide);
                _.$nextArrow.off('click.slick').on('click.slick', {
                    message: 'next'
                }, _.changeSlide);

                if (_.options.accessibility === true) {
                    _.$prevArrow.on('keydown.slick', _.keyHandler);
                    _.$nextArrow.on('keydown.slick', _.keyHandler);
                }
            }
        };

        Slick.prototype.initDotEvents = function () {

            var _ = this;

            if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
                $$$1('li', _.$dots).on('click.slick', {
                    message: 'index'
                }, _.changeSlide);

                if (_.options.accessibility === true) {
                    _.$dots.on('keydown.slick', _.keyHandler);
                }
            }

            if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

                $$$1('li', _.$dots).on('mouseenter.slick', $$$1.proxy(_.interrupt, _, true)).on('mouseleave.slick', $$$1.proxy(_.interrupt, _, false));
            }
        };

        Slick.prototype.initSlideEvents = function () {

            var _ = this;

            if (_.options.pauseOnHover) {

                _.$list.on('mouseenter.slick', $$$1.proxy(_.interrupt, _, true));
                _.$list.on('mouseleave.slick', $$$1.proxy(_.interrupt, _, false));
            }
        };

        Slick.prototype.initializeEvents = function () {

            var _ = this;

            _.initArrowEvents();

            _.initDotEvents();
            _.initSlideEvents();

            _.$list.on('touchstart.slick mousedown.slick', {
                action: 'start'
            }, _.swipeHandler);
            _.$list.on('touchmove.slick mousemove.slick', {
                action: 'move'
            }, _.swipeHandler);
            _.$list.on('touchend.slick mouseup.slick', {
                action: 'end'
            }, _.swipeHandler);
            _.$list.on('touchcancel.slick mouseleave.slick', {
                action: 'end'
            }, _.swipeHandler);

            _.$list.on('click.slick', _.clickHandler);

            $$$1(document).on(_.visibilityChange, $$$1.proxy(_.visibility, _));

            if (_.options.accessibility === true) {
                _.$list.on('keydown.slick', _.keyHandler);
            }

            if (_.options.focusOnSelect === true) {
                $$$1(_.$slideTrack).children().on('click.slick', _.selectHandler);
            }

            $$$1(window).on('orientationchange.slick.slick-' + _.instanceUid, $$$1.proxy(_.orientationChange, _));

            $$$1(window).on('resize.slick.slick-' + _.instanceUid, $$$1.proxy(_.resize, _));

            $$$1('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

            $$$1(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
            $$$1(_.setPosition);
        };

        Slick.prototype.initUI = function () {

            var _ = this;

            if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

                _.$prevArrow.show();
                _.$nextArrow.show();
            }

            if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

                _.$dots.show();
            }
        };

        Slick.prototype.keyHandler = function (event) {

            var _ = this;
            //Dont slide if the cursor is inside the form fields and arrow keys are pressed
            if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
                if (event.keyCode === 37 && _.options.accessibility === true) {
                    _.changeSlide({
                        data: {
                            message: _.options.rtl === true ? 'next' : 'previous'
                        }
                    });
                } else if (event.keyCode === 39 && _.options.accessibility === true) {
                    _.changeSlide({
                        data: {
                            message: _.options.rtl === true ? 'previous' : 'next'
                        }
                    });
                }
            }
        };

        Slick.prototype.lazyLoad = function () {

            var _ = this,
                loadRange,
                cloneRange,
                rangeStart,
                rangeEnd;

            function loadImages(imagesScope) {

                $$$1('img[data-lazy]', imagesScope).each(function () {

                    var image = $$$1(this),
                        imageSource = $$$1(this).attr('data-lazy'),
                        imageSrcSet = $$$1(this).attr('data-srcset'),
                        imageSizes = $$$1(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                        imageToLoad = document.createElement('img');

                    imageToLoad.onload = function () {

                        image.animate({ opacity: 0 }, 100, function () {

                            if (imageSrcSet) {
                                image.attr('srcset', imageSrcSet);

                                if (imageSizes) {
                                    image.attr('sizes', imageSizes);
                                }
                            }

                            image.attr('src', imageSource).animate({ opacity: 1 }, 200, function () {
                                image.removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');
                            });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });
                    };

                    imageToLoad.onerror = function () {

                        image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

                        _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
                    };

                    imageToLoad.src = imageSource;
                });
            }

            if (_.options.centerMode === true) {
                if (_.options.infinite === true) {
                    rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                    rangeEnd = rangeStart + _.options.slidesToShow + 2;
                } else {
                    rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                    rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
                }
            } else {
                rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
                rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
                if (_.options.fade === true) {
                    if (rangeStart > 0) rangeStart--;
                    if (rangeEnd <= _.slideCount) rangeEnd++;
                }
            }

            loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

            if (_.options.lazyLoad === 'anticipated') {
                var prevSlide = rangeStart - 1,
                    nextSlide = rangeEnd,
                    $slides = _.$slider.find('.slick-slide');

                for (var i = 0; i < _.options.slidesToScroll; i++) {
                    if (prevSlide < 0) prevSlide = _.slideCount - 1;
                    loadRange = loadRange.add($slides.eq(prevSlide));
                    loadRange = loadRange.add($slides.eq(nextSlide));
                    prevSlide--;
                    nextSlide++;
                }
            }

            loadImages(loadRange);

            if (_.slideCount <= _.options.slidesToShow) {
                cloneRange = _.$slider.find('.slick-slide');
                loadImages(cloneRange);
            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
                cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
                loadImages(cloneRange);
            } else if (_.currentSlide === 0) {
                cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
                loadImages(cloneRange);
            }
        };

        Slick.prototype.loadSlider = function () {

            var _ = this;

            _.setPosition();

            _.$slideTrack.css({
                opacity: 1
            });

            _.$slider.removeClass('slick-loading');

            _.initUI();

            if (_.options.lazyLoad === 'progressive') {
                _.progressiveLazyLoad();
            }
        };

        Slick.prototype.next = Slick.prototype.slickNext = function () {

            var _ = this;

            _.changeSlide({
                data: {
                    message: 'next'
                }
            });
        };

        Slick.prototype.orientationChange = function () {

            var _ = this;

            _.checkResponsive();
            _.setPosition();
        };

        Slick.prototype.pause = Slick.prototype.slickPause = function () {

            var _ = this;

            _.autoPlayClear();
            _.paused = true;
        };

        Slick.prototype.play = Slick.prototype.slickPlay = function () {

            var _ = this;

            _.autoPlay();
            _.options.autoplay = true;
            _.paused = false;
            _.focussed = false;
            _.interrupted = false;
        };

        Slick.prototype.postSlide = function (index) {

            var _ = this;

            if (!_.unslicked) {

                _.$slider.trigger('afterChange', [_, index]);

                _.animating = false;

                if (_.slideCount > _.options.slidesToShow) {
                    _.setPosition();
                }

                _.swipeLeft = null;

                if (_.options.autoplay) {
                    _.autoPlay();
                }

                if (_.options.accessibility === true) {
                    _.initADA();

                    if (_.options.focusOnChange) {
                        var $currentSlide = $$$1(_.$slides.get(_.currentSlide));
                        $currentSlide.attr('tabindex', 0).focus();
                    }
                }
            }
        };

        Slick.prototype.prev = Slick.prototype.slickPrev = function () {

            var _ = this;

            _.changeSlide({
                data: {
                    message: 'previous'
                }
            });
        };

        Slick.prototype.preventDefault = function (event) {

            event.preventDefault();
        };

        Slick.prototype.progressiveLazyLoad = function (tryCount) {

            tryCount = tryCount || 1;

            var _ = this,
                $imgsToLoad = $$$1('img[data-lazy]', _.$slider),
                image,
                imageSource,
                imageSrcSet,
                imageSizes,
                imageToLoad;

            if ($imgsToLoad.length) {

                image = $imgsToLoad.first();
                imageSource = image.attr('data-lazy');
                imageSrcSet = image.attr('data-srcset');
                imageSizes = image.attr('data-sizes') || _.$slider.attr('data-sizes');
                imageToLoad = document.createElement('img');

                imageToLoad.onload = function () {

                    if (imageSrcSet) {
                        image.attr('srcset', imageSrcSet);

                        if (imageSizes) {
                            image.attr('sizes', imageSizes);
                        }
                    }

                    image.attr('src', imageSource).removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');

                    if (_.options.adaptiveHeight === true) {
                        _.setPosition();
                    }

                    _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                    _.progressiveLazyLoad();
                };

                imageToLoad.onerror = function () {

                    if (tryCount < 3) {

                        /**
                         * try to load the image 3 times,
                         * leave a slight delay so we don't get
                         * servers blocking the request.
                         */
                        setTimeout(function () {
                            _.progressiveLazyLoad(tryCount + 1);
                        }, 500);
                    } else {

                        image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

                        _.$slider.trigger('lazyLoadError', [_, image, imageSource]);

                        _.progressiveLazyLoad();
                    }
                };

                imageToLoad.src = imageSource;
            } else {

                _.$slider.trigger('allImagesLoaded', [_]);
            }
        };

        Slick.prototype.refresh = function (initializing) {

            var _ = this,
                currentSlide,
                lastVisibleIndex;

            lastVisibleIndex = _.slideCount - _.options.slidesToShow;

            // in non-infinite sliders, we don't want to go past the
            // last visible index.
            if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
                _.currentSlide = lastVisibleIndex;
            }

            // if less slides than to show, go to start.
            if (_.slideCount <= _.options.slidesToShow) {
                _.currentSlide = 0;
            }

            currentSlide = _.currentSlide;

            _.destroy(true);

            $$$1.extend(_, _.initials, { currentSlide: currentSlide });

            _.init();

            if (!initializing) {

                _.changeSlide({
                    data: {
                        message: 'index',
                        index: currentSlide
                    }
                }, false);
            }
        };

        Slick.prototype.registerBreakpoints = function () {

            var _ = this,
                breakpoint,
                currentBreakpoint,
                l,
                responsiveSettings = _.options.responsive || null;

            if ($$$1.type(responsiveSettings) === 'array' && responsiveSettings.length) {

                _.respondTo = _.options.respondTo || 'window';

                for (breakpoint in responsiveSettings) {

                    l = _.breakpoints.length - 1;

                    if (responsiveSettings.hasOwnProperty(breakpoint)) {
                        currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                        // loop through the breakpoints and cut out any existing
                        // ones with the same breakpoint number, we don't want dupes.
                        while (l >= 0) {
                            if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
                                _.breakpoints.splice(l, 1);
                            }
                            l--;
                        }

                        _.breakpoints.push(currentBreakpoint);
                        _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
                    }
                }

                _.breakpoints.sort(function (a, b) {
                    return _.options.mobileFirst ? a - b : b - a;
                });
            }
        };

        Slick.prototype.reinit = function () {

            var _ = this;

            _.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide');

            _.slideCount = _.$slides.length;

            if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
                _.currentSlide = _.currentSlide - _.options.slidesToScroll;
            }

            if (_.slideCount <= _.options.slidesToShow) {
                _.currentSlide = 0;
            }

            _.registerBreakpoints();

            _.setProps();
            _.setupInfinite();
            _.buildArrows();
            _.updateArrows();
            _.initArrowEvents();
            _.buildDots();
            _.updateDots();
            _.initDotEvents();
            _.cleanUpSlideEvents();
            _.initSlideEvents();

            _.checkResponsive(false, true);

            if (_.options.focusOnSelect === true) {
                $$$1(_.$slideTrack).children().on('click.slick', _.selectHandler);
            }

            _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

            _.setPosition();
            _.focusHandler();

            _.paused = !_.options.autoplay;
            _.autoPlay();

            _.$slider.trigger('reInit', [_]);
        };

        Slick.prototype.resize = function () {

            var _ = this;

            if ($$$1(window).width() !== _.windowWidth) {
                clearTimeout(_.windowDelay);
                _.windowDelay = window.setTimeout(function () {
                    _.windowWidth = $$$1(window).width();
                    _.checkResponsive();
                    if (!_.unslicked) {
                        _.setPosition();
                    }
                }, 50);
            }
        };

        Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {

            var _ = this;

            if (typeof index === 'boolean') {
                removeBefore = index;
                index = removeBefore === true ? 0 : _.slideCount - 1;
            } else {
                index = removeBefore === true ? --index : index;
            }

            if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
                return false;
            }

            _.unload();

            if (removeAll === true) {
                _.$slideTrack.children().remove();
            } else {
                _.$slideTrack.children(this.options.slide).eq(index).remove();
            }

            _.$slides = _.$slideTrack.children(this.options.slide);

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.append(_.$slides);

            _.$slidesCache = _.$slides;

            _.reinit();
        };

        Slick.prototype.setCSS = function (position) {

            var _ = this,
                positionProps = {},
                x,
                y;

            if (_.options.rtl === true) {
                position = -position;
            }
            x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
            y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

            positionProps[_.positionProp] = position;

            if (_.transformsEnabled === false) {
                _.$slideTrack.css(positionProps);
            } else {
                positionProps = {};
                if (_.cssTransitions === false) {
                    positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                    _.$slideTrack.css(positionProps);
                } else {
                    positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                    _.$slideTrack.css(positionProps);
                }
            }
        };

        Slick.prototype.setDimensions = function () {

            var _ = this;

            if (_.options.vertical === false) {
                if (_.options.centerMode === true) {
                    _.$list.css({
                        padding: '0px ' + _.options.centerPadding
                    });
                }
            } else {
                _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
                if (_.options.centerMode === true) {
                    _.$list.css({
                        padding: _.options.centerPadding + ' 0px'
                    });
                }
            }

            _.listWidth = _.$list.width();
            _.listHeight = _.$list.height();

            if (_.options.vertical === false && _.options.variableWidth === false) {
                _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
                _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children('.slick-slide').length));
            } else if (_.options.variableWidth === true) {
                _.$slideTrack.width(5000 * _.slideCount);
            } else {
                _.slideWidth = Math.ceil(_.listWidth);
                _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length));
            }

            var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
            if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
        };

        Slick.prototype.setFade = function () {

            var _ = this,
                targetLeft;

            _.$slides.each(function (index, element) {
                targetLeft = _.slideWidth * index * -1;
                if (_.options.rtl === true) {
                    $$$1(element).css({
                        position: 'relative',
                        right: targetLeft,
                        top: 0,
                        zIndex: _.options.zIndex - 2,
                        opacity: 0
                    });
                } else {
                    $$$1(element).css({
                        position: 'relative',
                        left: targetLeft,
                        top: 0,
                        zIndex: _.options.zIndex - 2,
                        opacity: 0
                    });
                }
            });

            _.$slides.eq(_.currentSlide).css({
                zIndex: _.options.zIndex - 1,
                opacity: 1
            });
        };

        Slick.prototype.setHeight = function () {

            var _ = this;

            if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
                var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
                _.$list.css('height', targetHeight);
            }
        };

        Slick.prototype.setOption = Slick.prototype.slickSetOption = function () {

            /**
             * accepts arguments in format of:
             *
             *  - for changing a single option's value:
             *     .slick("setOption", option, value, refresh )
             *
             *  - for changing a set of responsive options:
             *     .slick("setOption", 'responsive', [{}, ...], refresh )
             *
             *  - for updating multiple values at once (not responsive)
             *     .slick("setOption", { 'option': value, ... }, refresh )
             */

            var _ = this,
                l,
                item,
                option,
                value,
                refresh = false,
                type;

            if ($$$1.type(arguments[0]) === 'object') {

                option = arguments[0];
                refresh = arguments[1];
                type = 'multiple';
            } else if ($$$1.type(arguments[0]) === 'string') {

                option = arguments[0];
                value = arguments[1];
                refresh = arguments[2];

                if (arguments[0] === 'responsive' && $$$1.type(arguments[1]) === 'array') {

                    type = 'responsive';
                } else if (typeof arguments[1] !== 'undefined') {

                    type = 'single';
                }
            }

            if (type === 'single') {

                _.options[option] = value;
            } else if (type === 'multiple') {

                $$$1.each(option, function (opt, val) {

                    _.options[opt] = val;
                });
            } else if (type === 'responsive') {

                for (item in value) {

                    if ($$$1.type(_.options.responsive) !== 'array') {

                        _.options.responsive = [value[item]];
                    } else {

                        l = _.options.responsive.length - 1;

                        // loop through the responsive object and splice out duplicates.
                        while (l >= 0) {

                            if (_.options.responsive[l].breakpoint === value[item].breakpoint) {

                                _.options.responsive.splice(l, 1);
                            }

                            l--;
                        }

                        _.options.responsive.push(value[item]);
                    }
                }
            }

            if (refresh) {

                _.unload();
                _.reinit();
            }
        };

        Slick.prototype.setPosition = function () {

            var _ = this;

            _.setDimensions();

            _.setHeight();

            if (_.options.fade === false) {
                _.setCSS(_.getLeft(_.currentSlide));
            } else {
                _.setFade();
            }

            _.$slider.trigger('setPosition', [_]);
        };

        Slick.prototype.setProps = function () {

            var _ = this,
                bodyStyle = document.body.style;

            _.positionProp = _.options.vertical === true ? 'top' : 'left';

            if (_.positionProp === 'top') {
                _.$slider.addClass('slick-vertical');
            } else {
                _.$slider.removeClass('slick-vertical');
            }

            if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
                if (_.options.useCSS === true) {
                    _.cssTransitions = true;
                }
            }

            if (_.options.fade) {
                if (typeof _.options.zIndex === 'number') {
                    if (_.options.zIndex < 3) {
                        _.options.zIndex = 3;
                    }
                } else {
                    _.options.zIndex = _.defaults.zIndex;
                }
            }

            if (bodyStyle.OTransform !== undefined) {
                _.animType = 'OTransform';
                _.transformType = '-o-transform';
                _.transitionType = 'OTransition';
                if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
            }
            if (bodyStyle.MozTransform !== undefined) {
                _.animType = 'MozTransform';
                _.transformType = '-moz-transform';
                _.transitionType = 'MozTransition';
                if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
            }
            if (bodyStyle.webkitTransform !== undefined) {
                _.animType = 'webkitTransform';
                _.transformType = '-webkit-transform';
                _.transitionType = 'webkitTransition';
                if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
            }
            if (bodyStyle.msTransform !== undefined) {
                _.animType = 'msTransform';
                _.transformType = '-ms-transform';
                _.transitionType = 'msTransition';
                if (bodyStyle.msTransform === undefined) _.animType = false;
            }
            if (bodyStyle.transform !== undefined && _.animType !== false) {
                _.animType = 'transform';
                _.transformType = 'transform';
                _.transitionType = 'transition';
            }
            _.transformsEnabled = _.options.useTransform && _.animType !== null && _.animType !== false;
        };

        Slick.prototype.setSlideClasses = function (index) {

            var _ = this,
                centerOffset,
                allSlides,
                indexOffset,
                remainder;

            allSlides = _.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true');

            _.$slides.eq(index).addClass('slick-current');

            if (_.options.centerMode === true) {

                var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

                centerOffset = Math.floor(_.options.slidesToShow / 2);

                if (_.options.infinite === true) {

                    if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {
                        _.$slides.slice(index - centerOffset + evenCoef, index + centerOffset + 1).addClass('slick-active').attr('aria-hidden', 'false');
                    } else {

                        indexOffset = _.options.slidesToShow + index;
                        allSlides.slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2).addClass('slick-active').attr('aria-hidden', 'false');
                    }

                    if (index === 0) {

                        allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
                    } else if (index === _.slideCount - 1) {

                        allSlides.eq(_.options.slidesToShow).addClass('slick-center');
                    }
                }

                _.$slides.eq(index).addClass('slick-center');
            } else {

                if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {

                    _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
                } else if (allSlides.length <= _.options.slidesToShow) {

                    allSlides.addClass('slick-active').attr('aria-hidden', 'false');
                } else {

                    remainder = _.slideCount % _.options.slidesToShow;
                    indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                    if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) {

                        allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass('slick-active').attr('aria-hidden', 'false');
                    } else {

                        allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
                    }
                }
            }

            if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
                _.lazyLoad();
            }
        };

        Slick.prototype.setupInfinite = function () {

            var _ = this,
                i,
                slideIndex,
                infiniteCount;

            if (_.options.fade === true) {
                _.options.centerMode = false;
            }

            if (_.options.infinite === true && _.options.fade === false) {

                slideIndex = null;

                if (_.slideCount > _.options.slidesToShow) {

                    if (_.options.centerMode === true) {
                        infiniteCount = _.options.slidesToShow + 1;
                    } else {
                        infiniteCount = _.options.slidesToShow;
                    }

                    for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
                        slideIndex = i - 1;
                        $$$1(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');
                    }
                    for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
                        slideIndex = i;
                        $$$1(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');
                    }
                    _.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
                        $$$1(this).attr('id', '');
                    });
                }
            }
        };

        Slick.prototype.interrupt = function (toggle) {

            var _ = this;

            if (!toggle) {
                _.autoPlay();
            }
            _.interrupted = toggle;
        };

        Slick.prototype.selectHandler = function (event) {

            var _ = this;

            var targetElement = $$$1(event.target).is('.slick-slide') ? $$$1(event.target) : $$$1(event.target).parents('.slick-slide');

            var index = parseInt(targetElement.attr('data-slick-index'));

            if (!index) index = 0;

            if (_.slideCount <= _.options.slidesToShow) {

                _.slideHandler(index, false, true);
                return;
            }

            _.slideHandler(index);
        };

        Slick.prototype.slideHandler = function (index, sync, dontAnimate) {

            var targetSlide,
                animSlide,
                oldSlide,
                slideLeft,
                targetLeft = null,
                _ = this,
                navTarget;

            sync = sync || false;

            if (_.animating === true && _.options.waitForAnimate === true) {
                return;
            }

            if (_.options.fade === true && _.currentSlide === index) {
                return;
            }

            if (sync === false) {
                _.asNavFor(index);
            }

            targetSlide = index;
            targetLeft = _.getLeft(targetSlide);
            slideLeft = _.getLeft(_.currentSlide);

            _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

            if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
                if (_.options.fade === false) {
                    targetSlide = _.currentSlide;
                    if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                        _.animateSlide(slideLeft, function () {
                            _.postSlide(targetSlide);
                        });
                    } else {
                        _.postSlide(targetSlide);
                    }
                }
                return;
            } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) {
                if (_.options.fade === false) {
                    targetSlide = _.currentSlide;
                    if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                        _.animateSlide(slideLeft, function () {
                            _.postSlide(targetSlide);
                        });
                    } else {
                        _.postSlide(targetSlide);
                    }
                }
                return;
            }

            if (_.options.autoplay) {
                clearInterval(_.autoPlayTimer);
            }

            if (targetSlide < 0) {
                if (_.slideCount % _.options.slidesToScroll !== 0) {
                    animSlide = _.slideCount - _.slideCount % _.options.slidesToScroll;
                } else {
                    animSlide = _.slideCount + targetSlide;
                }
            } else if (targetSlide >= _.slideCount) {
                if (_.slideCount % _.options.slidesToScroll !== 0) {
                    animSlide = 0;
                } else {
                    animSlide = targetSlide - _.slideCount;
                }
            } else {
                animSlide = targetSlide;
            }

            _.animating = true;

            _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

            oldSlide = _.currentSlide;
            _.currentSlide = animSlide;

            _.setSlideClasses(_.currentSlide);

            if (_.options.asNavFor) {

                navTarget = _.getNavTarget();
                navTarget = navTarget.slick('getSlick');

                if (navTarget.slideCount <= navTarget.options.slidesToShow) {
                    navTarget.setSlideClasses(_.currentSlide);
                }
            }

            _.updateDots();
            _.updateArrows();

            if (_.options.fade === true) {
                if (dontAnimate !== true) {

                    _.fadeSlideOut(oldSlide);

                    _.fadeSlide(animSlide, function () {
                        _.postSlide(animSlide);
                    });
                } else {
                    _.postSlide(animSlide);
                }
                _.animateHeight();
                return;
            }

            if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                _.animateSlide(targetLeft, function () {
                    _.postSlide(animSlide);
                });
            } else {
                _.postSlide(animSlide);
            }
        };

        Slick.prototype.startLoad = function () {

            var _ = this;

            if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

                _.$prevArrow.hide();
                _.$nextArrow.hide();
            }

            if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

                _.$dots.hide();
            }

            _.$slider.addClass('slick-loading');
        };

        Slick.prototype.swipeDirection = function () {

            var xDist,
                yDist,
                r,
                swipeAngle,
                _ = this;

            xDist = _.touchObject.startX - _.touchObject.curX;
            yDist = _.touchObject.startY - _.touchObject.curY;
            r = Math.atan2(yDist, xDist);

            swipeAngle = Math.round(r * 180 / Math.PI);
            if (swipeAngle < 0) {
                swipeAngle = 360 - Math.abs(swipeAngle);
            }

            if (swipeAngle <= 45 && swipeAngle >= 0) {
                return _.options.rtl === false ? 'left' : 'right';
            }
            if (swipeAngle <= 360 && swipeAngle >= 315) {
                return _.options.rtl === false ? 'left' : 'right';
            }
            if (swipeAngle >= 135 && swipeAngle <= 225) {
                return _.options.rtl === false ? 'right' : 'left';
            }
            if (_.options.verticalSwiping === true) {
                if (swipeAngle >= 35 && swipeAngle <= 135) {
                    return 'down';
                } else {
                    return 'up';
                }
            }

            return 'vertical';
        };

        Slick.prototype.swipeEnd = function (event) {

            var _ = this,
                slideCount,
                direction;

            _.dragging = false;
            _.swiping = false;

            if (_.scrolling) {
                _.scrolling = false;
                return false;
            }

            _.interrupted = false;
            _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;

            if (_.touchObject.curX === undefined) {
                return false;
            }

            if (_.touchObject.edgeHit === true) {
                _.$slider.trigger('edge', [_, _.swipeDirection()]);
            }

            if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {

                direction = _.swipeDirection();

                switch (direction) {

                    case 'left':
                    case 'down':

                        slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();

                        _.currentDirection = 0;

                        break;

                    case 'right':
                    case 'up':

                        slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();

                        _.currentDirection = 1;

                        break;

                    default:

                }

                if (direction != 'vertical') {

                    _.slideHandler(slideCount);
                    _.touchObject = {};
                    _.$slider.trigger('swipe', [_, direction]);
                }
            } else {

                if (_.touchObject.startX !== _.touchObject.curX) {

                    _.slideHandler(_.currentSlide);
                    _.touchObject = {};
                }
            }
        };

        Slick.prototype.swipeHandler = function (event) {

            var _ = this;

            if (_.options.swipe === false || 'ontouchend' in document && _.options.swipe === false) {
                return;
            } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
                return;
            }

            _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;

            _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;

            if (_.options.verticalSwiping === true) {
                _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
            }

            switch (event.data.action) {

                case 'start':
                    _.swipeStart(event);
                    break;

                case 'move':
                    _.swipeMove(event);
                    break;

                case 'end':
                    _.swipeEnd(event);
                    break;

            }
        };

        Slick.prototype.swipeMove = function (event) {

            var _ = this,
                edgeWasHit = false,
                curLeft,
                swipeDirection,
                swipeLength,
                positionOffset,
                touches,
                verticalSwipeLength;

            touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

            if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
                return false;
            }

            curLeft = _.getLeft(_.currentSlide);

            _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
            _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

            _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

            verticalSwipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

            if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
                _.scrolling = true;
                return false;
            }

            if (_.options.verticalSwiping === true) {
                _.touchObject.swipeLength = verticalSwipeLength;
            }

            swipeDirection = _.swipeDirection();

            if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
                _.swiping = true;
                event.preventDefault();
            }

            positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
            if (_.options.verticalSwiping === true) {
                positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
            }

            swipeLength = _.touchObject.swipeLength;

            _.touchObject.edgeHit = false;

            if (_.options.infinite === false) {
                if (_.currentSlide === 0 && swipeDirection === 'right' || _.currentSlide >= _.getDotCount() && swipeDirection === 'left') {
                    swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                    _.touchObject.edgeHit = true;
                }
            }

            if (_.options.vertical === false) {
                _.swipeLeft = curLeft + swipeLength * positionOffset;
            } else {
                _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
            }
            if (_.options.verticalSwiping === true) {
                _.swipeLeft = curLeft + swipeLength * positionOffset;
            }

            if (_.options.fade === true || _.options.touchMove === false) {
                return false;
            }

            if (_.animating === true) {
                _.swipeLeft = null;
                return false;
            }

            _.setCSS(_.swipeLeft);
        };

        Slick.prototype.swipeStart = function (event) {

            var _ = this,
                touches;

            _.interrupted = true;

            if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
                _.touchObject = {};
                return false;
            }

            if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
                touches = event.originalEvent.touches[0];
            }

            _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
            _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

            _.dragging = true;
        };

        Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {

            var _ = this;

            if (_.$slidesCache !== null) {

                _.unload();

                _.$slideTrack.children(this.options.slide).detach();

                _.$slidesCache.appendTo(_.$slideTrack);

                _.reinit();
            }
        };

        Slick.prototype.unload = function () {

            var _ = this;

            $$$1('.slick-cloned', _.$slider).remove();

            if (_.$dots) {
                _.$dots.remove();
            }

            if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
                _.$prevArrow.remove();
            }

            if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
                _.$nextArrow.remove();
            }

            _.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
        };

        Slick.prototype.unslick = function (fromBreakpoint) {

            var _ = this;
            _.$slider.trigger('unslick', [_, fromBreakpoint]);
            _.destroy();
        };

        Slick.prototype.updateArrows = function () {

            var _ = this;

            if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {

                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

                if (_.currentSlide === 0) {

                    _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                    _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
                } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                    _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                    _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
                } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                    _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                    _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
                }
            }
        };

        Slick.prototype.updateDots = function () {

            var _ = this;

            if (_.$dots !== null) {

                _.$dots.find('li').removeClass('slick-active').end();

                _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active');
            }
        };

        Slick.prototype.visibility = function () {

            var _ = this;

            if (_.options.autoplay) {

                if (document[_.hidden]) {

                    _.interrupted = true;
                } else {

                    _.interrupted = false;
                }
            }
        };

        $$$1.fn.slick = function () {
            var _ = this,
                opt = arguments[0],
                args = Array.prototype.slice.call(arguments, 1),
                l = _.length,
                i,
                ret;
            for (i = 0; i < l; i++) {
                if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) == 'object' || typeof opt == 'undefined') _[i].slick = new Slick(_[i], opt);else ret = _[i].slick[opt].apply(_[i].slick, args);
                if (typeof ret != 'undefined') return ret;
            }
            return _;
        };
    });
});

'use strict';

var BasisHamburgerBtn = function () {
  function BasisHamburgerBtn() {
    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, BasisHamburgerBtn);

    this.args = $.extend({
      btn: '.c-hamburger-btn'
    }, args);
    this.hamburgerBtn = $(this.args.btn);
    this.setListener();
  }

  createClass(BasisHamburgerBtn, [{
    key: 'setListener',
    value: function setListener() {
      this.hamburgerBtn.each(function (i, e) {
        var hamburgerBtn = $(e);
        var target = $('#' + hamburgerBtn.attr('aria-controls'));

        hamburgerBtn.click(function (event) {
          event.preventDefault();
          event.stopPropagation();

          if ('false' === hamburgerBtn.attr('aria-expanded')) {
            hamburgerBtn.attr('aria-expanded', 'true');
            target.attr('aria-hidden', 'false');
          } else {
            hamburgerBtn.attr('aria-expanded', 'false');
            target.attr('aria-hidden', 'true');
          }
        });
      });
    }
  }]);
  return BasisHamburgerBtn;
}();

'use strict';

var BasisDrawer = function () {
  function BasisDrawer() {
    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, BasisDrawer);

    this.args = $.extend({
      drawer: '.c-drawer',
      toggle: '.c-drawer__toggle',
      submenu: '.c-drawer__submenu'
    }, args);
    this.drawer = $(this.args.drawer);
    this.windowWidth = $(window).width();
    this.setListener();
  }

  createClass(BasisDrawer, [{
    key: 'setListener',
    value: function setListener() {
      var _this = this;

      this.drawer.each(function (i, e) {
        var drawer = $(e);
        _this.setIdForSubmenu(drawer);

        var container = drawer.parent();
        var btn = $('#' + drawer.attr('aria-labelledby'));
        var toggleBtns = drawer.find(_this.args.toggle + '[aria-controls]');

        container.on('click', function (event) {
          _this.close(btn);
          _this.hidden(drawer);
          _this.close(drawer.find(_this.args.toggle));
          _this.hidden(drawer.find(_this.args.submenu));
        });

        drawer.on('click', function (event) {
          event.stopPropagation();
        });

        $(window).on('resize', function (event) {
          if ($(window).width() !== _this.windowWidth) {
            _this.hidden(drawer);
            _this.close(btn);
            _this.windowWidth = $(window).width();
          }
        });

        toggleBtns.each(function (i, e) {
          var toggleBtn = $(e);
          var submenu = $('#' + toggleBtn.attr('aria-controls'));
          toggleBtn.on('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            _this.toggleMenu(toggleBtn);
          });
        });
      });
    }
  }, {
    key: 'toggleMenu',
    value: function toggleMenu(btn) {
      var menu = $('#' + btn.attr('aria-controls'));
      if ('false' == btn.attr('aria-expanded')) {
        this.open(btn);
        this.show(menu);
      } else {
        this.close(btn);
        this.hidden(menu);
        this.close(menu.find(this.args.toggle));
        this.hidden(menu.find(this.args.submenu));
      }
    }
  }, {
    key: 'open',
    value: function open(target) {
      target.attr('aria-expanded', 'true');
    }
  }, {
    key: 'close',
    value: function close(target) {
      target.attr('aria-expanded', 'false');
    }
  }, {
    key: 'show',
    value: function show(target) {
      target.attr('aria-hidden', 'false');
    }
  }, {
    key: 'hidden',
    value: function hidden(target) {
      target.attr('aria-hidden', 'true');
    }
  }, {
    key: 'setIdForSubmenu',
    value: function setIdForSubmenu(drawer) {
      var _this2 = this;

      drawer.find(this.args.submenu + '[aria-hidden]').each(function (i, e) {
        var random = Math.floor(Math.random() * (9999999 - 1000000) + 1000000);
        var time = new Date().getTime();
        var id = 'drawer-' + time + random;
        var submenu = $(e);
        var toggleBtn = submenu.siblings(_this2.args.toggle);
        if (submenu.length && toggleBtn.length) {
          submenu.attr('id', id);
          toggleBtn.attr('aria-controls', '' + id);
        }
      });
    }
  }]);
  return BasisDrawer;
}();

'use strict';

var BasisNavbar = function () {
  function BasisNavbar() {
    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, BasisNavbar);

    this.args = $.extend({
      item: '.c-navbar__item',
      submenu: '.c-navbar__submenu',
      subitem: '.c-navbar__subitem'
    }, args);
    this.items = $(this.args.item + '[aria-haspopup="true"], ' + this.args.subitem + '[aria-haspopup="true"]');
    this.setListener();
  }

  createClass(BasisNavbar, [{
    key: 'setListener',
    value: function setListener() {
      var _this = this;

      this.items.each(function (i, e) {
        var item = $(e);
        item.on('mouseover focusin', function (event) {
          _this.show(item.children(_this.args.submenu));
        });

        item.on('mouseleave', function (event) {
          _this.hidden(item.children(_this.args.submenu));
        });
      });

      $(this.args.item).each(function (i, e) {
        var item = $(e);
        item.on('focusin', function (event) {
          _this.hidden(item.siblings(_this.args.item).children(_this.args.submenu));
        });
      });
    }
  }, {
    key: 'show',
    value: function show(submenu) {
      submenu.attr('aria-hidden', 'false');
    }
  }, {
    key: 'hidden',
    value: function hidden(submenu) {
      submenu.attr('aria-hidden', 'true');
    }
  }]);
  return BasisNavbar;
}();

'use strict';

var BasisPageEffect = function () {
  function BasisPageEffect() {
    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, BasisPageEffect);

    this.args = $.extend({
      pageEffect: '.c-page-effect',
      duration: 200
    }, args);
    this.container = $(this.args.pageEffect);
    this.pageOutObject = $('[data-page-effect-link="true"], a[href]:not([target="_blank"], [href^="#"], [href*="javascript"], [href*=".jpg"], [href*=".jpeg"], [href*=".gif"], [href*=".png"], [href*=".mov"], [href*=".swf"], [href*=".mp4"], [href*=".flv"], [href*=".avi"], [href*=".mp3"], [href*=".pdf"], [href*=".zip"], [href^="mailto:"], [data-page-effect-link="false"])');
    this.setListener();
  }

  createClass(BasisPageEffect, [{
    key: 'setListener',
    value: function setListener() {
      var _this = this;

      $(window).on('load', function (event) {
        _this.hide();
      });

      this.pageOutObject.each(function (i, e) {
        var link = $(e);
        link.on('click', function (event) {
          if (event.shiftKey || event.ctrlKey || event.metaKey) {
            return;
          }

          if ('true' !== link.attr('data-page-effect-link')) {
            return;
          }

          event.preventDefault();
          _this.show();
          var url = link.attr('href');
          _this.moveLocation(url);
        });
      });
    }
  }, {
    key: 'moveLocation',
    value: function moveLocation(url) {
      setTimeout(function () {
        location.href = url;
      }, this.args['duration']);
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.container.attr('aria-hidden', 'true').attr('data-page-effect', 'fadein');
    }
  }, {
    key: 'show',
    value: function show() {
      this.container.attr('aria-hidden', 'false').attr('data-page-effect', 'fadeout');
    }
  }]);
  return BasisPageEffect;
}();

'use strict';

var BasisSelect = function BasisSelect() {
  var _this = this;

  var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  classCallCheck(this, BasisSelect);

  this.args = $.extend({
    select: '.c-select',
    label: '.c-select__label'
  }, args);
  this.select = $(this.args.select);
  this.select.each(function (i, e) {
    var selectWrapper = $(e);
    var select = selectWrapper.find('select');
    var label = selectWrapper.find(_this.args.label);
    label.text(select.children('option:selected').text());

    select.on('change', function (event) {
      label.text($(select[0].selectedOptions).text());
    });

    select.on('focusin', function (event) {
      selectWrapper.attr('aria-selected', 'true');
    });

    select.on('focusout', function (event) {
      selectWrapper.attr('aria-selected', 'false');
    });
  });
};

'use strict';

new BasisHamburgerBtn();

new BasisDrawer();

new BasisNavbar();

new BasisPageEffect();

new BasisSelect();

'use strict';

var Sticky = function () {
  function Sticky(target) {
    var _this = this;

    var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, Sticky);

    if (!target.length) {
      return;
    }

    this.target = target;
    this.parent = target.parent();
    this.args = $.extend({
      offset: 0,
      breakpoint: null
    }, args);

    this.placeholder = $('<div class="js-sticky-placeholder"/>');

    this.isAdded = false;

    $(window).on('ready load scroll resize', function () {
      _this.initialize();
    });

    $(window).on('resize', function () {
      $(window).scrollTop($(window).scrollTop() + 1);
    });
  }

  createClass(Sticky, [{
    key: 'initialize',
    value: function initialize() {
      if ('none' == this.target.css('display') || null !== this.args.breakpoint && this.args.breakpoint > $(window).width()) {
        this.parent.removeClass('js-sticky-parent');
        this.target.removeClass('js-sticky-top');
        this.target.removeClass('js-sticky-bottom');
        this.placeholder.remove();
        this.isAdded = false;
        return;
      }

      this.placeholder.width(this.target.outerWidth());
      this.placeholder.height(this.target.outerHeight() + parseInt(this.target.css('margin-bottom')));

      if (this.shouldStickyTop()) {
        this.setTargetSize(this.target.height(), this.target.width());
        this.target.addClass('js-sticky-top');
        this.target.css('top', this.args.offset);
        this.target.after(this.placeholder);
        this.isAdded = true;
      } else if (this.shouldStickyBottom()) {
        this.parent.addClass('js-sticky-parent');
        this.target.removeClass('js-sticky-top');
        this.target.css('top', '');
        this.target.addClass('js-sticky-bottom');
      } else if (this.shouldReleaseStickyBottom()) {
        this.parent.removeClass('js-sticky-parent');
        this.target.addClass('js-sticky-top');
        this.target.css('top', this.args.offset);
        this.target.removeClass('js-sticky-bottom');
      } else if (this.shouldReleaseStickyTop()) {
        this.parent.removeClass('js-sticky-parent');
        this.target.removeClass('js-sticky-top');
        this.target.css('top', '');
        this.target.removeClass('js-sticky-bottom');
        this.setTargetSize('', '');
        this.placeholder.remove();
        this.isAdded = false;
      }
    }
  }, {
    key: 'shouldStickyTop',
    value: function shouldStickyTop() {
      return this.getScrollTop() >= this.getTargetTopY() && !this.isAdded;
    }
  }, {
    key: 'shouldStickyBottom',
    value: function shouldStickyBottom() {
      return this.getTargetBottomY() >= this.getParentBottomY() && !this.parent.hasClass('js-sticky-parent') && this.isAdded;
    }
  }, {
    key: 'shouldReleaseStickyBottom',
    value: function shouldReleaseStickyBottom() {
      return this.getScrollTop() <= this.getTargetTopY() && this.getTargetTopY() >= this.getParentTopY() && this.parent.hasClass('js-sticky-parent') && this.isAdded;
    }
  }, {
    key: 'shouldReleaseStickyTop',
    value: function shouldReleaseStickyTop() {
      return this.getScrollTop() <= this.getParentTopY() && this.isAdded;
    }
  }, {
    key: 'getScrollTop',
    value: function getScrollTop() {
      return $(window).scrollTop() + this.args.offset + parseInt(this.target.css('margin-top'));
    }
  }, {
    key: 'getParentTopY',
    value: function getParentTopY() {
      if (this.target.prev().length) {
        return this.target.prev().offset().top + this.target.prev().outerHeight();
      }
      return this.parent.offset().top;
    }
  }, {
    key: 'getParentBottomY',
    value: function getParentBottomY() {
      if (this.target.next(':not(.js-sticky-placeholder)').length) {
        return this.target.next(':not(.js-sticky-placeholder)').offset().top;
      }
      return this.parent.offset().top + this.parent.outerHeight();
    }
  }, {
    key: 'getTargetTopY',
    value: function getTargetTopY() {
      return this.target.offset().top;
    }
  }, {
    key: 'getTargetBottomY',
    value: function getTargetBottomY() {
      return this.getTargetTopY() + this.target.outerHeight();
    }
  }, {
    key: 'setTargetSize',
    value: function setTargetSize(height, width) {
      this.target.width(width);
      this.target.height(height);
    }
  }]);
  return Sticky;
}();

/**
 * Name: jquery.sticky
 * Author: Takashi Kitajima (inc2734)
 * Author URI: https://2inc.org
 * License: MIT
 *
 * @param { offset }
 */

'use strict';

(function ($$$1) {
  $$$1.fn.sticky = function (args) {
    return this.each(function (i, e) {
      new Sticky($$$1(e), args);
    });
  };
})(jQuery);

/**
 * Name: jquery.background-parallax-scroll
 * Author: Takashi Kitajima (inc2734)
 * Author URI: https://2inc.org
 * License: MIT
 *
 * @param { speed }
 */

'use strict';

(function ($$$1) {
  $$$1.fn.backgroundParallaxScroll = function (params) {
    params = $$$1.extend({
      speed: 3
    }, params);

    return this.each(function (i, e) {
      var target = $$$1(e);

      if (isMobile()) {
        target.attr('data-is-mobile', 'true');
        target.attr('data-is-loaded', 'true');
        return;
      }

      var urlRegex = /url\(['"]?(.*?)['"]?\)/g;
      var src = target.css('background-image').replace(urlRegex, '$1');

      var bpy = 0;

      if (src.match(/\.[^\.\/]+?$/)) {
        var dummy = new Image();
        dummy.onload = function () {
          target.attr('data-is-loaded', 'true');
        };
        dummy.src = src;
      } else {
        target.attr('data-is-loaded', 'true');
      }

      init();
      setPosition(0);

      $$$1(window).resize(function () {
        init();
        setPosition($$$1(window).scrollTop());
      });

      $$$1(window).scroll(function () {
        setPosition($$$1(window).scrollTop());
      });

      /**
       * Set background image position
       *
       * @return {void}
       */
      function init() {
        target.css('background-position-y', '');
        bpy = target.css('background-position-y');
      }

      /**
       * Set background image position for parallax effect
       *
       * @param {int} scroll
       * @return {void}
       */
      function setPosition(scroll) {
        if ('fixed' !== target.css('background-attachment')) {
          return;
        }

        var offset = target.offset().top;
        var parallax = (scroll - offset) / params.speed;

        target.css('background-position-y', 'calc(' + bpy + ' - ' + parallax + 'px)');
      }

      /**
       * Return true when mobile device
       *
       * @return {Boolean}
       */
      function isMobile() {
        var ua = navigator.userAgent;

        if (0 < ua.indexOf('iPhone') || 0 < ua.indexOf('iPod') || 0 < ua.indexOf('Android') && 0 < ua.indexOf('Mobile')) {
          return true;
        } else if (0 < ua.indexOf('iPad')) {
          return true;
        }

        return false;
      }
    });
  };
})(jQuery);

/**
 * This is for the sticky header.
 */

'use strict';

var BasisStickyHeader = function () {
  function BasisStickyHeader() {
    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, BasisStickyHeader);

    this.args = $.extend({
      container: '.l-container',
      header: '.l-header',
      contents: '.l-contents'
    }, args);

    this.windowScroll = $('html').attr('data-window-scroll');

    this.setScroll();
    this.setSticky();
    this.setListener();
  }

  createClass(BasisStickyHeader, [{
    key: 'setListener',
    value: function setListener() {
      var _this = this;

      var target = this.getScrollTarget();

      target.on('scroll resize', function (event) {
        _this.setScroll();
        _this.setSticky();
      });
    }
  }, {
    key: 'setScroll',
    value: function setScroll() {
      var scroll = this.getScrollTop();

      if (scroll > 0) {
        $('html').attr('data-scrolled', 'true');
      } else {
        $('html').attr('data-scrolled', 'false');
      }
    }
  }, {
    key: 'setSticky',
    value: function setSticky() {
      if ('sticky' !== $(this.args.header).attr('data-l-header-type')) {
        return;
      }
      var headerHeight = $(this.args.header).outerHeight();
      $(this.args.contents).css('marginTop', headerHeight + 'px');
    }
  }, {
    key: 'getScrollTarget',
    value: function getScrollTarget() {
      if ('false' == this.windowScroll) {
        return $(this.args.container);
      } else {
        return $(window);
      }
    }
  }, {
    key: 'getScrollTop',
    value: function getScrollTop() {
      return this.getScrollTarget().scrollTop();
    }
  }]);
  return BasisStickyHeader;
}();

'use strict';

var Inc2734_WP_Share_Buttons_Button = function () {
  function Inc2734_WP_Share_Buttons_Button(button) {
    var _this = this;

    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, Inc2734_WP_Share_Buttons_Button);

    $(function () {
      _this.button = button;
      _this.params = $.extend({
        post_id: _this.button.data('wp-share-buttons-postid')
      }, params);

      if (!_this.button.data('wp-share-buttons-has-cache')) {
        if (_this.button.find('.wp-share-button__count').length) {
          _this.count();
        }
      }
      _this.popup();
    });
  }

  createClass(Inc2734_WP_Share_Buttons_Button, [{
    key: 'count',
    value: function count() {}
  }, {
    key: 'popup',
    value: function popup() {}
  }]);
  return Inc2734_WP_Share_Buttons_Button;
}();

'use strict';

var Inc2734_WP_Share_Buttons_Share_Count = function () {
  function Inc2734_WP_Share_Buttons_Share_Count(target) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'jsonp';
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Inc2734_WP_Share_Buttons_Share_Count);

    this.target = target;
    this.type = type;
    this.data = data;
  }

  createClass(Inc2734_WP_Share_Buttons_Share_Count, [{
    key: 'request',
    value: function request() {
      return $.ajax({
        url: this.target,
        dataType: this.type,
        data: this.data
      });
    }
  }]);
  return Inc2734_WP_Share_Buttons_Share_Count;
}();

'use strict';

var Inc2734_WP_Share_Buttons_Popup = function () {
  function Inc2734_WP_Share_Buttons_Popup(target, title, width, height) {
    classCallCheck(this, Inc2734_WP_Share_Buttons_Popup);

    this.target = target;
    this.title = title;
    this.width = parseInt(width);
    this.height = parseInt(height);
    this.setListener();
  }

  createClass(Inc2734_WP_Share_Buttons_Popup, [{
    key: 'setListener',
    value: function setListener() {
      var _this = this;

      this.target.on('click', function (event) {
        event.preventDefault();
        window.open(_this.target.attr('href'), _this.title, 'width=' + _this.width + ', height=' + _this.height + ', menubar=no, toolbar=no, scrollbars=yes');
      });
    }
  }]);
  return Inc2734_WP_Share_Buttons_Popup;
}();

'use strict';

var Inc2734_WP_Share_Buttons_Facebook = function (_Inc2734_WP_Share_But) {
  inherits(Inc2734_WP_Share_Buttons_Facebook, _Inc2734_WP_Share_But);

  function Inc2734_WP_Share_Buttons_Facebook(button, params) {
    classCallCheck(this, Inc2734_WP_Share_Buttons_Facebook);
    return possibleConstructorReturn(this, (Inc2734_WP_Share_Buttons_Facebook.__proto__ || Object.getPrototypeOf(Inc2734_WP_Share_Buttons_Facebook)).call(this, button, params));
  }

  createClass(Inc2734_WP_Share_Buttons_Facebook, [{
    key: 'count',
    value: function count() {
      var _this2 = this;

      new Inc2734_WP_Share_Buttons_Share_Count(inc2734_wp_share_buttons_facebook.endpoint, 'json', {
        action: inc2734_wp_share_buttons_facebook.action,
        _ajax_nonce: inc2734_wp_share_buttons_facebook._ajax_nonce,
        post_id: this.params.post_id,
        url: this.params.url
      }).request().done(function (json) {
        _this2.button.find('.wp-share-button__count').text(json.count);
      });
    }
  }, {
    key: 'popup',
    value: function popup() {
      new Inc2734_WP_Share_Buttons_Popup(this.button.find('.wp-share-button__button'), 'Share on Facebook', 670, 400);
    }
  }]);
  return Inc2734_WP_Share_Buttons_Facebook;
}(Inc2734_WP_Share_Buttons_Button);

'use strict';

var Inc2734_WP_Share_Buttons_Twitter = function (_Inc2734_WP_Share_But) {
  inherits(Inc2734_WP_Share_Buttons_Twitter, _Inc2734_WP_Share_But);

  function Inc2734_WP_Share_Buttons_Twitter(button, params) {
    classCallCheck(this, Inc2734_WP_Share_Buttons_Twitter);
    return possibleConstructorReturn(this, (Inc2734_WP_Share_Buttons_Twitter.__proto__ || Object.getPrototypeOf(Inc2734_WP_Share_Buttons_Twitter)).call(this, button, params));
  }

  createClass(Inc2734_WP_Share_Buttons_Twitter, [{
    key: 'count',
    value: function count() {
      var _this2 = this;

      new Inc2734_WP_Share_Buttons_Share_Count(inc2734_wp_share_buttons_twitter.endpoint, 'json', {
        action: inc2734_wp_share_buttons_twitter.action,
        _ajax_nonce: inc2734_wp_share_buttons_twitter._ajax_nonce,
        post_id: this.params.post_id,
        url: this.params.url
      }).request().done(function (json) {
        _this2.button.find('.wp-share-button__count').text(json.count);
      });
    }
  }, {
    key: 'popup',
    value: function popup() {
      new Inc2734_WP_Share_Buttons_Popup(this.button.find('.wp-share-button__button'), 'Share on Twitter', 550, 400);
    }
  }]);
  return Inc2734_WP_Share_Buttons_Twitter;
}(Inc2734_WP_Share_Buttons_Button);

'use strict';

var Inc2734_WP_Share_Buttons_Hatena = function (_Inc2734_WP_Share_But) {
  inherits(Inc2734_WP_Share_Buttons_Hatena, _Inc2734_WP_Share_But);

  function Inc2734_WP_Share_Buttons_Hatena(button, params) {
    classCallCheck(this, Inc2734_WP_Share_Buttons_Hatena);
    return possibleConstructorReturn(this, (Inc2734_WP_Share_Buttons_Hatena.__proto__ || Object.getPrototypeOf(Inc2734_WP_Share_Buttons_Hatena)).call(this, button, params));
  }

  createClass(Inc2734_WP_Share_Buttons_Hatena, [{
    key: 'count',
    value: function count() {
      var _this2 = this;

      new Inc2734_WP_Share_Buttons_Share_Count(inc2734_wp_share_buttons_hatena.endpoint, 'json', {
        action: inc2734_wp_share_buttons_hatena.action,
        _ajax_nonce: inc2734_wp_share_buttons_hatena._ajax_nonce,
        post_id: this.params.post_id,
        url: this.params.url
      }).request().done(function (json) {
        _this2.button.find('.wp-share-button__count').text(json.count);
      });
    }
  }, {
    key: 'popup',
    value: function popup() {
      new Inc2734_WP_Share_Buttons_Popup(this.button.find('.wp-share-button__button'), 'Hatena Bookmark', 510, 420);
    }
  }]);
  return Inc2734_WP_Share_Buttons_Hatena;
}(Inc2734_WP_Share_Buttons_Button);

'use strict';

var Inc2734_WP_Share_Buttons_Line = function (_Inc2734_WP_Share_But) {
  inherits(Inc2734_WP_Share_Buttons_Line, _Inc2734_WP_Share_But);

  function Inc2734_WP_Share_Buttons_Line(button, params) {
    classCallCheck(this, Inc2734_WP_Share_Buttons_Line);
    return possibleConstructorReturn(this, (Inc2734_WP_Share_Buttons_Line.__proto__ || Object.getPrototypeOf(Inc2734_WP_Share_Buttons_Line)).call(this, button, params));
  }

  createClass(Inc2734_WP_Share_Buttons_Line, [{
    key: 'popup',
    value: function popup() {
      new Inc2734_WP_Share_Buttons_Popup(this.button.find('.wp-share-button__button'), 'Send to LINE', 670, 530);
    }
  }]);
  return Inc2734_WP_Share_Buttons_Line;
}(Inc2734_WP_Share_Buttons_Button);

'use strict';

var Inc2734_WP_Share_Buttons_Pocket = function (_Inc2734_WP_Share_But) {
  inherits(Inc2734_WP_Share_Buttons_Pocket, _Inc2734_WP_Share_But);

  function Inc2734_WP_Share_Buttons_Pocket(button, params) {
    classCallCheck(this, Inc2734_WP_Share_Buttons_Pocket);
    return possibleConstructorReturn(this, (Inc2734_WP_Share_Buttons_Pocket.__proto__ || Object.getPrototypeOf(Inc2734_WP_Share_Buttons_Pocket)).call(this, button, params));
  }

  createClass(Inc2734_WP_Share_Buttons_Pocket, [{
    key: 'popup',
    value: function popup() {
      new Inc2734_WP_Share_Buttons_Popup(this.button.find('.wp-share-button__button'), 'Pocket', 550, 350);
    }
  }]);
  return Inc2734_WP_Share_Buttons_Pocket;
}(Inc2734_WP_Share_Buttons_Button);

'use strict';

var Inc2734_WP_Share_Buttons_Feedly = function (_Inc2734_WP_Share_But) {
  inherits(Inc2734_WP_Share_Buttons_Feedly, _Inc2734_WP_Share_But);

  function Inc2734_WP_Share_Buttons_Feedly(button, params) {
    classCallCheck(this, Inc2734_WP_Share_Buttons_Feedly);
    return possibleConstructorReturn(this, (Inc2734_WP_Share_Buttons_Feedly.__proto__ || Object.getPrototypeOf(Inc2734_WP_Share_Buttons_Feedly)).call(this, button, params));
  }

  createClass(Inc2734_WP_Share_Buttons_Feedly, [{
    key: 'count',
    value: function count() {
      var _this2 = this;

      new Inc2734_WP_Share_Buttons_Share_Count(inc2734_wp_share_buttons_feedly.endpoint, 'json', {
        action: inc2734_wp_share_buttons_feedly.action,
        _ajax_nonce: inc2734_wp_share_buttons_feedly._ajax_nonce,
        post_id: this.params.post_id,
        url: this.params.url
      }).request().done(function (json) {
        _this2.button.find('.wp-share-button__count').text(json.count);
      });
    }
  }]);
  return Inc2734_WP_Share_Buttons_Feedly;
}(Inc2734_WP_Share_Buttons_Button);

'use strict';

var Inc2734_WP_Share_Buttons = function Inc2734_WP_Share_Buttons() {
  classCallCheck(this, Inc2734_WP_Share_Buttons);

  $(function () {
    $('.wp-share-button--facebook').each(function (i, e) {
      new Inc2734_WP_Share_Buttons_Facebook($(e));
    });

    $('.wp-share-button--twitter').each(function (i, e) {
      new Inc2734_WP_Share_Buttons_Twitter($(e));
    });

    $('.wp-share-button--hatena').each(function (i, e) {
      new Inc2734_WP_Share_Buttons_Hatena($(e));
    });

    $('.wp-share-button--line').each(function (i, e) {
      new Inc2734_WP_Share_Buttons_Line($(e));
    });

    $('.wp-share-button--pocket').each(function (i, e) {
      new Inc2734_WP_Share_Buttons_Pocket($(e));
    });

    $('.wp-share-button--feedly').each(function (i, e) {
      new Inc2734_WP_Share_Buttons_Feedly($(e));
    });
  });
};

'use strict';

var Inc2734_WP_Pure_CSS_Gallery = function () {
  function Inc2734_WP_Pure_CSS_Gallery() {
    var _this = this;

    classCallCheck(this, Inc2734_WP_Pure_CSS_Gallery);

    $(function () {
      _this.images = $('a:not([class]) > img[class*="wp-image-"]');
      _this.generateLightbox();
    });
  }

  createClass(Inc2734_WP_Pure_CSS_Gallery, [{
    key: 'generateLightbox',
    value: function generateLightbox() {
      this.images.each(function (i, e) {
        var image = $(e);
        var anchor = image.parent();
        var href = anchor.attr('href');

        if (!href.match(image.attr('src').replace('/^([^\.]+)\.+?$/'))) {
          return true;
        }

        var remoteImg = new Image();
        remoteImg.src = href;
        var remoteImgWidth = remoteImg.width;
        var remoteImgHeight = remoteImg.height;

        if (!remoteImgWidth || !remoteImgHeight) {
          return true;
        }

        var id = 'wp-pre-css-gallery-lightbox-id-' + i;
        anchor.attr('href', '#' + id);

        var overlay = $('<div class="wp-pure-css-gallery-lightbox" id="' + id + '" />').append($('<a class="wp-pure-css-gallery-lightbox__close-btn" href="#_">&times</a>')).append($('<a class="wp-pure-css-gallery-lightbox__image-wrapper" href="#_" />').append($('<div class="wp-pure-css-gallery-lightbox__image" />').css({
          backgroundImage: 'url(' + href + ')',
          height: remoteImgHeight,
          width: remoteImgWidth
        })));

        anchor.after(overlay);
      });
    }
  }]);
  return Inc2734_WP_Pure_CSS_Gallery;
}();

'use strict';

var FixAdminBar = function () {
  function FixAdminBar() {
    var _this = this;

    classCallCheck(this, FixAdminBar);

    this.min = 599;
    this.container = $('.l-container');
    this.header = $('.l-header');
    this.contents = $('.l-contents');

    $(function () {
      _this.adminBar = $('#wpadminbar');

      if (_this.adminBar.length) {
        _this.fixHeaderPosition();
        _this.fixStickyFooter();
        _this.fixDisableWindowScroll();
        _this.setListener();
      }
    });
  }

  createClass(FixAdminBar, [{
    key: 'setListener',
    value: function setListener() {
      var _this2 = this;

      $(window).resize(function () {
        _this2.fixHeaderPosition();
        _this2.fixStickyFooter();
        _this2.fixDisableWindowScroll();
      });

      $(window).scroll(function () {
        _this2.fixHeaderPosition();
      });
    }
  }, {
    key: 'fixHeaderPosition',
    value: function fixHeaderPosition() {
      if (-1 !== $.inArray(this.header.attr('data-l-header-type'), ['sticky', 'overlay'])) {
        var scroll = $(window).scrollTop();
        var adminbar_height = parseInt(this.adminBar.outerHeight());

        if (this.min > $(window).outerWidth()) {
          if (scroll >= this.adminBar.outerHeight()) {
            this.header.css('top', 0);
            this.header.css('position', '');
          } else {
            if ('sticky' === this.header.attr('data-l-header-type')) {
              this.header.css('position', 'relative');
              this.header.css('top', '');
            } else if ('overlay' === this.header.attr('data-l-header-type')) {
              this.header.css('position', '');
              this.header.css('top', adminbar_height + scroll * -1);
            } else {
              this.header.css('top', adminbar_height + scroll * -1);
            }
            $('html').attr('data-scrolled', false);
            this.contents.css('margin-top', 0);
          }
        } else {
          this.header.css('top', '');
          this.header.css('position', '');
        }
      }
    }
  }, {
    key: 'fixStickyFooter',
    value: function fixStickyFooter() {
      if ('true' == $('html').attr('data-sticky-footer')) {
        var adminbar_height = parseInt(this.adminBar.outerHeight());
        this.container.css('min-height', 'calc(100vh - ' + adminbar_height + 'px)');
      }
    }
  }, {
    key: 'fixDisableWindowScroll',
    value: function fixDisableWindowScroll() {
      if ('false' == $('html').attr('data-window-scroll')) {
        var adminbar_height = parseInt(this.adminBar.outerHeight());
        this.container.css('max-height', 'calc(100vh - ' + adminbar_height + 'px)');
      }
    }
  }]);
  return FixAdminBar;
}();

'use strict';

var SnowMonkeyWpawPickupSlider = function SnowMonkeyWpawPickupSlider() {
  classCallCheck(this, SnowMonkeyWpawPickupSlider);

  $(function () {
    var slider = $('.wpaw-pickup-slider__canvas');

    slider.slick('slickSetOption', 'arrows', true, true);
    slider.slick('slickSetOption', 'pauseOnFocus', false, true);
    slider.slick('slickSetOption', 'pauseOnHover', false, true);

    slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      slider.find('.slick-slide').removeClass('pan');
      slider.find('.slick-slide').eq(currentSlide).addClass('pan');
    });
  });
};

'use strict';

var SnowMonkeyWidgetItemExpander = function SnowMonkeyWidgetItemExpander() {
  classCallCheck(this, SnowMonkeyWidgetItemExpander);

  $(function () {
    var parents = $('.c-widget li:has(.children, .sub-menu)');

    parents.each(function (i, e) {
      var parent = $(e);

      parent.prepend('<button class="children-expander" data-is-expanded="false"></button>');
      parent.find('.children, .sub-menu').attr('data-is-hidden', 'true');

      parent.children('.children-expander').click(function (event) {
        if ('false' === $(event.target).attr('data-is-expanded')) {
          $(event.target).attr('data-is-expanded', 'true');
          parent.children('.children, .sub-menu').attr('data-is-hidden', 'false');
        } else {
          parent.find('.children-expander').attr('data-is-expanded', 'false');
          parent.find('.children, .sub-menu').attr('data-is-hidden', 'true');
        }
      });
    });
  });
};

'use strict';

var SnowMonkeyHeader = function () {
  function SnowMonkeyHeader() {
    var _this = this;

    classCallCheck(this, SnowMonkeyHeader);

    $(function () {
      _this.min = 1023;
      _this.header = $('.l-header');
      _this.contents = $('.l-contents');
      _this.defaultType = _this.header.attr('data-snow-monkey-default-header-position');

      _this.init();

      $(window).resize(function () {
        _this.init();
      });
    });
  }

  createClass(SnowMonkeyHeader, [{
    key: 'init',
    value: function init() {
      if ('sticky' !== this.defaultType && 'overlay' !== this.defaultType) {
        return;
      }

      if (this.min < $(window).width()) {
        if ('sticky' === this.defaultType || 'overlay' === this.defaultType) {
          this.header.attr('data-l-header-type', '');
          this.contents.css('margin-top', '');
        }
      } else {
        this.header.attr('data-l-header-type', this.defaultType);
        if ('fixed' === this.header.css('position') || 'absolute' === this.header.css('position')) {
          if ('sticky' === this.defaultType) {
            var headerHeight = this.header.outerHeight();
            this.contents.css('margin-top', headerHeight + 'px');
          }
        }
      }
    }
  }]);
  return SnowMonkeyHeader;
}();

'use strict';

var SnowMonkeyDropNav = function () {
  function SnowMonkeyDropNav() {
    var _this = this;

    classCallCheck(this, SnowMonkeyDropNav);

    $(function () {
      _this.header = $('.l-header');
      _this.nav = $('.l-header__drop-nav');
      _this.min = 1023;
      _this.defaultWindowWidth = $(window).width();
      _this.gNavClass = '.p-global-nav';

      if (_this._isUpdateVisibility()) {
        _this._showGnav();
        _this._hideDropNav();
      }

      _this.onScroll();
      _this.onResize();
    });
  }

  createClass(SnowMonkeyDropNav, [{
    key: 'onScroll',
    value: function onScroll() {
      var _this2 = this;

      $(window).scroll(function () {
        if (_this2.min < $(window).width()) {
          if (_this2.header.outerHeight() < $(window).scrollTop()) {
            if (_this2._isUpdateVisibility()) {
              _this2._hideGnav();
              _this2._showDropNav();
              return;
            }
          }
        }

        if (_this2._isUpdateVisibility()) {
          _this2._showGnav();
          _this2._hideDropNav();
        }
      });
    }
  }, {
    key: 'onResize',
    value: function onResize() {
      var _this3 = this;

      $(window).resize(function () {
        if ($(window).width() === _this3.defaultWindowWidth) {
          return;
        }

        if (_this3._isUpdateVisibility()) {
          _this3._showGnav();
          _this3._hideDropNav();
        }
      });
    }
  }, {
    key: '_isUpdateVisibility',
    value: function _isUpdateVisibility() {
      //if ('sticky' === this.header.attr('data-l-header-type') || 'overlay' === this.header.attr('data-l-header-type')) {
      if (false === snow_monkey_header_position_only_mobile) {
        return false;
      }
      //}

      return true;
    }
  }, {
    key: '_showGnav',
    value: function _showGnav() {
      this._show($(this.gNavClass));
    }
  }, {
    key: '_hideGnav',
    value: function _hideGnav() {
      this._hide($(this.gNavClass));
    }
  }, {
    key: '_showDropNav',
    value: function _showDropNav() {
      this._show(this.nav);
      this._show(this.nav.find(this.gNavClass));
    }
  }, {
    key: '_hideDropNav',
    value: function _hideDropNav() {
      this._hide(this.nav);
      this._hide(this.nav.find(this.gNavClass));
    }
  }, {
    key: '_show',
    value: function _show(target) {
      target.attr('aria-hidden', 'false');
    }
  }, {
    key: '_hide',
    value: function _hide(target) {
      target.attr('aria-hidden', 'true');
    }
  }]);
  return SnowMonkeyDropNav;
}();

var SmoothScroll = function () {
  function SmoothScroll(target) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, SmoothScroll);

    this.target = target;

    var defaults$$1 = {
      duration: 1000,
      easing: 'easeOutQuint',
      offset: 0,
      hash: true
    };
    this.params = $.extend(defaults$$1, params);
  }

  createClass(SmoothScroll, [{
    key: '_getTargetBody',
    value: function _getTargetBody() {
      var wst = $(window).scrollTop();
      if (0 === wst) {
        $(window).scrollTop(wst + 1);
      }

      if (0 < $('html').scrollTop()) {
        return $('html');
      } else if (0 < $('body').scrollTop()) {
        return $('body');
      }
    }
  }, {
    key: '_scroll',
    value: function _scroll(event, body) {
      var _this = this;

      var targetHash = event.currentTarget.hash.split('%').join('\\%').split('(').join('\\(').split(')').join('\\)');
      var offset = $(targetHash).eq(0).offset();

      if (!targetHash || !offset) {
        return;
      }

      var scrollOffset = 0;
      if (typeof this.params.offset === 'function') {
        scrollOffset = this.params.offset();
      } else {
        scrollOffset = this.params.offset;
      }

      body.animate({
        scrollTop: offset.top - scrollOffset
      }, this.params.duration, this.params.easing, function () {
        if (true === _this.params.hash) {
          window.history.pushState('', '', targetHash);
        }
      });
    }
  }, {
    key: '_disableMouseWheel',
    value: function _disableMouseWheel(body) {
      if (window.addEventListener) {
        window.addEventListener('DOMMouseScroll', function () {
          body.stop(true);
        }, false);
      }
      window.onmousewheel = document.onmousewheel = function () {
        body.stop(true);
      };
    }
  }, {
    key: 'off',
    value: function off() {
      this.target.unbind('click.SmoothScroll');
    }
  }, {
    key: 'on',
    value: function on() {
      var _this2 = this;

      $(this.target).each(function (i, e) {
        $(e).on('click.SmoothScroll', function (event) {
          event.preventDefault();

          var body = _this2._getTargetBody();
          if (!body) {
            return;
          }

          _this2._scroll(event, body);
          _this2._disableMouseWheel(body);
        });
      });
    }
  }]);
  return SmoothScroll;
}();

/**
 * Name: jquery.smoothscroll
 * Author: Takashi Kitajima (inc2734)
 * Author URI: https://2inc.org
 * License: MIT
 *
 * easing: http://gsgd.co.uk/sandbox/jquery/easing/
 * @param { duration, easing, offset, hash)
 */

'use strict';

(function ($$$1) {
  var methods = {
    init: function init(params) {
      var _SmoothScroll = new SmoothScroll(this, params);
      _SmoothScroll.on();
      return this;
    },

    off: function off() {
      var _SmoothScroll = new SmoothScroll(this);
      _SmoothScroll.off();
      return this;
    }
  };

  $$$1.fn.SmoothScroll = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if ((typeof method === 'undefined' ? 'undefined' : _typeof(method)) === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $$$1.error('Method ' + method + ' does not exist');
    }
  };
})(jQuery);

'use strict';

var SnowMonkeyPageTopScroll = function () {
  function SnowMonkeyPageTopScroll() {
    var _this = this;

    classCallCheck(this, SnowMonkeyPageTopScroll);

    $(function () {
      _this.pageTop = $('.c-page-top');

      $(window).load(function () {
        _this._updatePageTopBtnPosition();
        _this._setSmoothScrollEvent();
      });

      $(window).resize(function () {
        _this._updatePageTopBtnPosition();
      });

      $(window).scroll(function () {
        if (500 > $(window).scrollTop()) {
          _this.pageTop.attr('aria-hidden', 'true');
        } else {
          _this.pageTop.attr('aria-hidden', 'false');
        }
      });
    });
  }

  createClass(SnowMonkeyPageTopScroll, [{
    key: '_updatePageTopBtnPosition',
    value: function _updatePageTopBtnPosition() {
      if ($('.p-footer-sticky-nav').length) {
        this.pageTop.css('bottom', $('.p-footer-sticky-nav')[0].offsetHeight);
      }
    }
  }, {
    key: '_setSmoothScrollEvent',
    value: function _setSmoothScrollEvent() {
      this.pageTop.find('a[href^="#"]').SmoothScroll({
        duration: 1000,
        easing: 'easeOutQuint',
        offset: function () {
          return parseInt($('html').css('margin-top'));
        }()
      });

      $('.wpco a[href^="#"]').SmoothScroll({
        duration: 1000,
        easing: 'easeOutQuint',
        offset: function offset() {
          var scroll = $(window).scrollTop();
          var adminBarHeight = parseInt($('html').css('margin-top'));
          var headerType = $('.l-header').attr('data-l-header-type');
          var getAdminBarHeight = function getAdminBarHeight() {
            if ('fixed' === $('#wpadminbar').css('position')) {
              return parseInt($('html').css('margin-top'));
            }
            return 0;
          };

          if ('sticky' === headerType || 'overlay' === headerType) {
            return $('.l-header').outerHeight() + getAdminBarHeight();
          }

          if ('false' === $('.l-header__drop-nav').attr('aria-hidden')) {
            return $('.l-header__drop-nav .p-global-nav').outerHeight() + getAdminBarHeight();
          }
          return getAdminBarHeight();
        }
      });
    }
  }]);
  return SnowMonkeyPageTopScroll;
}();

'use strict';

var SnowMonkeyFooterStickyNav = function () {
  function SnowMonkeyFooterStickyNav() {
    var _this = this;

    classCallCheck(this, SnowMonkeyFooterStickyNav);

    $(function () {
      _this.nav = $('.p-footer-sticky-nav');

      _this._init();

      $(window).on('load resize', function () {
        _this._init();
      });
    });
  }

  createClass(SnowMonkeyFooterStickyNav, [{
    key: '_init',
    value: function _init() {
      if ('none' !== this.nav.css('display')) {
        $('body').css('margin-bottom', this.nav.outerHeight());
      } else {
        $('body').css('margin-bottom', '');
      }
    }
  }]);
  return SnowMonkeyFooterStickyNav;
}();

'use strict';

var SnowMonkeySlick = function SnowMonkeySlick() {
  classCallCheck(this, SnowMonkeySlick);

  $(function () {
    $('.slick-prev').prepend($('<span />').prepend($('<i class="fas fa-angle-left" />')));
    $('.slick-next').prepend($('<span />').prepend($('<i class="fas fa-angle-right" />')));
  });
};

/**
 * Name: jquery.contents-outline
 * Author: Takashi Kitajima (inc2734)
 * Author URI: https://2inc.org
 * License: MIT
 *
 * @param { headings, moveToBefore1stHeading }
 */

'use strict';

(function ($$$1) {
  $$$1.fn.contentsOutline = function (params) {
    var params = $$$1.extend({
      headings: $$$1('h2, h3, h4, h5, h6'),
      moveToBefore1stHeading: true
    }, params);

    return this.each(function (i, e) {
      var wrapper = $$$1(e);
      var co = wrapper.find('.contents-outline');

      var outlines = $$$1('<ol />');

      (function () {
        params.headings.each(function (i, e) {
          if (!$$$1(e).attr('id')) {
            $$$1(e).attr('id', 'co-index-' + i);
          }
          outlines = _createTree(outlines, $$$1(e));
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
            parent.append($$$1('<li />').append(children));
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
        return $$$1('<li />').append($$$1('<a />').text(heading.text()).attr('href', '#' + heading.attr('id')));
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
          _parent = $$$1('<ol />');
        } else {
          _parent = parent.children('li:last-child').children('ol');
        }
        return _createTree(_parent, heading, hierarchical + 1);
      }
    });
  };
})(jQuery);

(function ($$$1) {
  $$$1('.wpaw-pickup-slider__canvas').each(function (i, e) {
    var slider = $$$1(e);

    slider.on('init setPosition', function (event, slick) {
      setSliderHeight();
    });

    function setSliderHeight() {
      var sliderHeight = 0;
      slider.find('.wpaw-pickup-slider__item').css('min-height', '').each(function (i, e) {
        var slide = $$$1(e);
        var recommendHeight = slide.outerWidth() * 0.5625;
        var naturalHeight = slide.outerHeight();
        var height = recommendHeight;
        if (recommendHeight < naturalHeight) {
          height = naturalHeight;
        }
        if (sliderHeight < height) {
          sliderHeight = height;
        }
      }).css('min-height', sliderHeight);
    }
  });
})(jQuery);

(function ($$$1) {
  $$$1('.wpaw-slider__canvas').each(function (i, e) {
    var slider = $$$1(e);

    slider.on('init setPosition', function (event, slick) {
      setSliderHeight();
    });

    function setSliderHeight() {
      var sliderHeight = 0;
      slider.find('.wpaw-slider__item').css('min-height', '').each(function (i, e) {
        var slide = $$$1(e);
        var recommendHeight = slide.outerWidth() * 0.5625;
        var naturalHeight = slide.outerHeight();
        var height = recommendHeight;
        if (recommendHeight < naturalHeight) {
          height = naturalHeight;
        }
        if (sliderHeight < height) {
          sliderHeight = height;
        }
      }).css('min-height', sliderHeight);
    }
  });
})(jQuery);

'use strict';

'use strict';

new BasisStickyHeader();

new Inc2734_WP_Share_Buttons();

new Inc2734_WP_Pure_CSS_Gallery();

new FixAdminBar();

new SnowMonkeyWpawPickupSlider();

new SnowMonkeyWidgetItemExpander();

if (snow_monkey_header_position_only_mobile) {
  new SnowMonkeyHeader();
}

new SnowMonkeyDropNav();

new SnowMonkeyPageTopScroll();

new SnowMonkeyFooterStickyNav();

new SnowMonkeySlick();

$(function () {
  $('.l-sidebar-sticky-widget-area').sticky({
    breakpoint: 1024,
    offset: function () {
      if ('sticky' === $('.l-header').attr('data-l-header-type')) {
        return $('.l-header').outerHeight() + parseInt($('html').css('margin-top'));
      }
      return $('.l-header__drop-nav .p-global-nav').outerHeight() + parseInt($('html').css('margin-top'));
    }()
  });
});

$(function () {
  $('.c-page-header').backgroundParallaxScroll();
});

}(jQuery));

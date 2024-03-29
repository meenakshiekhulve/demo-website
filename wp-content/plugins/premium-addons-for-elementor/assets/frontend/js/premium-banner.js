

(function ($) {
    $(window).on('elementor/frontend/init', function () {

        var PremiumBannerHandler = elementorModules.frontend.handlers.Base.extend({

            getDefaultSettings: function () {

                return {
                    selectors: {
                        bannerImgWrap: '.premium-banner-ib',
                        bannerImg: 'img',
                    }
                }

            },

            getDefaultElements: function () {

                var selectors = this.getSettings('selectors');

                return {
                    $bannerImgWrap: this.$element.find(selectors.bannerImgWrap),
                    $bannerImg: this.$element.find(selectors.bannerImg)
                }

            },

            bindEvents: function () {

                var _this = this;

                _this.elements.$bannerImgWrap.hover(function () {
                    _this.elements.$bannerImg.addClass("active");
                }, function () {
                    _this.elements.$bannerImg.removeClass("active");
                });

                this.run();
            },

            run: function () {

                var $bannerElement = this.$element;

                //Button grow hover effect.
                var $btnGrow = $bannerElement.find('.premium-button-style6-bg');

                if ($btnGrow.length !== 0 && $bannerElement.hasClass('premium-mouse-detect-yes')) {
                    $bannerElement.on('mouseenter mouseleave', '.premium-button-style6', function (e) {

                        var parentOffset = $(this).offset(),
                            left = e.pageX - parentOffset.left,
                            top = e.pageY - parentOffset.top;

                        $btnGrow.css({
                            top: top,
                            left: left,
                        });

                    });
                }

                if ($bannerElement.hasClass("premium-banner-tilt-yes")) {

                    var reverse = $bannerElement.hasClass("premium-banner-tilt-rev-yes");

                    UniversalTilt.init({
                        elements: $bannerElement.closest(".elementor-widget"),
                        settings: {
                            reverse: reverse
                        },
                        callbacks: {
                            onMouseLeave: function (el) {
                                el.style.boxShadow = "0 45px 100px rgba(255, 255, 255, 0)";
                            },
                            onDeviceMove: function (el) {
                                el.style.boxShadow = "0 45px 100px rgba(255, 255, 255, 0.3)";
                            }
                        }
                    });

                }
            }

        });

        elementorFrontend.elementsHandler.attachHandler('premium-addon-banner', PremiumBannerHandler);
    });

})(jQuery);

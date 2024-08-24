app = angular.module("laxmigroup", ['ngRoute', /*'ngIdle',*/ 'base64', 'ngStorage', 'ngValidate', 'ngSanitize', 'ngFileUpload', /*'checklist-model',*/ "ui.bootstrap", /*"angular-google-analytics",*/ 'ksSwiper', /*'hl.sticky',*/ 'ui.swiper', 'ngMaterial' /*'ngMessages',*/ /*'socialbase.sweetAlert',*/ /*'rzModule',*/ /*'socialLogin',*/ /*'angular-nicescroll',*/ /*'ui.bootstrap.datetimepicker',*/ /*'angular-progress-arc'*/]);
/*ngImgCrop*/

app.$inject = ['SweetAlert'];

//var base_url = 'http://192.168.1.26/laxmigroup/';
//var base_url = 'http://192.168.84.246/laxmigroup/';
//var base_url = 'https://www.laxmigroup.co/';
//var base_url = 'https://www.saltpixels.in/laxmigroup/';
var base_url = 'https://www.laxmigroup.co/beta/';

    var apiUrl = "https://www.reecosys.com/api/Services/";
var apiUrl_admin = "https://www.reecosys.com/api/Admin/";

app.config(['$locationProvider', '$routeProvider', '$validatorProvider', /*'AnalyticsProvider',*/ /*'socialProvider',*/
    function ($locationProvider, $routeProvider, $validatorProvider /*AnalyticsProvider,*/ /*socialProvider*/) {

        // /** Adding validation method for password **/
        // $validatorProvider.addMethod("pwcheck", function(value, element, param) {
        // 	return (/[A-Z]/.test(value) && /\d/.test(value) && /[$@$!%*#?&]/.test(value));
        // }, 'Password must contain 1 special character, 1 Capital letter and 1 Digit!');

        /** Adding validation method for letters only **/
        // $validatorProvider.addMethod("lettersonly", function(value, element) {
        // 	return this.optional(element) || /^[a-z]+$/i.test(value);
        // }, "Special characters and numbers are not allowed!");

        // /** Adding validation method for letters only **/
        // $validatorProvider.addMethod("alphaonly", function(value, element) {
        // 	return this.optional(element) || /^[a-zA-Z\s]+$/i.test(value);
        // }, "Special characters and numbers are not allowed!");

        $locationProvider.hashPrefix('');

        $validatorProvider.addMethod('notEqualTo', function (value, element, param) {
            var target = $(param);
            if (this.settings.onfocusout && target.not(".validate-equalTo-blur").length) {
                target.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
                    $(element).valid();
                });
            }
            return value !== target.val();
        }, 'Please enter other string, string should be diffrent.');

        $validatorProvider.addMethod('validate_name', function (value, element) {
            /*return this.optional(element) || /^http:\/\/mydomain.com/.test(value);*/
            return (/^[A-Za-z]?[A-Za-z ]*$/.test(value));
            // has a digit
        }, 'Please enter valid name.');

        $validatorProvider.addMethod('floating_val', function (value, element) {
            /*return this.optional(element) || /^http:\/\/mydomain.com/.test(value);*/
            return (/^\d{1,5}([\.](\d{1,4})?)?$/.test(value));
            // has a digit
        }, 'Please enter valid value.');

        $routeProvider.when("/", {
            templateUrl: "templates/home.html?ver=29-03-2023-v1",
            controller: "homeController",
            page_title: "We are a leading Real Estate builder & property developers in Ahmedabad ",
            page_description: "Home",
        })

        $routeProvider.when("/projects/", { 
            templateUrl: "templates/list.html?ver=29-03-2023-v1",
            controller: "listController",
            page_title: "Projects",
            page_description: "Projects",
        })

        $routeProvider.when("/completed-projects/", {
            templateUrl: "templates/completedlist.html?ver=17-05-2023-v1",
            controller: "listController",
            page_title: "Completed Projects",
            page_description: "Completed Projects",
        })

        $routeProvider.when("/about-us/", {
            templateUrl: "templates/aboutus.html?ver=29-03-2023-v1",
            controller: "aboutusController",
            page_description: "About",
        })

        $routeProvider.when("/contact-us/", {
            templateUrl: "templates/contact.html?ver=29-03-2023-v1",
            controller: "contactController",
            page_description: "Contact",
        })

        $routeProvider.when("/investors/", {
            templateUrl: "templates/investors.html?ver=29-03-2023-v1",
            controller: "investorsController",
            page_title: " Laxmi-Lifestyle Investors",
            page_description: "Investors",
        })

        $routeProvider.when("/redevelopment/", {
            templateUrl: "templates/redevelopment.html?ver=29-03-2023-v1",
            controller: "redevelopmentController",
            page_title: "",
        })

        $routeProvider.when("/nricorner/", {
            templateUrl: "templates/nri.html?ver=29-03-2023-v1",
            controller: "nriController",
            page_title: "",
        })

        $routeProvider.when("/channelpartner/", {
            templateUrl: "templates/channelpartner.html?ver=29-03-2023-v1",
            controller: "channelpartnerController",
            page_title: "",
        })

        $routeProvider.when("/vendor/", {
            templateUrl: "templates/vendor.html?ver=29-03-2023-v1",
            controller: "vendorController",
            page_title: "",
        })

        $routeProvider.when("/career/", {
            templateUrl: "templates/career.html?ver=29-03-2023-v1",
            controller: "careerController",
            page_title: "",
        })

        $routeProvider.when("/invest-with-us/", {
            templateUrl: "templates/investment.html?ver=29-03-2023-v1",
            controller: "investmentController",
            page_title: "",
        })

        $routeProvider.when("/propose-land/", {
            templateUrl: "templates/investment.html?ver=29-03-2023-v1",
            controller: "investmentController",
            page_title: "",
        })

        $routeProvider.when("/residential/", {
            templateUrl: "templates/residential_project.html?ver=29-03-2023-v1",
            controller: "residentialController",
            page_title: "Residential Projects",
        })

        $routeProvider.when("/commercial/", {
            templateUrl: "templates/residential_project.html?ver=29-03-2023-v1",
            controller: "residentialController",
            page_title: "Commercial Projects",
        })

        $routeProvider.when("/terms-and-conditions/", {
            templateUrl: "templates/terms.html?ver=29-03-2023-v1",
            controller: "termsController",
            page_title: "",
        })

        $routeProvider.when("/privacy-policy/", {
            templateUrl: "templates/privacy.html?ver=29-03-2023-v1",
            controller: "privacyController",
            page_title: "",
        })

        $routeProvider.when("/cookie/", {
            templateUrl: "templates/cookie.html?ver=29-03-2023-v1",
            controller: "cookieController",
            page_title: "",
        })

        $routeProvider.when("/feedback", {
            templateUrl: "templates/feedback.html??ver=29-03-2023-v1",
            controller: 'feedbackController',
            page_title: "Feedback",
        })

        $routeProvider.when("/articles/", {
            templateUrl: "templates/bloglist.html?ver=10-11-2023",
            controller: "bloglistController",
            page_title: "Laxmi Group Articles | Laxmi Group Ahmedabad",
        })

        $routeProvider.when("/project/:slug/", {
            templateUrl: "templates/projects/project-detail.html?ver=29-03-2023-v1",
            controller: "projectdetailController",
            page_title: "Projects",
            project_detail_flag: "project_detail_flag",
        })

        $routeProvider.when("/project/:slug/thankyou/", {
            templateUrl: "templates/projects/thankyou.html?ver=29-03-2023-v1",
            controller: "thankyouController",
            page_title: "Thank You",
            thankyouPage: "thankyouPage",
        })

        $routeProvider.when("/:slug/thankyou/", {
            templateUrl: "templates/thank_you.html?ver=29-03-2023-v1",
            controller: "thank_youController",
            page_title: "Thank You",
            thankyouPage: "thankyouPage",
        })

        $routeProvider.when("/articles/:slug", {
            templateUrl: "templates/blog.html?ver=10-11-2023",
            controller: "blogController",
            page_title: "",
        })

        $routeProvider.when("/:slug", {
            templateUrl: "templates/venture.html?ver=29-03-2023-v1",
            controller: "ventureController",
            page_title: "",
        })

        $routeProvider.when("/about-us/:slug", {
            templateUrl: "templates/profile.html?ver=29-03-2023-v1",
            controller: "profileController",
            page_title: "",
        })

            .otherwise({
                redirectTo: "/"
            });

        $locationProvider.html5Mode(true);
    }
]);

app.run(function ($timeout, $rootScope, $location, $localStorage, $http, $window, $routeParams, $filter) {
    $rootScope.$on('$routeChangeStart', function (evt, current, previous, $filter, next) {
        // $rootScope.page_title = "";

        $rootScope.page_load_start = true;
        $rootScope.load_start = true;
        // $rootScope.loading_bar_fun();

        // angular.element(".loading_body").class("opacity": "0");

        if ($rootScope.thankyouPage && !$rootScope.$storage.thank_you_redirect) {
            $location.path('/');
        }
        $timeout(function () {
            $rootScope.$storage.thank_you_redirect = false;
        }, 1000);

        $rootScope.base_url = base_url;
        $rootScope.screenWidth = screen.width;
        $rootScope.activePath = $location.path();
        $rootScope.pageContent = "";
        $rootScope.category_get = "";
        $rootScope.dropdown_category_get = "";
        $window.scrollTo(0, 0);
        $rootScope.page_title = current.$$route.page_title ? current.$$route.page_title : "";
        $rootScope.page_description = current.$$route.page_description ? current.$$route.page_description : "";
        $rootScope.remove_product_hover = current.$$route.remove_product_hover ? current.$$route.remove_product_hover : "";

        $rootScope.project_detail_flag = current.$$route.project_detail_flag;
        $rootScope.page_flag = current.$$route.page_flag;
        $rootScope.common_page_list = {};
        $rootScope.is_commonpage_loading = true;

        /*if(!$routeParams.product_slug || $rootScope.activePath == "/"){
            $(".zoomContainer").remove();
        }*/
    });

    $rootScope.$on('$routeChangeSuccess', function (evt, current, previous) {
        $timeout(function () {
            $window.scrollTo(0, 0);
            $rootScope.page_load_start = false;
        }, 1000);

        // $window.scrollTo(0, 0);
        // $rootScope.page_load_start = false;

        $rootScope.inquire_popup_web_toggleF = false;
        $rootScope.country_code_clickF = false;
        $rootScope.view_moreless_toggleF = false;
        $rootScope.view_moreless2_toggleF = false;
        $rootScope.mobile_menu_toggleF = false;
        $rootScope.project_list_click_f = false;
        $rootScope.project_list_click_f2 = false;
        $rootScope.dropdown_category_get_f = false;
        $rootScope.open_contact_dropdown_f = false;
        $rootScope.project_detail_dropdown_f = false;
        $rootScope.ventures_click_f = false;
        $rootScope.ventures_click2_f = false;
        $rootScope.ventures_click2_f = false;
        $rootScope.thankyouPage = current.$$route.thankyouPage;
        
        $('.navigation-wrapper-div .content_accordian').hide();
        $('.nav-li-flex').removeClass('active');
        $(".accordion_click").removeClass("active");
        $timeout(function () {
            $rootScope.getHeight();
        }, 1000);

    });

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        if (next.indexOf('/uploads/') > 0) {
            event.preventDefault();
        }
    });

});

app.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.ngEnter, {
                        'event': event
                    });
                });

                event.preventDefault();
            }
        });
    };
});

app.directive('numbersOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9]/g, '');

                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});

app.filter('replace', [function () {

    return function (input, from, to) {

        if (input === undefined) {
            return;
        }

        var regex = new RegExp(from, 'g');
        return input.replace(regex, to);

    };

}]);

app.directive('lettersOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^a-zA-Z ]/g, '');

                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});

/*app.directive('hires', function () {
    return {
        restrict: 'A',
        scope: {
            hires: '@'
        },
        link: function (scope, element, attrs) {
            element.one('load', function () {
                element.attr('src', scope.hires);
            });
        }
    };
});*/

app.directive('hires', function () {
    return {
        restrict: 'A',
        scope: {
            hires: '@'
        },
        link: function (scope, element, attrs) {
            element.addClass("lazyLoad_loadd");
            element.one('load', function () {
                setTimeout(function () {
                    element.attr('src', scope.hires);
                    element.removeClass("lazyLoad_loadd");
                    element.addClass("lazyLoad_load");
                }, 500)
            });
        }
    };
});

app.directive("limitTo", [function () {
    return {
        restrict: "A",
        link: function (scope, elem, attrs) {
            var limit = parseInt(attrs.limitTo);
            angular.element(elem).on("keypress", function (e) {
                if (this.value.length == limit) e.preventDefault();
            });
        }
    }
}]);

app.directive("limitTo2", [function () {
    return {
        restrict: "C",
        link: function (scope, elem, attrs) {
            var limit = parseInt(attrs.limitTo);
            angular.element(elem).on("keypress", function (e) {
                if (this.value.length == limit) e.preventDefault();
            });
        }
    }
}]);

app.directive('ngSpace', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if (event.which === 32) {
                scope.$apply(function () {
                    scope.$eval(attrs.ngSpace, {
                        'event': event
                    });
                });

                event.preventDefault();
            }
        });
    };
});

app.directive('scrollOnClick', function () {
    return {
        restrict: 'EA',
        template: '<a title="Scroll to Top" class="scrollup">Scroll</a>',
        link: function (scope, $elm) {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 300) {
                    $('.scrollup').fadeIn();
                } else {
                    $('.scrollup').fadeOut();
                }
            });
            $elm.on('click', function () {
                $("html,body").animate({
                    scrollTop: '0px'
                }, "slow");
            });
        }
    }
});

app.directive('ngEscape', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if (event.which === 27) {
                scope.$apply(function () {
                    scope.$eval(attrs.ngEscape, {
                        'event': event
                    });
                });

                event.preventDefault();
            }
        });
    };
});

app.directive('focusClass', function () {
    return {
        link: function (scope, elem, attrs) {
            elem.find('input').on('focus', function () {
                elem.toggleClass(attrs.focusClass);
            }).on('blur', function () {
                elem.toggleClass(attrs.focusClass);
            });
        }
    }
});

app.directive('ngFile', ['$parse',
    function ($parse) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.bind('change', function () {
                    $parse(attrs.ngFile).assign(scope, element[0].files)
                    scope.$apply();
                });
            }
        };
    }
]);

app.directive('ngFileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var model = $parse(attrs.ngFileModel);
            var isMultiple = attrs.multiple;
            var modelSetter = model.assign;
            element.bind('change', function () {
                var values = [];
                angular.forEach(element[0].files, function (item) {
                    var value = {
                        name: item.name,
                        size: item.size,
                        extension: item.name.substring(item.name.lastIndexOf('.') + 1, item.name.length),
                        url: URL.createObjectURL(item),
                        _file: item
                    };
                    values.push(value);
                });
                scope.$apply(function () {
                    if (isMultiple) {
                        modelSetter(scope, values);
                    } else {
                        modelSetter(scope, values[0]);
                    }
                });
            });
        }
    };
}]);

app.filter('safeHtml', function ($sce) {
    return function (val) {
        return $sce.trustAsHtml(val);
    };
});

app.filter("trustUrl", ['$sce',
    function ($sce) {
        return function (recordingUrl) {
            return $sce.trustAsResourceUrl(recordingUrl);
        };
    }
]);

app.filter('sanitizer', ['$sce',
    function ($sce) {
        return function (url) {
            return $sce.trustAsHtml(url);
        };
    }
]);

app.filter('dateSuffix', function ($filter) {
    var suffixes = ["th", "st", "nd", "rd"];
    return function (input) {
        var dtfilter = $filter('date')(input, 'EEE, MMM dd');
        var day = parseInt(dtfilter.slice(-2));
        var relevantDigits = (day < 30) ? day % 20 : day % 30;
        var suffix = (relevantDigits <= 3) ? suffixes[relevantDigits] : suffixes[0];
        return dtfilter + suffix;
    };
});

app.directive('accordion', function () {
    return {
        restrict: 'ACE',
        link: function (scope, element, attributes) {
            var ele = angular.element(element)
            angular.element('#accordion .accordion_click.active').next('.content_accordian').show();
            ele.bind('click', function () {
                ele.toggleClass('active');
                ele.next('.content_accordian').stop().slideToggle();
                ele.parents('.career_position_list, .venture_menu_list').siblings().find('.accordion_click').removeClass('active');
                // ele.parents('.career_position_list').siblings().find('.content_accordian').slideUp();
                ele.parents('.career_position_list, .venture_menu_list').siblings().find('.content_accordian').css("display", "none");
                return false;
            });
        },
    }
});

app.directive('readMore', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        scope: true,
        link: function (scope, element, attrs) {

            scope.collapsed = false;

            scope.toggle = function () {
                scope.collapsed = !scope.collapsed;
            };

            attrs.$observe('ddTextCollapseText', function (text) {

                var maxLength = scope.$eval(attrs.ddTextCollapseMaxLength);

                if (text.length > maxLength) {
                    var firstPart = String(text).substring(0, maxLength);
                    var secondPart = String(text).substring(maxLength, text.length);

                    var firstSpan = $compile('<span>' + firstPart + '</span>')(scope);
                    var secondSpan = $compile('<span ng-if="collapsed">' + secondPart + '</span>')(scope);
                    var moreIndicatorSpan = $compile('<span ng-if="!collapsed">... </span>')(scope);
                    var lineBreak = $compile('<br ng-if="collapsed" class="readmore_para">')(scope);
                    var toggleButton = $compile('<span class="readmore_click" ng-click="toggle();">{{collapsed ? "read less" : "read more"}}</span>')(scope);

                    element.empty();
                    element.append(firstSpan);
                    element.append(secondSpan);
                    element.append(moreIndicatorSpan);
                    element.append(lineBreak);
                    element.append(toggleButton);
                } else {
                    element.empty();
                    element.append(text);
                }
            });
        }
    };
}]);

app.directive('starRating', function () {
    return {
        restrict: 'A',
        template: '<ul class="rating" ng-class="{readonly: readonly}">'
            + '    <li  ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)" ng-mouseover="toggle($index)">'
            + '<i class="fa fa-star" aria-hidden="true"></i>'
            + '</li>'
            + '</ul>',
        scope: {
            readonly: '=',
            ratingValue: '=',
            max: '=',
            onRatingSelected: '&'
        },
        link: function (scope, elem, attrs) {
            var updateStars = function () {
                scope.stars = [];
                for (var i = 0; i < scope.max; i++) {
                    scope.stars.push({
                        filled: i < scope.ratingValue
                    });
                }
            };

            scope.toggle = function (index) {
                if (scope.readonly == undefined || scope.readonly === false) {
                    scope.ratingValue = index + 1;
                    scope.onRatingSelected({
                        rating: index + 1
                    });
                }
            };

            scope.$watch('ratingValue',
                function (oldVal, newVal) {
                    if (newVal) {
                        updateStars();
                    }
                }
            );
        }
    };
}
);

app.controller("MainController", function ($scope, $location, $rootScope, $timeout, $http, $localStorage, $routeParams, $window, $route, $base64, $timeout, $sce, $mdToast, $filter, $interval) {

   // window.onkeyup = function (event) {
   //      if (event.keyCode == '27') {
   //          $timeout(function () {
   //              $scope.onload_popup_f = false;

   //          }, 100);
   //      }
   //  }
    
   //  $scope.onload_popup_f = false;
   //  $timeout(function () {
   //      $scope.onload_popup_f = true;
   //  }, 3000);

   //  $scope.inquire_close = function () {
   //      $scope.onload_popup_f = false;
   //  }

    // $scope.inquire_open = function () {
    //  $scope.inquire_popup_f = true;
    // }

    $scope.onload_popup_f = false;
    $timeout(function () {
        $scope.onload_popup_f = true;
    }, 3000);

    $scope.inquire_close = function () {
        $scope.onload_popup_f = false;
    }

    $rootScope.getHeight = function () {
        $timeout(function () {

            // for live
            // var el = angular.element("#reecosys-header")[0].offsetHeight;

            // for local
            var el = angular.element("#reecosys-header-content")[0].offsetHeight;

            if (el) {
                var element = angular.element("#navigation-wrapper-div").css('margin-top', el + 'px');
                // element.style.marginTop = el + "px";

                var element2 = angular.element("#reecosys-main-wrapper").css('padding-top', el + 'px');
                // element2.style.paddingTop = el + "px";
            }
        }, 100);
    };

    $rootScope.loading_bar_fun = function () {
        $interval(function () {
            $rootScope.load_start = false;
            // $timeout(function () {
            $rootScope.load_start = true;
            // }, 100);
        }, 1000);
    }

    $rootScope.setFocus = function (id) {
        var name = $window.document.getElementById(id);
        $timeout(function () {
            name.focus();
        }, 100);
    };

    $rootScope.is_section_Scrolled = false;
    $(window).scroll(function () {
        if (window.scrollY > 50) {
            if (!$rootScope.is_section_Scrolled) {
                $rootScope.is_section_Scrolled = true;
            }
        }
    });

    window.addEventListener("scroll", function () {
        onScrollDiv()
    });
    window.addEventListener("DOMContentLoaded", function () {
        onScrollDiv()
    });

    function onScrollDiv() {
        var images = document.querySelectorAll('.lazyload');
        for (var i = 0, nb = images.length; i < nb; i++) {
            var img = images[i]
            var rect = img.getBoundingClientRect();
            var isVisible = ((rect.top - window.innerHeight) < 500 && (rect.bottom) > -50) ? true : false;

            if (isVisible) {
                if (!img.src) {
                    // alert();
                    img.src = img.dataset.src;
                }
            }
        }
    }

    // close dropdown category on scroll header
    angular.element($window).bind("scroll", function (e) {
        $timeout(function () {
            $rootScope.dropdown_category_get_f = false;
            $rootScope.open_contact_dropdown_f = false;
        }, 50);
    })

    $rootScope.ventures_click_f = false;
    $rootScope.ventures_click = function () {
        if ($rootScope.ventures_click_f) {
            $rootScope.ventures_click_f = false;
        }
        else {
            $rootScope.ventures_click_f = true;
        }
    }

    $rootScope.ventures_click2_f = false;
    $rootScope.ventures2_click = function () {
        if ($rootScope.ventures_click2_f) {
            $rootScope.ventures_click2_f = false;
        }
        else {
            $rootScope.ventures_click2_f = true;
        }
    }

    $rootScope.ventures_click2 = function () {
        if ($rootScope.ventures_click2_f) {
            $rootScope.ventures_click2_f = false;
        }
        else {
            $rootScope.ventures_click2_f = true;
        }
    }

    // get year
    $rootScope.year = new Date().getFullYear();
    // 

    $rootScope.isMobilescreen = false;
    if (angular.element(window).innerWidth() <= 992) {
        $rootScope.isMobilescreen = true;
    }
    // console.log(angular.element(window).innerWidth());

    $rootScope.toBase64 = function (string) {
        return $base64.encode(unescape(encodeURIComponent(string)));
    }

    $rootScope.fromBase64 = function (string) {
        return decodeURIComponent(escape($base64.decode(string)));
    }

    $rootScope.overflow_hidden = function () {
        angular.element('body').css('overflow-y', 'hidden');
        angular.element('html').css('overflow-y', 'hidden');
    }
    $rootScope.overflow_auto = function () {
        angular.element('body').css('overflow-y', 'auto');
        angular.element('html').css('overflow-y', 'auto');
    }

    $rootScope.$storage = $localStorage.$default({
        logged_user_details: null,
        thankyou_redirect: false,
        thank_you_redirect: false,
    });

    $rootScope.logout = function () {
        $rootScope.$storage.logged_user_details = null;
        $rootScope.$storage.logged_in_master_id = null;
        $rootScope.$storage.thankyou_redirect = false;
        $rootScope.$storage.thank_you_redirect = false;
    }

    $rootScope.understant_cookie_f = false;
    if (!$rootScope.$storage.cookies_store) {
        $timeout(function () {
            $rootScope.understant_cookie_f = true;
        }, 3000);
    }

    $rootScope.understant_cookie = function () {
        $rootScope.understant_cookie_f = false;
        $rootScope.$storage.cookies_store = true;
    }

    window.onkeyup = function (event) {
        if (event.keyCode == '27') {
            $timeout(function () {
                $rootScope.inquire_popup_web_toggleF = false;
                $rootScope.country_code_clickF = false;
                $rootScope.view_moreless_toggleF = false;
                $rootScope.view_moreless2_toggleF = false;
                $rootScope.dropdown_category_get_f = false;
                $rootScope.open_contact_dropdown_f = false;
                $rootScope.project_detail_dropdown_f = false;
                $rootScope.profile_video_click_f = false;
                $scope.onload_popup_f = false;
            }, 100);
        }
    }

    $rootScope.mobile_menu_toggleF = false;
    $scope.mobile_menu_toggle = function () {
        if ($rootScope.mobile_menu_toggleF) {
            $rootScope.mobile_menu_toggleF = false;
            $rootScope.project_list_click_f = false;
            $('.navigation-wrapper-div .content_accordian').hide();
            $('.nav-li-flex').removeClass('active');
            angular.element(".reecosys-header-content").css("margin-right", "0");
        } else {
            $rootScope.mobile_menu_toggleF = true;
            if (!$rootScope.isMobilescreen) {
                angular.element(".reecosys-header-content").css("margin-right", "10px");
            }
        }
    }
    $scope.menu_click_close = function () {
        $rootScope.mobile_menu_toggleF = false;
        angular.element(".reecosys-header-content").css("margin-right", "0");
    }

    $rootScope.country_code_clickF = false;
    $scope.country_code_click = function () {
        if ($rootScope.country_code_clickF) {
            $timeout(function () {
                $rootScope.country_code_clickF = false;
            }, 100);
        } else {
            $rootScope.country_code_clickF = true;
        }
    }

    $rootScope.country_code_click_false = function () {
        $timeout(function () {
            $rootScope.country_code_clickF = false;
        }, 100);
    }

    // $rootScope.nav_accordion_toggleF = false;
    // $scope.nav_accordion_toggle = function () {
    //     if ($rootScope.nav_accordion_toggleF) {
    //         $rootScope.nav_accordion_toggleF = false;
    //     } else {
    //         $rootScope.nav_accordion_toggleF = true;
    //     }
    // }
    // $scope.nav_accordion_close = function () {

    //     $rootScope.nav_accordion_toggleF = false;
    // }

    // $scope.inquire_popup_toggle_close = function () {

    //     $rootScope.inquire_popup_toggleF = false;
    // }

    $rootScope.inquire_popup_web_toggleF = false;
    $scope.inquire_popup_web_toggle = function () {
        if ($rootScope.inquire_popup_web_toggleF) {
            $rootScope.inquire_popup_web_toggleF = false;
            $scope.inquiry_obj = {};
            $scope.inquiry_obj.country = '91';
            $scope.inquiry_obj.flag = 'https://flagcdn.com/w40/in.webp';
        } else {
            $rootScope.inquire_popup_web_toggleF = true;
        }
    }

    $scope.inquire_popup_web_toggle_close = function () {
        $rootScope.inquire_popup_web_toggleF = false;
        $scope.inquiry_obj = {};
        $scope.inquiry_obj.country = '91';
        $scope.inquiry_obj.flag = 'https://flagcdn.com/w40/in.webp';
    }

    $rootScope.scrolltoDiv = function (div) {
        $('html, body').animate({
            scrollTop: Math.round($("#" + div).offset().top - 100)
        }, 200);
    }

    $scope.more_click_F = false;
    $scope.more_click = function () {

        angular.element('.more-hide-show-div').slideToggle();

        if ($scope.more_click_F) {
            $scope.more_click_F = false;

        } else {
            $scope.more_click_F = true;
            $('html, body').animate({
                scrollTop: Math.round($("#more-hide-show-div").offset().top - 200)
            }, 600);
        }
    }

    $rootScope.project_list_click_f = "";
    $rootScope.project_list_click = function (category) {
        if ($rootScope.project_list_click_f == category) {
            $rootScope.project_list_click_f = "";
        } else {
            $rootScope.project_list_click_f = category;
        }
    }

    $rootScope.project_list_click_f2 = false;
    $rootScope.project_list_click2 = function (category) {
        if ($rootScope.project_list_click_f2 == category) {
            $rootScope.project_list_click_f2 = "";
        } else {
            $rootScope.project_list_click_f2 = category;
        }
    }

    $rootScope.view_moreless_toggleF = false;
    $scope.view_moreless_toggle = function () {
        if ($rootScope.view_moreless_toggleF) {
            $rootScope.view_moreless_toggleF = false;
        } else {
            $rootScope.view_moreless_toggleF = true;
        }
    }

    $scope.view_moreless_toggle_close = function () {

        $rootScope.view_moreless_toggleF = false;
    }

    $rootScope.view_moreless2_toggleF = false;
    $scope.view_moreless2_toggle = function () {
        if ($rootScope.view_moreless2_toggleF) {
            $rootScope.view_moreless2_toggleF = false;
        } else {
            $rootScope.view_moreless2_toggleF = true;
        }
    }
    $scope.view_moreless2_toggle_close = function () {

        $rootScope.view_moreless2_toggleF = false;
    }

    $rootScope.inquiry_form_save_text = "Submit";
    $rootScope.inquiry_form_save_text_fun = function () {
        if ($rootScope.inquiry_form_save_text == "Submit") {
            $rootScope.inquiry_form_save_text = "Please wait...";
        } else {
            $rootScope.inquiry_form_save_text = "Submit";
        }
    }

    /* Start */
    $scope.search_all_type = "";
    $rootScope.projects_full_list = [];
    $rootScope.drope_list = [];
    $rootScope.is_all_project_loading = false;
    $scope.projects_full_load = function () {
        $rootScope.is_all_project_loading = true;
        $rootScope.projects_full_list = [];
        $http({
            method: 'POST',
            url: apiUrl + 'properties/list',
            data: {
                search_type: $scope.search_all_type,
                all_detail: 1,
                master_user_id: $rootScope.$storage.logged_in_master_id,
                logged_in_master_user_id: $rootScope.$storage.logged_in_master_id,
            },
            headers: {
                'Authorization': 'User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093'
            },

        }).then(function successCallback(response) {

            response = response.data;

            if (response.success == 1) {

                $rootScope.projects_full_list = response.data;
                $scope.total_records_all = response.total_records;

                // console.log($rootScope.projects_full_list);

                $scope.drope_list_check = [];
                var drope_list_obj = $rootScope.projects_full_list;
                angular.forEach(drope_list_obj, function (val, key) {
                    if ($scope.drope_list_check.indexOf(val.project_title) != -1) {
                        angular.forEach($rootScope.drope_list, function (val_2, key_2) {
                            if (val_2.project_title == val.project_title) {
                                val_2.project_type_commercial = val.project_type;
                                val_2.sqft_min_area_commercial = val.sqft_min_area;
                                val_2.sqft_type_commercial = val.sqft_type;
                            }
                        })
                    } else {
                        $scope.drope_list_check.push(val.project_title);
                        $rootScope.drope_list.push(val);
                    }
                })
                $rootScope.projects_category = [];
                $rootScope.projects_category_check = [];
                angular.forEach($rootScope.projects_full_list, function (val, key) {
                    if ($rootScope.projects_category_check.indexOf(val.category) == -1) {
                        var obj = {
                            category: val.category
                        }
                        $rootScope.projects_category.push(obj);
                        $rootScope.projects_category_check.push(val.category);
                    }
                })

            } else {
                $scope.total_records_all = "0";
                $location.path('/');
            }
            $rootScope.is_all_project_loading = false;

        }, function errorCallback(response) {
            $rootScope.is_all_project_loading = false;
        });
    }

    // $scope.interval_temp_call = function () {
    //     $scope.interval_temp_main = $interval(function () {
    //         if ($rootScope.$storage.logged_in_master_id) {
    //             $scope.projects_full_load();
    //             $scope.page_full_load();
    //             $scope.faqs_full_load();
    //             // $scope.career_full_load();
    //             $scope.country_code();
    //             $scope.categories_load();
    //             $scope.page_contact_load();
    //             $interval.cancel($scope.interval_temp_main);
    //         }
    //     }, 100);
    // }
    // $scope.interval_temp_call();

    $rootScope.pixel_code_data = [];
    $rootScope.is_pixel_code_loading = false;
    $scope.pixel_code_load = function () {
        $rootScope.is_pixel_code_loading = true;
        $rootScope.pixel_code_data = [];
        $http({
            method: 'POST',
            url: apiUrl + 'analytics/details',
            data: {
                master_user_id: $rootScope.$storage.logged_in_master_id,
                logged_in_master_user_id: $rootScope.$storage.logged_in_master_id,
            },
            headers: {
                'Authorization': 'User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093'
            },
        }).then(function successCallback(response) {

            response = response.data;
            if (response.success == 1) {
                $rootScope.pixel_code_data = response.data;
            }
            else {
                // $location.path('/');
            }
            $rootScope.is_pixel_code_loading = false;

        }, function errorCallback(response) {
            $rootScope.is_pixel_code_loading = false;
        });
    }

    $rootScope.page_full_list = [];
    $rootScope.page_full_list_menu = [];
    $rootScope.is_all_page_loading = true;
    $scope.page_full_load = function () {
        $rootScope.is_all_page_loading = true;
        $rootScope.page_full_list = [];
        $http({
            method: 'POST',
            url: apiUrl_admin + 'pages/list',
            data: {
                master_user_id: $rootScope.$storage.logged_in_master_id,
                logged_in_master_user_id: $rootScope.$storage.logged_in_master_id,
                group_id: $rootScope.$storage.logged_user_details.group_id,
            },
            headers: {
                'Authorization': 'User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093'
            },
        }).then(function successCallback(response) {

            response = response.data;
            if (response.success == 1) {
                $rootScope.page_full_list = response.data;
            }
            else {
                $location.path('/');
            }
            $rootScope.is_all_page_loading = false;

        }, function errorCallback(response) {
            $rootScope.is_all_page_loading = false;
        });
    }

    $rootScope.project_social_links = [];
    $rootScope.is_project_social_loading = false;
    $scope.project_social_load = function () {
        $rootScope.is_project_social_loading = true;
        $rootScope.project_social_links = [];
        $http({
            method: 'POST',
            url: apiUrl_admin + 'social_page/list',
            data: {
                master_user_id: $rootScope.$storage.logged_in_master_id,
                logged_in_master_user_id: $rootScope.$storage.logged_in_master_id,
            },
            headers: {
                'Authorization': 'User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093'
            },
        }).then(function successCallback(response) {

            response = response.data;
            if (response.success == 1) {
                $rootScope.project_social_links = response.data;
            }
            else {
                // $location.path('/');
            }
            $rootScope.is_project_social_loading = false;

        }, function errorCallback(response) {
            $rootScope.is_project_social_loading = false;
        });
    }

    $rootScope.faqs_full_list = [];
    $rootScope.is_all_faqs_loading = false;
    $scope.faqs_full_load = function () {
        $rootScope.is_all_faqs_loading = true;
        $rootScope.faqs_full_list = [];
        $http({
            method: 'POST',
            url: apiUrl_admin + 'faqs/list',
            data: {
                master_user_id: $rootScope.$storage.logged_in_master_id,
                logged_in_master_user_id: $rootScope.$storage.logged_in_master_id,
            },
            headers: {
                'Authorization': 'User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093'
            },

        }).then(function successCallback(response) {

            response = response.data;
            if (response.success == 1) {
                $rootScope.faqs_full_list = response.data;
            }
            $rootScope.is_all_faqs_loading = false;

        }, function errorCallback(response) {
            $rootScope.is_all_faqs_loading = false;
        });
    }

    $rootScope.country_list = [];
    $rootScope.is_all_country_loading = false;
    $rootScope.country_code = function () {
        $rootScope.is_all_country_loading = true;
        $rootScope.country_list = [];
        $http({
            method: 'POST',
            url: apiUrl_admin + 'country/list',
            data: {
                master_user_id: $rootScope.$storage.logged_in_master_id,
                logged_in_master_user_id: $rootScope.$storage.logged_in_master_id,
            },
            headers: {
                'Authorization': 'User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093'
            },

        }).then(function successCallback(response) {

            response = response.data;
            if (response.success == 1) {
                $rootScope.country_list = response.data;
            }
            $rootScope.is_all_country_loading = false;

        }, function errorCallback(response) {
            $rootScope.is_all_country_loading = false;
        });
    }

    // $rootScope.page_contact_list = {};
    // $rootScope.is_contact_loading = false;
    // $scope.page_contact_load = function () {
    //     $rootScope.is_contact_loading = true;
    //     $rootScope.page_contact_list = {};
    //     $http({
    //         method: 'POST',
    //         url: apiUrl_admin + 'contact_page/details',
    //         data: {
    //             master_user_id: $rootScope.$storage.logged_in_master_id,
    //         },

    //     }).then(function successCallback(response) {

    //         response = response.data;
    //         if (response.success == 1) {
    //             $rootScope.page_contact_list = response.data;
    //         }
    //         $rootScope.is_contact_loading = false;

    //     }, function errorCallback(response) {
    //         $rootScope.is_contact_loading = false;
    //     });
    // }
    /* End */

    // categories data
    $scope.list_categories = {};
    $scope.is_categories_loading = false;
    $scope.categories_load = function () {
        $scope.is_categories_loading = true;
        $scope.list_categories = {};
        $http({
            method: 'POST',
            url: apiUrl + 'categories/list',
            data: {
                master_user_id: $rootScope.$storage.logged_in_master_id,
                logged_in_master_user_id: $rootScope.$storage.logged_in_master_id,
            },
            headers: {
                'Authorization': 'User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093'
            },

        }).then(function successCallback(response) {

            response = response.data;
            if (response.success == 1) {
                $scope.list_categories = response.data;
                // console.log($scope.list_categories);
            }
            else {
                $location.path('/');
            }
            $scope.is_categories_loading = false;

        }, function errorCallback(response) {
            $scope.is_categories_loading = false;
        });
    }

    $rootScope.project_detail_dropdown_f = false;
    $scope.project_dropdown_mobile = function () {
        if ($rootScope.project_detail_dropdown_f) {
            $rootScope.project_detail_dropdown_f = false;
        }
        else {
            $rootScope.project_detail_dropdown_f = true;
        }
    }

    $scope.project_dropdown_mobile_close = function () {
        $rootScope.project_detail_dropdown_f = false;
    }

    $rootScope.category_get = "";
    $rootScope.category_get_f = function (category) {
        $rootScope.category_get = category;
    }

    $rootScope.dropdown_category_get_show = false;
    $rootScope.dropdown_category_get_f = "";
    $scope.dropdown_category_get = function (category) {
        if ($rootScope.dropdown_category_get_f == category) {
            $rootScope.dropdown_category_get_f = "";
            $rootScope.dropdown_category_get_show = false;
        } else {
            $rootScope.dropdown_category_get_f = category;

            if ($rootScope.dropdown_category_get_show) {
                if ($rootScope.dropdown_category_get_f == category) {
                    $rootScope.dropdown_category_get_show = true;
                }
                else {
                    $rootScope.dropdown_category_get_show = false;
                }
            }
            else {
                $rootScope.dropdown_category_get_show = true;
            }
        }
    }

    $scope.close_dropdown_category_get = function () {
        $rootScope.dropdown_category_get_f = "";
        $rootScope.dropdown_category_get_show = false;
    }

    /**/

    $rootScope.residecesdropdown_F = false;
    $scope.residecesdropdown = function () {
        if ($rootScope.residecesdropdown_F) {
            $rootScope.residecesdropdown_F = false;
        }
        else {
            $rootScope.residecesdropdown_F = true;
        }
    }

    // open contact dropdown
    $rootScope.open_contact_dropdown_f = false;
    $scope.open_contact_dropdown = function () {
        if ($rootScope.open_contact_dropdown_f) {
            $rootScope.open_contact_dropdown_f = false;
        }
        else {
            $rootScope.open_contact_dropdown_f = true;
        }
    }

    $scope.close_contact_dropdown = function () {
        $rootScope.open_contact_dropdown_f = false;
    }

    $scope.gallery_get = "";
    $scope.gallery_get_f = function (gallery) {
        $scope.gallery_get = gallery;
    }

    if ($rootScope.isMobilescreen) {
        $scope.column_get = 2;
    } else {
        $scope.column_get = 1;
    }
    $scope.column_get_f = function (column) {
        $scope.column_get = column;
    }

    /* Project Details Code Start */
    $rootScope.trustAsHtml = function (string) {
        return $sce.trustAsHtml(string);
    };

    $scope.project_details = {};
    $scope.project_list_data = {};
    $scope.document_data = {};
    $scope.is_project_details_Loading = true;

    $scope.project_get_temp = function () {
        $scope.temp_list = [];
        $scope.interval_temp_f = false;
        $scope.interval_temp = $interval(function () {
            $scope.interval_temp_f = true;
            if ($rootScope.projects_full_list.length > 0) {
                $scope.temp_list = $rootScope.projects_full_list;
                $scope.interval_temp_f = false;
                $rootScope.projects_detail_load_main($routeParams.slug);
                $interval.cancel($scope.interval_temp);
            }
        }, 100);
    }

    $rootScope.projects_detail_load_main = function (slug) {
        $scope.is_project_details_Loading = true;
        if ($rootScope.projects_full_list.length > 0) {
            $scope.is_project_details_Loading = true;
            $scope.project_details = {};

            $rootScope.project_filter("", slug, "");

            $timeout(function () {
                var project_data = $rootScope.projects_full_list.filter(function (e) {
                    if (e.slug == slug) {
                        return e;
                    }
                })[0];

                $scope.is_project_details_Loading = false;

                if (project_data) {
                    $scope.project_details = {};
                    $scope.project_details = project_data;
                    // console.log($scope.project_details, "get");

                    // $rootScope.activePath = "/" + $scope.project_details.category;

                    $rootScope.project_title = $scope.project_details.project_title;
                    $rootScope.page_title = $scope.project_details.page_title;
                    $rootScope.page_description = $scope.project_details.page_description;
                    $rootScope.page_image = $scope.project_details.page_image_full;

                    $scope.project_details.gallery_data_all = [{
                        tag_line: "",
                        description: "",
                        image: [],
                    }];

                    $scope.project_details.related_projects_array = [];
                    angular.forEach($scope.project_details.related_project_ids, function (val, key) {

                        var related_data = $rootScope.projects_full_list.filter(function (e) {
                            if (e.project_id == val) {
                                return e;
                            }
                        })[0];
                        $scope.project_details.related_projects_array.push(related_data);

                    })
                    // console.log($scope.project_details);

                    angular.forEach($scope.project_details.gallery_data, function (val, key) {
                        if (!$scope.project_details.gallery_data_all[0].tag_line) {
                            $scope.project_details.gallery_data_all[0].tag_line = val.tag_line;
                        }
                        if (!$scope.project_details.gallery_data_all[0].description) {
                            $scope.project_details.gallery_data_all[0].description = val.description;
                        }
                        if (!$scope.project_details.gallery_data_all[0].title) {
                            $scope.project_details.gallery_data_all[0].title = val.title;
                        }
                        angular.forEach(val.image, function (val_2, key_2) {
                            $scope.project_details.gallery_data_all[0].image.push(val_2);
                        })
                    })

                    angular.forEach($scope.project_details.document_data, function (val, key) {
                        if (val.type == "brochure") {
                            $scope.document_data.brochure = true;
                        }
                        if (val.type == "price") {
                            $scope.document_data.price = true;
                        }
                    })
                    // console.log($scope.project_details.gallery_data_all);
                } else {

                }
            }, 100);
        } else {
            $scope.project_get_temp();
        }
    }
    /* Project Details Code End */

    /* FAQs Start */
    $scope.faqs_details = {};
    $scope.is_faqs_details_Loading = true;

    $scope.faqs_get_temp = function () {
        $scope.faqs_interval_temp_f = false;
        $scope.faqs_interval_temp = $interval(function () {
            $scope.faqs_interval_temp_f = true;
            if ($rootScope.faqs_full_list.length > 0) {
                $scope.faqs_interval_temp_f = false;
                $rootScope.faqs_detail_load_main($routeParams.slug);
                $interval.cancel($scope.faqs_interval_temp);
            }
        }, 100);
    }

    $rootScope.faqs_detail_load_main = function (slug) {
        $scope.is_faqs_details_Loading = true;
        if ($rootScope.faqs_full_list.length > 0) {
            $scope.is_faqs_details_Loading = true;
            $scope.faqs_details = {};

            $timeout(function () {
                var faqs_data = $rootScope.faqs_full_list.filter(function (e) {
                    if (e.project_slug == slug) {
                        return e;
                    }
                })[0];

                if (!faqs_data && faqs_data == undefined) {
                    var faqs_data = $rootScope.faqs_full_list.filter(function (e) {
                        if (e.page_slug == slug) {
                            return e;
                        }
                    })[0];
                }

                $scope.is_faqs_details_Loading = false;

                if (faqs_data) {
                    $scope.faqs_details = {};
                    $scope.faqs_details = faqs_data;
                    // console.log($scope.faqs_details, "faqs_details");
                }
            }, 100);
        } else {
            $scope.faqs_get_temp();
        }
    }
    /* FAQs End */

    $scope.page_details = {};
    $scope.is_page_details_Loading = false;

    $scope.page_get_temp = function () {
        $scope.page_temp_list = [];
        $scope.page_interval_temp_f = false;
        $scope.page_interval_temp = $interval(function () {
            $scope.page_interval_temp_f = true;
            if ($rootScope.page_full_list.length > 0) {
                $scope.page_temp_list = $rootScope.page_full_list;
                $scope.page_interval_temp_f = false;
                if ($routeParams.slug) {
                    $rootScope.page_detail_load_main($routeParams.slug);
                } else {
                    $rootScope.page_detail_load_main($location.path().split("/")[1]);
                }
                /*$rootScope.page_detail_load_main($routeParams.slug);*/
                $interval.cancel($scope.page_interval_temp);
            }
        }, 100);
    }

    $rootScope.page_detail_load_main = function (slug) {
        if ($rootScope.page_full_list.length > 0) {
            $scope.is_page_details_Loading = true;
            $scope.page_details = {};

            $timeout(function () {
                var page_data = $rootScope.page_full_list.filter(function (e) {
                    if (e.slug == slug) {
                        return e;
                    }
                })[0];

                $scope.is_page_details_Loading = false;

                if (page_data) {
                    $scope.page_details = {};
                    $scope.page_details = page_data;
                    // console.log($scope.page_details, "get");

                    $rootScope.page_title = $scope.page_details.seo_title;
                    $rootScope.page_description = $scope.page_details.seo_description;
                    $rootScope.page_image = $scope.page_details.seo_image_full;
                } else {
                    $location.path("/");
                }
            }, 100);
        } else {
            $scope.page_get_temp();
        }
    }

    // $rootScope.inquiry_open_f = false;
    // $rootScope.inquiry_open = function () {
    //     if ($rootScope.inquiry_open_f) {
    //         $rootScope.inquiry_open_f = false;
    //         $rootScope.overflow_auto();
    //     } else {
    //         $rootScope.inquiry_open_f = true;
    //         $rootScope.overflow_hidden();
    //     }
    // }
    // $rootScope.inquiry_close = function () {
    //     $rootScope.inquiry_open_f = false;
    //     $rootScope.overflow_auto();
    // }

    $rootScope.project_filter_data = {};
    $rootScope.project_filter = function (project_id, slug, project_change) {
        if (project_id != "" && project_id != undefined) {
            var project_data = $rootScope.projects_full_list.filter(function (e) {
                if (e.project_id == project_id) {
                    return e;
                }
            })[0];
        } else if (slug != "" && slug != undefined) {
            var project_data = $rootScope.projects_full_list.filter(function (e) {
                if (e.slug == slug) {
                    return e;
                }
            })[0];
        }

        if (project_data) {
            $rootScope.project_filter_data = project_data;
            angular.forEach($rootScope.project_filter_data.document_data, function (val, key) {
                if (val.type == "brochure") {
                    $rootScope.project_filter_data.broucher_list = val.url;
                } else if (val.type == "price") {
                    $rootScope.project_filter_data.price_list = val.url;
                }
            })
        }
        // console.log($rootScope.project_filter_data, "data");
    }

    $rootScope.downloadFile = function (filePath) {
        var link = document.createElement('a');
        link.href = filePath;
        link.target = '_blank';
        link.download = filePath.substr(filePath.lastIndexOf('/') + 1);
        link.click();
    }

    $scope.inquiry_validate = {

        /*onkeyup: function (element) {
            this.element(element);
        },*/

        rules: {
            project_id_get: {
                required: true,
            },
            name: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            client_contact_no: {
                required: true
            },
            project_id: {
                required: true
            },
            // agree_tandc: {
            //     required: true
            // }
        },

        messages: {
            project_id_get: {
                required: "Please enter project."
            },
            name: {
                required: "Please enter name."
            },
            email: {
                required: "Please enter email."
            },
            client_contact_no: {
                required: "Please enter mobile number."
            },
            project_id: {
                required: "Please enter project."
            },
            // agree_tandc: {
            //     required: "Please agree terms and conditions."
            // }
        }
    }

    $rootScope.inquire_popup_toggleF = false;
    $scope.inquire_popup_toggle = function () {
        if ($rootScope.inquire_popup_toggleF) {
            $rootScope.inquire_popup_toggleF = false;
        } else {
            $rootScope.inquire_popup_toggleF = true;
        }
    }

    // $rootScope.inquire_popup_web_toggleF = false;
    // $scope.inquire_popup_web_toggle = function () {
    //     if ($rootScope.inquire_popup_web_toggleF) {
    //         $rootScope.inquire_popup_web_toggleF = false;
    //     } else {
    //         $rootScope.inquire_popup_web_toggleF = true;
    //     }
    // }

    $rootScope.country_click = function (phonecode, flag) {
        $scope.inquiry_obj.country = phonecode;
        $scope.inquiry_obj.flag = flag;
        $rootScope.country_code_clickF = false;
    }

    $scope.inquiry_contact_no_length = {
        minlength: 10,
        maxlength: 10,
    };

    $scope.inquiry_country_change = function () {
        if ($scope.inquiry_obj.country == "91") {
            $scope.inquiry_contact_no_length.minlength = 10;
            $scope.inquiry_contact_no_length.maxlength = 10;
        } else {
            $scope.inquiry_contact_no_length.minlength = 8;
            $scope.inquiry_contact_no_length.maxlength = 13;
        }
    }

    $scope.is_from = "";
    $rootScope.inquiry_from_click = function (is_from) {
        $scope.is_from = is_from;
        $scope.is_from_f = true;
    }

    $scope.save_inquiry_f = false;
    $scope.inquiry_obj = {};
    $scope.inquiry_obj.agree_tandc_display = true;
    $scope.inquiry_obj.country = '91';
    $scope.inquiry_obj.flag = 'https://flagcdn.com/w40/in.webp';

    $scope.inquiryform = function (form) {
        if (form.validate() && !$scope.save_inquiry_f) {
            $scope.save_inquiry_f = true;
            $rootScope.inquiry_form_save_text_fun();

            $scope.inquiry_obj.from_app = 'true';
            $scope.inquiry_obj.master_user_id = $rootScope.$storage.logged_in_master_id;
            $scope.inquiry_obj.logged_in_master_user_id = $rootScope.$storage.logged_in_master_id;
            $scope.inquiry_obj.inquiry_from = "web";
            $scope.inquiry_obj.user_type = "N";
            $scope.inquiry_obj.project_id = $rootScope.project_filter_data.project_id ? $rootScope.project_filter_data.project_id : $scope.inquiry_obj.project_id;
            var client_contact_no = $scope.inquiry_obj.client_contact_no_display
            $scope.inquiry_obj.client_contact_no = $scope.inquiry_obj.country + " " + client_contact_no;

            if ($scope.inquiry_obj.agree_tandc_display) {
                $scope.inquiry_obj.agree_tandc = '1';
            }
            else {
                $scope.inquiry_obj.agree_tandc = '0';
            }

            $rootScope.utm_source = "";
            $rootScope.utm_source = $location.search().utm_source;
            if ($rootScope.utm_source != "" && $rootScope.utm_source != undefined) {
                $scope.inquiry_obj.is_utm = $rootScope.utm_source;
            }

            $scope.utm_campaign = $location.search().utm_campaign;
            if ($scope.utm_campaign != "" && $scope.utm_campaign != undefined) {
                $scope.inquiry_obj.is_utm_campaign = $scope.utm_campaign;
            }

            $scope.gclid = $location.search().gclid;
            if ($scope.gclid != "" && $scope.gclid != undefined) {
                $scope.inquiry_obj.is_utm = "Google";
                $scope.inquiry_obj.is_utm_google_code = $scope.gclid;
            }

            if ($scope.is_from_f) {
                $scope.inquiry_obj.is_from = $scope.is_from;
            } else {
                $scope.inquiry_obj.is_from = "";
            }

            $http({
                method: 'POST',
                url: apiUrl + 'inquiries/save',
                data: $scope.inquiry_obj,
                headers: {
                    'Authorization': 'User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093'
                },
            }).then(function successCallback(response) {
                response = response.data;
                if (response.success == 1) {
                    var project_data_get = $rootScope.projects_full_list.filter(function (e) {
                        if (e.project_id == $scope.inquiry_obj.project_id) {
                            return e;
                        }
                    })[0];

                    $scope.inquiry_obj = {};
                    // $rootScope.inquiry_close();
                    $mdToast.show({
                        template: '<md-toast class="md-toast error">' + 'Your inquiry has been sent successfully.' + '</md-toast>',
                        hideDelay: 3500,
                        position: 'bottom right'
                    });
                    if ($scope.is_from_f) {
                        if ($scope.is_from == "download_brochure") {
                            $timeout(function () {
                                $window.open($scope.project_filter_data.broucher_list);
                            }, 500);
                        } else if ($scope.is_from == "download_price") {
                            $timeout(function () {
                                $window.open($scope.project_filter_data.price_list);
                            }, 500);
                        } else if ($scope.is_from != "") {
                            // angular.forEach($scope.project_details.document_data, function (val, key) {
                            //     if (val.type == $scope.is_from) {
                            //         $timeout(function () {
                            //             $window.open(val.url);
                            //         }, 500);
                            //     }
                            // })
                            /*angular.forEach($scope.project_details.document_other_data, function (val, key) {
                                if (val.type == $scope.is_from) {
                                    $timeout(function () {
                                        $window.open(val.url);
                                    }, 500);
                                }
                            })*/
                            $rootScope.$storage.thankyou_redirect = true;
                            $location.path($rootScope.activePath + 'thankyou');
                        }
                    }
                    else {
                        $rootScope.$storage.thank_you_redirect = true;
                        if ($rootScope.project_filter_data.project_id) {
                            $location.path($rootScope.projects_full_list_detail.slug + "/" + 'thankyou');
                        } else {
                            $location.path(project_data_get.slug + "/" + 'thankyou');
                        }
                    }
                    // 
                    $scope.inquiry_obj.country = '91';
                    $scope.inquiry_obj.flag = 'https://flagcdn.com/w40/in.webp';

                } else {
                    $mdToast.show({
                        template: '<md-toast class="md-toast error">' + response.message + '</md-toast>',
                        hideDelay: 3500,
                        position: 'bottom right'
                    });
                }
                $scope.is_from_f = false;

                $scope.save_inquiry_f = false;
                $rootScope.inquiry_form_save_text_fun();
                $scope.inquiry_obj.agree_tandc_display = true;
                $rootScope.inquire_popup_toggleF = false;
                $rootScope.inquire_popup_web_toggleF = false;

            }, function errorCallback(response) {

            });
        }
    }

    $scope.inquiry_validate_detail = {

        /*onkeyup: function (element) {
            this.element(element);
        },*/

        rules: {
            project_id_get: {
                required: true,
            },
            client_name: {
                required: true,
            },
            client_email: {
                required: true,
                email: true,
            },
            contact_no: {
                required: true
            },
            project_id: {
                required: true
            },
            // agree_tandc: {
            //     required: true
            // }
        },

        messages: {
            project_id_get: {
                required: "Please enter project."
            },
            client_name: {
                required: "Please enter name."
            },
            client_email: {
                required: "Please enter email."
            },
            contact_no: {
                required: "Please enter mobile number."
            },
            project_id: {
                required: "Please enter project."
            },
            // agree_tandc: {
            //     required: "Please agree terms and conditions."
            // }
        }
    }

    $scope.country_click_inquiry_detail = function (phonecode, flag) {
        $scope.inquiry_obj_detail.country = phonecode;
        $scope.inquiry_obj_detail.flag = flag;
        $rootScope.country_code_clickF = false;
    }
    $scope.detail_form_contact_no_length = {
        minlength: 10,
        maxlength: 10,
    };
    $scope.detail_form_country_change = function () {
        if ($scope.inquiry_obj_detail.country == "91") {
            $scope.detail_form_contact_no_length.minlength = 10;
            $scope.detail_form_contact_no_length.maxlength = 10;
        } else {
            $scope.detail_form_contact_no_length.minlength = 8;
            $scope.detail_form_contact_no_length.maxlength = 13;
        }
    }

    $scope.save_inquiry_detail_f = false;
    $scope.save_inquiry_text = 'Submit';
    $scope.inquiry_obj_detail = {};
    $scope.inquiry_obj_detail.agree_tandc_display = true;
    $scope.inquiry_obj_detail.country = '91';
    $scope.inquiry_obj_detail.flag = 'https://flagcdn.com/w40/in.webp';

    $scope.inquiryform_detail = function (form) {
        if (form.validate() && !$scope.save_inquiry_detail_f) {
            $scope.save_inquiry_detail_f = true;
            $scope.save_inquiry_text = 'Please Wait...';

            $scope.inquiry_obj_detail.from_app = 'true';
            $scope.inquiry_obj_detail.master_user_id = $rootScope.$storage.logged_in_master_id;
            $scope.inquiry_obj_detail.logged_in_master_user_id = $rootScope.$storage.logged_in_master_id;
            $scope.inquiry_obj_detail.inquiry_from = "web";
            $scope.inquiry_obj_detail.user_type = "N";
            $scope.inquiry_obj_detail.project_id = $rootScope.project_filter_data.project_id;
            $scope.inquiry_obj_detail.client_contact_no = $scope.inquiry_obj_detail.country + " " + $scope.inquiry_obj_detail.client_contact_no;
            if ($scope.inquiry_obj_detail.agree_tandc_display) {
                $scope.inquiry_obj_detail.agree_tandc = '1';
            }
            else {
                $scope.inquiry_obj_detail.agree_tandc = '0';
            }

            $rootScope.utm_source = "";
            $rootScope.utm_source = $location.search().utm_source;
            if ($rootScope.utm_source != "" && $rootScope.utm_source != undefined) {
                $scope.inquiry_obj_detail.is_utm = $rootScope.utm_source;
            }

            $scope.utm_campaign = $location.search().utm_campaign;
            if ($scope.utm_campaign != "" && $scope.utm_campaign != undefined) {
                $scope.inquiry_obj_detail.is_utm_campaign = $scope.utm_campaign;
            }

            $scope.gclid = $location.search().gclid;
            if ($scope.gclid != "" && $scope.gclid != undefined) {
                $scope.inquiry_obj_detail.is_utm = "Google";
                $scope.inquiry_obj_detail.is_utm_google_code = $scope.gclid;
            }

            // if ($scope.is_from_f) {
            //     $scope.inquiry_obj_detail.is_from = $scope.is_from;
            // } else {
            //     $scope.inquiry_obj_detail.is_from = "";
            // }
            // $scope.is_from_f = false;

            $http({
                method: 'POST',
                url: apiUrl + 'inquiries/save',
                data: $scope.inquiry_obj_detail,
                headers: {
                    'Authorization': 'User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093'
                },
            }).then(function successCallback(response) {
                response = response.data;
                if (response.success == 1) {
                    $scope.inquiry_obj_detail = {};
                    // $rootScope.inquiry_close();
                    $mdToast.show({
                        template: '<md-toast class="md-toast error">' + 'Your inquiry has been sent successfully.' + '</md-toast>',
                        hideDelay: 3500,
                        position: 'bottom right'
                    });

                    $rootScope.$storage.thank_you_redirect = true;
                    $location.path($rootScope.projects_full_list_detail.slug + "/" + 'thankyou');

                    // if ($scope.is_from == "download_brochure") {
                    //     $timeout(function () {
                    //         $window.open($scope.project_filter_data.broucher_list);
                    //     }, 500);
                    // } else if ($scope.is_from == "download_price") {
                    //     $timeout(function () {
                    //         $window.open($scope.project_filter_data.price_list);
                    //     }, 500);
                    // } else if ($scope.is_from != "") {
                    //     angular.forEach($scope.project_details.document_data, function (val, key) {
                    //         if (val.type == $scope.is_from) {
                    //             $timeout(function () {
                    //                 $window.open(val.url);
                    //             }, 500);
                    //         }
                    //     })
                    //     angular.forEach($scope.project_details.document_other_data, function (val, key) {
                    //         if (val.type == $scope.is_from) {
                    //             $timeout(function () {
                    //                 $window.open(val.url);
                    //             }, 500);
                    //         }
                    //     })
                    // }

                } else {
                    $mdToast.show({
                        template: '<md-toast class="md-toast error">' + response.message + '</md-toast>',
                        hideDelay: 3500,
                        position: 'bottom right'
                    });
                }

                $scope.inquiry_obj_detail.country = '91';
                $scope.inquiry_obj_detail.flag = 'https://flagcdn.com/w40/in.webp';
                $scope.inquiry_obj_detail.agree_tandc_display = true;
                $scope.save_inquiry_detail_f = false;
                $scope.save_inquiry_text = 'Submit';
                $rootScope.inquire_popup_toggleF = false;
                $rootScope.inquire_popup_web_toggleF = false;

            }, function errorCallback(response) {

            });
        }
    }

    // tab panel
    // $rootScope.open_id = "one";
    // $rootScope.openTab = function (id) {
    //     $rootScope.open_id = id;
    // }

    $rootScope.tab = 1;
    $rootScope.setTab = function (newTab) {
        $rootScope.tab = newTab;
    };
    $rootScope.isSet = function (tabNum) {
        return $rootScope.tab === tabNum;
    };

    var appWindow = angular.element($window);
    appWindow.bind('resize', function () {
        $rootScope.screenWidth = screen.width;
        if ($rootScope.project_detail_flag) {
            $rootScope.amenities_count_fun();
        }
    });
    // console.log($rootScope.screenWidth);
    $rootScope.amenities_count_fun = function () {
        if ($rootScope.screenWidth <= 767) {
            $scope.amenities_count = "5";
        } else {
            $scope.amenities_count = "5";
        }
    }
    $rootScope.amenities_count_fun();

    $rootScope.user_name = "laxmi";

    $rootScope.GetUserProfile = function () {
        $http({
            method: 'POST',
            url: apiUrl_admin + "admin/details",
            data: {
                user_name: $rootScope.user_name ? $rootScope.user_name : ""
            },
            headers: {
                'Authorization': 'User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093'
            },
        }).then(function successCallback(response) {
            response = response.data;

            if (response.success == 1) {
                $rootScope.$storage.logged_user_details = response.data;
                $rootScope.$storage.logged_in_master_id = response.data.master_user_id;
                $rootScope.$storage.logged_in_master_user_id = response.data.master_user_id;
                $rootScope.$storage.permissions = response.data.admin_group_data.permissions;

                // $rootScope.rootUrl = "https://" + $rootScope.user_name + ".reecosys.com";

                $scope.projects_full_load();
                $scope.page_full_load();
                $scope.venture_full_load();
                $scope.admin_module_load();
                $scope.faqs_full_load();
                $scope.pixel_code_load();
                $scope.project_social_load();
                $scope.country_code();
                $scope.categories_load();
                $scope.page_contact_load();
                // $scope.load_blog_list();
                // $rootScope.profilepage_load();

                if ($rootScope.project_detail_flag) {
                    $rootScope.projects_detail_load_main($routeParams.slug);
                    $rootScope.faqs_detail_load_main($routeParams.slug);
                }
                if ($rootScope.page_flag) {
                    if ($routeParams.slug) {
                        $rootScope.page_detail_load_main($routeParams.slug);
                        $rootScope.faqs_detail_load_main($routeParams.slug);
                    } else {
                        $rootScope.page_detail_load_main($location.path().split("/")[1]);
                        $rootScope.faqs_detail_load_main($location.path().split("/")[1]);
                    }
                }
            } else {
                $window.location.href = "https://www.reecosys.com";
            }

        }, function errorCallback(response) { });
    }

    if ($rootScope.user_name) {
        $rootScope.rootUrl = "https://" + $rootScope.user_name + ".reecosys.com";
        $rootScope.GetUserProfile();
        //$rootScope.logout();
    } else {
        $rootScope.logout();
        $window.location.href = "https://www.reecosys.com";
    }

    // $rootScope.common_page_load($location.path().replace("/", ""));
    // alert($location.path().replace("/", ""));

    $rootScope.page_contact_list = {};
    $rootScope.is_contact_loading = false;
    $scope.page_contact_load = function () {
        $rootScope.is_contact_loading = true;
        $rootScope.page_contact_list = {};
        $http({
            method: 'POST',
            url: apiUrl_admin + 'contact_page/details',
            data: {
                master_user_id: $rootScope.$storage.logged_in_master_id,
                logged_in_master_user_id: $rootScope.$storage.logged_in_master_id,
            },
            headers: {
                'Authorization': 'User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093'
            },

        }).then(function successCallback(response) {

            response = response.data;
            if (response.success == 1) {
                $rootScope.page_contact_list = response.data;
                // console.log($rootScope.page_contact_list, "page_contact_list");
            }
            else {
                // $location.path('/');
            }
            $rootScope.is_contact_loading = false;

        }, function errorCallback(response) {
            $rootScope.is_contact_loading = false;
        });
    }

    $rootScope.common_page_list = {};
    $rootScope.is_commonpage_loading = false;

    $rootScope.common_page_load = function (common_slug) {
        $rootScope.common_page_list = {};
        $rootScope.common_page_list = $rootScope.page_full_list.filter(function (e) { if (e.slug == common_slug) { return e; } })[0];
        $rootScope.is_commonpage_loading = false;

        $rootScope.page_title = $rootScope.common_page_list.seo_title ? $rootScope.common_page_list.seo_title : "";
        $rootScope.page_description = $rootScope.common_page_list.seo_description ? $rootScope.common_page_list.seo_description : "";
        $rootScope.page_keywords = $rootScope.common_page_list.seo_keywords ? $rootScope.common_page_list.seo_keywords : "";
        $rootScope.page_image = $rootScope.common_page_list.seo_image ? $rootScope.common_page_list.seo_image : "";
    }

    $rootScope.admin_module_list = [];
    $rootScope.is_admin_module_loading = false;
    $scope.admin_module_load = function () {
        $rootScope.is_admin_module_loading = true;
        $rootScope.admin_module_list = [];
        $http({
            method: 'POST',
            url: apiUrl_admin + 'admin_module/list',
            data: {
                master_user_id: $rootScope.$storage.logged_in_master_id,
                logged_in_master_user_id: $rootScope.$storage.logged_in_master_id,
                group_id: $rootScope.$storage.logged_user_details.group_id,
            },
            headers: {
                'Authorization': 'User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093'
            },
        }).then(function successCallback(response) {

            response = response.data;
            if (response.success == 1) {
                $rootScope.admin_module_list = response.data;
                // console.log($rootScope.admin_module_list);
                // angular.forEach($rootScope.admin_module_list, function (val, key) {
                //     if (val.name == "joint_ventures") {
                //     }
                // })
            }
            else {
                $location.path('/');
            }
            $rootScope.is_admin_module_loading = false;

        }, function errorCallback(response) {
            $rootScope.is_admin_module_loading = false;
        });
    }

    $rootScope.venture_full_list = [];
    $rootScope.is_venturepage_loading = true;
    $scope.venture_full_load = function () {
        $rootScope.is_venturepage_loading = true;
        $rootScope.venture_full_list = [];
        $http({
            method: 'POST',
            url: apiUrl_admin + 'joint_ventures/list',
            data: {
                master_user_id: $rootScope.$storage.logged_in_master_id,
                logged_in_master_user_id: $rootScope.$storage.logged_in_master_id,
                group_id: $rootScope.$storage.logged_user_details.group_id,
            },
            headers: {
                'Authorization': 'User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093'
            },
        }).then(function successCallback(response) {

            response = response.data;
            if (response.success == 1) {
                $rootScope.venture_full_list = response.data;
            }
            /*else {
                $location.path("/");
            }*/
            $rootScope.is_venturepage_loading = false;

        }, function errorCallback(response) {
            $rootScope.is_venturepage_loading = false;
        });
    }

    $rootScope.venture_page_list = {};
    $rootScope.is_venture_page_loading = false;

    $rootScope.venture_page_load = function (common_slug) {
        $rootScope.venture_page_list = {};
        $rootScope.venture_page_list = $rootScope.venture_full_list.filter(function (e) { if (e.slug == common_slug) { return e; } })[0];
        $rootScope.is_venture_page_loading = false;
        if ($rootScope.venture_page_list) {
            $rootScope.page_title = $rootScope.venture_page_list.seo_title;
            $rootScope.page_description = $rootScope.venture_page_list.seo_description;
            $rootScope.page_keywords = $rootScope.venture_page_list.seo_keywords;
            $rootScope.page_image = $rootScope.venture_page_list.seo_image;
        } else {
            $location.path("/");
        }
    }

    // $rootScope.profile_page_list = {};
    // $rootScope.is_profile_page_loading = false;

    // $rootScope.profile_page_load = function (common_slug) {
    //     $rootScope.profile_page_list = {};
    //     $rootScope.profile_page_list = $rootScope.profilepage_list.filter(function (e) { if (e.slug == common_slug) { return e; } })[0];
    //     $rootScope.is_profile_page_loading = false;

    //     $rootScope.page_title = $rootScope.profile_page_list.seo_title;
    //     $rootScope.page_description = $rootScope.profile_page_list.seo_description;
    //     $rootScope.page_keywords = $rootScope.profile_page_list.seo_keywords;
    //     $rootScope.page_image = $rootScope.profile_page_list.seo_image;
    // }
    // 

    // $rootScope.common_page_load = function (common_slug) {
    //     $scope.is_commonpage_loading = true;
    //     $rootScope.common_page_list = {};

    //     $http({
    //         method: 'POST',
    //         url: apiUrl_admin + 'pages/list',
    //         data: {
    //             master_user_id: $rootScope.$storage.logged_in_master_id,
    //             group_id: $rootScope.$storage.logged_user_details.group_id,
    //             slug: common_slug
    //         },

    //     }).then(function successCallback(response) {

    //         response = response.data;
    //         if (response.success == 1) {
    //             $rootScope.common_page_list = response.data[0];
    //             console.log($rootScope.common_page_list);
    //             $rootScope.page_title = $rootScope.common_page_list.seo_title;
    //             $rootScope.page_description = $rootScope.common_page_list.seo_description;
    //             $rootScope.page_keywords = $rootScope.common_page_list.seo_keywords;
    //             $rootScope.page_image = $rootScope.common_page_list.seo_image;
    //         }
    //         $scope.is_commonpage_loading = false;

    //     }, function errorCallback(response) {
    //         $scope.is_commonpage_loading = false;
    //     });
    // }

    $scope.dateFrmObj = {};
    $scope.dateFrmObj.DateFrom = false;
    $scope.dateOptions = {
        formatYear: 'yy',
        showWeeks: false,
        showButtonBar: false,
        minDate: new Date(),
        startingDay: 1
    };

    $scope.toggleDateFrom = function () {
        $scope.dateFrmObj.DateFrom = true;
    }

    $scope.subscribe_validate = {

        rules: {
            email_address: {
                required: true,
                email: true,
            },
        },

        messages: {
            email_address: {
                required: "Please enter your email."
            },
        }
    }

    $scope.subscribe_obj = {};
    $scope.addsubscribe = false;
    $scope.subscribeform = function (form) {
        if (form.validate() && form.$valid && !$scope.addsubscribe) {
            $scope.addsubscribe = true;
            $scope.subscribe_obj.master_user_id = $rootScope.$storage.logged_in_master_id;
            $scope.subscribe_obj.logged_in_master_user_id = $rootScope.$storage.logged_in_master_id;

            $http({
                method: 'POST',
                url: apiUrl + 'subscription/save',
                data: $scope.subscribe_obj,
                headers: {
                    'Authorization': 'User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093'
                },

            }).then(function successCallback(response) {
                response = response.data;

                $scope.addsubscribe = false;
                $scope.subscribe_obj = {};

                $mdToast.show({
                    template: '<md-toast class="md-toast error">' + response.message + '</md-toast>',
                    hideDelay: 3500,
                    position: 'bottom right'
                });
            }, function errorCallback(response) {
                $scope.addsubscribe = false;
            });
        }
    }

    // $scope.isjointPageLoading = false;
    // $scope.jointDataLoad = function () {
    //     $scope.isjointPageLoading = true;
    //     $http({
    //         method: 'POST',
    //         url: apiUrl_admin + 'joint_ventures/list',
    //         data: {
    //             slug: $routeParams.slug,
    //             master_user_id: $rootScope.$storage.logged_in_master_id,
    //             group_id: $rootScope.$storage.logged_user_details.group_id,
    //         },

    //     }).then(function successCallback(response) {

    //         response = response.data;
    //         if (response.success == 1) {
    //             $scope.joint_data = response.data[0];
    //             console.log($scope.joint_data);
    //         }
    //         $scope.isjointPageLoading = false;

    //     }, function errorCallback(response) {
    //         $scope.isjointPageLoading = false;
    //     });
    // }
    // if ($scope.slug) {
    //     $scope.jointDataLoad();
    // }

    $rootScope.menu_venture_list = {};
    $scope.is_venture_load = true;
    $scope.menu_venture_data = function () {
        $scope.is_venture_load = true;
        $rootScope.menu_venture_list = {};
        $http({
            method: 'POST',
            url: apiUrl_admin + 'joint_ventures/list_new',
            data: {
                master_user_id: $rootScope.$storage.logged_in_master_id,
                logged_in_master_user_id: $rootScope.$storage.logged_in_master_id,
                group_id: $rootScope.$storage.logged_user_details.group_id,
                menu_list: 1,
            },
            headers: {
                'Authorization': 'User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093'
            },

        }).then(function successCallback(response) {

            response = response.data;
            if (response.success == 1) {
                $rootScope.menu_venture_list = response.data;
            }
            else {
                $location.path("/");
            }
            $scope.is_venture_load = false;

        }, function errorCallback(response) {
            $scope.is_venture_load = false;
        });
    }

    $rootScope.extra_data_list = {};
    $scope.load_extra_data = function () {
        $http({
            url: base_url + "extra_data.json",
        }).then(function successCallback(response) {

            response = response.data;
            $rootScope.extra_data_list = response.extra_data;
            console.log($rootScope.extra_data_list);

        }, function errorCallback(response) { });
    }
    $scope.load_extra_data();

})

app.controller("homeController", function ($scope, $location, $rootScope, $timeout, $http, $localStorage, $routeParams, $window, $route, $base64, $timeout, $sce, $mdToast, $filter, $interval) {

    /*form*/
    $scope.contactUsformValidate = {
        /*onkeyup: function (element) {
            this.element(element);
        },*/

        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            contact_no: {
                required: true,
            },
            department: {
                required: true,
            },
            message: {
                required: true,
            },
            // agree_tandc: {
            //     required: true
            // }
        },

        messages: {
            name: {
                required: "Please enter name."
            },
            email: {
                required: "Please enter email address."
            },
            contact_no: {
                required: "Please enter mobile number."
            },
            department: {
                required: "Please enter department."
            },
            message: {
                required: "Please enter comment."
            },
            // agree_tandc: {
            //     required: "Please agree terms and conditions."
            // }
        }
    }

    $scope.country_click_contact = function (phonecode, flag) {
        $scope.contactUs_list.country = phonecode;
        $scope.contactUs_list.flag = flag;
        $rootScope.country_code_clickF = false;
    }

    $scope.contact_form_contact_no_length = {
        minlength: 10,
        maxlength: 10,
    };

    $scope.country_change_contact = function () {
        if ($scope.contactUs_list.country == "91") {
            $scope.contact_form_contact_no_length.minlength = 10;
            $scope.contact_form_contact_no_length.maxlength = 10;
        } else {
            $scope.contact_form_contact_no_length.minlength = 8;
            $scope.contact_form_contact_no_length.maxlength = 13;
        }
    }

    $scope.contactUs_list = {};
    $scope.contactUs_list.agree_tandc_display = true;
    $scope.contactUs_list.country = '91';
    $scope.contactUs_list.flag = 'https://flagcdn.com/w40/in.webp';
    $scope.addContactUs = false;
    $scope.contactUsSavetext = "Submit";
    $scope.submitcontact = function (form) {
        if (form.validate() && !$scope.addContactUs) {
            $scope.addContactUs = true;
            $scope.contactUsSavetext = "Please wait...";
            $scope.contactUs_list.from_app = 'true';
            $scope.contactUs_list.master_user_id = $rootScope.$storage.logged_in_master_id;
            $scope.contactUs_list.logged_in_master_user_id = $rootScope.$storage.logged_in_master_id;
            $rootScope.contact_department = $scope.contactUs_list.department;
            var contact_no = $scope.contactUs_list.contact_no_display;
            $scope.contactUs_list.contact_no = $scope.contactUs_list.country + " " + contact_no;

            if ($scope.contactUs_list.agree_tandc_display) {
                $scope.contactUs_list.agree_tandc = '1';
            }
            else {
                $scope.contactUs_list.agree_tandc = '0';
            }

            $http({
                method: 'POST',
                url: apiUrl + 'contact_web/save',
                data: $scope.contactUs_list,
                headers: {
                    'Authorization': 'User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093'
                },

            }).then(function successCallback(response) {
                response = response.data;
                if (response.success == 1) {
                    $rootScope.$storage.thank_you_redirect = true;
                    $location.path('/contact-us/thankyou/');
                    // $scope.contact_list = response.data;
                }
                // $scope.iscontactLoading = false;

                $scope.addContactUs = false;
                $scope.contactUs_list = {};
                $scope.contactUs_list.agree_tandc_display = true;

                $scope.contactUsSavetext = "Submit";

                $scope.contactUs_list.country = '91';
                $scope.contactUs_list.flag = 'https://flagcdn.com/w40/in.webp';

                $mdToast.show({
                    template: '<md-toast class="md-toast error">' + response.message + '</md-toast>',
                    hideDelay: 3500,
                    position: 'bottom right'
                });
            }, function errorCallback(response) {
                $scope.contact_list = [];
                $scope.addContactUs = false;
            });
        }
    }
    /*form*/

    $scope.testimonial_Swiper = {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 50,
        speed: 1500,
        freeMode: false,
        autoplay: false,
        // clickable: true,
        loop: false,
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
        breakpoints: {
            1152: {
                slidesPerView: 1,
            },
            500: {
                slidesPerView: 1,
            }
        },
        scrollbar: {
            el: ".swiper-scrollbar.swiper-scrollbar-gallery",
            hide: false,
        },
        pagination: {
            el: ".swiper-pagination.gallery-swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next.testimonial-next",
            prevEl: ".swiper-button-prev.testimonial-prev",
        },
    }

    $scope.testimonialBlock = [
        {
            image: "assets/images/customer-testimonial-1.png",
            name: "Parthivn Majumdar",
            text: "A very simple young man Mr. Jayesh Chinubhai Shah ahead to his 44 years of age, has a very strong aim from his very childhood to provide a home to everyone. He has observed and understood the need for a common people, that shelter is the priority. He  has struggled from a very early age to fulfill the dream of common people. As a Chairman and Managing Director of Laxmi Group he has already delivered 3 mass housing projects in Ahmedabad. He has 2 upcoming projects which are again a mass housing. He is gracefully moving ahead to his goal and competent about his responsibilities towards society. His knowledge of architecture & engineering is much higher than a paper certificate.",
        },
        {
            image: "assets/images/customer-testimonial-2.png",
            name: "Rajesh Kumar",
            text: "I always Dreamt for a big home, But my budget was very constraint. Buying big home was next impossible. One day I was in social site and I got thrilled that my hunt for big home came to an end. I got Sky city of 23 storied luxuries 3 BHK in my budget. It was bigger than big home I  desired . I am a  proud  owner today.",
        },
        {
            image: "assets/images/customer-testimonial-3.png",
            name: "Umesh Upadhaya",
            text: "Are you looking for a home. Are you looking for smart budget. Are you looking a home which you have dreamt. You have thought right , I am a happy apartment owner in laxmi's  group project Eternia. I suggest to all home buyers do not  waste time and money. ",
        }

    ]
    $scope.horizontal_text = [
        {
            id: "1",
            title: "Eco-Conscious Construction ",
            text: "At Laxmi Group, we prioritize sustainability at every stage of our construction process. From using eco friendly materials to implementing energy efficient technologies",
        },
        {
            id: "2",
            title: "Durable Design",
            text: "Durability is not just a feature it's a promise we keep with every structure we build. Laxmi Group's designs are engineered to withstand the test of time, blending exceptional craftsmanship with robust materials.",
        },
        {
            id: "3",
            title: "Innovative Sustainability",
            text: "Laxmi Group is at the forefront of innovation in sustainable construction. We integrate cutting-edge technologies and green practices to maximize energy efficiency, reduce waste, and optimize resources throughout our projects.",
        },
        {
            id: "4",
            title: "Community Engagement",
            text: "Beyond buildings, Laxmi Group is dedicated to nurturing thriving communities. We engage with local stakeholders, prioritize inclusive design, and support social initiatives that enrich neighborhoods and empower residents.",
        },
        {
            id: "5",
            title: "Quality Craftsmanship",
            text: "At Laxmi Group, quality is non-negotiable. We uphold the highest standards of craftsmanship, ensuring meticulous attention to detail in every aspect of our work.",
        },
        {
            id: "6",
            title: "Client Centric Approach ",
            text: "Laxmi Group is driven by a client-centric ethos. We listen, collaborate, and tailor our solutions to meet individual needs and aspirations. Our transparent processes and responsive service ensure a seamless journey. ",
        }

    ]
    $rootScope.is_section_Scrolled = false;

    // console.log($rootScope.page_full_list);

    // $scope.home_other_banner = [];
    // $scope.detail_interval_temp = $interval(function () {

    //     angular.forEach($rootScope.page_full_list, function (val, key) {

    //         if ($rootScope.home_list.other_page_banner.indexOf(val.admin_slug)) {
    //             $scope.home_other_banner.push(val);
    //             console.log($scope.home_other_banner);
    //         }

    //     })

    // }, 100);

    $rootScope.home_list = {};
    $scope.is_homelist_load = true;
    $scope.homelist_load = function () {
        /*if (!$rootScope.home_list.master_user_id) {*/
        $scope.is_homelist_load = true;
        $rootScope.home_list = {};
        $http({
            method: 'POST',
            url: apiUrl_admin + 'home/details',
            data: {
                master_user_id: $rootScope.$storage.logged_in_master_id,
                logged_in_master_user_id: $rootScope.$storage.logged_in_master_id,
            },
            headers: {
                'Authorization': 'User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093'
            },

        }).then(function successCallback(response) {

            response = response.data;
            if (response.success == 1) {
                $rootScope.home_list = response.data;
                if ($rootScope.home_list.other_page_banner) {
                    $scope.other_banner_get_temp();
                }
            }
            else {
                $location.path("/");
            }
            $scope.is_homelist_load = false;

        }, function errorCallback(response) {
            $scope.is_homelist_load = false;
        });
        /*}*/
    }

    $scope.detail_get_temp = function () {
        $scope.detail_interval_temp = $interval(function () {
            if ($rootScope.$storage.logged_in_master_id != null) {
                $scope.homelist_load();
                $interval.cancel($scope.detail_interval_temp);
            }
        }, 100);
    }
    $scope.detail_get_temp();

    $scope.other_banner_get_temp = function () {
        $scope.page_interval_temp = $interval(function () {
            if ($rootScope.page_full_list.length > 0) {
                $scope.other_banner_foreach();
                $interval.cancel($scope.page_interval_temp);
            }
        }, 100);
    }

    $scope.other_banner_list_get = [];
    $scope.other_banner_foreach = function () {
        angular.forEach($rootScope.page_full_list, function (val, key) {
            if ($rootScope.home_list.other_page_banner.indexOf(val.admin_slug) != -1) {
                $scope.other_banner_list_get.push(val);
                // console.log($scope.other_banner_list_get);
            }
        })
    }

    $scope.testimonial_Swiper = {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 50,
        speed: 1500,
        freeMode: false,
        autoplay: false,
        // clickable: true,
        loop: false,
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
        breakpoints: {
            1152: {
                slidesPerView: 1,
            },
            500: {
                slidesPerView: 1,
            }
        },
        scrollbar: {
            el: ".swiper-scrollbar.swiper-scrollbar-gallery",
            hide: false,
        },
        pagination: {
            el: ".swiper-pagination.gallery-swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next.testimonial-next",
            prevEl: ".swiper-button-prev.testimonial-prev",
        },
    }

    $scope.testimonialBlock = [
        {
            image: "assets/images/customer-testimonial-1.png",
            name: "Parthivn Majumdar",
            text: "A very simple young man Mr. Jayesh Chinubhai Shah ahead to his 44 years of age, has a very strong aim from his very childhood to provide a home to everyone. He has observed and understood the need for a common people, that shelter is the priority. He  has struggled from a very early age to fulfill the dream of common people. As a Chairman and Managing Director of Laxmi Group he has already delivered 3 mass housing projects in Ahmedabad. He has 2 upcoming projects which are again a mass housing. He is gracefully moving ahead to his goal and competent about his responsibilities towards society. His knowledge of architecture & engineering is much higher than a paper certificate.",
        },
        {
            image: "assets/images/customer-testimonial-2.png",
            name: "Rajesh Kumar",
            text: "I always Dreamt for a big home, But my budget was very constraint. Buying big home was next impossible. One day I was in social site and I got thrilled that my hunt for big home came to an end. I got Sky city of 23 storied luxuries 3 BHK in my budget. It was bigger than big home I  desired . I am a  proud  owner today.",
        },
        {
            image: "assets/images/customer-testimonial-3.png",
            name: "Umesh Upadhaya",
            text: "Are you looking for a home. Are you looking for smart budget. Are you looking a home which you have dreamt. You have thought right , I am a happy apartment owner in laxmi's  group project Eternia. I suggest to all home buyers do not  waste time and money. ",
        }

    ]

})

app.controller("listController", function ($scope, $location, $rootScope, $timeout, $http, $localStorage, $routeParams, $window, $route, $base64, $timeout, $sce, $mdToast, $filter) {

    $rootScope.is_section_Scrolled = false;

    // $scope.gallery_Swiper_listing = {
    //     observer: true,
    //     observeParents: true,
    //     effect: "fade",
    //     slidesPerView: 1,
    //     spaceBetween: 15,
    //     speed: 1500,
    //     autoplay: true,
    //     clickable: true,
    //     loop: true,
    //     autoplay: {
    //         delay: 2500,
    //         disableOnInteraction: false,
    //     },
    //     breakpoints: {
    //         1450: {
    //             slidesPerView: 1,
    //             spaceBetween: 10,
    //         },
    //         1440: {
    //             slidesPerView: 1,
    //             spaceBetween: 10,
    //         },
    //         1280: {
    //             slidesPerView: 1,
    //             spaceBetween: 10,
    //         },
    //         768: {
    //             slidesPerView: 1,
    //             spaceBetween: 10,
    //         },
    //         600: {
    //             slidesPerView: 1,
    //         },
    //         384: {
    //             slidesPerView: 1,
    //         }
    //     },
    // }
})

app.controller("contactController", function ($scope, $location, $rootScope, $timeout, $http, $localStorage, $routeParams, $window, $route, $base64, $timeout, $sce, $mdToast, $filter, $interval) {

    $rootScope.is_section_Scrolled = false;

    $scope.detail_get_temp = function () {
        $scope.detail_interval_temp = $interval(function () {
            if ($rootScope.$storage.logged_in_master_id != null) {
                $rootScope.common_page_load($location.path().replace("/", "").replace("/", ""));
                $interval.cancel($scope.detail_interval_temp);
            }
        }, 100);
    }
    $scope.detail_get_temp();

    // contact

    $scope.contactUsformValidate = {
        /*onkeyup: function (element) {
            this.element(element);
        },*/

        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            contact_no: {
                required: true,
            },
            department: {
                required: true,
            },
            message: {
                required: true,
            },
            // agree_tandc: {
            //     required: true
            // }
        },

        messages: {
            name: {
                required: "Please enter name."
            },
            email: {
                required: "Please enter email address."
            },
            contact_no: {
                required: "Please enter mobile number."
            },
            department: {
                required: "Please enter department."
            },
            message: {
                required: "Please enter comment."
            },
            // agree_tandc: {
            //     required: "Please agree terms and conditions."
            // }
        }
    }

    $scope.country_click_contact = function (phonecode, flag) {
        $scope.contactUs_list.country = phonecode;
        $scope.contactUs_list.flag = flag;
        $rootScope.country_code_clickF = false;
    }

    $scope.contact_form_contact_no_length = {
        minlength: 10,
        maxlength: 10,
    };

    $scope.country_change_contact = function () {
        if ($scope.contactUs_list.country == "91") {
            $scope.contact_form_contact_no_length.minlength = 10;
            $scope.contact_form_contact_no_length.maxlength = 10;
        } else {
            $scope.contact_form_contact_no_length.minlength = 8;
            $scope.contact_form_contact_no_length.maxlength = 13;
        }
    }

    $scope.contactUs_list = {};
    $scope.contactUs_list.agree_tandc_display = true;
    $scope.contactUs_list.country = '91';
    $scope.contactUs_list.flag = 'https://flagcdn.com/w40/in.webp';
    $scope.addContactUs = false;
    $scope.contactUsSavetext = "Submit";
    $scope.submitcontact = function (form) {
        if (form.validate() && !$scope.addContactUs) {
            $scope.addContactUs = true;
            $scope.contactUsSavetext = "Please wait...";
            $scope.contactUs_list.from_app = 'true';
            $scope.contactUs_list.master_user_id = $rootScope.$storage.logged_in_master_id;
            $scope.contactUs_list.logged_in_master_user_id = $rootScope.$storage.logged_in_master_id;
            $rootScope.contact_department = $scope.contactUs_list.department;
            var contact_no = $scope.contactUs_list.contact_no_display;
            $scope.contactUs_list.contact_no = $scope.contactUs_list.country + " " + contact_no;

            if ($scope.contactUs_list.agree_tandc_display) {
                $scope.contactUs_list.agree_tandc = '1';
            }
            else {
                $scope.contactUs_list.agree_tandc = '0';
            }

            $http({
                method: 'POST',
                url: apiUrl + 'contact_web/save',
                data: $scope.contactUs_list,
                headers: {
                    'Authorization': 'User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093'
                },

            }).then(function successCallback(response) {
                response = response.data;
                if (response.success == 1) {
                    $rootScope.$storage.thank_you_redirect = true;
                    $location.path('/contact-us/thankyou/');
                    // $scope.contact_list = response.data;
                }
                // $scope.iscontactLoading = false;

                $scope.addContactUs = false;
                $scope.contactUs_list = {};
                $scope.contactUs_list.agree_tandc_display = true;

                $scope.contactUsSavetext = "Submit";

                $scope.contactUs_list.country = '91';
                $scope.contactUs_list.flag = 'https://flagcdn.com/w40/in.webp';

                $mdToast.show({
                    template: '<md-toast class="md-toast error">' + response.message + '</md-toast>',
                    hideDelay: 3500,
                    position: 'bottom right'
                });

                // $rootScope.$storage.thank_you_redirect = true;
                // $location.path('/contact-us/thankyou/');

            }, function errorCallback(response) {
                $scope.contact_list = [];
                $scope.addContactUs = false;
            });
        }
    }

    $scope.contact_Swiper = {
        observer: true,
        observeParents: true,
        slidesPerView: 3,
        spaceBetween: 20,
        speed: 1500,
        freeMode: false,
        autoplay: false,
        clickable: true,
        loop: false,
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
        breakpoints: {
            1680: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1366: {
                slidesPerView: 2.8,
                spaceBetween: 10,
            },
            1280: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1152: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            600: {
                slidesPerView: 1,
                spaceBetween: 10,
            }
        },
        scrollbar: {
            el: ".swiper-scrollbar.swiper-scrollbar-gallery",
            hide: false,
        },
    }

})

app.controller("redevelopmentController", function ($scope, $location, $rootScope, $timeout, $http, $localStorage, $routeParams, $window, $route, $base64, $timeout, $sce, $mdToast, $filter, $interval) {

    $rootScope.is_section_Scrolled = false;

    $scope.detail_get_temp = function () {
        $scope.detail_interval_temp = $interval(function () {
            if ($rootScope.$storage.logged_in_master_id != null) {
                $rootScope.common_page_load($location.path().replace("/", "").replace("/", ""));
                $interval.cancel($scope.detail_interval_temp);
            }
        }, 100);
    }
    $scope.detail_get_temp();

    $scope.redevelopment_validate = {

        /*onkeyup: function (element) {
            this.element(element);
        },*/

        rules: {
            society_name: {
                required: true
            },
            email: {
                required: true,
                email: true,
            },
            address: {
                required: true
            },
            plot_area: {
                required: true
            },
            existing_unit: {
                required: true
            },
            requirements: {
                required: true
            },
            contact_no: {
                required: true
            },
            road_width: {
                required: true
            },
            member_confirmation: {
                required: true
            },
            contact_persion_name: {
                required: true
            }
        },

        messages: {
            society_name: {
                required: "Please enter society name."
            },
            email: {
                required: "Please enter email."
            },
            address: {
                required: "Please enter address."
            },
            plot_area: {
                required: "Please enter plot area."
            },
            existing_unit: {
                required: "Please enter existing unit details."
            },
            requirements: {
                required: "Please enter redevelopment requirement from developer."
            },
            contact_no: {
                required: "Please enter mobile number."
            },
            road_width: {
                required: "Please enter road width."
            },
            member_confirmation: {
                required: "Please agree redevelopment terms and conditions."
            },
            contact_persion_name: {
                required: "Please enter contact person name."
            }
        }
    }

    $scope.country_click_redevelopment = function (phonecode, flag) {
        $scope.redevelopment_obj.country = phonecode;
        $scope.redevelopment_obj.flag = flag;
        $rootScope.country_code_clickF = false;
    }

    $scope.redevelopment_contact_no_length = {
        minlength: 10,
        maxlength: 10,
    };

    $scope.redevelopment_country_change = function () {
        if ($scope.redevelopment_obj.country == "91") {
            $scope.redevelopment_contact_no_length.minlength = 10;
            $scope.redevelopment_contact_no_length.maxlength = 10;
        } else {
            $scope.redevelopment_contact_no_length.minlength = 8;
            $scope.redevelopment_contact_no_length.maxlength = 13;
        }
    }

    $scope.redevelopment_obj = {};
    $scope.redevelopment_obj.country = '91';
    $scope.redevelopment_obj.flag = 'https://flagcdn.com/w40/in.webp';
    $scope.redevelopment_obj_save = false;
    $scope.redevelopment_obj.member_confirmation_display = true;
    $scope.redevelopmentform = function (form) {
        if (form.validate() && !$scope.redevelopment_obj) {
            /*$rootScope.otpSend_coman($scope.redevelopment_obj.contact_no);
            $rootScope.redevelopmentClick = true;*/
            $rootScope.redevelopmentformSend();
        }
    }

    $rootScope.redevelopmentformSend = function () {
        $scope.redevelopment_obj_save = true;
        $rootScope.inquiry_form_save_text_fun();
        $scope.redevelopment_obj.from_app = 'true';
        $scope.redevelopment_obj.master_user_id = $rootScope.$storage.logged_in_master_id;
        $scope.redevelopment_obj.logged_in_master_user_id = $rootScope.$storage.logged_in_master_id;
        $scope.redevelopment_obj.contact_no = $scope.redevelopment_obj.country + " " + $scope.redevelopment_obj.contact_no;

        if ($scope.redevelopment_obj.member_confirmation_display) {
            $scope.redevelopment_obj.member_confirmation = '1';
        }
        else {
            $scope.redevelopment_obj.member_confirmation = '0';
        }

        $http({
            method: 'POST',
            url: apiUrl + 'redevelopment/save',
            data: $scope.redevelopment_obj,
            headers: {
                'Authorization': 'User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093'
            },
        }).then(function successCallback(response) {

            response = response.data;
            if (response.success == 1) {
                $scope.redevelopment_obj = {};
            }

            $mdToast.show({
                template: '<md-toast class="md-toast error">' + response.message + '</md-toast>',
                hideDelay: 3500,
                position: 'bottom right'
            });

            $scope.redevelopment_obj.country = '91';
            $scope.redevelopment_obj.flag = 'https://flagcdn.com/w40/in.webp';
            $scope.redevelopment_obj.agree_tandc_display = true;
            $scope.redevelopment_obj_save = false;
            $rootScope.inquiry_form_save_text_fun();

        }, function errorCallback(response) {

        });
    }

})

app.controller("nriController", function ($scope, $location, $rootScope, $timeout, $http, $localStorage, $routeParams, $window, $route, $base64, $timeout, $sce, $mdToast, $filter, $interval) {

    $rootScope.is_section_Scrolled = false;

    $scope.detail_get_temp = function () {
        $scope.detail_interval_temp = $interval(function () {
            if ($rootScope.$storage.logged_in_master_id != null) {
                $rootScope.common_page_load($location.path().replace("/", "").replace("/", ""));
                $interval.cancel($scope.detail_interval_temp);
            }
        }, 100);
    }
    $scope.detail_get_temp();

    $scope.nri_validate = {

        /*onkeyup: function (element) {
            this.element(element);
        },*/

        rules: {
            name: {
                required: true,
                // lettersonly: true
            },
            email: {
                required: true,
                email: true,
            },
            contact_no: {
                required: true
            },
            message: {
                required: true
            },
            // AgreeTandC: {
            //     required: true
            // }
        },

        messages: {
            name: {
                required: "Please enter name."
            },
            email: {
                required: "Please enter email."
            },
            contact_no: {
                required: "Please enter mobile number."
            },
            message: {
                required: "Please enter message."
            },
            // AgreeTandC: {
            //     required: "Please agree terms and conditions."
            // }
        }
    }

    $scope.country_click_nri = function (phonecode, flag) {
        $scope.nri_obj.country = phonecode;
        $scope.nri_obj.flag = flag;
        $rootScope.country_code_clickF = false;
    }

    $scope.nri_contact_no_length = {
        minlength: 10,
        maxlength: 10,
    };

    $scope.nri_country_change = function () {
        if ($scope.nri_obj.country == "91") {
            $scope.nri_contact_no_length.minlength = 10;
            $scope.nri_contact_no_length.maxlength = 10;
        } else {
            $scope.nri_contact_no_length.minlength = 8;
            $scope.nri_contact_no_length.maxlength = 13;
        }
    }

    $scope.save_nri_f = false;
    $rootScope.nri_obj = {};
    $scope.nri_obj.AgreeTandC_display = true;
    $rootScope.nri_obj.country = '91';
    $rootScope.nri_obj.flag = 'https://flagcdn.com/w40/in.webp';
    $scope.nri_form = function (form) {
        if (form.validate() && !$scope.save_nri_f) {
            /*$rootScope.otpSend_coman($scope.nri_obj.contact_no);
            $rootScope.nriClick = true;*/
            $rootScope.nri_formSend();
        }
    }

    $rootScope.nri_formSend = function () {
        $scope.save_nri_f = true;
        $rootScope.inquiry_form_save_text_fun();
        $rootScope.nri_obj.from_app = 'true';
        $rootScope.nri_obj.master_user_id = $rootScope.$storage.logged_in_master_id;
        $rootScope.nri_obj.logged_in_master_user_id = $rootScope.$storage.logged_in_master_id;
        var contact_no = $scope.nri_obj.contact_no_display;
        $rootScope.nri_obj.contact_no = $rootScope.nri_obj.country + " " + contact_no;
        if ($scope.nri_obj.AgreeTandC_display) {
            $scope.nri_obj.AgreeTandC = '1';
        }
        else {
            $scope.nri_obj.AgreeTandC = '0';
        }

        $http({
            method: 'POST',
            url: apiUrl + 'nri/save',
            data: $rootScope.nri_obj,
            headers: {
                'Authorization': 'User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093'
            },
        }).then(function successCallback(response) {

            response = response.data;
            if (response.success == 1) {
                $rootScope.nri_obj = {};
                $rootScope.$storage.thank_you_redirect = true;
                $location.path('/nricorner/thankyou/');
            }

            $mdToast.show({
                template: '<md-toast class="md-toast error">' + response.message + '</md-toast>',
                hideDelay: 3500,
                position: 'bottom right'
            });

            $scope.save_nri_f = false;
            $rootScope.inquiry_form_save_text_fun();
            $scope.nri_obj.AgreeTandC_display = true;
            $rootScope.nri_obj.country = '91';
            $rootScope.nri_obj.flag = 'https://flagcdn.com/w40/in.webp';

        }, function errorCallback(response) {

        });
    }

})

app.controller("vendorController", function ($scope, $location, $rootScope, $timeout, $http, $localStorage, $routeParams, $window, $route, $base64, $timeout, $sce, $mdToast, $filter, $interval) {

    $rootScope.is_section_Scrolled = false;

    $scope.detail_get_temp = function () {
        $scope.detail_interval_temp = $interval(function () {
            if ($rootScope.$storage.logged_in_master_id != null) {
                $rootScope.common_page_load($location.path().replace("/", "").replace("/", ""));
                $interval.cancel($scope.detail_interval_temp);
            }
        }, 100);
    }
    $scope.detail_get_temp();

    $scope.tab = 1;
    $scope.setTab = function (newTab) {
        $scope.tab = newTab;
    };

    $scope.isSet = function (tabNum) {
        return $scope.tab === tabNum;
    };

    $scope.vendor_validate = {

        rules: {
            name_of_firm: {
                required: true,
            },
            category_item: {
                required: true
            },
            firm_establishment_year: {
                required: true
            },
            nature_of_business: {
                required: true
            },
            address_of_reg_office: {
                required: true
            },
            email: {
                required: true,
                email: true,
            },
            company_ref_one: {
                required: true
            },
            company_ref_two: {
                required: true
            },
            company_ref_three: {
                required: true
            },
            gst_no: {
                required: true
            },
            pan_no: {
                required: true
            },
            contact_person_name: {
                required: true
            },
            contact_person_no: {
                required: true
            },
            bank_details: {
                required: true
            },
            bank_account_no: {
                required: true
            },
            ifsc_code: {
                required: true
            },
            gst_attach_upload: {
                required: true
            },
            pan_attach_upload: {
                required: true
            },
            address_attach_upload: {
                required: true
            },
            // invalidCheck: {
            //     required: true
            // }
        },

        messages: {
            name_of_firm: {
                required: "Please enter name of firm."
            },
            category_item: {
                required: "Please enter category item."
            },
            firm_establishment_year: {
                required: "Please enter year of establishment of firm."
            },
            nature_of_business: {
                required: "Please enter nature of business."
            },
            address_of_reg_office: {
                required: "Please enter address of registration office."
            },
            email: {
                required: "Please enter your email address."
            },
            company_ref_one: {
                required: "Please enter first company reference."
            },
            company_ref_two: {
                required: "Please enter second company reference."
            },
            company_ref_three: {
                required: "Please enter third company reference."
            },
            gst_no: {
                required: "Please enter GST number."
            },
            pan_no: {
                required: "Please enter PAN card number."
            },
            contact_person_name: {
                required: "Please enter contact person name."
            },
            contact_person_no: {
                required: "Please enter contact person number."
            },
            bank_details: {
                required: "Please enter bank details. Please specify bank name."
            },
            bank_account_no: {
                required: "Please enter bank account number."
            },
            ifsc_code: {
                required: "Please enter bank IFSC code."
            },
            gst_attach_upload: {
                required: "Please attach copy of GST registration."
            },
            pan_attach_upload: {
                required: "Please attach copy of PAN card."
            },
            address_attach_upload: {
                required: "Please attach copy of address proof."
            },
            // invalidCheck: {
            //     required: "Please agree to terms and conditions."
            // }
        }
    }

    $scope.vendor_save_f = false;
    $scope.vendorSaveText = "Submit";
    $scope.vendor_obj = {};
    $scope.vendor_obj.country = '91';
    $scope.vendor_obj.flag = 'https://flagcdn.com/w40/in.webp';
    $scope.vendor_obj.country2 = '91';
    $scope.vendor_obj.flag2 = 'https://flagcdn.com/w40/in.webp';
    $scope.vendor_obj.invalidCheck_display = false;

    $scope.vendorform = function (form) {
        if (form.validate() && !$scope.vendor_save_f) {
            /*$rootScope.otpSend_coman($scope.vendor_obj.contact_person_no);
            $rootScope.vendorClick = true;*/
            $rootScope.vendorformSend();
        }
    }

    $rootScope.country_click_vendor_from = function (phonecode, flag) {
        $scope.vendor_obj.country2 = phonecode;
        $scope.vendor_obj.flag2 = flag;
        $rootScope.country_code_clickF = false;
    }

    $scope.vendor_contact_no_length = {
        minlength: 10,
        maxlength: 10,
    };

    $scope.vendor_contact_no_length2 = {
        minlength: 10,
        maxlength: 10,
    };

    $scope.vendor_country_change = function () {
        if ($scope.vendor_obj.country == "91") {
            $scope.vendor_contact_no_length.minlength = 10;
            $scope.vendor_contact_no_length.maxlength = 10;
        } else {
            $scope.vendor_contact_no_length.minlength = 8;
            $scope.vendor_contact_no_length.maxlength = 13;
        }
    }

    $scope.vendor_country_change2 = function () {
        if ($scope.vendor_obj.country == "91") {
            $scope.vendor_contact_no_length2.minlength = 10;
            $scope.vendor_contact_no_length2.maxlength = 10;
        } else {
            $scope.vendor_contact_no_length2.minlength = 8;
            $scope.vendor_contact_no_length2.maxlength = 13;
        }
    }

    $rootScope.vendorformSend = function () {
        $timeout(function () {
            $scope.vendor_save_f = true;
            $scope.vendor_obj.from_app = 'true';
            $rootScope.inquiry_form_save_text_fun();

            if ($scope.vendor_obj.invalidCheck_display) {
                $scope.vendor_obj.invalidCheck = '1';
            }
            else {
                $scope.vendor_obj.invalidCheck = '0';
            }

            if ($scope.vendor_obj.is_quality_manual) {
                $scope.vendor_obj.is_quality_manual = 1;
            } else {
                $scope.vendor_obj.is_quality_manual = 0;
            }

            if ($scope.vendor_obj.is_quality_audits) {
                $scope.vendor_obj.is_quality_audits = 1;
            } else {
                $scope.vendor_obj.is_quality_audits = 0;
            }
            $scope.vendor_obj.master_user_id = $rootScope.$storage.logged_in_master_id;
            $scope.vendor_obj.logged_in_master_user_id = $rootScope.$storage.logged_in_master_id;
            if ($scope.vendor_obj.contact_no) {
                var contact_no = $scope.vendor_obj.contact_no;
                $scope.vendor_obj.contact_no = $scope.vendor_obj.country2 + " " + contact_no;
            }
            var contact_person_no = $scope.vendor_obj.contact_person_no;
            $scope.vendor_obj.contact_person_no = $scope.vendor_obj.country + " " + contact_person_no;
            // console.log($scope.vendor_obj);
            // return false;

            $http({
                method: 'POST',
                url: apiUrl + 'vendor/save',
                data: $scope.vendor_obj,
                headers: {
                    'Authorization': 'User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093'
                },

            }).then(function successCallback(response) {

                response = response.data;
                if (response.success == 1) {
                    $scope.vendor_obj = {};
                    $scope.tab = 1;
                    $scope.nextChange();
                    $scope.nextChange2();
                    $rootScope.$storage.thank_you_redirect = true;
                    $location.path('/vendor/thankyou/');
                }

                $mdToast.show({
                    template: '<md-toast class="md-toast error">' + 'Your registration as Vendor has been receive successfully.' + '</md-toast>',
                    hideDelay: 3500,
                    position: 'bottom right'
                });

                $scope.vendor_save_f = false;
                $rootScope.inquiry_form_save_text_fun();
                $scope.vendor_obj.country = '91';
                $scope.vendor_obj.flag = 'https://flagcdn.com/w40/in.webp';
                $scope.vendor_obj.country2 = '91';
                $scope.vendor_obj.flag2 = 'https://flagcdn.com/w40/in.webp';
                $scope.vendor_obj.invalidCheck_display = false;

            }, function errorCallback(response) {

            });
        }, 100);
    }

    $rootScope.country_click_vendor = function (phonecode, flag) {
        $scope.vendor_obj.country = phonecode;
        $scope.vendor_obj.flag = flag;
        $rootScope.country_code_clickF = false;
    }

    $scope.vendor_data_upload = {};
    $scope.vendor_upload = function (upload_type) {
        if ($scope.vendor_data_upload) {
            var data = new FormData();
            $scope.vendor_data_upload.from_app = 'true';
            $scope.vendor_data_upload.upload_type = upload_type;
            angular.forEach($scope.vendor_data_upload, function (val, key) {
                data.append(key, val);
            })

            $scope.vendor_save_f = true;
            $rootScope.inquiry_form_save_text_fun();

            $http({
                method: 'POST',
                url: apiUrl + 'vendor/upload_file',
                data: data,
                headers:{
                    'Content-Type': undefined,
                    'Authorization': 'User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093'
                }
            }).then(function successCallback(response) {
                response = response.data;
                if (response.success == 1)  {
                    if (upload_type == "product_details_catalogue") {
                        $scope.vendor_obj.product_details_catalogue = response.file_name;
                    } else if (upload_type == "gst_attach") {
                        $scope.vendor_obj.gst_attach = response.file_name;
                    } else if (upload_type == "pan_attach") {
                        $scope.vendor_obj.pan_attach = response.file_name;
                    } else if (upload_type == "iso_attach") {
                        $scope.vendor_obj.iso_attach = response.file_name;
                    } else if (upload_type == "address_attach") {
                        $scope.vendor_obj.address_attach = response.file_name;
                    } else if (upload_type == "msme_attach") {
                        $scope.vendor_obj.msme_attach = response.file_name;
                    }
                }
                $scope.vendor_save_f = false;
                $rootScope.inquiry_form_save_text_fun();

            }, function errorCallback(response) {

            });
        }
    }

    $scope.contact_check_fun = function (contact_no, contact_person_no) {
        $timeout(function () {
            if ((contact_no != "" && contact_no != undefined) || (contact_person_no != "" && contact_person_no != undefined)) {
                if (contact_person_no) {
                    contact_person_no = $scope.vendor_obj.country + " " + contact_person_no;
                } else if (contact_no) {
                    contact_no = $scope.vendor_obj.country2 + " " + contact_no;
                }
                var obj_vendor = {
                    contact_no: contact_no,
                    contact_person_no: contact_person_no,
                    master_user_id: $rootScope.$storage.logged_in_master_id,
                    logged_in_master_user_id: $rootScope.$storage.logged_in_master_id,
                }
                $http({
                    method: 'POST',
                    url: apiUrl + 'vendor/contact_check',
                    data: obj_vendor,
                    headers: {
                        'Authorization': 'User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093'
                    },

                }).then(function successCallback(response) {

                    response = response.data;
                    if (response.success == 1) {

                    } else if (response.success == 2) {
                        $scope.vendor_obj.contact_person_no = "";
                        $mdToast.show({
                            template: '<md-toast class="md-toast error">' + response.message + '</md-toast>',
                            hideDelay: 5000,
                            position: 'bottom right'
                        });
                    } else if (response.success == 3) {
                        $scope.vendor_obj.contact_no = "";
                        $mdToast.show({
                            template: '<md-toast class="md-toast error">' + response.message + '</md-toast>',
                            hideDelay: 5000,
                            position: 'bottom right'
                        });
                    }

                }, function errorCallback(response) {

                });
            }
        }, 100);

    }

    $scope.nextVlidate = false;
    $scope.nextChange = function () {
        if ($scope.vendor_obj.name_of_firm &&
            $scope.vendor_obj.category_item &&
            $scope.vendor_obj.firm_establishment_year &&
            $scope.vendor_obj.nature_of_business &&
            $scope.vendor_obj.address_of_reg_office &&
            $scope.vendor_obj.email) {
            $scope.nextVlidate = true;
        } else {
            $scope.nextVlidate = false;
        }
    }

    $scope.nextVlidate2 = false;
    $scope.nextChange2 = function () {
        if ($scope.vendor_obj.company_ref_one &&
            $scope.vendor_obj.company_ref_two &&
            $scope.vendor_obj.company_ref_three &&
            $scope.vendor_obj.gst_no &&
            $scope.vendor_obj.pan_no &&
            $scope.vendor_obj.contact_person_name &&
            $scope.vendor_obj.contact_person_no &&
            $scope.vendor_obj.bank_details &&
            $scope.vendor_obj.bank_account_no &&
            $scope.vendor_obj.ifsc_code) {
            $scope.nextVlidate2 = true;
        } else {
            $scope.nextVlidate2 = false;
        }
    }

})

app.controller("projectdetailController", function ($scope, $location, $rootScope, $timeout, $http, $localStorage, $routeParams, $window, $route, $base64, $timeout, $sce, $mdToast, $filter, $interval) {

    $rootScope.extra_data_list = {};
    $scope.load_extra_data = function () {
        $http({
            url: base_url + "extra_data.json",
        }).then(function successCallback(response) {

            response = response.data;
            $rootScope.extra_data_list = response.extra_data;
            console.log($rootScope.extra_data_list);

        }, function errorCallback(response) { });
    }
    $scope.load_extra_data();
    
    $scope.accordionId = "";
    $scope.accordionClick = function (id) {
        
        if($scope.accordionId == id ){
            $scope.accordionId = "";
        }
        else{
            $scope.accordionId = id;

        }
        
      }

    // flskdjflj 

    $scope.gallery3d_Swiper_new_one = {
        observer: true,
        observeParents: true,

        spaceBetween: 10,
        speed: 1500,
        slidesOffsetBefore :180,
        autoplay: false,
        // clickable: true,
        loop: false,
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
        breakpoints: {
            1920: {
                slidesPerView: 3,
                slidesOffsetBefore :180,
            },
            1680: {
                slidesPerView: 3,
                slidesOffsetBefore :80,
            },
            1600: {
                slidesPerView: 3,
                slidesOffsetBefore :0,
            },
            1440: {
                slidesPerView: 3,
                slidesOffsetBefore :0,
            },
            1366: {
                slidesPerView: 3,
            },
            1280: {
                slidesPerView: 3,
            },
            1152: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
                slidesOffsetBefore :0,
            },
            500: {
                slidesPerView: 1,
                slidesOffsetBefore :0,
            },
            420: {
                slidesPerView: 1,
                slidesOffsetBefore :0,
            },
            375: {
                slidesPerView: 1,
                slidesOffsetBefore :0,
            },
            360: {
                slidesPerView: 1,
                slidesOffsetBefore :0,
            }
        },
        scrollbar: {
            el: ".swiper-scrollbar.swiper-scrollbar-gallery",
            hide: false,
        },
        pagination: {
            el: ".swiper-pagination.gallery-swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next.gallery_swiper-next",
            prevEl: ".swiper-button-prev.gallery_swiper-prev",
        },
    }

    $scope.gallery3d_Swiper_new_two = {
        observer: true,
        observeParents: true,
        slidesPerView: 2.1,
        spaceBetween: 20,
        speed: 1500,
        slidesOffset :150,
        //freeMode: true,
        autoplay: false,
        // clickable: true,
        loop: false,
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
        breakpoints: {
            1152: {
                slidesPerView: 2,
            },
            500: {
                slidesPerView: 1,
            }
        },
        scrollbar: {
            el: ".swiper-scrollbar.fraction_pagination-scrollbar",
            hide: false,
        },
        pagination: {
            el: ".swiper-pagination.gallery-swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next.listgallery_swiper-next",
            prevEl: ".swiper-button-prev.listgallery_swiper-prev",
        },
    }
   
    $rootScope.is_section_Scrolled = false;

    // $rootScope.project_contact_no = {};

    $scope.construction_array = [];
    $scope.construction_array_images = [];
    $rootScope.projects_full_list_detail = {};
    $scope.is_all_project_loading_detail = true;
    $scope.projects_full_load_detail = function () {
        $scope.is_all_project_loading_detail = true;
        $rootScope.projects_full_list_detail = {};
        $http({
            method: 'POST',
            url: apiUrl + 'properties/list',
            data: {
                all_detail: 1,
                master_user_id: $rootScope.$storage.logged_in_master_id,
                logged_in_master_user_id: $rootScope.$storage.logged_in_master_id,
                slug: $routeParams.slug
            },
            headers: {
                'Authorization': 'User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093'
            },

        }).then(function successCallback(response) {

            response = response.data;
            if (response.success == 1) {

                if ($location.search().type) {
                    if ($location.search().type == "gallery") {
                        $rootScope.scrolltoDiv("reecosys-project-detail-section-5");
                    } else if ($location.search().type == "construction") {
                        $rootScope.scrolltoDiv("reecosys-project-detail-section-7");
                    }
                }

                $rootScope.projects_full_list_detail = response.data[0];

                $rootScope.projects_name = $rootScope.projects_full_list_detail.project_title;
                $rootScope.project_id = $rootScope.projects_full_list_detail.project_id;
                $rootScope.project_title = $rootScope.projects_full_list_detail.project_title;
                $rootScope.page_title = $rootScope.projects_full_list_detail.page_title;
                $rootScope.page_description = $rootScope.projects_full_list_detail.page_description;
                $rootScope.project_contact_no = $rootScope.projects_full_list_detail.project_contact_no;
                $rootScope.project_filter("", $rootScope.projects_full_list_detail.slug, "");

                if ($rootScope.extra_data_list) {
                    var project_extra_data = $rootScope.extra_data_list.filter(function (e) {
                        if (e.project_id == $rootScope.project_id) {
                            return e;
                        }
                    })[0];
                    $rootScope.extra_data = project_extra_data;
                    console.log($rootScope.extra_data);
                }

                $rootScope.projects_full_list_detail.gallery_data_all = [{
                    tag_line: "",
                    description: "",
                    image: [],
                }];

                angular.forEach($rootScope.projects_full_list_detail.gallery_data, function (val, key) {
                    if (!$rootScope.projects_full_list_detail.gallery_data_all[0].tag_line) {
                        $rootScope.projects_full_list_detail.gallery_data_all[0].tag_line = val.tag_line;
                    }
                    if (!$rootScope.projects_full_list_detail.gallery_data_all[0].description) {
                        $rootScope.projects_full_list_detail.gallery_data_all[0].description = val.description;
                    }
                    if (!$rootScope.projects_full_list_detail.gallery_data_all[0].title) {
                        $rootScope.projects_full_list_detail.gallery_data_all[0].title = val.title;
                    }
                    angular.forEach(val.image, function (val_2, key_2) {
                        $rootScope.projects_full_list_detail.gallery_data_all[0].image.push(val_2);
                    })
                })

                $rootScope.projects_full_list_detail.construction_year = [];
                if ($rootScope.projects_full_list_detail.construction_data_2 && $rootScope.projects_full_list_detail.construction_data_2.construction_array) {
                    angular.forEach($rootScope.projects_full_list_detail.construction_data_2.construction_array, function (val, key) {
                        if ($rootScope.projects_full_list_detail.construction_year.indexOf(val.construction_date) != -1) {

                        } else {
                            $rootScope.projects_full_list_detail.construction_year.push(val.construction_date);
                        }
                    })
                }
            } else {
                $location.path('/');
            }
            $scope.is_all_project_loading_detail = false;

        }, function errorCallback(response) {
            $scope.is_all_project_loading_detail = false;
        });
    }

    $scope.detail_get_temp = function () {
        $scope.detail_interval_temp = $interval(function () {
            if ($rootScope.$storage.logged_in_master_id != null) {
                $scope.projects_full_load_detail();
                $interval.cancel($scope.detail_interval_temp);
            }
        }, 100);
    }
    $scope.detail_get_temp();

    $scope.gallery3d_Swiper_new = {
        observer: true,
        observeParents: true,
        slidesPerView: 2.75,
        spaceBetween: 20,
        speed: 1500,
        freeMode: true,
        autoplay: false,
        // clickable: true,
        loop: false,
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
        breakpoints: {
            1152: {
                slidesPerView: 2.25,
            },
            500: {
                slidesPerView: 1,
            }
        },
        scrollbar: {
            el: ".swiper-scrollbar.swiper-scrollbar-gallery",
            hide: false,
        },
        pagination: {
            el: ".swiper-pagination.gallery-swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next.projectgallery3d-next",
            prevEl: ".swiper-button-prev.projectgallery3d-prev",
        },
    }

    $scope.construction_swiper_new = {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 600,
        effect: 'fade',
        // freeMode: true,
        autoplay: false,
        clickable: true,
        loop: false,
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
        // breakpoints: {
        //     1152: {
        //         slidesPerView: 1,
        //     },
        //     500: {
        //         slidesPerView: 1,
        //     }
        // },
        // pagination: {
        //     el: ".swiper-pagination.gallery-swiper-pagination",
        //     type: "fraction",
        // },
        navigation: {
            nextEl: ".swiper-button-next.construction_swiper_new-next",
            prevEl: ".swiper-button-prev.construction_swiper_new-prev",
        },
        pagination: {
            el: '.paginationforcontruction',
            clickable: true,
            renderBullet: function (index, className) {
                return '<div class="' + className + '"> ' + $rootScope.projects_full_list_detail.construction_data.image[index].construction_date + ' </div>';
            },
        },
    }

    $scope.experts_swiper = {
        observer: true,
        observeParents: true,
        slidesPerView: 4,
        spaceBetween: 30,
        speed: 1500,
        freeMode: false,
        // autoplay: true,
        // clickable: true,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
        breakpoints: {
            1152: {
                slidesPerView: 3,
            },
            500: {
                slidesPerView: 2,
            }
        },
    }

    $scope.amenities_swiper = {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        effect: 'fade',
        spaceBetween: 10,
        speed: 1500,
        freeMode: false,
        autoplay: false,
        clickable: true,
        loop: true,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
    }

    $scope.specification_swiper = {
        observer: true,
        observeParents: true,
        slidesPerView: 4.5,
        spaceBetween: 15,
        speed: 1500,
        freeMode: false,
        autoplay: false,
        clickable: true,
        // loop: true,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
        breakpoints: {
            1440: {
                slidesPerView: 4.2,
                spaceBetween: 10,
            },
            1280: {
                slidesPerView: 3.8,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 10,
            },
            600: {
                slidesPerView: 1.2,
            }
        },
    }

    $scope.spec_data = [
        {
            spec_text: "Double Height Entrance Foyer on Ground Floor with Matte Finish Vitrified Floor Tiles."
        },
        {
            spec_text: "Wall-finishes :<br>External : Double Coated Sand Faced/Mala Plaster with Tex/Acrylic Paint.<br>Internal : Single Coated Mala Plaster with Cement Based Lapi Finish."
        },
        {
            spec_text: "Central Garbage Collection System Via Garbage Shafts At Each Floor."
        },
        {
            spec_text: "Properly Designed Office Specific Location For Placement Of Outdoor Air-condition Units."
        },
        {
            spec_text: "First and Second Floor Showroom Floor to Floor height is 11 Feet 11inch Office Floor to Floor height is 10 Feet 9Inch"
        },
        {
            spec_text: "The Building is Supported with 3 Basements for Ample Parking Space"
        }
    ]

    $scope.construction_swiper_demo = {
        observer: true,
        observeParents: true,
        slidesPerView: 3,
        speed: 500,
        // pagination: {
        //     el: ".swiper-pagination",
        // },
        spaceBetween: 30,
        // on: {
        //     init: function () {
        //         $(".swiper-pagination-custom .swiper_pagination_switch").removeClass("active");
        //         $(".swiper-pagination-custom .swiper_pagination_switch").eq(0).addClass("active");
        //     },
        //     slideChangeTransitionStart: function () {
        //         $(".swiper-pagination-custom .swiper_pagination_switch").removeClass("active");
        //         $(".swiper-pagination-custom .swiper_pagination_switch").eq(mySwiper.realIndex).addClass("active");
        //     }
        // }
    }

    // $scope.swiper_pagination_switch = function () {
    //     $scope.construction_swiper_demo.slideTo($(this).index());
    //     $(".swiper-pagination-custom .swiper_pagination_switch").removeClass("active");
    //     $(this).addClass("active");
    // }

    $scope.projectTitle_List = [];
    $scope.projectTitle_load = function () {
        $http({
            url: base_url + "detailTitle.json",
        }).then(function successCallback(response) {

            response = response.data;
            $scope.projectTitle_List = response.titleList;
            // console.log($scope.projectTitle_List);
        }, function errorCallback(response) {

        });
    }
    $scope.projectTitle_load();

})

app.controller("aboutusController", function ($scope, $location, $rootScope, $timeout, $http, $localStorage, $routeParams, $window, $route, $base64, $timeout, $sce, $mdToast, $filter, $interval) {

    $rootScope.is_section_Scrolled = false;

    $scope.detail_get_temp = function () {
        $scope.detail_interval_temp = $interval(function () {
            if ($rootScope.$storage.logged_in_master_id != null) {
                $rootScope.common_page_load($location.path().replace("/", "").replace("/", ""));
                $interval.cancel($scope.detail_interval_temp);
            }
        }, 100);
    }
    $scope.detail_get_temp();

    $scope.awards_swiper = {
        observer: true,
        observeParents: true,
        slidesPerView: 3.5,
        spaceBetween: 20,
        speed: 1500,
        freeMode: true,
        autoplay: false,
        clickable: true,
        loop: false,
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
        breakpoints: {
            1280: {
                slidesPerView: 3,
            },
            1152: {
                slidesPerView: 2.1,
            },
            500: {
                slidesPerView: 1.2,
            }
        },
        scrollbar: {
            el: ".swiper-scrollbar.swiper-scrollbar-awards",
            hide: false,
        },

    }

    $scope.corporate_swiper = {
        observer: true,
        observeParents: true,
        slidesPerView: 7,
        spaceBetween: 20,
        speed: 1500,
        freeMode: true,
        autoplay: true,
        clickable: true,
        loop: false,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            1280: {
                slidesPerView: 5,
            },
            500: {
                slidesPerView: 2,
            }
        },
        scrollbar: {
            el: ".swiper-scrollbar.swiper-scrollbar-corporate",
            hide: false,
        },
    }

    $scope.groupcompanies_swiper = {
        observer: true,
        observeParents: true,
        slidesPerView: 4,
        spaceBetween: 20,
        speed: 1500,
        freeMode: false,
        autoplay: false,
        clickable: true,
        loop: false,
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
        breakpoints: {

            1152: {
                slidesPerView: 2.5,
            },
            500: {
                slidesPerView: 2,
            }
        },
        // 
        pagination: {
            el: ".swiper-pagination.swiper-pagination-groupcompanies",
        },
    }

    $scope.journey_swiper = {
        observer: true,
        observeParents: true,
        slidesPerView: 2.2,
        spaceBetween: 20,
        speed: 1500,
        freeMode: true,
        autoplay: false,
        clickable: true,
        loop: false,
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
        breakpoints: {
            1152: {
                slidesPerView: 2.5,
            },
            500: {
                slidesPerView: 1.2,
            }
        },
        scrollbar: {
            el: ".swiper-scrollbar.swiper-scrollbar-journey",
            hide: false,
        },
    }
})

app.controller("careerController", function ($scope, $location, $rootScope, $timeout, $http, $localStorage, $routeParams, $window, $route, $base64, $timeout, $sce, $mdToast, $filter, $interval) {

    $rootScope.is_section_Scrolled = false;

    $scope.career_full_list = [];
    $scope.is_all_career_loading = false;
    $scope.career_full_load = function () {
        $scope.is_all_career_loading = true;
        $scope.career_full_list = [];
        $http({
            method: 'POST',
            url: apiUrl + 'career_jobs/list',
            data: {
                master_user_id: $rootScope.$storage.logged_in_master_id,
                logged_in_master_user_id: $rootScope.$storage.logged_in_master_id,
            },
            headers: {
                'Authorization': 'User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093'
            },

        }).then(function successCallback(response) {

            response = response.data;
            if (response.success == 1) {
                $scope.career_full_list = response.data;
            }
            else {
                $location.path('/');
            }
            $scope.is_all_career_loading = false;

        }, function errorCallback(response) {
            $scope.is_all_career_loading = false;
        });
    }

    $rootScope.career_click_f = false;
    // $rootroot$rootScope.career_form_data = {};
    $rootScope.career_click = function (data) {

        $rootScope.career_form_data = data;

        if ($rootScope.career_click_f) {
            $rootScope.career_click_f = false;
            $rootScope.career_obj = {};
            $rootScope.career_obj.country = '91';
            $rootScope.career_obj.flag = 'https://flagcdn.com/w40/in.webp';
        } else {
            $rootScope.career_click_f = true;
        }
    }

    $rootScope.career_click_close = function () {
        $rootScope.career_click_f = false;
        $rootScope.career_obj = {};
        $rootScope.career_obj.country = '91';
        $rootScope.career_obj.flag = 'https://flagcdn.com/w40/in.webp';
    }

    $scope.career_validate = {

        /*onkeyup: function (element) {
            this.element(element);
        },*/

        rules: {
            person_name: {
                required: true,
            },
            person_email: {
                required: true,
                email: true,
            },
            contact_no: {
                required: true
            },
            resume_upload: {
                required: true
            },
            department: {
                required: true
            },
            Position: {
                required: true
            },
            experience: {
                required: true
            },
            current_company: {
                required: true
            },
            current_designation: {
                required: true
            },
            select_department: {
                required: true
            },
            // agree_tandc: {
            //     required: true
            // }
        },

        messages: {
            person_name: {
                required: "Please enter name."
            },
            person_email: {
                required: "Please enter email."
            },
            contact_no: {
                required: "Please enter mobile number."
            },
            resume_upload: {
                required: "Please enter file."
            },
            department: {
                required: "Please enter department."
            },
            Position: {
                required: "Please enter position."
            },
            experience: {
                required: "Please enter experience."
            },
            current_company: {
                required: "Please enter current company."
            },
            current_designation: {
                required: "Please enter current designation."
            },
            select_department: {
                required: "Please enter department."
            },
            // agree_tandc: {
            //     required: "Please agree terms and conditions."
            // }
        }
    }

    $scope.country_click_career = function (phonecode, flag) {
        $scope.career_obj.country = phonecode;
        $scope.career_obj.flag = flag;
        $rootScope.country_code_clickF = false;
    }

    $scope.career_contact_no_length = {
        minlength: 10,
        maxlength: 10,
    };

    $scope.career_country_change = function () {
        if ($scope.career_obj.country == "91") {
            $scope.career_contact_no_length.minlength = 10;
            $scope.career_contact_no_length.maxlength = 10;
        } else {
            $scope.career_contact_no_length.minlength = 8;
            $scope.career_contact_no_length.maxlength = 13;
        }
    }

    $scope.career_obj = {};
    $scope.career_obj.agree_tandc_display = true;
    $scope.career_obj.country = '91';
    $scope.career_obj.flag = 'https://flagcdn.com/w40/in.webp';
    $scope.addcareer = false;
    $scope.careerform = function (form) {
        if (form.validate() && form.$valid && !$scope.addcareer) {
            $scope.addcareer = true;
            $rootScope.inquiry_form_save_text_fun();
            $scope.career_obj.from_app = 'true';
            $scope.career_obj.master_user_id = $rootScope.$storage.logged_in_master_id;
            $scope.career_obj.logged_in_master_user_id = $rootScope.$storage.logged_in_master_id;
            $scope.career_obj.department = $scope.career_form_data.position;
            $scope.career_obj.experience = $scope.career_form_data.exp_years;
            var contact_no = $scope.career_obj.contact_no_display;
            $scope.career_obj.contact_no = $scope.career_obj.country + " " + contact_no;
            if ($scope.career_obj.agree_tandc_display) {
                $scope.career_obj.agree_tandc = '1';
            }
            else {
                $scope.career_obj.agree_tandc = '0';
            }

            if ($scope.department_select && $scope.career_obj.select_department != "") {
                var obj_data = $scope.career_job_list.filter(function (e) {
                    if (e.id == $scope.career_obj.select_department) {
                        return e;
                    }
                })[0];

                // console.log(obj_data);
                $scope.career_obj.department = obj_data.department;
                $scope.career_obj.experience = obj_data.exp_years;
            }

            $http({
                method: 'POST',
                url: apiUrl + 'career/save',
                data: $scope.career_obj,
                headers: {
                    'Authorization': 'User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093'
                },

            }).then(function successCallback(response) {
                response = response.data;
                if (response.success == 1) {
                    $scope.career_obj = {};
                    $scope.cv_upload_obj = {};
                    $scope.career_click_close();
                    $scope.career_obj.country = '91';
                    $scope.career_obj.flag = 'https://flagcdn.com/w40/in.webp';
                    $rootScope.$storage.thank_you_redirect = true;
                    $location.path('/career/thankyou/');
                }

                $scope.addcareer = false;
                $rootScope.inquiry_form_save_text_fun();
                $scope.career_obj.agree_tandc_display = true;
                $mdToast.show({
                    template: '<md-toast class="md-toast error">' + response.message + '</md-toast>',
                    hideDelay: 3500,
                    position: 'bottom right'
                });

            }, function errorCallback(response) {
                $scope.addcareer = false;
            });
        }
    }

    $scope.career_upload_check = function (file) {
        if (file == undefined) {
            $scope.cv_upload_obj.resume_upload = "";
        }
    }

    $scope.cv_upload_obj = {};
    $scope.career_upload = function (upload_type) {
        if ($scope.cv_upload_obj) {

            var data = new FormData();

            $rootScope.inquiry_form_save_text_fun();
            $scope.cv_upload_obj.from_app = 'true';
            $scope.cv_upload_obj.upload_type = upload_type;
            angular.forEach($scope.cv_upload_obj, function (val, key) {
                data.append(key, val);
            })

            $http({
                method: 'POST',
                url: apiUrl + 'career/upload_file',
                data: data,
                headers: {
                    'Content-Type': undefined,
                    'Authorization': 'User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093'
                }

            }).then(function successCallback(response) {

                response = response.data;
                if (response.success == 1) {
                    if (upload_type == "resume") {
                        $scope.career_obj.resume = response.file_name;
                    }
                }
                $scope.inquiry_form_save_text_fun();

            }, function errorCallback(response) {

            });
        }
    }

    $scope.detail_get_temp = function () {
        $scope.detail_interval_temp = $interval(function () {
            if ($rootScope.$storage.logged_in_master_id != null) {
                $rootScope.common_page_load($location.path().replace("/", "").replace("/", ""));
                $scope.career_full_load();
                $interval.cancel($scope.detail_interval_temp);
            }
        }, 100);
    }
    $scope.detail_get_temp();

})

app.controller("channelpartnerController", function ($scope, $location, $rootScope, $timeout, $http, $localStorage, $routeParams, $window, $route, $base64, $timeout, $sce, $mdToast, $filter, $interval) {

    $rootScope.is_section_Scrolled = false;

    $scope.detail_get_temp = function () {
        $scope.detail_interval_temp = $interval(function () {
            if ($rootScope.$storage.logged_in_master_id != null) {
                $rootScope.common_page_load($location.path().replace("/", "").replace("/", ""));
                $interval.cancel($scope.detail_interval_temp);
            }
        }, 100);
    }
    $scope.detail_get_temp();

    $scope.cp_swiper = {
        observer: true,
        observeParents: true,
        slidesPerView: 2.2,
        spaceBetween: 20,
        speed: 1500,
        freeMode: false,
        autoplay: false,
        clickable: true,
        loop: false,
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
        breakpoints: {
            1152: {
                slidesPerView: 2.5,
            },
            500: {
                slidesPerView: 1.2,
            }
        },
        scrollbar: {
            el: ".swiper-scrollbar.swiper-scrollbar-cp",
            hide: false,
        },
    }

    $rootScope.country_click_channel = function (phonecode, flag) {
        $scope.cp_obj.country = phonecode;
        $scope.cp_obj.flag = flag;
        $rootScope.country_code_clickF = false;
    }

    $scope.cp_country_change = function () {
        if ($scope.cp_obj.country == "91") {
            $scope.cp_contact_no_length.minlength = 10;
            $scope.cp_contact_no_length.maxlength = 10;
        } else {
            $scope.cp_contact_no_length.minlength = 8;
            $scope.cp_contact_no_length.maxlength = 13;
        }
    }

    $scope.BirthDateOptions = {
        formatYear: 'yyyy',
        showWeeks: false,
        showButtonBar: false,
        maxDate: new Date(),
        startingDay: 1
    };

    $scope.capitalizeFun = function (str) {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return splitStr.join(' ');
    }

    $scope.mobileDate = new Date();

    $scope.selected_birth_date = "";
    $scope.on_blur_birthdate = function (value) {
        if (value) {
            $scope.selected_birth_date = moment(value).format("DD MMM, YYYY");
        }
    }

    $scope.cp_validate = {

        /*onkeyup: function (element) {
            this.element(element);
        },*/

        rules: {
            first_name: {
                required: true,
            },
            LastName: {
                required: true,
            },
            contact_no: {
                required: true
            },
            email_address: {
                required: true,
                email: true,
            },
            address: {
                required: true
            },
            birth_date_display: {
                required: true
            },
            // AgreeTandC: {
            //     required: true
            // },
            // company_name: {
            //     required: true
            // },
        },

        messages: {
            first_name: {
                required: "Please enter name."
            },
            LastName: {
                required: "Please enter last name."
            },
            contact_no: {
                required: "Please enter mobile number."
            },
            email_address: {
                required: "Please enter email address."
            },
            address: {
                required: "Please enter location."
            },
            birth_date_display: {
                required: "Please enter date of birth."
            },
            // AgreeTandC: {
            //     required: "Please agree to terms and conditions."
            // },
            // company_name: {
            //     required: "Please enter company name."
            // },
        }
    }

    $scope.cp_save_f = false;
    $scope.cp_obj = {};
    $scope.cp_obj.associated_company = false;
    $scope.cp_obj.country = '91';
    $scope.cp_obj.flag = 'https://flagcdn.com/w40/in.webp';

    $scope.associated_toggle = function () {
        if ($scope.cp_obj.associated_company) {
            $scope.cp_obj.associated_company = false;
        } else {
            $scope.cp_obj.associated_company = true;
        }
    }

    $scope.channelform = function (form) {
        if (form.validate() && !$scope.cp_save_f) {
            $rootScope.channelForm_send();
        }
    }

    $rootScope.channelForm_send = function () {
        $scope.cp_save_f = true;
        $rootScope.inquiry_form_save_text_fun();
        $scope.cp_obj.from_app = 'true';
        $scope.cp_obj.AgreeTandC_display = true;

        if ($scope.cp_obj.birth_date_display) {
            $scope.cp_obj.birthdate = $scope.cp_obj.birth_date_display.getTime() / 1000;
        }
        if ($scope.cp_obj.AgreeTandC_display) {
            $scope.cp_obj.AgreeTandC = '1';
        }
        else {
            $scope.cp_obj.AgreeTandC = '0';
        }
        /*if ($scope.cp_obj.company_name) {
            $scope.cp_obj.company_name = $scope.capitalizeFun($scope.cp_obj.company_name);
        }*/
        var contact_no = $scope.cp_obj.contact_no_display;
        $scope.cp_obj.contact_no = $scope.cp_obj.country + " " + contact_no;

        var company_name = $scope.cp_obj.company_name;
        $scope.cp_obj.master_user_id = $rootScope.$storage.logged_in_master_id;
        $scope.cp_obj.logged_in_master_user_id = $rootScope.$storage.logged_in_master_id;

        $scope.cp_obj.company_id = "";
        if (!$scope.cp_obj.company_name) {
            $scope.cp_obj.company_id = 14;
            $scope.cp_obj.company_name = "Individual";
        } else {
            /*angular.forEach($scope.GetAllComNameList, function (val, key) {
                if (val.description.toLowerCase().trim() == company_name.toLowerCase()) {
                    $scope.cp_obj.company_id = val.company_id;
                }
            })*/
            $scope.cp_company_list.filter(function (e) {
                if (angular.lowercase(e.name.trim()) == angular.lowercase(company_name)) {
                    $scope.cp_obj.company_id = e.id;
                }
            })[0];
        }
        // console.log($scope.cp_obj);
        // return false;

        var cp_name_split = $scope.cp_obj.first_name;
        $scope.cp_obj.first_name = cp_name_split.split(" ")[0];
        $scope.cp_obj.last_name = cp_name_split.split(" ")[1] ? cp_name_split.split(" ")[1] : "";

        if ($location.path() == "/cp/crown") {
            $scope.cp_obj.is_crown = "1";
        } else {
            $scope.cp_obj.is_crown = "0";
        }

        $http({
            method: 'POST',
            url: apiUrl + 'channelpartner/save',
            data: $scope.cp_obj,
            headers: {
                'Authorization': 'User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093'
            },

        }).then(function successCallback(response) {

            response = response.data;
            if (response.success == 1) {
                $scope.cp_obj = {};
                $scope.selected_birth_date = "";
                $scope.cp_obj.associated_company = true;

                $rootScope.$storage.thank_you_redirect = true;
                $location.path('/channelpartner/thankyou/');
            }

            $mdToast.show({
                template: '<md-toast class="md-toast error">' + response.message + '</md-toast>',
                hideDelay: 3500,
                position: 'bottom right'
            });

            $rootScope.inquiry_form_save_text_fun();
            $scope.cp_save_f = false;
            $scope.cp_obj.AgreeTandC_display = true;
            $scope.cp_obj.country = '91';
            $scope.cp_obj.flag = 'https://flagcdn.com/w40/in.webp';

        }, function errorCallback(response) {

        });
    }

    $scope.companyGet = function (company_name) {
        $scope.cp_obj.company_name = company_name;
        $scope.dropeDownClose = false;
    }

    $scope.companyGetClose = function () {
        $scope.dropeDownClose = false;
    }

    /*$scope.GetAllComNameList = {};
    $scope.GetAllComName_list = function () {
        $scope.dropeDownClose = true;
        $http({
            method: 'POST',
            url: apiUrl + 'paramantra_company_call',
            headers: {
                'Authorization': 'User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093'
            },

        }).then(function successCallback(response) {

            response = response.data;
            if (response.data) {
                $scope.GetAllComNameList = response.data;
            }

        }, function errorCallback(response) {

        });
    }
    $scope.GetAllComName_list();*/

    $scope.cp_company_list = [];
    $scope.isCPCompanyLoading = false;
    $scope.cpCompanyload = function () {
        $scope.isCPCompanyLoading = true;
        $scope.cp_company_list = [];
        $http({
            method: 'POST',
            url: apiUrl_admin + 'cp_company/list',
            data: {
                logged_in_master_user_id: $rootScope.$storage.logged_in_master_id,
            },
            headers: {
                'Authorization': 'User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093'
            },

        }).then(function successCallback(response) {

            response = response.data;
            if (response.success == 1) {
                $scope.cp_company_list = response.data;
                console.log($scope.cp_company_list);
            }
            $scope.isCPCompanyLoading = false;

        }, function errorCallback(response) {
            $scope.isCPCompanyLoading = false;
        });
    }
    $scope.cpCompanyload();

    $scope.CompanyNameGetName = {};
    $scope.GetAllComName_listGet = function (company_name) {
        if (company_name) {
            if (company_name.length > 2) {
                $scope.dropeDownClose = true;
            }
        }
    }
})

app.controller("detailController", function ($scope, $location, $rootScope, $timeout, $http, $localStorage, $routeParams, $window, $route, $base64, $timeout, $sce, $mdToast, $filter) {

    $scope.gallery_Swiper = {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: false,
        clickable: true,
        loop: true,
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },

        pagination: {
            el: ".swiper-pagination.gallery-swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next.gallery-next",
            prevEl: ".swiper-button-prev.gallery-prev",
            hide: true,
        },

    }

    $scope.gallery3d_Swiper = {
        observer: true,
        observeParents: true,
        slidesPerView: 1.05,
        spaceBetween: 20,
        speed: 1500,
        freeMode: false,
        autoplay: false,
        clickable: true,
        loop: false,
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
        breakpoints: {
            600: {
                slidesPerView: 1,
            },
            384: {
                slidesPerView: 1,
            }
        },
        pagination: {
            el: ".swiper-pagination.gallery-swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next.gallery3d-next",
            prevEl: ".swiper-button-prev.gallery3d-prev",
        },
    }

    $scope.gallery_Swiper_thumbnail = {
        observer: true,
        observeParents: true,
        slidesPerView: 6.5,
        spaceBetween: 10,
        autoplay: false,
        clickable: true,
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
        breakpoints: {
            1450: {
                slidesPerView: 6.5,
                spaceBetween: 10,
            },
            1440: {
                slidesPerView: 6.5,
                spaceBetween: 10,
            },
            1280: {
                slidesPerView: 5.5,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 5.8,
                spaceBetween: 10,
            },
            600: {
                slidesPerView: 2.5,
            }
        }
    }

    $scope.construction_swiper = {
        observer: true,
        observeParents: true,
        slidesPerView: 1.05,
        spaceBetween: 20,
        speed: 1500,
        freeMode: true,
        autoplay: false,
        clickable: true,
        loop: false,
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
        breakpoints: {
            600: {
                slidesPerView: 1,
            },
            384: {
                slidesPerView: 1,
            }
        },
        pagination: {
            el: ".swiper-pagination.gallery-swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next.construction-swiper-next",
            prevEl: ".swiper-button-prev.construction-swiper-prev",
        },
    }

    $scope.related_project_swiper = {
        observer: true,
        observeParents: true,
        slidesPerView: 1.05,
        spaceBetween: 20,
        speed: 1500,
        freeMode: true,
        autoplay: false,
        clickable: true,
        loop: false,
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
        breakpoints: {
            600: {
                slidesPerView: 1,
            },
            384: {
                slidesPerView: 1,
            }
        },
        pagination: {
            el: ".swiper-pagination.gallery-swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next.related_project_next",
            prevEl: ".swiper-button-prev.related_project_prev",
        },
    }

    $scope.construction_swiper_thumbnail = {
        observer: true,
        observeParents: true,
        slidesPerView: 6.5,
        spaceBetween: 10,
        autoplay: false,
        clickable: true,
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
        breakpoints: {
            1450: {
                slidesPerView: 6.5,
                spaceBetween: 10,
            },
            1440: {
                slidesPerView: 6.5,
                spaceBetween: 10,
            },
            1280: {
                slidesPerView: 5.5,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 5.8,
                spaceBetween: 10,
            },
            600: {
                slidesPerView: 2.5,
            }
        }
    }

    // $scope.construction_Swiper = {
    //     observer: true,
    //     observeParents: true,
    //     slidesPerView: 1.1,
    //     spaceBetween: 10,
    //     autoplay: false,
    //     clickable: true,
    //     // autoplay: {
    //     //     delay: 4000,
    //     //     disableOnInteraction: false,
    //     // },
    //     breakpoints: {
    //     },
    //     scrollbar: {
    //         el: ".swiper-scrollbar.construction_Swiper_scrollbar",
    //         hide: false,
    //     },
    // }
})

app.controller("residentialController", function ($scope, $location, $rootScope, $timeout, $http, $localStorage, $routeParams, $window, $route, $base64, $timeout, $sce, $mdToast, $filter) {

    $rootScope.is_section_Scrolled = false;

    $rootScope.category_get_f($location.path().replace("/", "").replace("/", ""));

})

app.controller("termsController", function ($scope, $location, $rootScope, $timeout, $http, $localStorage, $routeParams, $window, $route, $base64, $timeout, $sce, $mdToast, $filter, $interval) {

    $rootScope.is_section_Scrolled = false;

    $scope.detail_get_temp = function () {
        $scope.detail_interval_temp = $interval(function () {
            if ($rootScope.$storage.logged_in_master_id != null) {
                $rootScope.common_page_load($location.path().replace("/", "").replace("/", ""));
                $interval.cancel($scope.detail_interval_temp);
            }
        }, 100);
    }
    $scope.detail_get_temp();

})

app.controller("privacyController", function ($scope, $location, $rootScope, $timeout, $http, $localStorage, $routeParams, $window, $route, $base64, $timeout, $sce, $mdToast, $filter, $interval) {

    $rootScope.is_section_Scrolled = false;

    $scope.detail_get_temp = function () {
        $scope.detail_interval_temp = $interval(function () {
            if ($rootScope.$storage.logged_in_master_id != null) {
                $rootScope.common_page_load($location.path().replace("/", "").replace("/", ""));
                $interval.cancel($scope.detail_interval_temp);
            }
        }, 100);
    }
    $scope.detail_get_temp();

})

app.controller("cookieController", function ($scope, $location, $rootScope, $timeout, $http, $localStorage, $routeParams, $window, $route, $base64, $timeout, $sce, $mdToast, $filter, $interval) {

    $rootScope.is_section_Scrolled = false;

    $scope.detail_get_temp = function () {
        $scope.detail_interval_temp = $interval(function () {
            if ($rootScope.$storage.logged_in_master_id != null) {
                $rootScope.common_page_load($location.path().replace("/", "").replace("/", ""));
                $interval.cancel($scope.detail_interval_temp);
            }
        }, 100);
    }
    $scope.detail_get_temp();

})

app.controller("ventureController", function ($scope, $location, $rootScope, $timeout, $http, $localStorage, $routeParams, $window, $route, $base64, $timeout, $sce, $mdToast, $filter, $interval) {
    // alert($routeParams.slug);
    $scope.detail_get_temp = function () {
        $scope.detail_interval_temp = $interval(function () {
            if ($rootScope.$storage.logged_in_master_id != null && !$rootScope.is_venturepage_loading) {
                $rootScope.venture_page_load($routeParams.slug);
                $interval.cancel($scope.detail_interval_temp);
            }
        }, 100);
    }
    $scope.detail_get_temp();

    $scope.ventureformValidate = {
        /*onkeyup: function (element) {
            this.element(element);
        },*/

        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            contact_no: {
                required: true,
            },
            department: {
                required: true,
            },
            message: {
                required: true,
            },
            // agree_tandc: {
            //     required: true
            // }
        },

        messages: {
            name: {
                required: "Please enter name."
            },
            email: {
                required: "Please enter email address."
            },
            contact_no: {
                required: "Please enter mobile number."
            },
            department: {
                required: "Please enter department."
            },
            message: {
                required: "Please enter comment."
            },
            // agree_tandc: {
            //     required: "Please agree terms and conditions."
            // }
        }
    }

    $scope.venture_country_contact = function (phonecode, flag) {
        $scope.venture_obj.country = phonecode;
        $scope.venture_obj.flag = flag;
        $rootScope.country_code_clickF = false;
    }

    $scope.venture_contact_no_length = {
        minlength: 10,
        maxlength: 10,
    };

    $scope.venture_country_change = function () {
        if ($scope.venture_obj.country == "91") {
            $scope.venture_contact_no_length.minlength = 10;
            $scope.venture_contact_no_length.maxlength = 10;
        } else {
            $scope.venture_contact_no_length.minlength = 8;
            $scope.venture_contact_no_length.maxlength = 13;
        }
    }

    $scope.venture_obj = {};
    $scope.venture_obj.agree_tandc_display = true;
    $scope.venture_obj.country = '91';
    $scope.venture_obj.flag = 'https://flagcdn.com/w40/in.webp';
    $scope.addVenturefrom = false;
    $scope.submitventure = function (form) {
        if (form.validate() && !$scope.addVenturefrom) {
            $scope.addVenturefrom = true;
            $scope.venture_obj.from_app = 'true';
            $scope.venture_obj.master_user_id = $rootScope.$storage.logged_in_master_id;
            $scope.venture_obj.logged_in_master_user_id = $rootScope.$storage.logged_in_master_id;
            $scope.venture_obj.page_id = $rootScope.venture_page_list.id;
            $scope.venture_obj.admin_module_id = $rootScope.venture_page_list.admin_module_id;
            var contact_no = $scope.venture_obj.contact_no_display;
            $scope.venture_obj.contact_no = $scope.venture_obj.country + " " + contact_no;

            // console.log($scope.venture_obj.admin_module_id);
            // return false;

            if ($scope.venture_obj.agree_tandc_display) {
                $scope.venture_obj.agree_tandc = '1';
            }
            else {
                $scope.venture_obj.agree_tandc = '0';
            }

            $http({
                method: 'POST',
                url: apiUrl_admin + 'joint_ventures/save_inquiry',
                data: $scope.venture_obj,
                headers: {
                    'Authorization': 'User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093'
                },

            }).then(function successCallback(response) {
                response = response.data;

                if (response.success == 1) {
                    $rootScope.$storage.thank_you_redirect = true;
                    $scope.venture_obj = {};
                }

                $scope.addVenturefrom = false;
                $scope.venture_obj = {};
                $scope.venture_obj.agree_tandc_display = true;

                $scope.venture_obj.country = '91';
                $scope.venture_obj.flag = 'https://flagcdn.com/w40/in.webp';

                $mdToast.show({
                    template: '<md-toast class="md-toast error">' + response.message + '</md-toast>',
                    hideDelay: 3500,
                    position: 'bottom right'
                });

            }, function errorCallback(response) {
                $scope.addVenturefrom = false;
            });
        }
    }

})

app.controller("feedbackController", function ($scope, $location, $rootScope, $timeout, $http, $localStorage, $routeParams, $window, $route, $base64, $timeout, $sce, $mdToast, $filter, $interval) {

    $scope.feedback_validate = {

        onkeyup: function (element) {
            this.element(element);
        },

        rules: {
            contact_no: {
                required: true
            },
        },

        messages: {
            contact_no: {
                required: "Please enter contact no number."
            },
        }
    }

    $scope.question_obj = [
        { val_0: "Did you get all the necessary information about the project ?" },
        { val_1: "Did our representative contacted you / followed up with you properly ?" },
        { val_2: "Would You like to receive any Future communication ?" },
        { val_3: "Would you like to refer any one ?" },
        { val_4: "How was the overall Experience ?" },
        { val_5: "How did you Like the Project ?" },
    ]

    $scope.save_feed_f = false;
    $scope.feed_obj = {};
    $scope.feed_obj.comment = [];
    $scope.feed_obj.come = {
        val_0: "",
        val_1: "",
        val_2: "",
        val_3: "",
        val_4: "",
        val_5: "",
        /*val_0: "Yes",
        val_1: "Yes",
        val_2: "Yes",
        val_3: "Yes",
        val_4: "Fair",
        val_5: "Fair",*/
    };

    $rootScope.feedback_click_country = function (phonecode, flag) {
        $scope.feed_obj.country = phonecode;
        $scope.feed_obj.flag = flag;
        $rootScope.country_code_clickF = false;
    }
    $scope.feed_obj.country = '91';
    $scope.feed_obj.flag = 'https://flagcdn.com/w40/in.webp';

    $scope.feedback_contact_no_length = {
        minlength: 10,
        maxlength: 10,
    };

    $scope.feedback_country_change = function () {
        if ($scope.feed_obj.country == "91") {
            $scope.feedback_contact_no_length.minlength = 10;
            $scope.feedback_contact_no_length.maxlength = 10;
        } else {
            $scope.feedback_contact_no_length.minlength = 8;
            $scope.feedback_contact_no_length.maxlength = 13;
        }
    }

    $scope.rating = 1;
    $scope.rateFunction = function (rating) {
        $scope.feed_obj.rating = rating;
    };
    $scope.rateFunction($scope.rating);

    $scope.count = [];
    $scope.feedback_form = function (form) {
        if (form.validate() && !$scope.save_feed_f) {

            $scope.count = [];
            angular.forEach($scope.question_obj, function (val, key) {
                if ($scope.feed_obj.come["val_" + key] == "") {
                    $scope.count.push("1");
                }
            })

            if (!$scope.count.length) {
                $rootScope.feedback_formSend();
                $rootScope.feedbackClick = true;
            } else {
                $mdToast.show({
                    template: '<md-toast class="md-toast error">Please select your answer.</md-toast>',
                    hideDelay: 3500,
                    position: 'bottom right'
                });
            }
        }
    }

    $rootScope.feedback_formSend = function () {
        $scope.save_feed_f = true;
        $rootScope.inquiry_form_save_text_fun();
        $scope.feed_obj.from_app = 'true';
        $scope.feed_obj.master_user_id = $rootScope.$storage.logged_in_master_id;
        $scope.feed_obj.logged_in_master_user_id = $rootScope.$storage.logged_in_master_id;
        var contact_no = $scope.feed_obj.contact_no_display;
        $scope.feed_obj.contact_no = $scope.feed_obj.country + " " + contact_no;

        $scope.feed_obj.comment = [];
        angular.forEach($scope.question_obj, function (val, key) {
            var obj = {
                Q: val["val_" + key],
                A: $scope.feed_obj.come["val_" + key],
            }
            $scope.feed_obj.comment.push(obj);
        })

        $http({
            method: 'POST',
            url: apiUrl + 'feedback_inquiry/save',
            data: $scope.feed_obj,
            headers: {
                'Authorization': 'User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093'
            },
        }).then(function successCallback(response) {

            response = response.data;
            if (response.success == 1) {
                $scope.feed_obj = {};
                $scope.feed_obj.comment = [];
                $scope.feed_obj.come = {
                    val_0: "",
                    val_1: "",
                    val_2: "",
                    val_3: "",
                    val_4: "",
                    val_5: "",
                };
                $scope.rating = 5;
                $scope.feed_obj.rating = $scope.rating;
                $location.path("/");
            }

            $mdToast.show({
                template: '<md-toast class="md-toast error">' + response.message + '</md-toast>',
                hideDelay: 3500,
                position: 'bottom right'
            });

            $scope.feed_obj.country = '91';
            $scope.feed_obj.flag = 'https://flagcdn.com/w40/in.webp';

            $scope.save_feed_f = false;
            $rootScope.inquiry_form_save_text_fun();

        }, function errorCallback(response) {

        });
    }

})

app.controller("thankyouController", function ($scope, $location, $rootScope, $timeout, $http, $localStorage, $routeParams, $window, $route, $base64, $timeout, $sce, $mdToast, $filter, $interval) {

    if (!$rootScope.$storage.thankyou_redirect) {
        $location.path("/");
    }
    $rootScope.$storage.thankyou_redirect = true;

    $scope.construction_array = [];
    $scope.construction_array_images = [];
    $rootScope.projects_full_list_detail = {};
    $scope.is_all_project_loading_detail = true;
    $scope.projects_full_load_detail = function () {
        $scope.is_all_project_loading_detail = true;
        $rootScope.projects_full_list_detail = {};
        $http({
            method: 'POST',
            url: apiUrl + 'properties/list',
            data: {
                all_detail: 1,
                master_user_id: $rootScope.$storage.logged_in_master_id,
                logged_in_master_user_id: $rootScope.$storage.logged_in_master_id,
                slug: $routeParams.slug
            },
            headers: {
                'Authorization': 'User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093'
            },

        }).then(function successCallback(response) {

            response = response.data;
            if (response.success == 1) {
                $rootScope.projects_full_list_detail = response.data[0];
                $rootScope.projects_name = $rootScope.projects_full_list_detail.project_title;
                $rootScope.project_id = $rootScope.projects_full_list_detail.project_id;
                $rootScope.project_title = $rootScope.projects_full_list_detail.project_title;
                $rootScope.page_title = $rootScope.projects_full_list_detail.page_title;
                $rootScope.page_description = $rootScope.projects_full_list_detail.page_description;
            }
            else {
                $location.path('/');
            }
            $scope.is_all_project_loading_detail = false;
        }, function errorCallback(response) {
            $scope.is_all_project_loading_detail = false;
        });
    }

    $scope.detail_get_temp = function () {
        $scope.detail_interval_temp = $interval(function () {
            if ($rootScope.$storage.logged_in_master_id != null) {
                $scope.projects_full_load_detail();
                $interval.cancel($scope.detail_interval_temp);
            }
        }, 100);
    }
    $scope.detail_get_temp();

})

app.controller("thank_youController", function ($scope, $location, $rootScope, $timeout, $http, $localStorage, $routeParams, $window, $route, $base64, $timeout, $sce, $mdToast, $filter, $interval) {

    if (!$rootScope.$storage.thank_you_redirect) {
        $location.path("/");
    }
    // $rootScope.$storage.thank_you_redirect = true;

    // if (!$rootScope.$storage.thankyou_redirect) {
    //     $location.path("/");
    // }
    // $rootScope.$storage.thankyou_redirect = true;

    if ($rootScope.activePath == '/career/thankyou/') {
        $scope.page_name = "Career";
    }
    else if ($rootScope.activePath == '/contact-us/thankyou/') {
        $scope.page_name = "Contact Us";
    }
    else if ($rootScope.activePath == '/invest-with-us/thankyou/') {
        $scope.page_name = "Invest With Us";
    }
    else if ($rootScope.activePath == '/propose-land/thankyou/') {
        $scope.page_name = "Propose Land";
        // $scope.page_name = $rootScope.propose_land_type;
    }
    else if ($rootScope.activePath == '/nricorner/thankyou/') {
        $scope.page_name = "Nri";
    }
    else if ($rootScope.activePath == '/channelpartner/thankyou/') {
        $scope.page_name = "channel partner";
    }
    else if ($rootScope.activePath == '/vendor/thankyou/') {
        $scope.page_name = "Vendor";
    }
    else if ($rootScope.activePath == '/lofy/thankyou/') {
        $scope.page_name = "Lofy India";
    }
    else {
        /*$scope.page_name = $rootScope.projects_full_list_detail.project_title;*/
        var project_data_get = $rootScope.projects_full_list.filter(function (e) {
            if (e.slug == $routeParams.slug) {
                return e;
            }
        })[0];
        $scope.page_name = project_data_get.project_title;
    }

})

app.controller("investmentController", function ($scope, $location, $rootScope, $timeout, $http, $localStorage, $routeParams, $window, $route, $base64, $timeout, $sce, $mdToast, $filter, $interval) {

    $rootScope.is_section_Scrolled = false;

    // $scope.detail_get_temp = function () {
    //     $scope.detail_interval_temp = $interval(function () {
    //         if ($rootScope.$storage.logged_in_master_id != null && !$rootScope.is_all_page_loading) {
    //             $rootScope.common_page_load($location.path().replace("/", "").replace("/", ""));
    //             $interval.cancel($scope.detail_interval_temp);
    //         }
    //     }, 100);
    // }
    // $scope.detail_get_temp();

    // $scope.investformValidate = {

    //     onkeyup: function (element) {
    //         this.element(element);
    //     },

    //     rules: {
    //         name: {
    //             required: true
    //         },
    //         email_address: {
    //             required: true,
    //             email: true
    //         },
    //         contact_no: {
    //             required: true,
    //         },
    //         // agree_tandc: {
    //         //     required: true
    //         // }
    //     },

    //     messages: {
    //         name: {
    //             required: "Please enter name."
    //         },
    //         email_address: {
    //             required: "Please enter email address."
    //         },
    //         contact_no: {
    //             required: "Please enter mobile number."
    //         },
    //         // agree_tandc: {
    //         //     required: "Please agree terms and conditions."
    //         // }
    //     }
    // }

    // // $scope.invest_upload_check = function (file) {
    // //     if (file == undefined) {
    // //         $scope.inquiryObj.attachment = "";
    // //     }
    // //     console.log($scope.inquiryObj.attachment);
    // // }

    // $scope.country_click_invest = function (phonecode, flag) {
    //     $scope.invest_list.country = phonecode;
    //     $scope.invest_list.flag = flag;
    //     $rootScope.country_code_clickF = false;
    // }

    // $scope.invest_contact_no_length = {
    //     minlength: 10,
    //     maxlength: 10,
    // };

    // $scope.invest_country_change = function () {
    //     if ($scope.invest_list.country == "91") {
    //         $scope.invest_contact_no_length.minlength = 10;
    //         $scope.invest_contact_no_length.maxlength = 10;
    //     } else {
    //         $scope.invest_contact_no_length.minlength = 8;
    //         $scope.invest_contact_no_length.maxlength = 13;
    //     }
    // }

    // $scope.invest_list = {};
    // // $scope.invest_list.propose_land_type = "Join Venture";
    // $scope.invest_list.agree_tandc_display = true;
    // $scope.invest_list.country = '91';
    // $scope.invest_list.flag = 'https://flagcdn.com/w40/in.webp';
    // $scope.addInvestUs = false;
    // $scope.investSavetext = "Submit";
    // $scope.submit_invest = function (form) {
    //     if (form.validate() && !$scope.addInvestUs) {

    //         // if ($rootScope.activePath.indexOf('invest-with-us') != -1) {
    //         //     $scope.invest_list.propose_land_type = "";
    //         // }

    //         // $rootScope.propose_land_type = $scope.invest_list.propose_land_type;

    //         var data = new FormData();
    //         $scope.addInvestUs = true;
    //         $scope.investSavetext = "Please wait...";
    //         $scope.invest_list.from_app = 'true';
    //         $scope.invest_list.master_user_id = $rootScope.$storage.logged_in_master_id;
    //         $scope.invest_list.logged_in_master_user_id = $rootScope.$storage.logged_in_master_id;
    //         $scope.invest_list.admin_module_id = $rootScope.common_page_list.admin_module_id;
    //         $scope.invest_list.page_id = $rootScope.common_page_list.id;

    //         if ($scope.invest_list.agree_tandc_display) {
    //             $scope.invest_list.agree_tandc = '1';
    //         } else {
    //             $scope.invest_list.agree_tandc = '0';
    //         }

    //         var contact_no = $scope.invest_list.contact_no_display;
    //         $scope.invest_list.contact_no = $scope.invest_list.country + " " + contact_no;
    //         angular.forEach($scope.invest_list, function (val, key) {
    //             data.append(key, val);
    //         })

    //         // console.log($scope.invest_list);
    //         // return false;

    //         $http({
    //             method: 'POST',
    //             url: apiUrl + 'other_pages/inquiry_save',
    //             data: data,
    //             headers: {
    //                 'Content-Type': undefined,
    //                 'Authorization': 'User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093'
    //             }

    //         }).then(function successCallback(response) {
    //             response = response.data;
    //             if (response.success == 1) {
    //                 $rootScope.$storage.thank_you_redirect = true;
    //                 if ($scope.activePath == '/invest-with-us/') {
    //                     $location.path('/invest-with-us/thankyou/');
    //                 }
    //                 if ($scope.activePath == '/propose-land/') {
    //                     $location.path('/propose-land/thankyou/');
    //                 }
    //             }

    //             $scope.addInvestUs = false;
    //             $scope.invest_list = {};
    //             $scope.invest_list.agree_tandc_display = true;

    //             $scope.investSavetext = "Submit";

    //             $scope.invest_list.country = '91';
    //             $scope.invest_list.flag = 'https://flagcdn.com/w40/in.webp';
    //             // $scope.invest_list.propose_land_type = "Join Venture";

    //             $mdToast.show({
    //                 template: '<md-toast class="md-toast error">' + response.message + '</md-toast>',
    //                 hideDelay: 3500,
    //                 position: 'bottom right'
    //             });

    //         }, function errorCallback(response) {
    //             $scope.invest_list = {};
    //             $scope.addInvestUs = false;
    //         });
    //     }
    // }

})

app.controller("investorsController", function ($scope, $location, $rootScope, $timeout, $http, $localStorage, $routeParams, $window, $route, $base64, $timeout, $sce, $mdToast, $filter, $interval) {

    $scope.investors_List = [];
    $scope.investors_load = function () {
        $http({
            url: base_url + "inverstor.json",
        }).then(function successCallback(response) {

            response = response.data;
            $scope.investors_List = response.list;
            // console.log($scope.investors_List[0].data);
        }, function errorCallback(response) {

        });
    }
    $scope.investors_load();

    $scope.invester_id = "1";
    $scope.investor_data = function (data) {
        $scope.invester_id = data;
    }
    console.log($scope.invester_id);

    // $scope.investors_data = [];
    // $scope.investors_data =  $scope.investors_List;
    // $scope.openTab = function (data) {
    // 	$scope.investors_data.data = data;
    //     console.log($scope.investors_data.data);
    // }
})

app.controller("blogController", function ($scope, $location, $rootScope, $timeout, $http, $localStorage, $routeParams, $window, $route, $base64, $timeout, $sce, $mdToast, $filter, $interval) {

    $scope.blog_data_temp = function () {
        $scope.blog_data_interval_temp = $interval(function () {
            if ($rootScope.$storage.logged_in_master_id != null) {
                $scope.load_blog_data();
                $interval.cancel($scope.blog_data_interval_temp);
            }
        }, 100);
    }
    $scope.blog_data_temp();

    $scope.slug = $routeParams.slug;
    $scope.is_blog_data_loading = true;
    $scope.blog_data = {};
    $scope.load_blog_data = function () {
        $scope.is_blog_data_loading = true;
        $scope.blog_data = {};
        $http({
            method: 'POST',
            url: apiUrl + "blog/list",
            data: {
                master_user_id: $rootScope.$storage.logged_in_master_id,
                logged_in_master_user_id: $rootScope.$storage.logged_in_master_id,
                slug: $scope.slug
            },
            headers: {
                'Authorization': 'User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093'
            },
        }).then(function successCallback(response) {

            response = response.data;

            if (response.success == 1) {
                $scope.blog_data = response.data[0];

                $rootScope.page_title = $scope.blog_data.seo_title;
                $rootScope.page_description = $scope.blog_data.seo_description;
                $rootScope.page_keywords = $scope.blog_data.seo_keywords;
                $rootScope.page_image = $scope.blog_data.seo_image_full + "&h=400&w=500";

                $scope.load_recent_blog_data();
            }
            $scope.is_blog_data_loading = false;

        }, function errorCallback(response) {
            $scope.is_blog_data_loading = false;
        });
    }

    // recent blog
    $scope.recent_blog_data = {};
    $scope.load_recent_blog_data = function () {
        $http({
            method: 'POST',
            url: apiUrl + "blog/latest",
            data: {
                master_user_id: $rootScope.$storage.logged_in_master_id,
                logged_in_master_user_id: $rootScope.$storage.logged_in_master_id,
                page: 0,
                limit: 3,
                id: $scope.blog_data.id
            },
            headers: {
                'Authorization': 'User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093'
            },
        }).then(function successCallback(response) {

            response = response.data;
            $scope.recent_blog_data = response.data;

        }, function errorCallback(response) { });
    }

})

app.controller("bloglistController", function ($scope, $location, $rootScope, $timeout, $http, $localStorage, $routeParams, $window, $route, $base64, $timeout, $sce, $mdToast, $filter, $interval) {

    $scope.blog_list_temp = function () {
        $scope.blog_list_interval_temp = $interval(function () {
            if ($rootScope.$storage.logged_in_master_id != null) {
                $scope.load_blog_list();
                $interval.cancel($scope.blog_list_interval_temp);
            }
        }, 100);
    }
    $scope.blog_list_temp();

    $scope.blog_list = {};
    $scope.is_blog_list_loading = true;
    $scope.load_blog_list = function () {
        $scope.is_blog_list_loading = true;
        $scope.blog_list = {};
        $http({
            method: 'POST',
            url: apiUrl + "blog/list",
            data: {
                master_user_id: $rootScope.$storage.logged_in_master_id,
                logged_in_master_user_id: $rootScope.$storage.logged_in_master_id,
                is_active: 1
            },
            headers: {
                'Authorization': 'User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093'
            },
        }).then(function successCallback(response) {

            response = response.data;
            $scope.blog_list = response.data;

            $scope.blogs_types_list = [];

            if ($scope.tag_type != "") {
                angular.forEach($scope.blog_list, function (val, key) {
                    angular.forEach(val.tags, function (val_2, key_2) {
                        if (val_2.text == $scope.tag_type) {
                            $scope.blogs_types_list.push(val);
                        }
                    })
                })
            } else {
                $scope.blogs_types_list = $scope.blog_list;
            }
            $scope.is_blog_list_loading = false;

        }, function errorCallback(response) {
            $scope.is_blog_list_loading = false;
        });
    }

    if ($location.search().type != '' && $location.search().type != undefined) {
        $scope.tag_type = $location.search().type;
    }
    else {
        $scope.tag_type = "";
    }

    $scope.clear_tag = function () {
        $scope.blogs_types_list = $scope.blog_list;
        $scope.tag_type = "";
        $location.search({});
    }
})
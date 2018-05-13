var app = angular.module("app", ['ngRoute', 'ngStorage']);
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'home.html',
        controller: 'homeCtrl',
        controllerAs: 'home'
    });
    $routeProvider.when('/usa', {
        templateUrl: 'usa.html',
        controller: 'usaCtrl',
        controllerAs: 'usa'
    });
    $routeProvider.when('/buyCar', {
        templateUrl: 'buyCar.html',
        controller: 'buyCtrl',
        controllerAs: 'buy'
    });
    $routeProvider.when('/sellCar', {
        templateUrl: 'sellCar.html',
        controller: 'sellCtrl',
        controllerAs: 'sell'
    });
    $routeProvider.when('/tiresParts', {
        templateUrl: 'tiresParts.html',
        controller: 'tiresPartsCtrl',
        controllerAs: 'tiresParts'
    });
    $routeProvider.when('/aboutUs', {
        templateUrl: 'aboutUs.html',
        controller: 'aboutUsCtrl',
        controllerAs: 'aboutUs'
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });
})
app.filter('minMaxPrice', function () {
    return function (array, min, max) {
        if (!min && !max) {
            return array;
        }
        var filtered = [];
        for (var i = 0; i < array.length; i++) {
            if (test(min, max, array[i])) {
                filtered.push(array[i]);
            }
        }
        return filtered;
    }

    //main-max price
    function test(min, max, testment) {
        if (min && max) {
            return testment.price >= min && testment.price <= max;
        } else if (min) {
            return testment.price >= min;
        } else if (max) {
            return testment.price <= max;
        }
    }
})
//search field
app.filter('searchItem', function () {
    return function (array, search) {
        if (!search) {
            return array;
        }
        var filtered = [];
        for (var i = 0; i < array.length; i++) {
            if (array[i].name.toLowerCase().indexOf(search.toLowerCase()) > -1) {
                filtered.push(array[i]);
            }
        }
        return filtered;
    }
})
//car Name
app.filter('carName', function () {
    return function (array, filterName) {
        if (!filterName) {
            return array;
        }
        var filtered = [];
        for (var i = 0; i < array.length; i++) {
            if (array[i].name.toLowerCase().indexOf(filterName.toLowerCase()) > -1) {
                filtered.push(array[i]);
            }
        }
        return filtered;
    }
})


app.controller('mainCtrl', function () {
    var vm = this;
      vm.activeMenu = 'Buy';
    // remove active class for menu-items
    $('.header-menu__logo').click(function () {
        $('.menu-item').each(function (index, element) {
            $(element).removeClass('active-item')
        })
    })

    //fixed menu scroll page
    $(window).scroll(function () {
        if ($(window).scrollTop() > 40) {
            $('.header-menu--shadow').css({
                position: 'fixed',
                "padding-top": 0
            });
        } else {
            if ($(window).width() < 992) {
                $('.header-menu--shadow').css({
                    position: 'fixed',
                    "padding-top": "0"
                });
            } else {
                $('.header-menu--shadow').css({
                    position: 'absolute',
                    "padding-top": "40px"
                });

            }
        }

        //scroll top btn
        if ($(window).width() > 752) {
        if ($(window).scrollTop() > 700) {
            $('#scroll-top').show()
            $('#scroll-top').animate({
                bottom: '40px'
            })
        } else {
            $('#scroll-top').hide();
            $('#scroll-top').css({
                bottom: '0px'
            })
        }
        }
        
    })
    
    //
    $('.header-menu__logo').click(function(){
 $('#window__menu__mobile').hide()
    }) 
    $('.header-menu__burg-mobile').click(function(){
 $('#window__menu__mobile').show()
    })

    
    $(window).on('resize',function(){location.reload();});
    
})

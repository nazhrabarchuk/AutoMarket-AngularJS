app.controller('buyCtrl', function ($scope, $filter, global) {
    var vm = this;
    vm.carTypes = global.getCarTypes();
      vm.carBody = [
        {
            id: 'sedan',
            name: 'Седан'
        },
        {
            id:'hatchback',
            name: 'Хетчбек'
        },
        {
            id:'coupe',
            name: 'Купе'
        },
        {
            id: 'krossover',
            name: 'Позашляховик'
        },
        {
            id:'universal',
            name: 'Універсал'
        },
        {
            id:'minivan',
            name: 'Мінівен'
        }
    ];
    vm.search = '';
    vm.min = '';
    vm.max = '';
    vm.page = 1;
    vm.size = 8;

    vm.pageSize = [1, 5, 10];
    vm.pageCount = Math.ceil(vm.carTypes.length / vm.size);

    $scope.$watch('buy.search', function (newValue, oldValue) {
        if (newValue !== oldValue) {
            vm.updatePage();
        }
    })
    $scope.$watch('buy.min', function (newValue, oldValue) {
        if (newValue !== oldValue) {
            vm.updatePage();
        }
    })
    $scope.$watch('buy.max', function (newValue, oldValue) {
        if (newValue !== oldValue) {
            vm.updatePage();
        }
    })
    //filter by car name
    vm.carName = [];
    vm.filterName = '';
    for (var i = 0; i < vm.carTypes.length; i++) {
        if (vm.carName.includes(vm.carTypes[i].name)) {
            continue;
        }
        vm.carName.push(vm.carTypes[i].name)
    }
    vm.selectName = function (carSelect) {
        vm.ad = carSelect;
        vm.filterName = vm.ad;
    }
    $scope.$watch('buy.filterName', function (newValue, oldValue) {
        if (newValue !== oldValue) {
            vm.updatePage();
        }
    })
    //filter by car gearbox
    vm.carGearbox = ['Механіка', 'Автомат', 'Варіатор', 'Типтронік'];
    vm.filterGearbox = '';
    vm.selectGearbox = function (carGearbox) {
        vm.filtGear = carGearbox;
        vm.filterGearbox = vm.filtGear;
    }

    //update Page
    vm.updatePage = function () {
        var array = $filter('searchItem')(vm.carTypes, vm.search);
        array = $filter('minMaxPrice')(array, vm.min, vm.max);
        array = $filter('carName')(vm.carTypes, vm.filterName);
        vm.pageCount = Math.ceil(array.length / vm.size);
    }
    vm.previous = function (event) {
        event.preventDefault();
        if (vm.page > 1) {
            vm.page--;
        }
    }
    vm.next = function (event) {
        event.preventDefault();
        if (vm.page < vm.pageCount) {
            vm.page++;
        }
    }


    //filter drive
    vm.carDrive = ['Передній', 'Задній', 'Повний']
    vm.filterDrive = '';
    vm.selectDrive = function (carDrive) {
        vm.filtDrive = carDrive;
        vm.filterDrive = vm.filtDrive;
    }

    //filter body checked
    vm.filter = {};
    vm.filterByCategory = filterByCategory;
    vm.getCategories = getCategories;

    function filterByCategory(carSelect) {
        return vm.filter[carSelect.body] || noFilter(vm.filter);
    }

    function getCategories() {
        return (vm.carBody || []).
        map(function (carSelect) {
            return carSelect.name;
        }).
        filter(function (cat, idx, arr) {
            return arr.indexOf(cat) === idx;
        });
       
    }
function noFilter(filterObj) {
    return Object.
      keys(filterObj).
      every(function (key) { return !filterObj[key]; });
  }
    //
    
    var check = 0;
    $('.search-field__view-filters').on('click', function () {
        if (check == 0) {
            $('.buy-page__car-filtres').slideDown('fast');
            $(this).html('OK');
            $(this).css({
                background: 'unset'
            });
            check = 1;
        } else if (check == 1) {
            $('.buy-page__car-filtres').slideUp('fast');
            $(this).html(' ');
            $(this).css({
                background: 'url(../img/buy/settings-icon.svg) no-repeat',
                "background-size": "55%",
                "background-position": "center"
            });
            check = 0;
        }

    })

    //change currency
    vm.currency = [
        {
            name: 'usd'
        },
        {
            name: 'грн'
        },
        {
            name: 'eur'
        }
    ]
    for (var i = 0; i < vm.carTypes.length; i++) {
        vm.carTypes[i].price[1].name = parseInt(vm.carTypes[i].price[0].name * 25.9);
        vm.carTypes[i].price[2].name = parseInt(vm.carTypes[i].price[0].name * 0.8);

    }
    vm.current = 0;
    vm.znak = '$';
    vm.name = function ($index) {
        $('.auto-card-select__prize').children('a:eq(0)').css({
            color: '#b3b3b3'
        })
        vm.current = $index;
        if (vm.current == 1) {
            vm.znak = '₴';
            $('.current-prize').removeClass('current-active');
            $('.current-prize:eq(1)').addClass('current-active');
        } else if (vm.current == 2) {
            vm.znak = '€';
            $('.current-prize').removeClass('current-active');
            $('.current-prize:eq(2)').addClass('current-active');
        } else if (vm.current == 0) {
            vm.znak = '$';
            $('.current-prize').removeClass('current-active');
            $('.current-prize:eq(0)').addClass('current-active');
        }
    }

})

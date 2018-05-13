app.directive('scrollOnClick', function () {
        return {
            restrict: 'A',
            link: function (scope, $elm, attr) {
                $elm.on('click', function () {
                    var ele = $("#" + attr.scrollOnClick);
                    $("html,body").animate({ scrollTop: 0 }, "slow");
                });
            }
        }
    });


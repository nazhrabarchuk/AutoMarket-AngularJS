app.controller('usaCtrl', function(){
    var vm = this;
    $(function(){
        
    $('#view-auction').click(function(){
        $('html,body').animate({
            scrollTop: $('.usa-car__section-auction').offset().top
    })
        return false;
    })
    })
})
$(document).ready(function() {
    $('#mobile-bnt').on('click', function() {
        $('#mobile-menu').toggleClass('active');
        $('#mobile-bnt').find('i').toggleClass('fa-x');
    });
});
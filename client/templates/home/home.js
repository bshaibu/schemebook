var loadSmallCalendar = function() {
    $('#calendar').fullCalendar({
        // Options and Callbacks 
        weekends: true,
        windowResize: function(view) {
        alert('The calendar has adjusted to a window resize');
        },
        weekMode: 'liquid',
        aspectRatio: 2.1,
        header: {
            right:   'today prev,next',
            left: 'title',
        }
    });
};

Template.landing.rendered = function(){
        loadSmallCalendar();
        console.log('foobar');
};
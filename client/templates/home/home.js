var loadCalendar = function() {
    $('#calendar').fullCalendar({
        // Options and Callbacks 
        weekends: true,
        windowResize: function(view) {
        alert('The calendar has adjusted to a window resize');
        },
        weekMode: 'liquid',
        aspectRatio: 2.1,
        header: {
            left:   'today prev,next',
            center: 'title',
            right:  'month,agendaWeek,agendaDay'
        }
    });
};

Template.home.rendered = function(){
        loadCalendar();
        console.log('foobar');
};
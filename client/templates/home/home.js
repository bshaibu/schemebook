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
        },
        events: dummyEvents,
        color: 'yellow',   // an option!
        textColor: 'black' // an option!
    });
};

Template.landing.rendered = function(){
        loadSmallCalendar();
        console.log('foobar');
};

var dummyEvents = [
            {
                title: 'Learnability 1',
                start: '2014-05-12'
            },
            {
                title: 'Learnability 2',
                start: '2014-05-14'
            }
        ];
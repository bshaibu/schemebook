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
        },
        events: loadEvents
    });
};

Template.calendar.rendered = function(){
        loadCalendar();
        console.log('foobar');
};

var loadEvents = function(start, end, callback) {
    var events = [];      
    var calendarEvents = Lessons.find();

    calendarEvents.forEach(function (lesson) {
        var d = new Date();
        d.setFullYear(lesson.year, lesson.month, lesson.day);
        var ts = d.getTime() / 1000;
        events.push({
            title: lesson.name,
            start: ts,
            allDay: true
        });
        console.log("Lesson name: " + lesson.name);
        console.log(lesson.schedule_date);       
    });

    callback(events);
};
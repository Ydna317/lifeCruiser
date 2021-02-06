$('#submit-button').on('click', function (event) {
    event.preventDefault();
    let loc = $('#trip-location').val()
    let dat = $('#trip-date').val()
    let des = $('#trip-description').val()
    console.log(loc, dat, des)
    $('#trip-location').val('')
    $('#trip-date').val('')
    $('#trip-description').val('')
    let user = 'user'
    let history = JSON.parse(window.localStorage.getItem(user)) || [];
    let trip = {
        location: loc,
        description: des,
        date: dat
    }
    history.push(trip)
    window.localStorage.setItem(user, JSON.stringify(history))
    makeRows(user)
})


function makeRows(user) {
    let history = JSON.parse(window.localStorage.getItem(user))
    for (let i = 0; i < history.length; ++i) {
        //make a list item
        const trip = $('<li>').text(
            `On ${history[i].date}, I visited ${history[i].location}. ${history[i].description}`)
        $('#trip-history').append(trip);
    }
}
function updateCountdown() {
    var endDate = new Date('2024-03-12T08:00:00');
    var currentDate = new Date();
    var timeRemaining = endDate.getTime() - currentDate.getTime();

    if (timeRemaining > 0) {
        var seconds = Math.floor(timeRemaining / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);

        hours %= 24;
        minutes %= 60;
        seconds %= 60;

        var countdownElement = document.getElementById('countdown');
        countdownElement.textContent = days + ' dní, ' + hours + ' hodín, ' + minutes + ' minút, ' + seconds + ' sekúnd';
    } else {
        var countdownElement = document.getElementById('countdown');
        countdownElement.textContent = 'Čas na maturitu vypršal!';
        clearInterval(intervalId); // Zastaví odpočet po uplynutí času
    }
}

updateCountdown();
var intervalId = setInterval(updateCountdown, 1000);

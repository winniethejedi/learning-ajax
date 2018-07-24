
$(document).ready(() => {
    $('.load-button').click(() => {
        $('.load-text').show();
        $('.load-text').load('https://swapi.co/api/people/1/ .prettyprint', (res, status) => {
            console.log(res);
            console.log(status);
        })
        $('.load-button').hide();
        $('.hide-load-button').show();
    });

    $('.hide-load-button').click(() => {
        $('.load-text').hide();
        $('.hide-load-button').hide();
        $('.load-button').show();
    })

    $('.get-button').click(() => {
        console.log('get-button has been clicked')
        $.get('https://swapi.co/api/people/2/', (res, status) => {
            console.log(res);
            console.log(status);
            alert(`Data: ${res.name} \nStatus: ${status}`);
        })
    })
});
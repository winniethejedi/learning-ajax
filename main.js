
$(document).ready(() => {
    $('.load-button').click(() => {
        $('.load-text').show();
        $('.load-text').load('https://swapi.co/api/people/1/ .prettyprint', (res, status) => {
            console.log(res);
            console.log(status);
        })
        $('.load-button').hide();
        $('.hide-load-data').show();
    });

    $('.hide-load-data').click(() => {
        $('.load-text').hide();
    })

    $('.get-button').click(() => {
        $('.get-text').get('https://swapi.co/api/people/2/', (res, status) => {
            console.log(res);
            console.log(status);
        })
    })
});
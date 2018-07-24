

$(document).ready(() => {
    $('button').click(() => {
        $('.changing-text').load('https://swapi.co/api/people/1/', (res, status, obj) => {
            console.log(res);
            console.log(status);
            console.log(obj);
        })
    });
});
$input = $('input');
$button = $('button');

$button.on('click', userSearch);

function userSearch() {

    const user = $input.val();

    const request = $.ajax({
        url: 'https://api.github.com/search/users',
        method: 'GET'
    });

    request.done(function (msg) {
        console.log(msg);

    });
}
$input = $('input');
$button = $('button');
$div = $('div');

$button.on('click', userSearch);

function userSearch() {

    const user = $input.val();

    const request = $.ajax({
        url: 'https://api.github.com/search/users?q=' + user
    });

    request.done(function (data) {
        for (let i = 0; i < data.items.length; i++) {

            $img = $("<img>");
            $img.attr("src", data.items[i].avatar_url);
            $div.append($img);
        }

    });
}
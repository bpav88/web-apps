const $main = $('main');

const displayPosts = (posts) => {

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];



        const $cardTitle = $('<h5 class="card-title">');
        $cardTitle.text(post.title);
        const $cardText = $('<p class="card-text">');
        $cardText.text(post.intro);
        const $cardBody = $('<div class="card-body">');
        const $card = $('<div class="card">');
        $cardBody.append($cardTitle);
        $cardBody.append($cardText);
        $card.append($cardBody);
        $main.append($card);
    }
}

export {
    displayPosts
}
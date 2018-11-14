const $input = $(".search");
const $imageDiv = $(".images");
const $button = $("#button");

$button.on('click', collectInput);

function collectInput() {
    return $input.val();
}

const displayImages = (users) => {
    const $img = $("<img>");
    $img.attr("src", users.avatar);
    $imageDiv.append($img);
}



export {
    collectInput,
    displayImages,
}
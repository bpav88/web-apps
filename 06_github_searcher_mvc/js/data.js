const storage = {
    users: []
}

const storageData = (link, onSuccess) => {

    var request = $.ajax({
        url: link
    });

    request.done(function (dataUser) {
        createUser(dataUser);
        onSuccess();
    });
}

const createUser = (dataUser) => {
    for (let i = 0; i < dataUser.length; i++) {

        const name = dataUser.login[i];
        const avatar = dataUser.avatar_url[i];

        const user = {
            name: name,
            avatar: avatar
        };

        storage.users.push(user);

    }
}

export {
    storageData,
    storage
}
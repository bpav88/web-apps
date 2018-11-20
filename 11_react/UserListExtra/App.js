const dataStorage = data;

const layout = (user) => {
    const emailSplit = user.email.split("@");
    const firstPartEmail = emailSplit[0].substring(0, 3) + "...";
    const hiddenEmail = `${firstPartEmail}@${emailSplit[1]}`;
    return hiddenEmail;
}
const title = "React Users";
const Header = (props) => {
    return (
        <div className='header'>
            <h1>{props.titleName}</h1>
        </div>
    )
}

const User = (props) => {

    return (
        <article>
            <img src={props.img} />
            <div className="info">
                <p className="namePosition">{props.name}</p>
                <p>Email: {props.email}</p>
                <p>Date Of Birth: {props.dateOfBirth}</p>
            </div>
        </article>
    )
}

const UserList = (props) => {
    const userList = props.userData.results.map((user, id) => {
        const date = new Date(user.dob.date).toLocaleDateString("en-GB").split("/").join(".");
        let email = user.email;
        if (layoutGrid) {
            email = layout(user);
        }
        return < User key={id} img={user.picture.large} name={user.name.first} email={email} dateOfBirth={date} />
    })
    return (
        <div className="main clearFix">
            {userList}
        </div>
    )
}

const Footer = () => {
    return (
        <footer>
            <div className="footerDiv">
                <p>&copy; 2018 copyright BIT</p>
            </div>
        </footer>
    )
}

const App = () => {
    return (
        <div>
            <Header titleName={title} />
            <UserList userData={dataStorage} />
            <Footer />

        </div>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));
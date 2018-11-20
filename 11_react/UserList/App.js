const dataStorage = data;


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
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Date Of Birth: {props.dateOfBirth}</p>
        </article>
    )
}

const UserList = (props) => {
    const userList = props.userData.results.map((user, id) => {
        const date = new Date(user.dob.date).toLocaleDateString("en-GB");
        return < User key={id} img={user.picture.thumbnail} name={user.name.first} email={user.email} dateOfBirth={date} />
    })
    return (
        <div className="main">
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
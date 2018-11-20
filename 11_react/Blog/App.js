const dataStorage = data;


const title = "My react blog";
const Header = (props) => {
    return (
        <div className='header'>
            <h1>{props.titleName}</h1>
        </div>
    )
}

const PostItem = (props) => {
    return (
        <div className='article'>
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
        </div>
    )
}
const PostList = (props) => {
    const postList = props.postArray.map((posts, i) => {
        return <PostItem key={i} name={posts.title} desc={posts.body} />
    })
    return (
        <div className='main'>
            {postList}
        </div>
    )
}

const App = () => {
    return (
        <div>
            <Header titleName={title} />
            <PostList postArray={dataStorage} />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));
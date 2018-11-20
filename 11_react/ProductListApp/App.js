const dataStorage = data;


const title = "NASLOV";
const Header = (props) => {
    return (
        <div>
            <h1>{props.titleName}</h1>
            <p>Description</p>
        </div>
    )
}

const Title = () => {
    return (
        <h3>Posts List</h3>
    )
}
const ProductItem = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
        </div>
    )
}
const ProductList = (props) => {
    const productList = props.productArray.map((posts, i) => {
        return <ProductItem key={i} name={posts.title} desc={posts.body} />
    })
    return (
        <div>
            <Title />
            {productList}
        </div>
    )
}

const App = () => {
    return (
        <div>
            <Header titleName={title} />
            <hr />
            <ProductList productArray={dataStorage} />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));